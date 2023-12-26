import styled from "styled-components";

export const DivHeader = styled.div`
    background-color: black;
    color: white;
    
    display: flex;
    justify-content: center;
    align-items: center;

    height: 130px;

    .imagem-logo{
        width: auto;
        height: 60%;
    }

    @media (max-width: 800px){
        width: auto;
    }
`;