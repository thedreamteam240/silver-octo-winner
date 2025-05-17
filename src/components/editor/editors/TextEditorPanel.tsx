import AEditorPanel from "./AEditorPanel";
import FontStyleEditor from "./common/FontStyle";
import FontSizeEditor from "./common/FontSize";
import ColorEditor from "./common/Color";

interface TextComponent {
  fontSize: string;
  color: string;
}

export default function TextEditorPanel({ component }: { component: TextComponent }) {
  return (
    <AEditorPanel
      sections={[
        {
          name: "Text",
          editors: [
            <FontStyleEditor key="style" name="Style" onChange={() => null} value="Mono" />,
            <FontSizeEditor key="size" name="Size" value={component.fontSize} onChange={(value: string) => component.fontSize = value} />,
            <ColorEditor key="color" name="Color" value={component.color} onChange={(value: string) => component.color = value} />,
          ],
        },
      ]}
    />
  )
}