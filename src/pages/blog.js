import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import Head from '../components/head'
import * as blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              raw       
            }
          }
        }
      }
      allContentfulAsset {
        edges {
          node {
            title
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    
  `);
  const options = {
    renderNode: {
       [BLOCKS.EMBEDDED_ASSET]: node => {
          console.log(node);
          const imageID = node.data.target.sys.id;
          const {
             file: {url}, 
             title
          } = data.allContentfulBlogPost.body.references.find(({contentful_id: id}) => id === imageID);

          return <img src={url} alt={title} />
       }
    }
  }
  // 
  return (<>
      <Head title='Blog'/>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
              </Link>
              <p>{edge.node.publishedDate}</p>
            </li>
          );
        })}
      </ol>{' '}
   </>
  );
};
//
export default BlogPage;
