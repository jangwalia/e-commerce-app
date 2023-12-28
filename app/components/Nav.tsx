"use client";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

function Nav({ user }: Session) {
  return (
    <nav className="py-4 px-4 bg-slate-500 flex flex-row justify-between">
      <h1>Styled</h1>
      {!user ? (
        <button
          className="bg-blue-500 text-white px-8 rounded py-2"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      ) : (
        <div className="flex flex-row">
          <Image
            className="rounded-full mr-8"
            src={user?.image as string}
            alt={user?.name as string}
            width={48}
            height={48}
          />
          <button
            className="bg-blue-500 text-white px-8 rounded py-2"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      )}
    </nav>
  );
}

export default Nav;
