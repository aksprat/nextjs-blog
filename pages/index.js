// File: pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Next.js Blog</h1>
      <ul>
        <li>
          <Link href="/posts/first-post">First Post</Link>
        </li>
      </ul>
    </div>
  );
}
