import styled from 'styled-components';


interface SelectedProps {
    pressed: number;
    flexDirection?: 'row' | 'column';
    width?: string | number;
    justifyContent?: 'center' | 'flex-start';
    marginLeft?: string | number
}


const BoxSelectorStyled = styled.div<SelectedProps>`
    background: #FFFFFF;
    
    border-radius: 3px;
    max-width: ${({ width = 100 + '%' }) => width};
    font-family: 'Lato Bold';
    color: #6D7174;
    cursor: pointer;
 
    .container {
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: ${({ flexDirection = "column" }) => flexDirection};
        >.c{
        height: 35px;
        border-radius: 3px;
        text-align: center;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: ${({ justifyContent = "center" }) => justifyContent};
        >p{
        ${({ marginLeft }) => marginLeft ? ' margin-left:' + marginLeft : ''}
        
       }
    }
    >.c${({ pressed }) => pressed} {
        background: #212121;
        color:#FFFFFF; 
     
    }
   
    }

    @media only screen and (max-width: 480px) {
        >.container   >.c >p{
        ${({ marginLeft }) => marginLeft ? ' margin-left:15px' : ''}
        
       }
       
    }
    @media only screen and (max-width: 643px) {
         .container {
          
            flex-direction: column;
         }
        
    }
    


`

export default BoxSelectorStyled;