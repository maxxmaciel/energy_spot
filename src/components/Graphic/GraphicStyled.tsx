import styled from "styled-components";

const GraphicStyled = styled.div`

  overflow: scroll hidden;
  padding-top: 20px;
  background: rgb(67,67,67);

 

/*
::-webkit-scrollbar-thumb:vertical:active {
  background-color: #333; 
}

::-webkit-scrollbar-thumb:horizontal:active {
  background-color: #333; 
}
*/
/*
::-webkit-scrollbar-thumb:hover {
  background-color: #555; 
}*/
.scrollable-container {
  width: 100%;
}

.recharts-cartesian-grid-horizontal line {
  display: none;
}
.recharts-cartesian-grid-vertical line {
  display: none; 
}
    
`

export default GraphicStyled