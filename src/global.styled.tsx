import { createGlobalStyle } from 'styled-components';
import '@fontsource/barlow/100.css';
import '@fontsource/barlow/200.css';
import '@fontsource/barlow/300.css';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/600.css';
import '@fontsource/barlow/700.css';
import '@fontsource/barlow/800.css';
import '@fontsource/barlow/900.css';

const GlobalStyles = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
    
    body {
        font-family: 'Poppins', sans-serif; 
        background: #FAFBFC; 
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        font-size: 1.6rem;
        font-weight: normal;
    }
`;

export default GlobalStyles;
