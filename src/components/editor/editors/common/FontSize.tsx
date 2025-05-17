import { Slider, Text } from "@radix-ui/themes";

import { Editor } from "@/types";

export default function FontSizeEditor({name, value, onChange} : {name: string, value: number, onChange: (value: string) => void}) : Editor {
    return (
      <span className="flex flex-row justify-between items-center space-x-2">
        <Text>{name}</Text>
        <Slider max={100} min={0} step={1} value={[value]} onValueChange={(value) => onChange(value[0].toString())} />
      </span>
    );
}