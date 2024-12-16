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

export function TitleInput({ data, setData }: IChildProps) {
    const titleRef = useRef<HTMLInputElement>(null);

    const handleInput = () => {
        if (titleRef.current) {
            setData({
                ...data,
                title: titleRef.current.value,
            });
        }
    };

    return (
        <input
            ref={titleRef}
            onInput={handleInput}
            form="mail"
            type="text"
            placeholder="Theme:"
            value={data.title}
        />
    );
}
