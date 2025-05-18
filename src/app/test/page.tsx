"use client";

import { ReactNode, useState } from "react";

import FootNav from "@/components/editor/FootNav";
import HeadNav from "@/components/editor/HeadNav";
import { Button, Theme } from "@radix-ui/themes";
import LeftSideMenu from "@/components/editor/LeftSideMenu";
import TextEditorPanel from "@/components/editor/editors/TextEditorPanel";
import { DraggableText, DraggableImage, DraggableVideo, DraggableShape } from "@/components/editor/DraggableComponent";
import { IText, IImage, IVideo, IShape } from "@/interfaces/Component";
import Draggable from "react-draggable";
import Editor from "@/components/Editor";

const DEFAULT_TEXT = {
  fontColor: "#000000",
  fontSize: 16,
  fontFamily: "mono",
  isBold: false,
  isItalic: false,
  posx: 0,
  posy: 0,
  text: "Hello World",
} satisfies IText;

const DEFAULT_IMAGE = {
  src: "https://picsum.photos/426/240",
  alt: "Image",
  width: 640,
  height: 360,
  posx: 0,
  posy: 0,
} satisfies IImage;

const DEFAULT_VIDEO = {
  src: "https://www.w3schools.com/html/mov_bbb.mp4",
  width: 640,
  height: 360,
  posx: 0,
  posy: 0,
} satisfies IVideo;

const DEFAULT_SHAPE = {
  type: "triangle",
  infillColor: "#000000",
  width: 100,
  height: 100,
  posx: 0,
  posy: 0,
} satisfies IShape;

export default function Test(){
    return (
      <Editor storyId={0} />
    );
}