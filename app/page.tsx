'use client';

import { authClient } from "./lib/auth-client";

export default function Home() {
  return (
    <button onClick={() => authClient.signIn.social({ provider: "ion", callbackURL: "/challenges"})}>
      Log in bud
    </button>
  );
}
