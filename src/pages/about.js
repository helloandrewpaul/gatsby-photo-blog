import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is what I'm about</p>
      <Link to='/contact'>Contact me</Link>
    </Layout>
  );
};
//
export default AboutPage;
