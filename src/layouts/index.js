import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../utils/prism-theme.scss';

require('gatsby-remark-design-system/theme/gatsby-remark-design-system-theme.scss');

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Design System - Example"
      meta={[
        {
          name: 'description',
          content: 'Gatsby Design System - Example for the remark plugin gatsby-remark-design-system',
        },
        { name: 'keywords', content: 'Gatsby, Gatsby-Plugin, Remark, Design, System' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1000,
        padding: '2rem 1.0875rem 1.45rem 2rem',
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
