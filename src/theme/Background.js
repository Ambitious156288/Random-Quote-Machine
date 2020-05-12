import { createGlobalStyle } from 'styled-components';

const Background = createGlobalStyle`
    body{ 
        background-color: ${({ theme }) => theme.default};
    }
`;

export default Background;
