'use client';

import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';
import classNames from 'classnames';
import {useEffect, useRef, useState} from 'react';

export function ProfileMenu() {
  const {data: session, status} = useSession();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (menuRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'authenticated') {
    return (
      <div>
        <div ref={menuRef} className='relative '>
          <button type='button' onClick={() => setOpen(!isOpen)}>
            <Image
              src={session.user?.image ?? '/default-avatar.jpeg'}
              width={32}
              height={32}
              alt='Your Name'
              className='rounded-full h-10 w-10 cursor-pointer'
            />
          </button>
          <div
            className={classNames(
              'absolute top-[calc(100%+40px)] right-[-1rem] py-4 px-2 bg-white overflow-hidden w-36 min-h-20 ring-1 ring-slate-900/10 shadow-lg rounded-sm',
              `${isOpen ? '' : 'hidden'}`
            )}
          >
            <div className='w-full flex justify-center items-center h-10 cursor-pointer font-semibold hover:border-solid hover:border-4 hover:border-cyan-200 mb-4'>
              <Link href={`/profile`}>My Profile</Link>
            </div>
            <div className='w-full flex flex-col justify-center items-center'>
              <button className='btn' onClick={() => signOut()}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
