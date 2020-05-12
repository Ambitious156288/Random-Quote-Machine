import React from 'react';
import styled from 'styled-components';

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Flex = ({ children }) => <Center>{children}</Center>;

export default Flex;
