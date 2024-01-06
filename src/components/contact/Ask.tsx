import { cn, isEmail } from "@/src/functions/util";
import { ChangeEvent, FC, FormEvent, useId, useState } from "react";

interface AskInputTextProps {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AskInputText: FC<AskInputTextProps> = ({
  label,
  onChange,
  isError = false,
  placeholder,
  value,
}) => {
  const id = useId();
  return (
    <div className="w-full text-xl">
      <label
        className="my-2 block max-sm:text-base max-sm:text-[#7E7E7E]"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={cn(
          "w-full border-b py-6 font-sans outline-none max-sm:py-2",
          isError ? "border-[#CE0000]" : "border-[#545454]"
        )}
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className={cn("text-[#CE0000]", isError ? "visible" : "invisible")}>
        PLEASE ENTER TEXT
      </div>
    </div>
  );
};

export const ContactAsk = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isEmailError, setIsEmailError] = useState<boolean>(false);
  const [isMessageError, setIsMessageError] = useState<boolean>(false);

  const onSend = (e: FormEvent) => {
    e.preventDefault();
    setIsNameError(false);
    setIsEmailError(false);
    setIsMessageError(false);
    if (!name) {
      setIsNameError(true);
      return;
    }
    if (!isEmail(email)) {
      setIsEmailError(true);
      return;
    }
    if (!message) {
      setIsMessageError(true);
      return;
    }

    fetch("/api/contact/subscribe", {
      method: "POST",
      body: JSON.stringify({ email, name, message }),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("전송이 완료되었습니다.");
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch(() => {
        console.log("알 수 없는 오류입니다. 관리자에게 문의해주세요.");
      });
  };

  return (
    <form
      className="m-auto flex max-w-[1280px] flex-col gap-12 px-12 max-sm:gap-0 max-sm:px-4"
      onSubmit={onSend}
    >
      <div className="flex gap-12 max-sm:hidden">
        <AskInputText
          placeholder="NAME*"
          value={name}
          isError={isNameError}
          onChange={(e) => setName(e.target.value)}
        />
        <AskInputText
          placeholder="EMAIL*"
          value={email}
          isError={isEmailError}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-0 sm:hidden">
        <AskInputText
          label="NAME*"
          value={name}
          isError={isNameError}
          onChange={(e) => setName(e.target.value)}
        />
        <AskInputText
          label="EMAIL*"
          value={email}
          isError={isEmailError}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <AskInputText
        label="MESSAGE*"
        value={message}
        isError={isMessageError}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-end max-sm:justify-center">
        <button className="mb-24 bg-[#A3A3A3] p-2 text-white" type="submit">
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};
