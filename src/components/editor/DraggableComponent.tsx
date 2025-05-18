"use client";

import Image from 'next/image';

import { RefObject, useRef } from 'react';
import Draggable from 'react-draggable';

import { IImage, IShape, IText, IVideo } from '@/interfaces/Component';

export function DraggableText({props}: {props: IText}) {
    const popupRef = useRef<HTMLElement>(null);

    return (
        <Draggable nodeRef={popupRef as RefObject<HTMLElement>}>
            <div
              ref={popupRef}
                >
                <p
                    className={`text-${props.fontSize} text-${props.fontFamily} text-${props.fontColor} ${props.isBold ? "font-bold" : ""} ${props.isItalic ? "italic" : ""}`}
                    >
                    {props.text}
                </p>
            </div>
        </Draggable>
    )
}

export function DraggableImage({props}: {props: IImage}) {
    const popupRef = useRef<HTMLElement>(null);

    return (
      <Draggable nodeRef={popupRef as RefObject<HTMLElement>}>
        <div ref={popupRef}>
          <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
          />
        </div>
      </Draggable>
    );
}

export function DraggableVideo({props}: {props: IVideo}) {
    const popupRef = useRef<HTMLElement>(null);

    return (
      <Draggable nodeRef={popupRef as RefObject<HTMLElement>}>
        <div ref={popupRef}>
          <video
            src={props.src}
            width={props.width}
            height={props.height}
            controls
          />
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
            <rect
              width={props.width}
              height={props.height}
              fill={props.infillColor}
            />
          </svg>
        </div>
      </Draggable>
    );
}
