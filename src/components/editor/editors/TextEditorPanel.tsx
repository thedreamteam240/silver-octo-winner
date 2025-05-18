import { useState } from "react";

import AEditorPanel from "./AEditorPanel";

import FontFamillyEditor from "./common/FontFamilly";
import FontSizeEditor from "./common/FontSize";
import ColorEditor from "./common/Color";

import { EditorFont } from "@/types";
import Toggle from "./common/Toggle";

interface TextEditorPanelProps {
    style: EditorFont;
    size: number;
    color: string;
}

export default function TextEditorPanel({props} : {props: TextEditorPanelProps}) {
    const [style, setStyle] = useState<EditorFont>(props.style);
    const [size, setSize] = useState<number>(props.size);
    const [color, setColor] = useState<string>(props.color);
    const [isBold, setIsBold] = useState<boolean>(false);
    const [isItalic, setIsItalic] = useState<boolean>(false);

    return (
        <AEditorPanel
            sections={[
                {
                    name: "Text",
                    editors: [
                        <FontFamillyEditor key="style" name="Style" onChange={(value: EditorFont) => setStyle(value)} value={style} />,
                        <FontSizeEditor key="size" name="Size" value={size} onChange={(value: number) => setSize(value)} />,
                        <ColorEditor key="color" name="Color" value={color} onChange={(value: string) => setColor(value)} />,
                        <Toggle key="bold" name="Bold" value={isBold} onChange={(value: boolean) => setIsBold(value)} />,
                        <Toggle key="italic" name="Italic" value={isItalic} onChange={(value: boolean) => setIsItalic(value)} />,
                    ],
                },
            ]}
            />
    )
}