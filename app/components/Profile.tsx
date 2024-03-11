'use client';
import {signIn, useSession} from 'next-auth/react';
import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import {ProfileMenu} from './ProfileMenu';

export default function Profile() {
  const {data: session, status} = useSession();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    return (
      <button className='btn' onClick={() => signIn()}>
        Sign in
      </button>
    );
  }

  return <ProfileMenu />;
}
