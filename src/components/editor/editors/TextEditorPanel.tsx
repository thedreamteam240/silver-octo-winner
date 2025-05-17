import AEditorPanel from "./AEditorPanel";

import FontStyleEditor from "./common/FontStyle";
import FontSizeEditor from "./common/FontSize";
import ColorEditor from "./common/Color";

import { EditorFont } from "@/types";

interface TextEditorPanelProps {
    style: EditorFont;
    size: number;
    color: string;
}

export default function TextEditorPanel({props} : {props: TextEditorPanelProps}) {
    return (
        <AEditorPanel
            sections={[
                {
                    name: "Text",
                    editors: [
                        <FontStyleEditor name="Style" onChange={() => null} value={props.style} />,
                        <FontSizeEditor name="Size" value={props.size} onChange={(value: string) => null} />,
                        <ColorEditor name="Color" value={props.color} onChange={(value: string) => null} />,
                    ],
                },
            ]}
            />
    )
}