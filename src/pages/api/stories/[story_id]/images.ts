import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { Image, StoryImage } from '@/sequelize';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Op } from 'sequelize';

const createStoryImageSchema = z.object({
  image_id: z.number()
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

  try {
    const story_images = await StoryImage.findAll({
      where: { story_id: story_id }
    });

    const images = await Image.findAll({
      where: {
        id: {
          [Op.in]: story_images.map((story_image) => story_image.getDataValue('image_id'))
        }
      }
    });

    images.forEach((image) => {
      image.setDataValue('x', story_images.find((story_image) => story_image.getDataValue('image_id') === image.getDataValue('id'))?.getDataValue('x'));
      image.setDataValue('y', story_images.find((story_image) => story_image.getDataValue('image_id') === image.getDataValue('id'))?.getDataValue('y'));
    });

    response.status(200).json(images);
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

  try {
    const parsedData = createStoryImageSchema.parse(request.body);
    const story_image = await StoryImage.create({
      story_id: parseInt(story_id as string),
      image_id: parsedData.image_id
    });
    response.status(201).json(story_image);
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
