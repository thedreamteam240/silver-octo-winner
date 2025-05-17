'use client';

import { Box, Button, Card, Grid, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

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
}

function StoryCard({ id, title, description, onStoryClick }: StoryCardProps) {
  return (
    <Box className="story-card-container" style={{ transition: 'transform 0.2s ease-in-out' }}>
      <Card 
        size="3" 
        style={{
          background: 'var(--gray-1)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
          padding: '1.5rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onClick={() => onStoryClick(id)}
        className="hover:transform hover:-translate-y-1 hover:shadow-lg"
      >
        <Box>
          <Text as="div" size="5" weight="bold" style={{ marginBottom: '0.75rem' }}>
            {title}
          </Text>
          <Text as="p" size="3" style={{ lineHeight: '1.6' }}>
            {description}
          </Text>
        </Box>
        <Button 
          size="3" 
          style={{ 
            marginTop: '1.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            transition: 'all 0.2s ease',
          }}
          className="hover:scale-102 hover:shadow-md"
        >
          Read Story
        </Button>
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
    <Box style={{ padding: '2rem' }}>
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
          />
        ))}
      </Grid>
    </Box>
  );
}