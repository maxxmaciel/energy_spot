import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GridRowClassNameParams } from "@mui/x-data-grid";
import { ResponseSuccess, nullOrUndefined } from "../../@types/types";
import { axiosGet } from "../../Ajax";
import aplicar from '../../images/aplicar.png';
import BoxSelector from "../BoxSelector/BoxSelector";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";
import { GridColsDef } from "../Grid/GridColsDef";
import GridDiffViewer from "../Grid/GridDiffViewer/GridDiffViewer";
import WindowComponent from "../WindowComponent/WindowComponent";
import GridProdutosStyled from "./GridProdutosStyled";

type Props = {
  show?: boolean
}

export interface Fields /*extends Teste*/ {
  lastName: string | nullOrUndefined;
  firstName: string | nullOrUndefined;
  age: number | nullOrUndefined;
}

const options = ["Todos os dias", "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

const GridProdutos = ({ show = true }: Props) => {

  const [data, setData] = useState<Fields[]>([]);
  const [storeOrigin, setStoreOrigin] = useState<{ [key: number | string]: any }>({});
  const [store, setStore] = useState<{ [key: number | string]: any }>({});
  console.log(store)
  const navigate = useNavigate();

  interface ResponseData extends ResponseSuccess {
    data: Fields[];
  }

  let cols = new GridColsDef(
    {
      default: {
        width: 100,
        editable: true
      },
      items: [
        {
          field: 'firstName',
          headerName: 'First name',

        },
        {
          field: 'lastName',
          headerName: 'Last name',

        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number', // input só irá aceitar number

        },/* 
          {
            field: 'fullName',
            headerName: 'Full name',
            description: 'Está coluna não é classificável',
            sortable: false,
            width: 160,
            valueGetter: (params: GridValueGetterParams) =>{
            return params.row.fullName = `${params.row.firstName || ''} ${params.row.lastName || ''}`
            }
            ,
          }, */
      ],

    }
  )
  useEffect(() => {
    async function fetchData() {
      try {
        const response: AxiosResponse<ResponseData> = await axiosGet('json/exampleGrid.json');
        if (response.data.success) {
          let data = response.data.data
          setData(data);
          const transformedObject = data.reduce((result, item) => {
            //result[item.id] = item;
            return result;
          }, {} as { [key: number]: Fields });
          setStoreOrigin(transformedObject)

        } else {
          navigate("/login.vtt");
        }
      } catch (error) {
        console.error(error);
        setData([]);
      }
    }
    fetchData();
  }, []);

  const [section, setSection] = useState("");
  const selected = (str: string) => {
    setSection(str);
  };

  var getRowClassName = (params: GridRowClassNameParams) => {
    return params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
  }

  //const previousGrid: Record<string, any>[]= data;
  //const currentGrid: Record<string, any>[]= store
  return (
    <div style={show ? { visibility: "visible" } : {
      visibility: "hidden",
      position: "absolute",
      top: "-100vh",
      width: "100px"
    }}>
      <WindowComponent.Root title="PRODUTOS" >
        <GridProdutosStyled>
          <BoxSelector options={options} selected={selected} flexDirection='row' justifyContent="center" optionChecked={0} />
        </GridProdutosStyled>
        <Grid
          getRowClassName={getRowClassName}
          rows={data}
          columns={cols.getItems()}
          setStore={setStore} />
        <Button text="APLICAR" icone={aplicar} />
      </WindowComponent.Root>

      <GridDiffViewer previousGrid={storeOrigin} currentGrid={store} />
    </div>
  )
}
//<GridDiffViewer originalGridData={data} currentGridData={store} />
export default GridProdutos;


