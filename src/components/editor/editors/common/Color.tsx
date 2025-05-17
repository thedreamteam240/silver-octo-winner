import { Text } from "@radix-ui/themes";

import { Editor } from "@/types";

export default function ColorEditor({name, value, onChange} : {name: string, value: string, onChange: (value: string) => void}) : Editor {
    return (
      <span>
        <Text>{name}</Text>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 border-none rounded-full cursor-pointer"
        />
      </span>
    );
}