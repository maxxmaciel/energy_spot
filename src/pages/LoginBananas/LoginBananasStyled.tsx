import styled from 'styled-components';

interface ILoginStyled {
    TESTE:string;
}

const LoginStyled = styled.div<ILoginStyled>` 
  background: rgb(57, 57, 57);
    min-height: 100vh;

    ${({TESTE}) => TESTE }

    >.c{
    display: flex;
    padding-top: 74px;
    flex-direction: column;
    -webkit-box-align: center;
    gap: 39px;
    align-items: center;

        >.c_logo{
          background: #FFFFFF;
          border: 1px solid #221122;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          width: 297px;
          height: 135px;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            max-width: 75%;
            max-height: 100%;
          }
        }
        >.c_inputs{
            gap: 31px;
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
        >.c_input{
            display: flex;
            width: 562px;
            -webkit-box-pack: center;
             justify-content: flex-start;
            >  .c_field_name {
                font-family: Lato;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                padding-top: 20px;
                width: 80px;
                color: #fff;
               }
            >.c{
                width: 85px;
                font-family: "Lato Bold";
                font-size: 16px;
                text-align: center;
                display: flex;
                color: rgb(31, 45, 61) ;
                align-items: center;
            }
            >.c_esq_senha {
                position: absolute;
                font-family: "Lato Bold";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 19px;
                text-align: center;
                color: #FFFFFF;
                left: 80px;
                top: 56.2px;
                cursor: pointer;
            }
        }
    }
    
        >button {
            width: 128px;
            height: 32px;
            background: rgb(254, 219, 71);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            color: rgb(31, 45, 61) ;
            font-family: 'Lato Bold';
            font-size: 16px;
            cursor: pointer;
        }
    }
  
 
    @media only screen and (max-width: 597px)  {
        
        >.c{
            >.c_inputs {
                >.c_input{ 
                width: 90%;
                justify-content: center;
                >.c_field_name{
                    display: none;;
                }
                >.c_esq_senha {
                    left: 6%;
            }
            }
            
            }
            >.c_logo {
                width: 49vw;
            }
          
        }
      
    }
`
export default LoginStyled;