import styled from 'styled-components';

interface Props {
  width?: number | string;
  show?: boolean;
  backgroundColorC?: string
  ColorTitle?: string
  maxHeight?: number
  HeightTitle?: number
  backgroundColorTitle?: string
}

const WindowComponentStyled = styled.div<Props>`
width:  ${({ width = "100%" }) => width};
height: auto;
display: ${({ show = true }) => show ? 'block' : 'none'} ;

  
>.c{
    margin: 25px 0px 0 0;
    border-radius: 3px 3px 0px 0px;
    min-height: 220px;
    background-color:  ${({ backgroundColorC = "#fff" }) => backgroundColorC};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  >.c_1{
    padding: 0 25px 25px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    >.c_1{
    overflow: hidden;
    text-overflow: ellipsis;
    }

    ${({ maxHeight = false }) => maxHeight ? 'overflow:  hidden scroll;' : ''}
    max-height: ${({ maxHeight = false }) => maxHeight ? maxHeight + 'px' : ''} ;
    
    &::-webkit-scrollbar-thumb {
 
    border: 4px solid rgb(57, 57, 57);
}

  } 
    > .t {
    height:  ${({ HeightTitle = 44 }) => HeightTitle + "px"}; //44 vtt
    background-color:  ${({ backgroundColorTitle = "rgb(31, 45, 61) " }) => backgroundColorTitle};
    border-radius: 3px 3px 0px 0px;
    font-size: 16px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color:  ${({ ColorTitle = "#FFFFFF" }) => ColorTitle};
    padding: 0 25px;
    user-select: none;
    //text-transform: uppercase;
    font-family: "Lato Bold";
    gap: 12px;
    .c_logo{
      height: 40%;
      img{
        max-width: 100%;
        max-height: 100%;
      }
    }
    }
}
@media only screen and (max-width: 480px) {
  >.c{
    margin: 15px 0 0 0;
       >.c_1{
        padding: 0 15px 15px;
        gap: 15px;
        }
       > .t {
          padding: 0 15px;
          user-select: none;
         }
      }   
    }

`

export default WindowComponentStyled;