import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";

export const query = graphql`
query($slug: String!){
  contentfulBlogPost(slug:{eq: $slug}){
    title
    publishedDate(formatString: "MMMM Do, YYY")
   
  }
}`;

const Blog = ({ data }) => {
  return <Layout>
    <h1>{data.contentfulBlogPost.title}</h1>
    <p>{data.contentfulBlogPost.publishedDate}</p>
  </Layout>;
};
export default Blog;
// test commit
