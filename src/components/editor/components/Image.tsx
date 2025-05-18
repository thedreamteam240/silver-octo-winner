import { ReactNode, useEffect, useState } from "react";

export default class ImageComponent {
    id: string;
    url: string;
    width: number;
    height: number;
    position: {
        x: number;
        y: number;
    };
    editor: () => ReactNode;
    render: () => ReactNode;

    constructor(url: string, width: number, height: number, position: { x: number; y: number }) {
        this.id = crypto.randomUUID();
        this.url = url;
        this.width = width;
        this.height = height;
        this.position = position;
        const [localWidth, setWidth] = useState<number>(width);
        const [localHeight, setHeight] = useState<number>(height);
        useEffect(() => {
            this.width = localWidth;
            this.height = localHeight;
        }, [localWidth, localHeight]);
        this.editor = () => {
            return (
                <div key={this.id}>
                    <button onClick={() => setWidth(localWidth + 10)}>w+</button>
                    <button onClick={() => setWidth(localWidth - 10)}>w-</button>
                </div>
            );
        };
        this.render = () => {
            return (
                <div key={this.id} onClick={() => console.log("Toggle opening edit menu of image" + this.id)} onDoubleClick={() => console.log("Editing image id " + this.id)}>
                    <img src={this.url} alt="Image" width={this.width} height={this.height} />
                </div>
            );
        };
    }
}