import styled from "styled-components";

export const DivFormulario = styled.div`
    /* background-color: orange; */

    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 90%; */

    /* margin: 0; */
    /* padding: 0; */
    padding-top: 20px;

    font-family: 'FonteLight';
    color: #808080;

    box-sizing: border-box;
    overflow-wrap: break-word;
    hyphens: auto;

    .formulario-principal{
        /* background-color: pink; */

        /* display: flex; */
        width: 1100px;

        border: 2.5px solid rgba(0, 0, 0, 0.05);

        border-bottom: 5px solid rgba(0, 0, 0, 0.05);

        /* border: 3px solid grey; */
        margin-bottom: 30px;
        /* box-shadow: 1px 2px 8px #2222; */
        border-radius: 5px;
        box-sizing: border-box;

        form{
            padding: 15px;

            h2{
                font-weight: normal;
                padding-left: 10px;
                padding-bottom: 10px;
                border-bottom: solid rgba(0, 0, 0, 0.03);
            }
        }

        .formulario-titulo{
            display: flex;
            align-items: center;
            margin: auto;
            padding: auto;

            img{
                width: 3%;
                height: 30%;
            }

            p{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
            }
        }

        .formulario-linha{
            display: flex;
            justify-content: space-between;

            border-bottom: solid rgba(0, 0, 0, 0.03);
        }

        .formulario-final{
            margin-top: 40px;
            border-bottom: none;
            /* background-color: pink; */
        }

        .formulario-linha-interna{
            /* background-color: red; */
            display: flex;
            justify-content: center;
            align-items: center;

            input{
                margin-right: 6px;
            }
        }

        .formulario-botoes{
            /* background-color: red; */

            display: flex;
            justify-content: center;
            margin-top: 15px;
            margin-bottom: 15px;

            .botao-colorido{
                background-color: #FFB611;
                border: none;
            }

            button{
                background-color: transparent;

                width: 350px;
                height: 50px;

                margin-right: 8px;
                margin-left: 8px;

                font-weight: bold;
                border: solid rgba(0, 0, 0, 0.04);
                border-radius: 4px;
                cursor: pointer;

                font-size: 1.1em;
                
                transition: all 0.5s ease;
            }

            button:hover {
                opacity: 70%;
            }
        }
    }

    @media (max-width: 800px){
        .formulario-principal{
            width: 100%;
        }
    }
`;