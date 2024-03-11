import React from 'react';
import Link from 'next/link';
import Profile from './Profile';

export default function NavBar() {
  return (
    <nav className='sticky top-0 shadow-sm z-50 bg-white dark:text-white dark:bg-slate-800 border-b-4 border-gray-200 dark:border-gray-900 border-solid'>
      <div className='flex justify-between py-10 px-10 md:px-20'>
        <Link href={'/'}>
          <h1 className='font-semibold text-xl bg-gradient-to-r from-teal-600 to-indigo-600 dark:bg-gradient-to-r dark:from-teal-200 dark:to-indigo-200 bg-clip-text text-transparent'>
            AI Cover Letter
          </h1>
        </Link>

        <ul className={``}>
          <li>
            <Profile />
          </li>
        </ul>
      </div>
    </nav>
  );
}
