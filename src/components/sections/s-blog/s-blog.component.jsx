import React from 'react';
import { useSelector } from 'react-redux';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import ArrowLeft from '../../../assets/left-arrow.svg';
import ArrowRight from '../../../assets/right-arrow.svg';

import BlogItem from './../../blog-item/blog-item.component';

import './s-blog.styles.scss';

const mapState = ({ blogData }) => ({
  blogs: blogData.blogs,
});

const SBlog = () => {
  const { blogs } = useSelector(mapState);
  console.log('Here is blog data!!!', blogs);

  return (
    <div className="section-blog">
      <div className="section-blog-top-block">
        <h4 className="section-blog-top-block-h4">&#x268A; Latest news</h4>
        <h1 className="section-blog-top-block-h1">Check our blog</h1>
      </div>
      <div className="section-blog-bottom-block">
        <div style={{ width: '1200px', padding: '50px' }}>
          <Carousel
            arrows
            infinite
            slidesPerPage={3}
            // autoPlay={4000}
            animationSpeed={2000}
            plugins={[
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <ArrowLeft className="section-available-caroseul-point-arrow" />
                  ),

                  arrowRight: (
                    <ArrowRight className="section-available-caroseul-point-arrow" />
                  ),

                  addArrowClickHandler: true,
                },
              },
            ]}
          >
            {blogs ? (
              blogs.map((blog, pos) => {
                const configBlog = {
                  ...blog,
                };
                return <BlogItem key={pos} {...configBlog} />;
              })
            ) : (
              <div>Problem with fetching data, please try again...</div>
            )}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SBlog;
