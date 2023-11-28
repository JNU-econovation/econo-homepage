import { cn, isEmail } from "@/src/functions/util";
import { ChangeEvent, FC, FormEvent, useId, useState } from "react";

interface AskInputTextProps {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  value: string;
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
    <div className="text-xl w-full">
      <label className="my-2 block" htmlFor={id}>
        {label}
      </label>
      <input
        className={cn(
          "font-sans w-full py-6 border-b outline-none",
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

const ContactAsk = () => {
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
      .catch((err) => {
        console.log("알 수 없는 오류입니다. 관리자에게 문의해주세요.");
      });
  };

  return (
    <form
      className="flex flex-col gap-12 px-12 max-w-[1280px] m-auto"
      onSubmit={onSend}
    >
      <div className="flex gap-12 w-full">
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
      <AskInputText
        label="MESSAGE*"
        value={message}
        isError={isMessageError}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="flex justify-end">
        <button className="p-2 bg-[#A3A3A3] text-white mb-24" type="submit">
          SEND MESSAGE
        </button>
      </div>
    </form>
  );
};

export default ContactAsk;
