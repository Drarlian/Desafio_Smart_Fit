import styled from "styled-components";

export const DivLista = styled.div`
    /* background-color: orange; */

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
    margin-bottom: 40px;

    font-family: 'FonteBook', sans-serif;

    .lista-principal{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 1100px;
        gap: 1rem;

        h2{
            color: #444444;
        }

        p{
            color: #959595;
        }

        .lista-container{
            /* background-color: blue; */
            background-color: rgba(0, 0, 0, 0.03);
            border: 2.5px solid rgba(0, 0, 0, 0.05);
            border-radius: 5px;

            display: flex;
            flex-direction: column;

            width: 500px;
            height: 420px;
            padding-right: 1rem;
            padding-left: 1rem;


            .lista-inicio{
                border-bottom: solid rgba(0, 0, 0, 0.06);
                margin-bottom: 10px;
                .lista-status{
                    font-family: 'FonteBold';
                    margin-bottom: 0;
                }

                p{
                    /* display: flex;
                    margin-bottom: 0;
                    margin-top: 0; */
                }

                h2{
                    margin-top: 5px;
                    margin-bottom: 3px;
                    font-family: 'FonteBold', sans-serif;
                }
            }

            h2{
                font-family: 'FonteBold', sans-serif;
            }

            .lista-imagens{
                /* background-color: blueviolet; */
                display: flex;
                justify-content: center;
                align-items: center;
                /* margin-top: 10px; */
                img{
                    width: 25%;
                    height: auto;
                }
            }

            .lista-horarios{
                display: grid;
                grid-template-columns: 1fr 1fr;

                div{
                    h2{
                        margin-bottom: 0;
                    }
                    p{
                        margin-top: 0;
                    }
                }
            }
        }
    }

    @media (max-width: 800px){
        .lista-principal{
            display: flex;
            flex-direction: column;

            max-width: 100%;

            .lista-container{
                width: 90%;
            }
        }
    }
`;