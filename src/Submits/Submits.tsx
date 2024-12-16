import { useEffect } from "react";
import styles from "./Submits.module.scss"
import { ArrowDownToLine } from 'lucide-react';
import emailjs from "@emailjs/browser";

interface IData {
    email: string;
    title: string;
    text: string;
}

interface IChildProps {
    data: IData;
    setData: (newState: IData) => void;
}

export function Submits({ data, setData }: IChildProps) {
    function isValidData(): boolean {
        if (data.email && data.text && data.title) {
            if (!data.email.trim().endsWith("@gmail.com")) {
                alert("Email is incorrect")
                return false
            }
            return true
        } else {
            alert("Not all fields are filled")
            return false
        }
    }

    useEffect(() => emailjs.init("hqt9CD7I-ql_oArvG"), []);

    const sendMail = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();
        if (isValidData()) {
            const serviceId = "service_6bxbs4a";
            const templateId = "template_kjr3yzf";
            try {
                await emailjs.send(serviceId, templateId, {
                    recipient: data.email,
                    title: data.title,
                    text: data.text
                });
                alert("email successfully sent check inbox");
            } catch (error) {
                alert("email rejected (watch err)");
                console.log(error);
            } finally {
                setData({
                    email: "",
                    title: "",
                    text: "",
                })
            }
        }
    }

    return (
        <div className={styles.actions__submits}>
            <button onClick={(event) => { sendMail(event) }} form="mail" className={styles.actions__submits_main} type="submit">Send</button>
            <button disabled form="mail" className={styles.actions__submits_time} type="submit">
                <ArrowDownToLine />
            </button>
        </div>
    )
}