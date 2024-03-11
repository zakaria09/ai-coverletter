'use client';
import {useSession} from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const {data: session, status} = useSession();
  console.log(session);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between max-w-24'>
      <h1>Page</h1>
    </main>
  );
}
