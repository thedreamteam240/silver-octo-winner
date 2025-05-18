import { Dispatch, SetStateAction, useState } from "react";

import AEditorPanel from "./AEditorPanel";

import FontFamillyEditor from "./common/FontFamilly";
import FontSizeEditor from "./common/FontSize";
import ColorEditor from "./common/Color";

import { EditorFont } from "@/types";
import Toggle from "./common/Toggle";

import { TextFontFamilly, TextPosition } from "../components/Text/Text";
import TextAlignmentEditor from "./common/TextAlignement";
import TextContentEditor from "./common/TextContent";

interface TextEditorPanelProps {
    style: TextFontFamilly;
    setStyle: Dispatch<SetStateAction<TextFontFamilly>>;
    content: string
    setContent: Dispatch<SetStateAction<string>>;
    size: number;
    setSize: Dispatch<SetStateAction<number>>;
    textColor: string;
    setTextColor: Dispatch<SetStateAction<string>>;
    backgroundColor: string;
    setBackgroundColor: Dispatch<SetStateAction<string>>;
    position: TextPosition;
    setPosition: Dispatch<SetStateAction<TextPosition>>;
    isBold: boolean;
    setIsBold: Dispatch<SetStateAction<boolean>>;
    isItalic: boolean;
    setIsItalic: Dispatch<SetStateAction<boolean>>;
    isUnderline: boolean;
    setIsUnderline: Dispatch<SetStateAction<boolean>>;
};

export default function TextEditorPanel({props, darkMode, isEditing, childrens} : {props: TextEditorPanelProps, darkMode: boolean, isEditing: boolean, childrens: React.ReactNode}) {
    return (
        <AEditorPanel
            sections={[
                {
                    name: "Text",
                    editors: [
                        <TextContentEditor name="Content" value={props.content} onChange={(value: string) => props.setContent(value)} />,
                        <FontFamillyEditor name="Style" onChange={(value: TextFontFamilly) => props.setStyle(value)} value={props.style} />,
                        <FontSizeEditor name="Size" value={props.size} onChange={(value: number) => props.setSize(value)} />,
                        <ColorEditor name="Color" value={props.textColor} onChange={(value: string) => props.setTextColor(value)} />,
                        <ColorEditor name="Color" value={props.backgroundColor} onChange={(value: string) => props.setBackgroundColor(value)} />,
                        <TextAlignmentEditor name="Position" value={props.position} onChange={(value: TextPosition) => props.setPosition(value)} />,
                        <Toggle name="Bold" value={props.isBold} onChange={(value: boolean) => props.setIsBold(value)} />,
                        <Toggle name="Italic" value={props.isItalic} onChange={(value: boolean) => props.setIsItalic(value)} />,
                        <Toggle name="Underline" value={props.isUnderline} onChange={(value: boolean) => props.setIsUnderline(value)} />,
                    ],
                },
            ]}
            darkMode={darkMode}
            >
            {childrens}
        </AEditorPanel>
    )
}