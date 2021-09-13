import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';
import Head from '../components/head'
import Blog from './blog'

const IndexPage = () => {
  return (
    <Layout>
      <Head title='Home'/>
  <Blog/>
    </Layout>
  );
};

export default IndexPage;
