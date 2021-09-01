import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          year
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer}>
      <p>
        Created by {data.site.siteMetadata.author}, ©{" "}
        {data.site.siteMetadata.year}
      </p>
    </footer>
  );
};

export default Footer;
