// app/blog/[slug]/page.js
import PostContent from './PostContent';
import { getPostBySlug, getPosts } from '../../../lib/api';
import { notFound } from 'next/navigation';

export default async function Post({ params }) {
  console.log('Slug:', params.slug); // 添加日誌
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return <PostContent post={post} />;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
