import { useEffect, useState } from "react";
import { TextArea } from "@radix-ui/themes";

interface TextEditorProps {
    value: string;
    setValue: (text: string) => void;
    id: string;
}

export default function TextEditor({ value, setValue, id }: TextEditorProps) {
    const [text, setText] = useState<string>(value);

    useEffect(() => {
        setText(value);
    }, [value, setText]);

    return (
        <div>
            <div className="w-100 h-100 flex flex-col justify-center items-center">
                <p className="text-center font-bold">Content :</p>
                <TextArea 
                    size="2" 
                    variant="classic" 
                    value={text} 
                    onChange={(e) => {
                        setValue(e.target.value);
                        setText(e.target.value);
                    }}
                />
            </div>
        </div>
    );
}