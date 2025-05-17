import { Editor } from "@/types";
import AEditorPanel from "./AEditorPanel";
import FontStyleEditor from "./common/FontStyle";
import FontSizeEditor from "./common/FontSize";
import ColorEditor from "./common/Color";

export default function TextEditorPanel({component} : {component: any}) {
    return (
        <AEditorPanel
            sections={[
                {
                    name: "Text",
                    editors: [
                        <FontStyleEditor name="Style" onChange={() => null} value="Mono" />,
                        <FontSizeEditor name="Size" value={component.fontSize} onChange={(value: string) => null} />,
                        <ColorEditor name="Color" value={component.color} onChange={(value: string) => null} />,
                    ],
                },
            ]}
            />
    )
}