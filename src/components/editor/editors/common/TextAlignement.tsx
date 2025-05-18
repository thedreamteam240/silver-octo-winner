import { Slider, Text } from "@radix-ui/themes";

import { Editor } from "@/types";
import { TextPosition } from "../../components/Text/Text";

export default function TextAlignmentEditor({name, value, onChange} : {name: string, value: TextPosition, onChange: (value: TextPosition) => void}) : Editor {
    return (
      <span className="flex flex-row justify-between items-center space-x-2">
        <Text>{name}</Text>
        <Slider max={3} min={1} step={1} value={[value == TextPosition.LEFT ? 1 : value == TextPosition.CENTER ? 2 : 3 ]} onValueChange={(e) => onChange(e[0] == 1 ? TextPosition.LEFT : e[0] == 2 ? TextPosition.CENTER : TextPosition.RIGHT)} className="m-auto w-[70%]" />
      </span>
    );
}