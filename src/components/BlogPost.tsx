import React from 'react';
import './BlogPost.css'; 

interface BlogPostProps {
  title: string;
  body: string;
  image: string;
  url?: string; 
}

const BlogPost: React.FC<BlogPostProps> = ({ title, body, image, url = '#' }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top" style={{ border: '2px solid #f72585' }} alt={title} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{title}</h5>
        <p className="card-text">{body.substring(0, 150)}...</p>
        <a href={url} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
          Leer más
        </a>
      </div>
      <div className="card-footer text-muted">
        <small>Publicado el 04 de julio de 2025</small>
      </div>
    </div>
  );
};

export default BlogPost;
export {};