import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Buttons from 'components/Buttons';
import Background from 'theme/Background';
import Flex from 'components/Flex';
import { array1, array2 } from 'array/Array';
import Quotes from 'components/Quotes';
import { theme0, theme1, theme2, theme3, theme4 } from 'theme/theme';

const WhiteContainer = styled.div`
  height: 40vh;
  width: 70vw;
  padding: 5px;
  border: 3px solid black;
  background-color: white;
`;

const Root = () => {
  const [number, setNumber] = useState(0);
  const [value1, setValue1] = useState('"If you want to lift yourself up, lift up someone else."');
  const [value2, setValue2] = useState('- Booker T. Washington');
  const [theme, setTheme] = useState(theme0);

  const changeTheme = () => {
    switch (theme) {
      case theme0:
        setTheme(theme1);
        break;
      case theme1:
        setTheme(theme2);
        break;
      case theme2:
        setTheme(theme3);
        break;
      case theme3:
        setTheme(theme4);
        break;

      default:
        setTheme(theme0);
    }
  };

  const handleAddAction = () => {
    if (number === 4) {
      setNumber(0);
      setValue1('"If you want to lift yourself up, lift up someone else."');
      setValue2('- Booker T. Washington');
    } else {
      setNumber(number + 1);
      setValue1(array1[number]);
      setValue2(array2[number]);
    }
    changeTheme();
  };

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <Flex>
        <WhiteContainer>
          <Buttons onClick={handleAddAction} />
          <Quotes styledH1={value1} styledP={value2} />
        </WhiteContainer>
      </Flex>
    </ThemeProvider>
  );
};

export default Root;
