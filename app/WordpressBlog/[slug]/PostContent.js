// app/blog/[slug]/PostContent.js
"use client";

import React from 'react';
import { divider } from '@nextui-org/react';

function PostContent({ post }) {
  return (
    <div className='p-[200px]'>
      <div className='border border-black'>
        <h1 className='text-[22px] font-bold'>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </div>
  );
}

export default PostContent;