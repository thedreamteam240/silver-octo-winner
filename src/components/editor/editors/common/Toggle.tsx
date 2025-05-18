import { Switch, Text } from "@radix-ui/themes";

import { Editor } from "@/types";

export default function Toggle({name, value, onChange} : {name: string, value: boolean, onChange: (value: boolean) => void}) : Editor {
    return (
      <span className="flex flex-row justify-between items-center">
        <Text>{name}</Text>
        <Switch
          checked={value}
          onCheckedChange={(e) => onChange(e)}
          className="rounded-full cursor-pointer"
        />
      </span>
    );
}