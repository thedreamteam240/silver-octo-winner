'use client';

import { SessionProvider, useSession } from "next-auth/react";
import Authenticated from "@/components/Authenticated";
import Unauthenticated from "@/components/Unauthenticated";
import Loading from "@/components/Loading";

function PageContent() {
  const { status } = useSession();

  return (
    <>
      {status === "authenticated" && <Authenticated />}
      {status === "unauthenticated" && <Unauthenticated />}
      {status === "loading" && <Loading />}
    </>
  );
}

export default function Page() {

  return (
    <SessionProvider>
      <PageContent />
    </SessionProvider>
  );
}