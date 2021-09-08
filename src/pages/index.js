import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi</h1>
      <h2>I'm Andrew</h2>
      <p>
        Need a Developer? <Link to='/contact'>Contact me.</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
