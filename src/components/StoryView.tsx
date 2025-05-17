'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Card, Flex, Heading, Text, Theme } from '@radix-ui/themes';
import api from '@/lib/axios';
import Loading from '@/components/Loading';
import Error from '@/components/Error';

interface Position {
  x: number;
  y: number;
  z?: number;
}

interface ContentData {
  text?: string;
  font?: string;
  color?: string;
  videoId?: string;
  url?: string;
  autoplay?: boolean;
  controls?: boolean;
  imageId?: string;
  content?: string;
  alt?: string;
  title?: string;
}

interface ContentItem {
  uid: string;
  type: 'text' | 'video' | 'image' | 'embed';
  position: Position;
  data: ContentData;
}

interface Story {
  id: number;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

type StoryViewProps = {
  story_id: number;
  setStoryID: (storyID: number | null) => void;
}

export default function StoryView({ story_id, setStoryID }: StoryViewProps) {
  const [story, setStory] = useState<Story | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await api.get<Story>(`/stories/${story_id}`);
        setStory(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Failed to fetch story');
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [story_id]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!story) return null;

  const renderContentItem = (item: ContentItem) => {
    const style = {
      position: 'absolute' as const,
      left: `${item.position.x}px`,
      top: `${item.position.y}px`,
      zIndex: item.position.z || 0,
    };

    switch (item.type) {
      case 'text':
        return (
          <Text
            key={item.uid}
            style={{
              ...style,
              fontFamily: item.data.font,
              color: item.data.color,
            }}
          >
            {item.data.text}
          </Text>
        );
      case 'image':
        return (
          <img
            key={item.uid}
            src={item.data.content}
            alt={item.data.alt}
            style={style}
          />
        );
      case 'video':
        return (
          <video
            key={item.uid}
            src={item.data.url}
            autoPlay={item.data.autoplay}
            controls={item.data.controls}
            style={style}
          />
        );
      case 'embed':
        return (
          <iframe
            key={item.uid}
            src={item.data.url}
            title={item.data.title}
            style={style}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Theme>
      <Box style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'var(--gray-1)',
        overflow: 'hidden'
      }}>
        {/* Story Content Canvas */}
        <Box style={{ 
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'auto'
        }}>
          {JSON.parse(story.content).map(renderContentItem)}
        </Box>

        {/* Top Left Info Card */}
        <Card style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          maxWidth: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
          <Flex direction="column" gap="3" p="4">
            <Heading size="6">{story.title}</Heading>
            <Text size="3" color="gray">{story.description}</Text>
            <Button onClick={() => setStoryID(null)}>Back</Button>
          </Flex>
        </Card>

        {/* Bottom Right Date Card */}
        <Card style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
          <Flex direction="column" gap="2" p="3">
            <Text size="2" color="gray">
              Created: {new Date(story.createdAt).toLocaleDateString()}
            </Text>
            <Text size="2" color="gray">
              Updated: {new Date(story.updatedAt).toLocaleDateString()}
            </Text>
          </Flex>
        </Card>
      </Box>
    </Theme>
  );
} 