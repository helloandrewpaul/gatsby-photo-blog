import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';
import Head from '../components/head'


export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            gatsbyImageData(formats: [WEBP, AUTO])
          }
        }
      }
    }
  }
`;

const Blog = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const img = data.contentfulBlogPost.body.references.find(
          (el) => el.contentful_id === node.data.target.sys.id
        );
        return (
          <GatsbyImage
            image={img.gatsbyImageData}
            alt={data.contentfulBlogPost.title}
            className='blog-img'
          />
        );
      },
    },
  };
  return (
    <Layout>
      <Head title={data.contentfulBlogPost.title}/>
      <h1>{data.contentfulBlogPost.title}</h1>
      <p>{data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(
        JSON.parse(data.contentfulBlogPost.body.raw),
        options
      )}
    </Layout>
  );
};
export default Blog;
// test commit
