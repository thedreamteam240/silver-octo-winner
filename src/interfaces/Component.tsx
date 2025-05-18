import { EditorFont } from "@/types";

export default interface IComponent {
    posx: number;
    posy: number;
}

export interface IText extends IComponent {
    text: string;
    fontFamily: EditorFont;
    fontSize: number;
    fontColor: string;
    isBold: boolean;
    isItalic: boolean;
}

export interface IImage extends IComponent {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export interface IVideo extends IComponent {
    src: string;
    width: number;
    height: number;
}

export interface IShape extends IComponent {
    type: "rectangle" | "circle" | "triangle";
    infillColor: string;
    width: number;
    height: number;
}
