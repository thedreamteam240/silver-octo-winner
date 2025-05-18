'use client';

import { Box, Button, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import CreateButton from "@/components/CreateButton";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";

interface Story {
  id: number;
  title: string;
  description: string;
  tone: string;
}

type StoryCardProps = {
  id: number;
  title: string;
  description: string;
  onStoryClick: (storyID: number) => void;
  onSelect: (storyID: number) => void;
}

function StoryCard({ id, title, description, onStoryClick }: StoryCardProps) {
  return (
    <Box className="story-card-container">
      <Card
        size="3"
        className="story-card"
        style={{
          background: 'var(--gray-1)',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          borderRadius: '12px',
          padding: '1.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
        }}
      >
        <Box>
          <Text as="div" size="5" weight="bold" style={{ marginBottom: '0.75rem' }}>
            {title}
          </Text>
          <Text as="p" size="3" style={{ lineHeight: '1.6', color: 'var(--gray-11)' }}>
            {description}
          </Text>
        </Box>
        <Flex
          direction="row"
          gap="2"
          style={{ marginTop: '1.5rem' }}
        >
          <Button
            size="3"
            onClick={() => onStoryClick(id)}
            style={{ flex: 1 }}
          >
            Read Story
          </Button>
          <EditButton storyID={id} />
          <DeleteButton storyID={id} />
        </Flex>
      </Card>
    </Box>
  );
}

type StoryCardGridProps = {
  onStoryClick: (storyID: number) => void;
}

export default function StoryCardGrid({ onStoryClick }: StoryCardGridProps) {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Removed unused setSelectedStoryId state setter

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

  function setSelectedStoryId(storyID: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Box style={{ padding: '2rem' }}>
      <Box style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        justifyContent: 'flex-end'
      }}>
        <CreateButton />
      </Box>
      <Grid
        columns={{ initial: "1", sm: "2", md: "3" }}
        gap="6"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          gridAutoRows: 'minmax(300px, auto)'
        }}
      >
        {stories.map((story) => (
          <StoryCard
            id={story.id}
            title={story.title}
            description={story.description}
            key={story.id}
            onStoryClick={onStoryClick}
            onSelect={setSelectedStoryId}
          />
        ))}
      </Grid>
    </Box>
  );
}