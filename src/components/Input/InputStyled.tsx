import styled from 'styled-components';


interface Props {
    width?: number | string;
    height?: number | string;
}

const InputStyled = styled.div<Props>`  
    >input{
    width:   ${({ width = '396px' }) => width};
    height:  ${({ height = '47px' }) => height};
    background: rgb(255, 255, 255);
    border: 1px solid rgb(31, 45, 61) ;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    border-radius: 5px;
    outline: none;
    font-family: Lato;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
    padding-left: 13px;
    color: rgb(31, 45, 61) ;
   
}


@media only screen and (max-width: 597px)  {
    width: 90%;
        >input {
            width: 93%;
        }
    }

`

export default InputStyled;