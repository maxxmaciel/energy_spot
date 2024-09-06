import styled from "styled-components"

export const GridStyled = styled.div`
 // background: #fff;
 
  >.MuiBox-root {
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    
    .green-row{
      background-color: rgb(56,118,29) ;
      color:  #fff;
    }
    .green-row:hover{
      background-color:rgb(56,118,29)  ;
      color:  #fff;
    }
    .red-row {
      background-color: rgb(204,0,0) ;
      color:  #fff;
    }

    .red-row:hover{
      background-color:  rgb(204,0,0)  ;
      color:  #fff;
    }
  }
  
  @media only screen and (max-width: 480px) {
    
    }

 // background: #fff;
  //width: auto;
`

/* export const GridStyled:React.CSSProperties = {
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: '#fff',
    width: 'auto',
  } */