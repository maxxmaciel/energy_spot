import styled from "styled-components";


export type PropsStyled = {
  styleProps?: { width: string };
}

export const ListViewStyled = styled.div<PropsStyled>`
list-style-position: inside;
    color: #fff;
    >ul{
    display: flex;
    flex-wrap: wrap; 
    justify-content: flex-start;

    
        >li{
          width: ${props => props?.styleProps?.width};
          list-style: ${props => props.theme.type !== 'marker' ? 'none' : 'unset'};
          >.c_l{
            float: left;
            color: rgb(254, 219, 71);
            margin-right: 13px;
            font-weight: bold;
          }
          
          >.c_1{
            float: left;
            max-width: 80%;
          }
          >.c_img {
            float: left;
            height: 19px;
            width:19px;
            margin-right: 16px;
            >img {
              max-height: 100%;
              max-width: 100%;
            }
          }
        }
    }
`