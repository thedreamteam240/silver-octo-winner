import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { Text, StoryText, Story } from '@/sequelize';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Op } from 'sequelize';

const createStoryTextSchema = z.object({
  text_id: z.number(),
  x: z.number(),
  y: z.number()
});

async function handleGet(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const story_id = request.query.story_id;
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' });
    return;
  }

  const story = await Story.findOne({
    where: { id: story_id, user_email: session.user?.email }
  });
  if (!story) {
    response.status(403).json({ error: 'Forbidden: You do not own this story' });
    return;
  }

  try {
    const story_texts = await StoryText.findAll({
      where: { story_id: story_id }
    });

    const texts = await Text.findAll({
      where: {
        id: {
          [Op.in]: story_texts.map((story_text) => story_text.getDataValue('text_id'))
        }
      }
    });

    texts.forEach((text) => {
      text.setDataValue('x', story_texts.find((story_text) => story_text.getDataValue('text_id') === text.getDataValue('id'))?.getDataValue('x'));
      text.setDataValue('y', story_texts.find((story_text) => story_text.getDataValue('text_id') === text.getDataValue('id'))?.getDataValue('y'));
    });

    response.status(200).json(texts);
  } catch (error) {
    response.status(500).json({ error: error instanceof Error ? error.message : 'Internal Server Error' });
  }
}

async function handlePost(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const story_id = request.query.story_id;
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' });
    return;
  }

  const story = await Story.findOne({
    where: { id: story_id, user_email: session.user?.email }
  });
  if (!story) {
    response.status(403).json({ error: 'Forbidden: You do not own this story' });
    return;
  }

  try {
    const parsedData = createStoryTextSchema.parse(request.body);
    const story_text = await StoryText.create({
      story_id: parseInt(story_id as string),
      text_id: parsedData.text_id,
      x: parsedData.x,
      y: parsedData.y
    });
    response.status(201).json(story_text);
  } catch (error) {
    if (error instanceof z.ZodError) {
      response.status(400).json({ error: error.errors });
    } else {
      response.status(500).json({ error: error instanceof Error ? error.message : 'Internal Server Error' });
    }
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
    case 'POST':
      await handlePost(request, response);
      break;
    default:
      response.setHeader('Allow', ['GET', 'POST']);
      response.status(405).json({ error: `Method ${request.method} not allowed` });
  }
}
