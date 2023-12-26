import styled from "styled-components";

export const DivFooter = styled.div`
    background-color: gray;
    color: white;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 130px;
    padding-top: 10px;

    font-family: 'FonteBook', sans-serif;

    .imagem-logo{
        width: auto;
        height: 40%;
    }

    @media (max-width: 800px){
        width: 100%;
    }
`;