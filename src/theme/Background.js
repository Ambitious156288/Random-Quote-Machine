import { createGlobalStyle } from 'styled-components';

const Background = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
    
    body{ 
        background-color: ${({ theme }) => theme.default};
        transition: 0.7s;
    }
`;

export default Background;
