// app/blog/page.js
import { getPosts } from '../../lib/api';
import Link from 'next/link';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className='h-[100vh] py-[100px]'>
      <h1 className='text-[20px] font-bold'>blog article s</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/WordpressBlog/${post.slug}`}>
        {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
