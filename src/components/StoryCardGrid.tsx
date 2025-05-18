'use client';

import { Box, Button, Card, Flex, Grid, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import CreateButton from "@/components/CreateButton";
import EditButton from "@/components/EditButton";
import DeleteButton from "@/components/DeleteButton";
import Editor from "@/components/Editor";

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
  onEdit: (storyID: number) => void;
}

function StoryCard({ id, title, description, onStoryClick, onEdit }: StoryCardProps) {
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
          <Button
            size="3"
            variant="soft"
            onClick={() => onEdit(id)}
          >
            Edit Story
          </Button>
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
  const [editingStoryId, setEditingStoryId] = useState<number | null>(null);

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

  if (editingStoryId !== null) {
    return (
      <Box style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}>
        <Editor storyId={editingStoryId} />
        <Button
          size="3"
          style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1001 }}
          onClick={() => setEditingStoryId(null)}
        >
          Back to Stories
        </Button>
      </Box>
    );
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
            onEdit={setEditingStoryId}
          />
        ))}
      </Grid>
    </Box>
  );
}