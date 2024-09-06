
import { ThemeProvider } from "styled-components";
import { ListViewStyled, PropsStyled } from "./ListViewStyled";

type Props = {
  data: Record<string, any>[];
  fieldNameText?: string;
  fieldNameIcon?: string;
  type?: string;
  iconUrl?: string;
  key: string;
  number_field?: string;
} & PropsStyled;

const ListView = ({ data, type = 'marker', number_field = "", key, fieldNameText = 'text', fieldNameIcon = "icon", iconUrl, styleProps = { width: '170px' } }: Props) => {
  var c1 = () => <> </>;
  var c2 = (x: any) => <> {x}</>;

  if (type === 'icon') {
    c1 = () => <div className="c_img"> <img src={iconUrl} alt="" />   </div>
    c2 = (x: any) => <div className="c_1"> {x}</div>;
  }
  return (
    <ThemeProvider theme={{ type: type }}>
      <ListViewStyled styleProps={styleProps} >
        <ul>
          {data.map((item) => (
            <li key={item[key]} >
              {c1()}
              {item[number_field] && <div className="c_l">{item[number_field]} </div>}
              {item[fieldNameText] && c2(item[fieldNameText])}
            </li>
          ))}
        </ul>
      </ListViewStyled>
    </ThemeProvider>
  )

}


export default ListView;