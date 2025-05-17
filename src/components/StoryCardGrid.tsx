'use client';

import { Box, Card, Grid, Inset, Strong, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

interface Story {
  id: number;
  title: string;
  description: string;
}

type StoryCardProps = {
  title: string;
  description: string;
}

function StoryCard({ title, description }: StoryCardProps) {
  return (
    <Box className="otot" maxWidth="500px" top="1">
      <Card size="3">
        <Inset clip="padding-box" side="top" pb="current">
        </Inset>
        <Text as="p" size="3"><Strong>{title}</Strong> {description}</Text>
      </Card>
    </Box>
  );
}

export default function StoryCardGrid() {
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

  if (error) {
    return <Error />;
  }

  return (
    <Grid columns="3" gap="6" rows="repeat(2, 500px)" width="auto">
      {stories.map((story) => (
        <StoryCard title={story.title} description={story.description} key={story.title} />
      ))}
    </Grid>
  )
}