import { GridRowClassNameParams } from '@mui/x-data-grid'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useMemo, useRef, useState } from "react"
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { v4 as uuidv4 } from 'uuid'
import { ResponseSuccess } from "../../@types/types"
import { axiosGet } from '../../Ajax'
import ComboBox from '../../components/ComboBox/ComboBox'
import { DateRange, ExampleCustomInput } from '../../components/DatePickerC/DatePickerC'
import Graphic from "../../components/Graphic/Graphic"
import Grid from "../../components/Grid/Grid"
import { GridColsDef } from '../../components/Grid/GridColsDef'
import { Fields } from "../../components/GridProduto/GridProdutos"
import Header from "../../components/Header/Header"
import ListView from "../../components/ListView/ListView"
import WindowComponent from "../../components/WindowComponent/WindowComponent"
import useFetchData from "../../components/useFetchData"
import logo from "../../images/Logo1.png"
import SpotsAtivosLogo from "../../images/bananas_advertisement_speaker.png"
import iconCalendar from "../../images/bananas_calendar.png"
import DislikeLogo from "../../images/bananas_dislike.png"
import HealthLogo from "../../images/bananas_health.png"
import PlaylistAtivasLogo from "../../images/bananas_playlist.png"
import AtividadeLojasLogo from "../../images/icon3.png"
import { dev, std } from '../../std'
import { ExtractReportStyled } from "../ExtractReport/ExtractReportStyled"

registerLocale('pt-BR', ptBR);



const commonProps = {
  backgroundColorC: "rgb(57, 57, 57)",
  colorTitle: "rgb(254, 219, 71)",
  backgroundColorTitle: "rgb(57, 57, 57)"
};

interface ResponseData extends ResponseSuccess {
  data: Fields[];
}

interface SpotData {
  MusicsLike: ResponseDataP | null;
  MusicsDislike: ResponseDataP | null;
  LojasLike: ResponseDataP | null;
  LojasDislike: ResponseDataP | null;
  BananasSpotsAtivos: ResponseDataP | null;
  BananasPlaylistAtivas: ResponseDataP | null;
}


export interface ResponseDataP extends ResponseSuccess {
  data: Record<string, any>[];
  error: string | null;
  foundRows: number | null;
  message: string | null;
  metaData: string | null;
}


type Props = {
  Clients: any;
}
type EnsureDataGridProps = {
  startDate: Date | null,
  endDate: Date | null,
  codCliente: number | null,
}


const EnsureDataGrid = ({ startDate, endDate, codCliente }: EnsureDataGridProps) => {
  const [store, setStore] = useState<Fields[]>([]);
  dev.log("EnsureDataGrid")
  const cols = useMemo(() => {
    return new GridColsDef({
      default: {
        width: 100,
        align: 'left',
        headerAlign: 'left',
      },
      items: [
        {
          field: 'NmLoja',
          headerName: 'Loja',
          width: 300,
        },
        {
          field: 'StatusDaMaquina',
          headerName: 'Status',
        },
        {
          field: 'UltimoVezOnline',
          headerName: 'Último Acesso',
          width: 180,
        },
        {
          field: 'MediaFormata',
          headerName: 'Média de Horas Diárias',
          width: 180,
        },
      ],
    });
  }, []);

  const dataGrid = useFetchData<ResponseData>(
    `/Bi/BananasAtividadeNasLojas.vtt?action=load&type=grid&cod_cliente=${codCliente}
    ${startDate ? '&date_before=' + std.formatDate(startDate) : ''}
    ${endDate ? '&date_after=' + std.formatDate(endDate) : ''}`,
  );

  const transformedData = useMemo(() => {
    if (dataGrid?.data?.data) {
      return dataGrid.data.data.map(row => ({
        id: (row as { id?: string | number }).id || uuidv4(),
        ...row
      }));
    }
    return [];
  }, [dataGrid?.data?.data]);

  const getRowClassName = (params: GridRowClassNameParams) => {
    const status = params.row['StatusDaMaquina'];
    if (status === 'OnLine') {
      return 'green-row';
    } else if (status === 'OffLine') {
      return 'red-row';
    } else {
      return '';
    }
  };

  const commonPropsGrid = useMemo(() => ({
    columns: cols.getItems(),
    setStore: setStore,
    pageSize: 7,
    isCellEditable: false,
    shouldExport: false,
    columnVisibilityModel: { id: false },
    getRowClassName: getRowClassName
  }), [cols]);

  return (
    <>
      {transformedData.length > 0 && (
        <Grid rows={transformedData} {...commonPropsGrid} />
      )}
      {(dataGrid.loading || dataGrid.error) && (
        <Grid rows={[]} {...commonPropsGrid} />
      )}
    </>
  );
}



const ExtractReport = ({ Clients }: Props) => {



  const currentTime = new Date();
  const tomorrow = new Date(currentTime.getTime() + (24 * 60 * 60 * 1000))
  const thirtyDaysAgo: Date = new Date(currentTime.getTime() - (30 * 24 * 60 * 60 * 1000));
  const range = new DateRange(thirtyDaysAgo, tomorrow);
  const [dateRange, setDateRange] = useState<DateRange>(range);
  dev.log("ExtractReport")
  const [codCliente, setCodCliente] = useState(Clients[0].CodCliente);

  const [spotData, setSpotData] = useState<SpotData>({
    MusicsLike: null,
    MusicsDislike: null,
    LojasLike: null,
    LojasDislike: null,
    BananasSpotsAtivos: null,
    BananasPlaylistAtivas: null
  });


  // const [startDate, endDate] = dateRange;
  const startDate = dateRange.start;
  const endDate = dateRange.end;
  const [calendarClosed, setCalendarClosed] = useState(false);

  const handleCalendarClose = () => {
    setCalendarClosed(true);
  };


  useEffect(() => {
    const fetchDataSpots = async () => {
      try {
        var EnsureEndDate;
        if (endDate) {
          EnsureEndDate = new Date(endDate.getTime() + (24 * 60 * 60 * 1000));
        } else {
          EnsureEndDate = tomorrow;
        }

        const config = {
          action: 'load',
          type: 'grid',
          cod_cliente: codCliente,
          date_before: std.formatDate(startDate),
          date_after: std.formatDate(EnsureEndDate),
        }

        const promises = [
          axiosGet(`/Bi/BananasMusicasLike.vtt`, config),
          axiosGet(`/Bi/BananasMusicasDislike.vtt`, config),
          axiosGet(`/Bi/BananasLojasLike.vtt`, config),
          axiosGet(`/Bi/BananasLojasDislike.vtt`, config),
          axiosGet(`/Bi/BananasSpotsAtivos.vtt`, config),
          axiosGet(`/Bi/BananasPlaylistAtivas.vtt`, config)
        ];

        const [
          MusicsLikeData,
          MusicsDislikeData,
          LojasLikeData,
          LojasDislikeData,
          BananasSpotsAtivosData,
          BananasPlaylistAtivasData
        ] = await Promise.all(promises);

        setSpotData({
          MusicsLike: MusicsLikeData.data,
          MusicsDislike: MusicsDislikeData.data,
          LojasLike: LojasLikeData.data,
          LojasDislike: LojasDislikeData.data,
          BananasSpotsAtivos: BananasSpotsAtivosData.data,
          BananasPlaylistAtivas: BananasPlaylistAtivasData.data
        });
        setCalendarClosed(false);
      } catch (error) {
        console.error("Error fetching spots data:", error);
      }
    };

    fetchDataSpots();
  }, [calendarClosed, codCliente]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const datePickerRef = useRef<DatePicker>(null);

  const handleClickDiv = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const [selectedValue, setSelectedValue] = useState('');
  dev.log(selectedValue)

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    const codC = Clients.find((Cliente: { Cliente: string }) => Cliente.Cliente === value);
    if (codC) {
      dev.log(codC.CodCliente);
      setCodCliente(codC.CodCliente);
    } else {
      dev.log("Cliente não encontrado");
    }
  };


  return (
    <ExtractReportStyled>
      <Header logo={logo} />
      <div className="c">
        <div className="h">
          <div className="c3">
            <button className="i" style={{ display: 'none' }}>
              Extrair Relatorio Completo
            </button>
          </div>
          <div className="c4">
            <p>
              Cliente
            </p>
          </div>
          <ComboBox options={Clients} onSelect={handleSelect} field='Cliente' />
          <div className="c3">
            <div className="c4">
              <p>
                Período
              </p>
            </div>
            <DatePicker
              ref={datePickerRef}
              locale="pt-BR"
              className="custom-datepicker"
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              maxDate={new Date()}
              dateFormat="dd.MM.yy"
              withPortal
              customInput={<ExampleCustomInput ref={buttonRef} value="" onClick={() => { }} />}
              onCalendarClose={handleCalendarClose}
              onChange={(update) => {
                if (Array.isArray(update)) {
                  const [start, end] = update;
                  if (start != null) {

                    var range = new DateRange(start, end);
                    setDateRange(range);
                  }
                }

              }}

              portalId="c_calendar_bananas"
            />

            <div className="c4" onClick={handleClickDiv}>
              <img src={iconCalendar} alt="" />
            </div>
          </div>
        </div>
        <div className="c1">
          <WindowComponent.Root title="Playlists Ativas" logo={PlaylistAtivasLogo} maxHeight={115} {...commonProps}>
            {
              spotData?.BananasPlaylistAtivas?.data && (
                <ListView data={spotData.BananasPlaylistAtivas.data} fieldNameText='NmPlaylist' key='Playlist' />
              )
            }
          </WindowComponent.Root>
          <WindowComponent.Root title="Spots Ativos" logo={SpotsAtivosLogo} maxHeight={115} {...commonProps}>
            {
              spotData?.BananasSpotsAtivos?.data && (
                <ListView data={spotData.BananasSpotsAtivos.data} fieldNameText="Cliente" key='Spot' />
              )
            }
          </WindowComponent.Root>
        </div>
        <div className="c2">
          <WindowComponent.Root title="Atividade das Lojas" logo={AtividadeLojasLogo} {...commonProps} >
            <EnsureDataGrid codCliente={codCliente} endDate={endDate} startDate={startDate} />
          </WindowComponent.Root>
          <WindowComponent.Root title="Lojas que mais deram curtidas" logo={HealthLogo} {...commonProps} >
            {
              spotData?.LojasLike?.data && (
                <Graphic show={true} data={spotData.LojasLike.data} dataKeyBar='Total' dataKeyXAxis='NmLoja' />
              )
            }
          </WindowComponent.Root>
          <WindowComponent.Root title="Lojas que mais deram descurtidas" logo={DislikeLogo} {...commonProps} >
            {
              spotData?.LojasDislike?.data && (
                <Graphic show={true} data={spotData.LojasDislike.data} dataKeyBar='Total' dataKeyXAxis='NmLoja' />
              )
            }
          </WindowComponent.Root>

        </div>
        <div className="c1">
          <WindowComponent.Root title="Músicas mais curtidas" logo={HealthLogo} maxHeight={115} {...commonProps} >
            {
              spotData?.MusicsLike?.data && (
                <ListView data={spotData.MusicsLike?.data} key='CodLike' fieldNameText="NmMedia" number_field='Total' type='icon' iconUrl={HealthLogo} styleProps={{ width: '100%' }} />
              )
            }
          </WindowComponent.Root>
          <WindowComponent.Root title="Músicas menos curtidas" logo={DislikeLogo} maxHeight={115} {...commonProps}  >
            {
              spotData?.MusicsDislike?.data && (
                <ListView data={spotData.MusicsDislike?.data} key='CodLike' fieldNameText="NmMedia" number_field='Total' type='icon' iconUrl={DislikeLogo} styleProps={{ width: '100%' }} />
              )
            }
          </WindowComponent.Root>
        </div>
      </div>
    </ExtractReportStyled>
  )
}

export default ExtractReport;
