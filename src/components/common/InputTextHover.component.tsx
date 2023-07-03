import { FC, useEffect, useId, useState } from "react";

interface InputHoverProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const InputTextHover: FC<InputHoverProps> = ({
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
        className={`${
          isShow ? "visible w-[16.5rem]" : "invisible"
        } hover:visible hover:w-[16.5rem] transition-all border-b-2 border-[#7E7E7E] outline-none w-[9rem] ${className}`}
        type="text"
        id={uid}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer transition-all hover:opacity-0 text-[#7E7E7E] ${
          isShow ? "opacity-0" : "opacity-100"
        }`}
        htmlFor={uid}
      >
        {label}
      </label>
    </div>
  );
};

export default InputTextHover;
