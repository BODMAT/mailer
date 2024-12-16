import { useRef } from "react";

interface IData {
    email: string;
    title: string;
    text: string;
}

interface IChildProps {
    data: IData;
    setData: (newState: IData) => void;
}

export function EmailInput({ data, setData }: IChildProps) {
    const emailRef = useRef<HTMLInputElement>(null);

    const handleInput = () => {
        if (emailRef.current) {
            const inputMail = emailRef.current.value.trim();

            setData({
                ...data,
                email: inputMail,
            });

            if (inputMail.endsWith("@gmail.com")) {
                emailRef.current.style.textDecoration = "none";
            } else if (inputMail) {
                emailRef.current.style.textDecoration = "underline wavy red";
            } else {
                emailRef.current.style.textDecoration = "none";
            }
        }
    };

    return (
        <input
            ref={emailRef}
            onInput={handleInput}
            form="mail"
            type="email"
            placeholder="From who (only gmail):"
            value={data.email}
        />
    );
}
