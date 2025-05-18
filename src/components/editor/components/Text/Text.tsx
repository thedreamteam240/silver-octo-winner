import { ReactNode, useState } from "react";
import TextEditor from "./TextEditor";

export enum TextPosition {
    LEFT = "text-left",
    CENTER = "text-center",
    RIGHT = "text-right",
};

export enum TextSize {
    XS = "text-xs",
    SM = "text-sm",
    MD = "text-md",
    LG = "text-lg",
    XL = "text-xl",
    XXL = "text-2xl",
};

export enum TextColor {
    BLACK = "text-black",
    WHITE = "text-white",
    RED = "text-red-500",
    GREEN = "text-green-500",
    BLUE = "text-blue-500",
    YELLOW = "text-yellow-500",
    PURPLE = "text-purple-500",
};

export enum BackgroudColor {
    BLACK = "bg-black",
    WHITE = "bg-white",
    RED = "bg-red-500",
    GREEN = "bg-green-500",
    BLUE = "bg-blue-500",
    YELLOW = "bg-yellow-500",
    PURPLE = "bg-purple-500",
};

interface TextComponentProps {
    id: string;
    content: string;
    position?: TextPosition;
    size?: TextSize;
    textColor?: TextColor;
    backgroundColor?: BackgroudColor;
    isBold?: boolean;
    isItalic?: boolean;
    isUnderline?: boolean;
    setEditor?: (node: ReactNode) => void;
}

export default function TextComponent({
    id,
    content,
    position = TextPosition.LEFT,
    size = TextSize.MD,
    textColor = TextColor.BLACK,
    backgroundColor = BackgroudColor.WHITE,
    isBold = false,
    isItalic = false,
    isUnderline = false,
    setEditor
}: TextComponentProps) {
    const [text, setText] = useState<string>(content);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        <div key={id}>
            <p 
                className={`${position} ${size} ${textColor} ${backgroundColor} ${isBold ? "font-bold" : ""} ${isItalic ? "italic" : ""} ${isUnderline ? "underline" : ""}`} 
                onClick={() => {
                    setIsEditing(!isEditing);
                    setText(text);
                }}
            >
                {text}
            </p>
            {isEditing && (
                <div 
                    className="absolute" 
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setIsEditing(false);
                            setText(text);
                        }
                    }}
                >
                    <TextEditor value={text} setValue={setText} id={id} />
                </div>
            )}
        </div>
    );
}