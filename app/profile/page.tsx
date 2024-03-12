'use client';
import React from 'react';
import ProfileForm from '../components/ProfileForm';
import {useSession} from 'next-auth/react';
import axios from 'axios';
import {useRouter} from 'next/navigation';

export default function Profile() {
  const {data: session, status} = useSession();
  const router = useRouter();

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>;
  }

  console.log(session);
  const handleSave = async (data: any) => {
    const resp = await axios.put('api/users', {
      email: session?.user?.email,
      bio: data.bio,
    });
    if (resp.status === 200) router.push('/');
  };
  return (
    <div>
      <h1>Profile</h1>
      <ProfileForm details={handleSave} />
    </div>
  );
}
