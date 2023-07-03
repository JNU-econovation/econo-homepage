import { FC, useState } from "react";

interface InputHoverProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const InputTextHover: FC<InputHoverProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
}) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={`${isShow ? "hidden" : ""}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default InputTextHover;
