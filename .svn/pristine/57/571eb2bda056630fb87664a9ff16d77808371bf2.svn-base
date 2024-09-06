import { ReactNode } from "react";
import styled from "styled-components";

type Props = {}

const GroupTextRoot = (props: Props) => {
  return (
    <div>GroupTextRoot</div>
  )
}

type GroupTextProps = {
  t_1: ReactNode;
  t_2: ReactNode;
  fontSize?: string;
}


const GroupText = ({ t_1, t_2, fontSize = "28px" }: GroupTextProps) => {
  return (
    <>
      <GroupTextStyled>
        <div className='c_1' style={{ marginTop: "10px", fontSize: fontSize }}>
          {t_1}
        </div>
        <div className='c_2'>
          {t_2}
        </div>
        <div className='c_3'>

        </div>
      </GroupTextStyled>
    </>
  )
}

export { GroupText };

const GroupTextStyled = styled.div`
.c_1 {
  font-family: "Lato";
  color: black;
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`