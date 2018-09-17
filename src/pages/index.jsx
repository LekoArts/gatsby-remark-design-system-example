import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = props => {
  const postNode = props.data.markdownRemark;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query DesignSystem {
    markdownRemark {
      html
    }
  }
`;
