"use client";

import { useState } from "react";
import { IconButton, Flex, Theme } from "@radix-ui/themes";
import {
  DividerVerticalIcon,
  ExitIcon,
  ImageIcon,
  MoveIcon,
  StackIcon,
  TableIcon,
  TextIcon,
  VideoIcon,
} from "@radix-ui/react-icons";
import PicturesPicker from "./PicturesPicker";
import VideosPicker from "./VideosPicker";

export default function FootNav() {
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [isIntemplates, setIsIntemplates] = useState<boolean>(false);
  const [animating, setAnimating] = useState<boolean>(false);

  // Helper to handle transitions
  const handleTransition = (cb: () => void) => {
    setAnimating(true);
    setTimeout(() => {
      cb();
      setTimeout(() => setAnimating(false), 300); // match CSS duration
    }, 0);
  };

  return (
    <Theme radius="full">
      <Flex
        display="flex"
        justify="between"
        align="center"
        gap="4"
        m="4"
        mb="9"
        p="4"
        position="absolute"
        width="fit-content"
        bottom="0"
        left="50%"
        className={`shadow rounded-4xl translate-x-[-50%] footnav-transition${animating ? " footnav-animating" : ""}`}
        style={{ transition: "opacity 0.5s, transform 0.5s" }}
      >
        {!isIntemplates && (
          <span>
            <IconButton
              variant={!isMoving ? "ghost" : "solid"}
              size="4"
              onClick={() => !isMoving ? handleTransition(() => setIsMoving(true)) : null}
            >
              <MoveIcon width="22" height="22" />
            </IconButton>
          </span>
        )}
        {!isMoving && !isIntemplates && (
          <DividerVerticalIcon width="22" height="22" />
        )}
        {!isMoving && !isIntemplates && (
          <span>
            <IconButton variant="ghost" size="4">
              <StackIcon width="22" height="22" />
            </IconButton>
          </span>
        )}
        {!isMoving && !isIntemplates && (
          <span>
            <IconButton variant="ghost" size="4">
              <TextIcon width="22" height="22" />
            </IconButton>
          </span>
        )}
        {!isMoving && !isIntemplates && (
          <span>
            <PicturesPicker />
          </span>
        )}
        {!isMoving && !isIntemplates && (
          <span>
            <VideosPicker />
          </span>
        )}
        {!isMoving && !isIntemplates && (
          <DividerVerticalIcon width="22" height="22" />
        )}
        {!isMoving && (
          <span>
            <IconButton
              variant={!isIntemplates ? "ghost" : "solid"}
              size="4"
              onClick={() =>
                !isIntemplates ? handleTransition(() => setIsIntemplates(true)) : null}
            >
              <TableIcon width="22" height="22" />
            </IconButton>
          </span>
        )}
        {(isMoving || isIntemplates) && (
          <span>
            <IconButton
              variant="ghost"
              size="4"
              color="gray"
              onClick={() =>
                handleTransition(() => {
                  setIsIntemplates(false);
                  setIsMoving(false);
                })
              }
            >
              <ExitIcon width="22" height="22" />
            </IconButton>
          </span>
        )}
      </Flex>
      <style jsx global>{`
        .footnav-transition {
          opacity: 1;
        }
        .footnav-animating {
          opacity: 0.5;
          transform: scale(1.2);
        }
      `}</style>
    </Theme>
  );
}
