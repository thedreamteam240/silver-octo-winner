import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@radix-ui/themes"

export default function LogoutButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex flex-col items-center gap-2">
        <span className="text-sm text-gray-600">
          Signed in as {session.user?.email}
        </span>
        <Button
          variant="soft"
          color="red"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </div>
    )
  }
}