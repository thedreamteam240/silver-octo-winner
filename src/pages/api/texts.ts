import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { Text } from '@/sequelize';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const createTextSchema = z.object({
  content: z.string(),
});

async function handleGet(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const stories = await Text.findAll({
      where: {
        user_email: session.user?.email
      }
    });
    response.status(200).json(stories);
  } catch (error) {
    response.status(500).json({ error: error instanceof Error ? error.message : 'Internal Server Error' });
  }
}

async function handlePost(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    const parsedData = createTextSchema.parse(request.body);
    const text = await Text.create({
      content: parsedData.content,
      user_email: session.user?.email
    });
    response.status(201).json(text);
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
