import React from 'react';

function BlogHero() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className="w-full object-cover blog-post-header"
        style={{
          width: '100%',
          height: '400px',
          objectFit: 'cover',
        }}
      >
        <source src="../IMG_0065.mp4" type="video/mp4" />
      </video>
      <h1></h1>
    </div>
  );
}

export default BlogHero;
