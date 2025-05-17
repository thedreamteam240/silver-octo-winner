'use client';

import StoryCardGrid from "@/components/StoryCardGrid";
import { useState } from "react";
import StoryView from "./StoryView";

export default function Authenticated() {
  const [storyID, setStoryID] = useState<number | null>(null);


  if (storyID) {
    return <StoryView story_id={storyID} setStoryID={setStoryID} />;
  } else {
    return <StoryCardGrid onStoryClick={setStoryID} />;
  }
}