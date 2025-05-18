import { Button, TextField } from "@radix-ui/themes";
import { ReactNode, useState } from "react";
import TextEditor from "./TextEditor";
import TextEditorPanel from "../../editors/TextEditorPanel";
import { removeChildren } from "../../Preview";

export enum TextPosition {
    LEFT = "text-left",
    CENTER = "text-center",
    RIGHT = "text-right",
};

export enum TextFontFamilly {
    SANS = "font-sans",
    SERIF = "font-serif",
    MONO = "font-mono",
};

export default function TextComponent (
    {id, content, textColor = "#000000", backgroundColor = "#FFFFFF", position = TextPosition.LEFT, fontFamilly = TextFontFamilly.SANS, size = 16, isBold = false, isItalic = false, isUnderline = false, darkMode}:
    {id: string, content: string, isGlobalEditing: boolean, setIsGloablEditing: (isGlobalEditing: boolean) => void,  textColor: string, backgroundColor: string, position: TextPosition, fontFamilly: TextFontFamilly, size: number, isBold: boolean, isItalic: boolean, isUnderline: boolean, darkMode: boolean}) {
    const [localContent, setLocalContent] = useState<string>(content);
    const [localFontFamilly, setLocalFontFamilly] = useState<TextFontFamilly>(fontFamilly);
    const [localFontSize, setLocalFontSize] = useState<number>(size);
    const [localTextColor, setLocalTextColor] = useState<string>(textColor);
    const [localBackgroundColor, setLocalBackgroundColor] = useState<string>(backgroundColor);
    const [localPosition, setLocalPosition] = useState<TextPosition>(position);
    const [localIsBold, setLocalIsBold] = useState<boolean>(isBold);
    const [localIsItalic, setLocalIsItalic] = useState<boolean>(isItalic);
    const [localIsUnderline, setLocalIsUnderline] = useState<boolean>(isUnderline);

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const [config, setConfig] = useState({
        content: localContent,
        fontFamilly: localFontFamilly,
        fontSize: localFontSize,
        textColor: localTextColor,
        backgroundColor: localBackgroundColor,
        position: localPosition,
        isBold: localIsBold,
        isItalic: localIsItalic,
        isUnderline: localIsUnderline,
    });
        return (
            <div key={id}>
                    <p className={`${localPosition} ${localFontFamilly} ${localIsBold ? "font-bold" : ""} ${localIsItalic ? "italic" : ""} ${localIsUnderline ? "underline" : ""}`} style={{color: localTextColor, backgroundColor: localBackgroundColor, fontSize: localFontSize}} onClick={() => {
                setIsEditing(!isEditing);
                setLocalContent(localContent);
                if (isEditing) {
                    setConfig({
                        content: localContent,
                        fontFamilly: localFontFamilly,
                        fontSize: localFontSize,
                        textColor: localTextColor,
                        backgroundColor: localBackgroundColor,
                        position: localPosition,
                        isBold: localIsBold,
                        isItalic: localIsItalic,
                        isUnderline: localIsUnderline,
                    });
                }
            }}>{localContent}</p>
            {isEditing ? (
                    <div className="absolute">
                        <TextEditorPanel props={{
                            style: localFontFamilly,
                            setStyle: setLocalFontFamilly,
                            content: localContent,
                            setContent: setLocalContent,
                            size: localFontSize,
                            setSize: setLocalFontSize,
                            textColor: localTextColor,
                            setTextColor: setLocalTextColor,
                            backgroundColor: localBackgroundColor,
                            setBackgroundColor: setLocalBackgroundColor,
                            position: localPosition,
                            setPosition: setLocalPosition,
                            isBold: localIsBold,
                            setIsBold: setLocalIsBold,
                            isItalic: localIsItalic,
                            setIsItalic: setLocalIsItalic,
                            isUnderline: localIsUnderline,
                            setIsUnderline: setLocalIsUnderline
                        }} darkMode={darkMode} isEditing={isEditing} childrens={
                            <div className="mx-4 gap-2 flex">
                                <Button className="rounded-lg" color="tomato" onClick={() => {
                                    removeChildren();
                                }}>Delete</Button>
                                <Button className="rounded-lg" color="gray" onClick={() => {
                                    setIsEditing(false);
                                    setLocalContent(config.content);
                                    setLocalFontFamilly(config.fontFamilly);
                                    setLocalFontSize(config.fontSize);
                                    setLocalTextColor(config.textColor);
                                    setLocalBackgroundColor(config.backgroundColor);
                                    setLocalPosition(config.position);
                                    setLocalIsBold(config.isBold);
                                    setLocalIsItalic(config.isItalic);
                                    setLocalIsUnderline(config.isUnderline);
                                }}>Cancel</Button>
                                <Button className="rounded-lg" color="grass" onClick={() => {
                                    setIsEditing(false);
                                    setConfig({
                                        content: localContent,
                                        fontFamilly: localFontFamilly,
                                        fontSize: localFontSize,
                                        textColor: localTextColor,
                                        backgroundColor: localBackgroundColor,
                                        position: localPosition,
                                        isBold: localIsBold,
                                        isItalic: localIsItalic,
                                        isUnderline: localIsUnderline,
                                    });
                                }}>Save</Button>
                            </div>
                        }/>
                    </div>
                ) : null}
            </div>
        )
}