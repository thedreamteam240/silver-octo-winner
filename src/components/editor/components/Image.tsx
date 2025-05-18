import { ReactNode, useEffect, useState } from "react";
import Image from 'next/image';

interface ImageComponentProps {
  url: string;
  width: number;
  height: number;
  position: {
    x: number;
    y: number;
  };
}

export default function ImageComponent({ url, width: initialWidth, height: initialHeight, position }: ImageComponentProps) {
  const id = crypto.randomUUID();
  const [localWidth, setWidth] = useState<number>(initialWidth);
  const [localHeight, setHeight] = useState<number>(initialHeight);

  useEffect(() => {
    // Update dimensions if needed
  }, [localWidth, localHeight]);

  const editor = () => {
    return (
      <div key={id}>
        <button onClick={() => setWidth(localWidth + 10)}>w+</button>
        <button onClick={() => setWidth(localWidth - 10)}>w-</button>
      </div>
    );
  };

  const render = () => {
    return (
      <div
        key={id}
        onClick={() => console.log("Toggle opening edit menu of image" + id)}
        onDoubleClick={() => console.log("Editing image id " + id)}
      >
        <Image
          src={url}
          alt="Image"
          width={localWidth}
          height={localHeight}
          style={{ objectFit: 'contain' }}
        />
      </div>
    );
  };

  return render();
}