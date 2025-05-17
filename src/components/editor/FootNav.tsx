"use client";

import { useState } from "react";
import { IconButton, Flex, Theme, Tooltip } from "@radix-ui/themes";
import {
  DividerVerticalIcon,
  ExitIcon,
  MoveIcon,
  StackIcon,
  TableIcon,
  TextIcon,
} from "@radix-ui/react-icons";
import PicturesPicker from "./PicturesPicker";
import VideosPicker from "./VideosPicker";

export default function FootNav({darkMode}: {darkMode: boolean}) {
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
      className={`shadow rounded-4xl translate-x-[-50%] footnav-transition${
        animating ? " footnav-animating" : ""
      } ` + (darkMode ? "shadow-[#395BC8]" : "")}
      style={{ transition: "opacity 0.5s, transform 0.5s" }}
    >
      {!isIntemplates && (
        <Tooltip content="Move Object">
          <IconButton
            variant={!isMoving ? "ghost" : "solid"}
            size="4"
            onClick={() =>
              !isMoving ? handleTransition(() => setIsMoving(true)) : null
            }
          >
            <MoveIcon width="22" height="22" />
          </IconButton>
        </Tooltip>
      )}
      {!isMoving && !isIntemplates && (
        <DividerVerticalIcon width="22" height="22" />
      )}
      {!isMoving && !isIntemplates && (
        <Tooltip content="Add shapes">
          <IconButton variant="ghost" size="4">
            <StackIcon width="22" height="22" />
          </IconButton>
        </Tooltip>
      )}
      {!isMoving && !isIntemplates && (
        <Tooltip content="Add text">
          <IconButton variant="ghost" size="4">
            <TextIcon width="22" height="22" />
          </IconButton>
        </Tooltip>
      )}
      {!isMoving && !isIntemplates && <PicturesPicker />}
      {!isMoving && !isIntemplates && <VideosPicker />}
      {!isMoving && !isIntemplates && (
        <DividerVerticalIcon width="22" height="22" />
      )}
      {!isMoving && (
        <Tooltip content="Edit Templates">
          <IconButton
            variant={!isIntemplates ? "ghost" : "solid"}
            size="4"
            onClick={() =>
              !isIntemplates
                ? handleTransition(() => setIsIntemplates(true))
                : null
            }
          >
            <TableIcon width="22" height="22" />
          </IconButton>
        </Tooltip>
      )}
      {(isMoving || isIntemplates) && (
        <Tooltip content="Exit">
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
        </Tooltip>
      )}
    <style jsx global>{`
      .footnav-transition {
        opacity: 1;
      }
      .footnav-animating {
        opacity: 0.5;
        transform: scale(1.2);
      }
    `}</style>
    </Flex>
  );
}
