'use client';

import LogoutButton from "@/components/LogoutButton";
import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

interface Story {
  id: string;
  title: string;
  description: string;
}

export default function Authenticated() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        // Use your custom Axios instance here, which injects the session token automatically
        const response = await api.get<Story[]>('/stories');
        setStories(response.data);
      } catch (err) {
        setError('Failed to fetch stories');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <Flex direction="column" gap="2">
      <LogoutButton />
      <p>Welcome back!</p>

      {loading && <p>Loading stories...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        stories.length > 0 ? (
          <div>
            <h2>Your Stories</h2>
            <ul>
              {stories.map((story) => (
                <li key={story.id}>{story.title}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No stories found</p>
        )
      )}
    </Flex>
  );
}