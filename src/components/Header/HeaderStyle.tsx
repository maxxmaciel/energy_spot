import styled from 'styled-components';


const HeaderStyled = styled.header`
header {
    position: relative;
    top: 0;
    width: 100%;
   
    >.c1{
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0px 25px;
    justify-content: space-between;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 18px inset;
    background: rgb(235, 238, 240);
 

    >.c1 {
        //min-width: 206px;
        user-select: none;
        height: 42px;
        background: #FFFFFF;
        border: 1px solid #212121;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
         display: flex;
         align-items: center;
         justify-content: space-around;
        cursor: pointer;
        >.c {
            height: 30px;
            display: flex;
            padding: 0px 10px;
            gap: 10px;
            width: max-content;
            align-items: center;
            img{
                max-width: 100%;
                max-height: 100%;
                cursor: pointer;
            }
        }
        >.c1 {
            /*min-width: 65%;*/
            font-size: 14px;
            >p{
            font-family: 'Lato Black';
            width: 100%;
       

         }
        }
        >.c2 {
            >.c1 { 
            width: 30px;
          }
            >.c2 {
            width: 30px;
          }
        }       
    }
    .logo{
        height: 52px;
        cursor: pointer;
    }
    }
   
      ul {
        display: flex;
        gap: 17px;
         li {
            font-family: 'Lato Bold';
            font-size: 16px;
            list-style-type: none;
            color: #fff;
            cursor: pointer;
        }
     }
     
     @media only screen and (max-width:480px) {
    > .c1 {
    padding: 0 15px;
    > .c1 >   .c2 > .c{
        width: 22px;
    }

    .logo {
      height: 40px;
    }

    }  
    
    > .c2 {
    padding: 0 15px;
    }  

   ul li {

    font-size: 14px;
}
/*
        > .c1 {
            height: 80px;
         > .c1 {
             max-width: 206px;
             height: 34px;
     }
     .logo {
         height: 40px;
        }
            
}}*/
}
}
`
export default HeaderStyled;