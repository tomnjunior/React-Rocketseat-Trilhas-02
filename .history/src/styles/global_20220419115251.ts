import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;

    --red: #E52E4D;

    --blue: #5429CC;|

    --blue-light: #6933FF;

    --text-title: #363F5F;
--text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px; (Tamanho base de Desktop)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`