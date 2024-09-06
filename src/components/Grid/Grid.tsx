import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { Theme, ThemeProvider, alpha, createTheme, styled } from '@mui/material/styles';
import {
  DataGrid, GridApi, GridCellParams, GridColDef, GridColumnVisibilityModel, GridCsvExportMenuItem,
  GridCsvExportOptions,
  GridExportMenuItemProps, GridRowClassNameParams,
  GridRowIdGetter,
  GridToolbarContainer,
  GridToolbarContainerProps,
  GridToolbarExportContainer,
  GridValidRowModel,
  gridClasses,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
  ptBR,
  useGridApiContext
} from '@mui/x-data-grid';
import * as React from 'react';
import * as XLSX from 'xlsx';
import { nullOrUndefined } from '../../@types/types';
import { GridStyled } from './GridStyled';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: '#EBEEF0',
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
          theme.palette.action.selectedOpacity +
          theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));


const theme = createTheme(
  {
    palette: {
      mode: 'dark',
      primary: { main: '#000' },
    },
  },
  ptBR,
);

const getJson = (apiRef: React.MutableRefObject<GridApi>) => {
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);
  const data = filteredSortedRowIds.map((id) => {
    const row: Record<string, any> = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  return JSON.stringify(data, null, 2);
};

const exportBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
};


function JsonExportMenuItem(props: GridExportMenuItemProps<{}>) {
  const apiRef = useGridApiContext();

  const { hideMenu } = props;

  return (
    <MenuItem
      onClick={() => {
        const jsonString = getJson(apiRef);
        const blob = new Blob([jsonString], {
          type: 'text/json',
        });
        exportBlob(blob, 'DataGrid.json');
        hideMenu?.();
      }}
    >
      Baixar como JSON
    </MenuItem>
  );
}
function ExcelExportMenuItem(props: GridExportMenuItemProps<{}>) {
  const apiRef = useGridApiContext();

  const { hideMenu } = props;

  return (
    <MenuItem
      onClick={(e) => {
        console.log(e)
        console.log(props)
        const jsonString = getJson(apiRef);
        const worksheet = XLSX.utils.json_to_sheet(JSON.parse(jsonString));
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        saveExcelFile(excelBuffer, 'DataGrid.xlsx');
        hideMenu?.();
      }}
    >
      Baixar como Excel
    </MenuItem>
  );
}

const saveExcelFile = (buffer: Uint8Array, filename: string) => {
  const data = new Blob([buffer], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(data);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(url);
};

const csvOptions: GridCsvExportOptions = { delimiter: ';' };

const CustomToolbar = (props: GridToolbarContainerProps) =>
  <GridToolbarContainer {...props}>
    <GridToolbarExportContainer >
      <GridCsvExportMenuItem options={csvOptions} />
      <JsonExportMenuItem />
      <ExcelExportMenuItem />
    </GridToolbarExportContainer>
  </GridToolbarContainer>


type Props = {
  rows: Array<object>; // obrigátorio
  columns: GridColDef[]; // obrigátorio
  height?: number; // opcional
  width?: number; // opcional
  pageSize?: number; // opcional
  shouldExport?: boolean; //
  isCellEditable?: boolean;
  columnVisibilityModel?: GridColumnVisibilityModel;
  getRowId?: GridRowIdGetter<GridValidRowModel>;
  setStore?: (data: Fields[]) => void;
  getRowClassName?: (parm: GridRowClassNameParams) => string;
  themeProps?: Theme;
}

interface Fields /*extends Teste*/ {
  lastName: string | nullOrUndefined;
  firstName: string | nullOrUndefined;
  age: number | nullOrUndefined;
}



const Grid: React.FC<Props> = ({ themeProps, getRowId, rows, columns, height, width, pageSize, getRowClassName, setStore, isCellEditable = true, shouldExport = true, columnVisibilityModel = {} }) => {


  const showForm = (e: Object) => {
    console.log(e);
    /*setStore(data);*/
  }

  const defaultGetRowId: GridRowIdGetter<GridValidRowModel> = (row) => row.id;
  return (
    <ThemeProvider theme={themeProps || theme} >
      <GridStyled >
        <Box sx={{ width: '100%' }}>
          <StripedDataGrid
            rows={rows}
            getRowId={getRowId || defaultGetRowId}
            isCellEditable={(params: GridCellParams) => isCellEditable}
            columns={columns}
            onCellDoubleClick={showForm}
            getRowClassName={getRowClassName}
            initialState={{
              columns: {
                columnVisibilityModel: columnVisibilityModel
              },
              pagination: {
                paginationModel: {
                  pageSize: pageSize || 10,
                },
              },
            }}
            slots={{
              toolbar: shouldExport ? CustomToolbar : undefined,
            }}

            pageSizeOptions={[10]}
            /*checkboxSelection={true}*/

            disableRowSelectionOnClick
            onStateChange={(event) => {
              setStore && setStore(event.rows.dataRowIdToModelLookup);
            }}

          />

        </Box>
      </GridStyled>
    </ThemeProvider>

  );
}

export default Grid;


