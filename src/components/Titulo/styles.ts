import styled from "styled-components";

export const DivTitulo = styled.div`
    /* background-color: orange; */

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    margin: 0;
    padding-top: 40px;
    /* padding-left: 60px; */
    /* padding-right: 60px; */

    box-sizing: border-box;
    overflow-wrap: break-word;
    hyphens: auto;

    .titulo-principal{
        /* background-color: red; */
        width: 1100px;
    }

    h1{
        font-family: 'FonteBold', sans-serif;
        color: #333333;
        margin-bottom: 12px;
    }

    p{
        font-family: 'FonteBook', sans-serif;
        color: #333333;
    }

    .traco-pequeno{
        background-color: #333333;
        display: inline-block;
        border: solid;
        width: 80px;
        height: 3px;
    }

    @media (max-width: 800px) {
        padding: 15px;

        .titulo-principal{
            /* background-color: red; */
            width: 100%;
        }
    }
`;