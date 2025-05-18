"use client";

import Image from 'next/image';

import { RefObject, useRef } from 'react';
import Draggable from 'react-draggable';

import { IImage, IShape, IText, IVideo } from '@/interfaces/Component';
import { IconButton } from '@radix-ui/themes';
import { Pencil1Icon } from '@radix-ui/react-icons';

export function DraggableText({props}: {props: IText}) {
    const popupRef = useRef<HTMLElement>(null);

    return (
        <Draggable nodeRef={popupRef as RefObject<HTMLElement>}>
            <div
              ref={popupRef}
              className='border-1 rounded-3xl w-fit p-4'
                >
                <p
                    className={`text-${props.fontSize} text-${props.fontFamily} text-${props.fontColor} ${props.isBold ? "font-bold" : ""} ${props.isItalic ? "italic" : ""}`}
                    >
                    {props.text}
                </p>
                <Edit props={props} />
            </div>
        </Draggable>
    )
}

export function DraggableImage({props}: {props: IImage}) {
    const popupRef = useRef<HTMLElement>(null);

    return (
      <Draggable nodeRef={popupRef as RefObject<HTMLElement>}>
        <div
          ref={popupRef}
          className="border-1 rounded-3xl w-fit p-4 flex flex-col"
        >
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            className="rounded-3xl"
          />
          <Edit props={props} />
        </div>
      </Draggable>
    );
}

export function DraggableVideo({props}: {props: IVideo}) {
    const popupRef = useRef<HTMLElement>(null);

    return (
      <Draggable nodeRef={popupRef as RefObject<HTMLElement>}>
        <div ref={popupRef}
          className='border-1 rounded-3xl w-fit p-4'>
          <video
            src={props.src}
            width={props.width}
            height={props.height}
            controls
            className='rounded-3xl'
          />
          <Edit props={props} />
        </div>
      </Draggable>
    );
}

export function DraggableShape({props}: {props: IShape}) {
    const popupRef = useRef<HTMLElement>(null);

    return (
      <Draggable nodeRef={popupRef as RefObject<HTMLElement>}>
        <div ref={popupRef}>
          <svg width={props.width} height={props.height}>
            {props.type === "rectangle" && <rect
              width={props.width}
              height={props.height}
              fill={props.infillColor}
            />}
            {props.type === "circle" && <circle
              width={props.width}
              height={props.height}
              fill={props.infillColor}
            />}
            {props.type === "triangle" && <polygon
              points={`${props.width / 2},0 ${props.width},${props.height} 0,${props.height}`}
              width={props.width}
              height={props.height}
              fill={props.infillColor}
            />}
          </svg>
          <Edit props={props} />
        </div>
      </Draggable>
    );
}

function Edit({props}: {props: IText | IImage | IVideo | IShape}) {
    return (
      <span className="flex justify-center w-full mt-4">
        <IconButton className="w-full">
          <Pencil1Icon width="22" height="22" color="#ffffff" />
        </IconButton>
      </span>
    );
}
