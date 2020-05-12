import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Flex from './Flex';

const Styledh1 = styled.h1`
  color: ${({ theme }) => theme.default};
  font-size: 40px;
  font-family: 'Caveat', cursive;
  transition: 0.7s;
`;

const Styledp = styled(Styledh1)`
  font-size: 20px;
`;

const Quotes = ({ styledH1, styledP }) => {
  return (
    <Flex>
      <Styledh1>{styledH1}</Styledh1>
      <Styledp>{styledP}</Styledp>
    </Flex>
  );
};

Quotes.propTypes = {
  styledH1: PropTypes.string,
  styledP: PropTypes.string,
};

Quotes.defaultProps = {
  styledH1: 'Quote',
  styledP: 'Author',
};

export default Quotes;
