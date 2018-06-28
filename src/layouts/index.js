import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const TemplateWrapper = ({ data, children }) => (
  <div>
    <Helmet
      title="Gatsby React Boilerplate"
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const TemplateQuery = graphql`
  query templateheading {
    site {
      siteMetadata {
        title
      }
    }
  }
`
