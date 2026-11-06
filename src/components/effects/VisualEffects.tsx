"use client";

import { useEffect, useRef, useState } from "react";
import "./visual-effects.css";

const STORAGE_KEY = "econovation:starlight";
const COLORS = [
  "95, 132, 245",
  "158, 119, 218",
  "204, 164, 90",
  "112, 181, 211",
];
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  age: number;
  life: number;
  rotation: number;
  color: string;
};

/** Pointer decoration only; the original page content and styles are untouched. */
export function VisualEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReducedMotion(preference.matches);
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(STORAGE_KEY);
      } catch {
        /* Storage is optional. */
      }
      setEnabled(!preference.matches && saved !== "off");
    };
    sync();
    setMounted(true);
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    const coarse = window.matchMedia("(pointer: coarse)");
    const particles: Particle[] = [];
    let frame = 0,
      width = 0,
      height = 0,
      previousTime = 0,
      lastSpawn = 0;
    let disposed = false,
      lastPointerX = -1000,
      lastPointerY = -1000;

    const sparkle = (particle: Particle, progress: number) => {
      const alpha =
        Math.min(progress * 9, 1) * Math.pow(1 - progress, 1.5) * 0.78;
      if (alpha < 0.015) return;
      const radius = particle.radius * (1 - progress * 0.3);
      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation + progress * 0.4);
      const glow = context.createRadialGradient(0, 0, 0, 0, 0, radius * 3);
      glow.addColorStop(0, "rgba(" + particle.color + "," + alpha * 0.2 + ")");
      glow.addColorStop(1, "rgba(" + particle.color + ",0)");
      context.fillStyle = glow;
      context.fillRect(-radius * 3, -radius * 3, radius * 6, radius * 6);
      context.fillStyle = "rgba(" + particle.color + "," + alpha + ")";
      context.beginPath();
      context.moveTo(0, -radius);
      context.quadraticCurveTo(radius * 0.14, -radius * 0.14, radius, 0);
      context.quadraticCurveTo(radius * 0.14, radius * 0.14, 0, radius);
      context.quadraticCurveTo(-radius * 0.14, radius * 0.14, -radius, 0);
      context.quadraticCurveTo(-radius * 0.14, -radius * 0.14, 0, -radius);
      context.fill();
      context.restore();
    };

    const draw = (delta: number) => {
      context.clearRect(0, 0, width, height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.age += delta;
        if (particle.age >= particle.life) {
          particles.splice(i, 1);
          continue;
        }
        particle.x += particle.vx * delta;
        particle.y += particle.vy * delta;
        particle.vy += 13 * delta;
        sparkle(particle, particle.age / particle.life);
      }
    };

    const tick = (now: number) => {
      frame = 0;
      if (disposed || document.hidden) return;
      const elapsed = now - previousTime;
      if (elapsed >= 32) {
        draw(Math.min(elapsed / 1000, 0.06));
        previousTime = now;
      }
      // There is no ambient animation: render only while a pointer particle exists.
      if (particles.length) frame = requestAnimationFrame(tick);
    };

    const emit = (x: number, y: number, count: number, burst = false) => {
      if (document.hidden || disposed) return;
      for (let i = 0; i < count && particles.length < 64; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = burst ? 22 + Math.random() * 48 : 5 + Math.random() * 13;
        particles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 8,
          radius: (burst ? 2 : 1.5) + Math.random() * 4,
          age: 0,
          life: 0.65 + Math.random() * 0.65,
          rotation: Math.random() * 0.8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      if (!frame) {
        previousTime = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      particles.length = 0;
      lastPointerX = -1000;
      lastPointerY = -1000;
      context.clearRect(0, 0, width, height);
    };
    const resize = () => {
      reset();
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType === "touch" || coarse.matches) return;
      const now = performance.now();
      if (
        now - lastSpawn > 40 &&
        Math.hypot(event.clientX - lastPointerX, event.clientY - lastPointerY) >
          14
      ) {
        emit(event.clientX, event.clientY, 2);
        lastSpawn = now;
        lastPointerX = event.clientX;
        lastPointerY = event.clientY;
      }
    };
    const onPress = (event: PointerEvent) => {
      if (
        event.button !== 0 ||
        !(event.target instanceof Element) ||
        event.target.closest("[data-fx-toggle]")
      )
        return;
      emit(
        event.clientX,
        event.clientY,
        event.pointerType === "touch" ? 5 : 12,
        true
      );
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onPress, { passive: true });
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", reset);
    return () => {
      disposed = true;
      reset();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPress);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", reset);
    };
  }, [enabled, reducedMotion]);

  const toggle = () => {
    if (reducedMotion) return;
    const next = !enabled;
    try {
      localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    } catch {
      /* Storage is optional. */
    }
    setEnabled(next);
  };

  return (
    <>
      <div
        className="econo-fx-surface"
        aria-hidden="true"
        hidden={!enabled || reducedMotion}
      >
        <canvas ref={canvasRef} />
      </div>
      <button
        className="econo-fx-toggle"
        type="button"
        data-fx-toggle
        aria-pressed={enabled}
        aria-label={
          reducedMotion
            ? "기기의 모션 줄이기 설정으로 마우스 효과가 꺼져 있습니다"
            : enabled
              ? "마우스 효과 끄기"
              : "마우스 효과 켜기"
        }
        disabled={!mounted || reducedMotion}
        onClick={toggle}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3c.7 6.3 2.7 8.3 9 9-6.3.7-8.3 2.7-9 9-.7-6.3-2.7-8.3-9-9 6.3-.7 8.3-2.7 9-9Z"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="m20 2 .7 2.3L23 5l-2.3.7L20 8l-.7-2.3L17 5l2.3-.7L20 2Z"
            fill="currentColor"
          />
        </svg>
        <span>
          마우스 효과{" "}
          <span className="econo-fx-toggle-state">
            {enabled ? "ON" : "OFF"}
          </span>
        </span>
      </button>
    </>
  );
}
