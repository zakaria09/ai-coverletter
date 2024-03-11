'use client';
import React from 'react';
import ProfileForm from '../components/ProfileForm';
import {useSession} from 'next-auth/react';
import axios from 'axios';

export default function Profile() {
  const {data: session, status} = useSession();
  console.log(session);
  const handleImg = (img: string) => {
    console.log(img);
    axios.put('api/users', {id: (session?.user as any).id, image: img});
  };
  return (
    <div>
      <h1>Profile</h1>
      <ProfileForm imgUploaded={handleImg} />
    </div>
  );
}
