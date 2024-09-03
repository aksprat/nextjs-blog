// File: pages/posts/first-post.js

import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <p>This is my first blog post using Next.js!</p>
      <Link href="/">Back to home</Link>
    </div>
  );
}
