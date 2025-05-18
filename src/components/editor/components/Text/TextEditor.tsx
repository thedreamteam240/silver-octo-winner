import { use, useEffect, useState } from "react";
import TextComponent from "./Text";
import { TextArea, TextField } from "@radix-ui/themes";

export default function TextEditor({value, setValue, id}: {value: string, setValue: (text: string) => void, id: string}) {
    const [text, setText] = useState<string>(value)||"";
    console.log("TextEditor ", text);

    useEffect(() => {
        setText(value);
    }, [value]);


    console.log("TextEditor", value);
    return (
        <div>
            <div className="w-100 h-100 flex flex-col justify-center items-center">
                <p className="text-center font-bold">Content :</p>
                <TextArea size="2" variant="classic" value={text} onChange={(e) => {
                    setValue(e.target.value);
                    setText(e.target.value);
                }}>
                </TextArea>
            </div>
        </div>
    );
}