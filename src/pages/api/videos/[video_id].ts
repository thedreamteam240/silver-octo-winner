import type { NextApiRequest, NextApiResponse } from 'next';
import { Video } from '@/sequelize';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

async function handleGet(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const video_id = request.query.video_id;
  if (!video_id) {
    response.status(400).json({ error: 'video_id is required' });
    return;
  }

  try {
    const video = await Video.findByPk(parseInt(video_id as string))
    if (!video) {
      response.status(404).json({ error: 'Video not found' });
      return;
    }
    if (video.getDataValue('user_email') !== session.user?.email) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }
    response.status(200).json(video);
  } catch (error: unknown) {
    response.status(500).json({ error: error instanceof Error ? error.message : 'Internal Server Error' });
  }
}

async function handleDelete(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (!session) {
    response.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const video_id = request.query.video_id;
  if (!video_id) {
    response.status(400).json({ error: 'video_id is required' });
    return;
  }

  try {
    const video = await Video.findByPk(parseInt(video_id as string));
    if (!video) {
      response.status(404).json({ error: 'Video not found' });
      return;
    }
    if (video.getDataValue('user_email') !== session.user?.email) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }
    await video.destroy();
    response.status(200).json({ message: 'Video deleted successfully' });
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
    case 'DELETE':
      await handleDelete(request, response);
      break;
    default:
      response.setHeader('Allow', ['GET', 'DELETE']);
      response.status(405).json({ error: `Method ${request.method} not allowed` });
  }
}
