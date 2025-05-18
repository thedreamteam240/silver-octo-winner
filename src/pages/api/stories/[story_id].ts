import type { NextApiRequest, NextApiResponse } from 'next';
import { Story } from '@/sequelize';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

const updateStorySchema = z.object({
  title: z.string(),
  description: z.string(),
  tone: z.string().optional(),
});

async function handleGet(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const story_id = request.query.story_id;
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' });
    return;
  }

  try {
    const story = await Story.findByPk(parseInt(story_id as string))
    if (!story) {
      response.status(404).json({ error: 'Story not found' });
      return;
    }
    if (story.getDataValue('user_email') !== session.user?.email) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }
    response.status(200).json(story);
  } catch (error: unknown) {
    response.status(500).json({ error: error instanceof Error ? error.message : 'Internal Server Error' });
  }
}

async function handlePut(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const story_id = request.query.story_id;
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' });
    return;
  }

  try {
    const story = await Story.findByPk(parseInt(story_id as string));
    if (!story) {
      response.status(404).json({ error: 'Story not found' });
      return;
    }
    if (story.getDataValue('user_email') !== session.user?.email) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const parsedData = updateStorySchema.parse(request.body);
    await story.update({ title: parsedData.title, description: parsedData.description });
    
    response.status(200).json(story);
  } catch (error) {
    if (error instanceof z.ZodError) {
      response.status(400).json({ error: error.errors });
    } else {
      response.status(500).json({ error: error instanceof Error ? error.message : 'Internal Server Error' });
    }
  }
}

async function handleDelete(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const story_id = request.query.story_id;
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' });
    return;
  }

  try {
    const story = await Story.findByPk(parseInt(story_id as string));
    if (!story) {
      response.status(404).json({ error: 'Story not found' });
      return;
    }
    if (story.getDataValue('user_email') !== session.user?.email) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }
    await story.destroy();
    response.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    response.status(500).json({ error: error instanceof Error ? error.message : 'Internal Server Error' });
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case 'GET':
      await handleGet(request, response);
      break;
    case 'PUT':
      await handlePut(request, response);
      break;
    case 'DELETE':
      await handleDelete(request, response);
      break;
    default:
      response.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      response.status(405).json({ error: `Method ${request.method} not allowed` });
  }
}
