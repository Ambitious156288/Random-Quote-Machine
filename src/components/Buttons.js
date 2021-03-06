import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 90px;
  height: 40px;
  border: none;
  margin: 20px 20px;
  padding: 7px;
  color: white;
  font-family: 'Caveat', cursive;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.default};
  transition: 0.7s;
  cursor: pointer;
`;

const Buttons = ({ onClick }) => <Button onClick={onClick}>New quote!</Button>;

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Buttons;
