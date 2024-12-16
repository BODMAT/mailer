import { useState } from "react";
import styles from "./MailBlock.module.scss"
import { EmailInput } from "../EmailInput/EmailInput";
import { TitleInput } from "../TitleInput/TitleInput";
import { TextArea } from "../TextArea/TextArea";
import { Bold, Italic, Underline, Eraser, Trash2 } from 'lucide-react';
import { Submits } from "../Submits/Submits";

interface IData {
    email: string;
    title: string;
    text: string;
}

export function MailBlock() {
    const [data, setData] = useState<IData>({
        email: "",
        title: "",
        text: "",
    });

    const applyFormatting = (command: string) => {
        document.execCommand(command, false);
    };

    const clearFormatting = () => {
        document.execCommand("removeFormat", false);
    };

    const clearAll = () => {
        const confirmation = confirm("Confirm deleting all info");
        if (confirmation) {
            setData(() => ({
                email: "",
                title: "",
                text: "",
            }))
        }
    }

    return (
        <main className={styles.main}>
            <form id="mail" action="#" className={styles.form}>
                <EmailInput data={data} setData={setData} />
                <TitleInput data={data} setData={setData} />
                <TextArea data={data} setData={setData} />
            </form>
            <div className={styles.actions}>
                <div className={styles.actions__wrap}>
                    <Submits data={data} setData={setData} />
                    <div className={styles.actions}>
                        <div className={styles.actions__wrap}>
                            <div className={styles.actions__change}>
                                <button
                                    className={styles.actions__act}
                                    onClick={() => applyFormatting("bold")}
                                >
                                    <Bold />
                                </button>
                                <button
                                    className={styles.actions__act}
                                    onClick={() => applyFormatting("italic")}
                                >
                                    <Italic />
                                </button>
                                <button
                                    className={styles.actions__act}
                                    onClick={() => applyFormatting("underline")}
                                >
                                    <Underline />
                                </button>
                                <button
                                    className={styles.actions__act}
                                    onClick={clearFormatting}
                                >
                                    <Eraser />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <button onClick={clearAll}
                        className={styles.actions__act}><Trash2 /></button>
                </div>
            </div>
        </main>
    )
}