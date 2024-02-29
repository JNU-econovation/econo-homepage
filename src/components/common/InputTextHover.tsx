import { ChangeEvent, FC, useEffect, useId, useState } from "react";

interface InputHoverProps {
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const InputTextHover: FC<InputHoverProps> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  label = "",
}) => {
  const [isShow, setIsShow] = useState(false);
  const uid = useId();

  useEffect(() => {
    setIsShow(value.length > 0);
  }, [value]);

  return (
    <div className="relative">
      <input
        className={`border-b-2 border-[#7E7E7E] font-sans outline-none transition-all hover:visible hover:w-[16.5rem] ${
          isShow ? "visible w-[16.5rem]" : "invisible w-[9rem]"
        } ${className}`}
        type="text"
        id={uid}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label
        className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer text-[#7E7E7E] transition-all hover:opacity-0 ${
          isShow ? "opacity-0" : "opacity-100"
        }`}
        htmlFor={uid}
      >
        {label}
      </label>
    </div>
  );
};
