import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import TdsLink from '@tds/core-link';

// Replicated as mentioned in TDS, Link here -  https://tds.telus.com/components/index.html#/Links?id=link
const LinkWrapper = ({ children, ...rest }) => (
  <TdsLink {...rest} reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </TdsLink>
)

export default LinkWrapper