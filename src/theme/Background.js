import { createGlobalStyle } from 'styled-components';

const Background = createGlobalStyle`
    body{ 
        background-color: ${({ theme }) => theme.default};
        transition: 0.7s;
    }
`;

export default Background;
