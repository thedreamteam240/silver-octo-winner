import { Text } from "@radix-ui/themes";

import { Editor } from "@/types";

export default function ColorEditor({name, value, onChange} : {name: string, value: string, onChange: (value: string) => void}) : Editor {
    return (
      <span className="flex flex-row justify-between items-center">
        <Text>{name}</Text>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="rounded-full cursor-pointer"
        />
      </span>
    );
}