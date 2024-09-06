import { Bar, BarChart, CartesianGrid, LabelList, Tooltip, XAxis, YAxis } from 'recharts';
import GraphicStyled from './GraphicStyled';

type Props = {
    show: boolean;
    dataKeyBar?: string;
    data: Record<string, any>[];
    dataKeyXAxis?: string;
    Alias?: string;
    height?: number;
}

type DataItem = {
    name: string;
    uv: number;
    pv: number;
    amt: number;
}

type State = {}


const textStyle = { fill: '#fff' };

const Graphic = ({ show, dataKeyBar = "uv", dataKeyXAxis = "name", data, Alias = "", height = 400 }: Props) => {
    // var demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';
    //width={2000}
    return (
        <>
            {
                data.length > 0 &&
                <GraphicStyled >
                    <div className="scrollable-container">
                        <BarChart
                            width={data.length * 100}
                            height={height}
                            data={data}
                            margin={{
                                top: 15,
                                right: 30,
                                left: 5,
                                bottom: 5
                            }}
                            barSize={70}
                        >
                            <CartesianGrid strokeDasharray="0" />
                            <XAxis
                                dataKey={dataKeyXAxis}
                                height={60}
                                tick={{ fill: '#fff', width: 100, fontSize: 12 }}
                                interval={0}
                            />
                            <YAxis tick={textStyle} />
                            <Tooltip />
                            {/*<Legend />*/}
                            <Bar dataKey={dataKeyBar}
                                fill="#fac355"
                                name={Alias}
                            >
                                <LabelList dataKey="uv" position='insideTop' fill="#000" />
                            </Bar>
                        </BarChart>
                    </div>
                </GraphicStyled>
            }


        </>
    )
}


export default Graphic;