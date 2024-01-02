import styled from "styled-components";

export const DivLegenda = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 90%; */

    /* margin: 0; */
    /* padding: 0; */
    margin-top: 20px;

    box-sizing: border-box;
    overflow-wrap: break-word;
    hyphens: auto;

    font-family: 'FonteBook', sans-serif;

    .legenda-principal{
        background-color: rgba(0, 0, 0, 0.03);
        border-radius: 3px;

        display: flex;
        justify-content: space-between;
        /* justify-content: center; */
        /* align-items: center; */


        width: 1100px;
        height: auto;

        overflow-x: scroll;
        overflow-y: hidden;

        .legenda-elementos{
            /* background-color: orange; */
            /* border: solid; */

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            max-width: 370px;
            max-height: 220px;

            h3{
                font-family: 'FonteBold';
                padding-top: 17px;
                margin-bottom: 0;
                /* height: 5px; */
            }

            p{
                font-family: 'FonteBook';
                color: black;
            }

            .container-imagens{
                display: flex;
                justify-content: center;

                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    margin-right: 0.5rem;
                    margin-left: 0.5rem;

                    img{
                        max-width: auto;
                        max-height: 50%;
                        margin-bottom: 0;
                    }

                    p{
                        margin-top: 5px;
                    }
                }
            }
        }
    }

    .legenda-principal::-webkit-scrollbar {
        display: none;
    }
`;