'use client';

import StoryCardGrid from "@/components/StoryCardGrid";
import { useState } from "react";
import StoryView from "./StoryView";

/**
 * Authenticated component that handles the main story viewing experience.
 * Manages the state between story grid and individual story view.
 */
export default function Authenticated() {
  const [storyID, setStoryID] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleStoryClick = (id: number) => {
    try {
      setIsLoading(true);
      setError(null);
      setStoryID(id);
    } catch (err) {
      setError('Failed to load story. Please try again.');
      console.error('Error loading story:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToGrid = () => {
    setStoryID(null);
    setError(null);
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={handleBackToGrid}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back to Stories
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (storyID) {
    return <StoryView story_id={storyID} setStoryID={handleBackToGrid} />;
  }

  return <StoryCardGrid onStoryClick={handleStoryClick} />;
}