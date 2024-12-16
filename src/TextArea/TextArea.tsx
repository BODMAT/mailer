import { useRef, useState, useEffect } from "react";
import styles from "./TextArea.module.scss";

interface IData {
    email: string;
    title: string;
    text: string;
}

interface IChildProps {
    data: IData;
    setData: (newState: IData) => void;
}

export function TextArea({ data, setData }: IChildProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (divRef.current && divRef.current.innerHTML !== data.text) {
            divRef.current.innerHTML = data.text; // Using innerHTML to update the content
        }
    }, [data.text]);

    const handleInput = () => {
        if (divRef.current) {
            // Here we store the innerHTML, not just the textContent
            const htmlContent = divRef.current.innerHTML || "";
            setContent(htmlContent);
            setData({
                ...data,
                text: htmlContent, // Store the HTML content
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            {!content && (
                <span className={styles.span}>
                    Message:
                </span>
            )}
            <div
                className={styles.message}
                ref={divRef}
                contentEditable
                suppressContentEditableWarning
                onInput={handleInput}
            >
                {/* The contentEditable div will handle the input, and innerHTML will be stored */}
            </div>
        </div>
    );
}
