import WindowComponent from "../../WindowComponent/WindowComponent";
import GridDiffViewerStyled from "./GridDiffViewerStyled";

type Props = {
    previousGrid: { [key: number | string]: any };
    currentGrid: { [key: number | string]: any };
}


const GridDiffViewer = ({ previousGrid = [], currentGrid = [] }: Props) => {

    /*  if (Object.keys(previousGrid).length === 0 || Object.keys(currentGrid).length === 0) {
         return <></>
     } */
    const changes: { [key: number | string]: any } = [];

    for (let rowIndex in currentGrid) {
        let row = currentGrid[rowIndex];

        for (let colIndex in row) {
            let currentValue = row[colIndex]
            const previousValue = previousGrid?.[rowIndex]?.[colIndex];

            if (currentValue !== previousValue) {
                const change = {
                    rowIndex,
                    colIndex,
                    previousValue,
                    currentValue
                };
                changes.push(change);
            }
        }

    }
    console.log(changes);
    return (
        <>
            {
                changes.length !== 0 &&

                <WindowComponent.Root title='ALTERAÇÕES' width="fit-content" maxHeight={200}>
                    <GridDiffViewerStyled >
                        <div>
                            {
                                changes.map((change: { [key: number | string]: any }, idx: number) => (

                                    <li key={idx}>
                                        Linha: {change.rowIndex}, &nbsp;
                                        Coluna: {change.colIndex},&nbsp;
                                        Valor Anterior: "{change.previousValue}",&nbsp;
                                        Valor Atual: "{change.currentValue}"&nbsp;
                                    </li>))
                            }
                        </div>
                    </GridDiffViewerStyled>
                </WindowComponent.Root>


            }
        </>
    )


}

export default GridDiffViewer;