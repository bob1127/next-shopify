



"use client"
// app/blog/[slug]/page.js
import { divider } from '@nextui-org/react';
import { getPostBySlug, getPosts } from '../../../lib/api';
import { notFound } from 'next/navigation';

export default async function Post({ params }) {
  console.log('Slug:', params.slug); // 添加日誌
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
         <div className='p-[200px]'>
             <div className='border border-black'>
      <h1 className='text-[22px] font-bold'>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
         </div>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
