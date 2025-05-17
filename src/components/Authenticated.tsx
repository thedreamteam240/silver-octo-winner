'use client';

import LogoutButton from "@/components/LogoutButton";
import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Loading from "@/components/Loading";

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
        const response = await api.get<Story[]>('/stories');
        setStories(response.data);
      } catch {
        setError('Failed to fetch stories');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <Flex direction="column" gap="2">
      <LogoutButton />

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