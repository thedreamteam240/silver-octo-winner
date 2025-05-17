import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { NextApiResponse } from "next"
import { NextApiRequest } from "next"

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions)

  if (session) {
    response.send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  } else {
    response.send({
      error: "You must be signed in to view the protected content on this page.",
    })
  }
}