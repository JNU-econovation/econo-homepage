export const moveBottomTop = (htmlElement, delay, duration) => {
    htmlElement.style.animation = `move-bottom-top ${duration}s ${delay}s forwards`;
}

export const moveRightLeft = (htmlElement, delay, duration) => {
    htmlElement.style.animation = `move-right-left ${duration}s ${delay}s forwards`;
}

export const opacity0to1 = (htmlElement, delay, duration) => {
    htmlElement.style.animation = `opcity-0-1 ${duration}s ${delay}s forwards`;
}