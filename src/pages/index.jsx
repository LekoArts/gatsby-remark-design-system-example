import React from 'react';

const IndexPage = props => {
  const postNode = props.data.markdownRemark;
  return (
    <div className="example-page">
      <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
    </div>
  );
};

export default IndexPage;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query DesignSystem {
    markdownRemark {
      html
    }
  }
`;
