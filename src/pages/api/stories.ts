import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { Story } from '@/sequelize'


function handleGet(request: NextApiRequest, response: NextApiResponse) {
  Story.findAll().then((stories) => {
    response.status(200).json(stories)
  }).catch((error) => {
    response.status(500).json({ error: error })
  }).finally(() => {
    response.end()
  })
}

const createStorySchema = z.object({
  title: z.string(),
  description: z.string(),
})

function handlePost(request: NextApiRequest, response: NextApiResponse) {
  let parsedData: z.infer<typeof createStorySchema>
  try {
    parsedData = createStorySchema.parse(request.body)
  } catch (error) {
    response.status(400).json({ error: error })
    return
  }

  Story.create({
    title: parsedData.title,
    description: parsedData.description
  }).then((story) => {
    response.status(200).json(story)
  }).catch((error) => {
    response.status(500).json({ error: error })
  }).finally(() => {
    response.end()
  })
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  switch (request.method) {
    case 'GET':
      return handleGet(request, response);
    case 'POST':
      return handlePost(request, response);
  }
}