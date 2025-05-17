import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { Story } from '@/sequelize'

function handleGet(request: NextApiRequest, response: NextApiResponse) {
  const story_id = request.query.story_id
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' })
    return
  }

  Story.findByPk(parseInt(story_id as string)).then((story) => {
    if (!story) {
      response.status(404).json({ error: 'Story not found' })
      return
    }
    response.status(200).json(story)
  }).catch((error) => {
    response.status(500).json({ error: error })
  }).finally(() => {
    response.end()
  })
}

const updateStorySchema = z.object({
  title: z.string(),
  description: z.string(),
})

function handlePut(request: NextApiRequest, response: NextApiResponse) {
  const story_id = request.query.story_id
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' })
    return
  }

  Story.findByPk(parseInt(story_id as string)).then((story) => {
    if (!story) {
      response.status(404).json({ error: 'Story not found' })
      return
    }

    let parsedData: z.infer<typeof updateStorySchema>
    try {
      parsedData = updateStorySchema.parse(request.body)
    } catch (error) {
      response.status(400).json({ error: error })
      return
    }

    story.update({
      title: parsedData.title,
      description: parsedData.description
    }).then((story) => {
      response.status(200).json(story)
    }).catch((error) => {
      response.status(500).json({ error: error })
    }).finally(() => {
      response.end()
    })
  }).catch((error) => {
    response.status(500).json({ error: error })
  }).finally(() => {
    response.end()
  }).catch((error) => {
    response.status(500).json({ error: error })
    response.end()
  }).finally(() => {
    response.end()
  })
}

function handleDelete(request: NextApiRequest, response: NextApiResponse) {
  const story_id = request.query.story_id
  if (!story_id) {
    response.status(400).json({ error: 'story_id is required' })
    return
  }

  Story.findByPk(parseInt(story_id as string)).then((story) => {
    if (!story) {
      response.status(404).json({ error: 'Story not found' })
      return
    }
    story.destroy().then((story) => {
      response.status(200).json(story)
    }).catch((error) => {
      response.status(500).json({ error: error })
    }).finally(() => {
      response.end()
    })
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
    case 'PUT':
      return handlePut(request, response);
    case 'DELETE':
      return handleDelete(request, response);
  }
}

