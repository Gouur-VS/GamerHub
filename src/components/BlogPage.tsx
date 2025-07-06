import React from 'react';
import { gamingNews } from '../data/gamingNews';
import BlogPost from './BlogPost';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  return (
    <div className="blog-container">
      <div className="overlay"></div>
      <div className="content">
        <h2 className="text-center mb-4 fw-bold text-neon">Últimas Noticias Gamer</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {gamingNews.map(post => (
            <div className="col" key={post.id}>
              <BlogPost title={post.title} body={post.body} image={post.image} url={post.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
export {};