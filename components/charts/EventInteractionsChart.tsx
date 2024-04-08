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


const makeInteractionsArray = (data) => {
    return [
        {
            tag: "Academico",
            comments: data.academico.comments,
            attendees: data.academico.attendees
        },
        {
            tag: "Cultural",
            comments: data.cultural.comments,
            attendees: data.cultural.attendees
        },
        {
            tag: "Deportivo",
            comments: data.deportivo.comments,
            attendees: data.deportivo.attendees
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

const customizeTooltip = (pointInfo) => ({
    html: `<div><div class="tooltip-header">${pointInfo.argumentText
        }</div><div class="tooltip-body"><div class="series-name"><span class='top-series-name'>${pointInfo.points[0].seriesName
        }</span>: </div><div class="value-text"><span class='top-series-value'>${pointInfo.points[0].valueText
        }</span></div><div class="series-name"><span class='bottom-series-name'>${pointInfo.points[1].seriesName
        }</span>: </div><div class="value-text"><span class='bottom-series-value'>${pointInfo.points[1].valueText
        }`,
});

export function EventInteractionsChart() {
    const { data: interactionsData, loading } = useQuery(GET_INTERACTIONS_PER_EVENT_TAG)
    if (loading) return (<Loading />)
    const interactionsArray = makeInteractionsArray(interactionsData.interactionsPerEventType)
    const ticks = findMaxNumber(interactionsArray) / 10
    return (
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
        </Chart>
    );
}
