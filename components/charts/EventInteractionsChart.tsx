import React from 'react';
import Chart, {
    ArgumentAxis,
    CommonSeriesSettings,
    Legend,
    Series,
    Tooltip,
    ValueAxis,
    Label,
} from 'devextreme-react/chart';
import { useQuery } from '@apollo/client';
import { GET_INTERACTIONS_PER_EVENT_TAG } from '@/graphql/client/interactions';
import { Loading } from '../ui/Loading';
import { Export } from 'devextreme-react/cjs/polar-chart';
import { toast } from 'react-toastify';

const EXPORT_FILE_NAME = "Interacciones-Eventos"
let fileName
const makeInteractionsArray = (data, startDate, endDate) => {
    return [
        {
            tag: "Academico",
            comments: data.academico.comments,
            attendees: data.academico.attendees,
            startDate: startDate,
            endDate: endDate,
        },
        {
            tag: "Cultural",
            comments: data.cultural.comments,
            attendees: data.cultural.attendees,
            startDate: startDate,
            endDate: endDate,
        },
        {
            tag: "Deportivo",
            comments: data.deportivo.comments,
            attendees: data.deportivo.attendees,
            startDate: startDate,
            endDate: endDate,
        },
    ]
}

const findMaxNumber = (data) => {
    const numberArray = new Array<number>()
    data.forEach(element => {
        numberArray.push(element.comments)
        numberArray.push(element.attendees)
    });
    return Math.max(...numberArray)
}

const calculateTicks = (data) => {
    const max = findMaxNumber(data)
    let ticks = Math.ceil(max * 0.1)
    return ticks
}


const customizeTooltip = (pointInfo) => ({
    html: `<div><div class="tooltip-header">${pointInfo.argumentText
        }</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName
        }</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText
        }</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName
        }</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText
        }`,
});

export function EventInteractionsChart({ startDate, endDate }: { startDate: string, endDate: string }) {
    const { data: interactionsData, loading } = useQuery(GET_INTERACTIONS_PER_EVENT_TAG, {
        variables: { startDate, endDate }
    })
    if (startDate === '' || endDate === '')
        return (<></>)
    if (loading) return (<Loading />)
    const interactionsArray = makeInteractionsArray(interactionsData.interactionsPerEventType,
        startDate, endDate)
    const ticks = calculateTicks(interactionsArray)
    const onExport = async () => {
        fileName = `${EXPORT_FILE_NAME}`
            + `_${new Date(Date.now()).toLocaleDateString()
                .replaceAll('/', '_')}`
            + `_${new Date(Date.now()).toLocaleTimeString()
                .replaceAll(':', '_')}`
        const body = {
            fileName: fileName,
            header: [
                { id: 'tag', title: 'Tipo de evento' },
                { id: 'attendees', title: 'Asitencias' },
                { id: 'comments', title: 'Comentarios' },
                { id: 'startDate', title: 'Desde' },
                { id: 'endDate', title: 'Hasta' },
            ],
            data: interactionsArray,
        }
        const res = await fetch('/api/writeCsv', {
            method: 'POST',
            body: JSON.stringify(body)
        })
        if (res.status == 500) {
            toast.error("Algo salió mal")
            return
        }
        const resBody = res.json()
        console.log(resBody)
    }


    return (
        <>
            <Chart
                title="Interacciones por tipo de evento"
                dataSource={interactionsArray}
                palette="Harmony Light"
                id="chart"
            >
                <CommonSeriesSettings argumentField="tag" />
                <Series
                    name="Comentarios"
                    valueField="comments"
                    axis="frequency"
                    type="bar"
                    color="#026937"
                />
                <Series
                    name="Asistentes"
                    valueField="attendees"
                    axis="frequency"
                    type="bar"
                    color="#43B649"
                />

                <ArgumentAxis>
                    <Label overlappingBehavior="stagger" />
                </ArgumentAxis>

                <ValueAxis title="Frecuencia" name="frequency" position="left" tickInterval={ticks} />

                <Tooltip enabled={true} shared={true} customizeTooltip={customizeTooltip} />

                <Legend verticalAlignment="top" horizontalAlignment="center" />
                <Export enabled={true} formats={['JPEG', 'PDF', 'PNG']} />
            </Chart >
            <a
                // download href={`./${fileName}`}
                className='ButtonCard'
                onClick={onExport}>
                Exportar CSV
            </a>
        </>
    );
}
