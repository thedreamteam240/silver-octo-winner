import { Slider, Text } from "@radix-ui/themes";

import { Editor } from "@/types";

export default function FontSizeEditor({name, value, onChange} : {name: string, value: string, onChange: (value: string) => void}) : Editor {
    return (
      <span>
        <Text>{name}</Text>
        <Slider max={100} min={0} step={1} value={[parseInt(value)]} onValueChange={(value) => onChange(value[0].toString())} />
      </span>
    );
}