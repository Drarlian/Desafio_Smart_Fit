import styled from "styled-components";

export const DivLegenda = styled.div`
    background-color: pink;

    font-family: 'FonteBook', sans-serif;

    .legenda-principal{
        background-color: red;

        display: flex;
        justify-content: center;
        align-items: center;

        .legenda-elementos{
            background-color: orange;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            p{
                font-weight: bold;
            }

            .container-imagens{
                display: flex;

                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }
            }
        }
    }
`;