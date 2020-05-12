import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Flex = ({ children }) => <Center>{children}</Center>;

Flex.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Flex;
