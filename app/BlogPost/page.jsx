import JsonLd from '../../components/JsonLd.jsx';

const BlogPost = () => {
    // Sample blog post data
    const post = {
        title: 'How to Add JSON-LD Structured Data to a Next.js Website',
        description: 'Learn how to improve your Next.js website\'s SEO by adding JSON-LD structured data.',
        datePublished: '2024-03-23',
        author: {
            "@type": "Person",
            "name": "John Doe"
        },
        image: "https://via.placeholder.com/800x400",
        publisher: {
            "@type": "Organization",
            "name": "My Blog",
            "logo": {
                "@type": "ImageObject",
                "url": "https://via.placeholder.com/200x100"
            }
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.example.com/blog/how-to-add-json-ld-to-next-js"
        }
    };

    return (
        <div>
            <div className='h-[100vh] items-center flex justify-center bg-black'>
                <h3 className='text-[40px] text-white'>
                    Hello world
                </h3>
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>Date Published: {post.datePublished}</p>
            <p>Author: {post.author.name}</p>
            <img src={post.image} alt={post.title} />

            {/* JSON-LD for Blog Post */}
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.description,
                "datePublished": post.datePublished,
                "author": post.author,
                "image": [post.image],
                "publisher": post.publisher,
                "mainEntityOfPage": post.mainEntityOfPage
            }} />
        </div>
    );
};

export default BlogPost;