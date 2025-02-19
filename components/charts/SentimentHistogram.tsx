import {
    Chart, ChartTypes, Series, CommonSeriesSettings, Label, Format, Legend, Export,
    ValueAxis,
} from 'devextreme-react/chart';
import React from 'react';
import { useQuery } from '@apollo/client';
import { Loading } from '../ui/Loading';
import { GET_COMMENT_SENTIMENT_COUNT } from '@/graphql/client/commentSentiment';
import { createObjectCsvStringifier } from 'csv-writer';
const EXPORT_FILE_NAME = "Histograma-Sentimientos"
let fileName
function ExportCsv(data) {
    return async () => {
        fileName = getFileNameAtNow();
        const csvWriter = createObjectCsvStringifier({
            header: csvHeaderArray
        });
        const csvData = csvWriter.stringifyRecords(data);
        downloadCsvFile(csvWriter, csvData);
    };
}

function downloadCsvFile(csvWriter, csvData: string) {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/csv;charset=utf-8,${csvWriter.getHeaderString()}${csvData}`);
    element.setAttribute('download', `${fileName}.csv`);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
const csvHeaderArray = [
    { id: 'negative', title: 'Comentarios negativos' },
    { id: 'neutral', title: 'Comentarios neutros' },
    { id: 'positive', title: 'Comentarios positivos' },
];
function getFileNameAtNow() {
    return `${EXPORT_FILE_NAME}`
        + `_${new Date(Date.now()).toLocaleDateString()
            .replaceAll('/', '_')}`
        + `_${new Date(Date.now()).toLocaleTimeString()
            .replaceAll(':', '_')}`
}

const makeSentimentArray = (data) => {
    return [
        {
            sentiment: "",
            negative: data.negative,
            neutral: data.neutral,
            positive: data.positive
        }
    ]
}
const calculateTicks = (data) => {
    const max = findMaxNumber(data)
    let ticks = Math.ceil(max * 0.1)
    return ticks
}
const findMaxNumber = (data) => {
    const numberArray = new Array<number>()
    data.forEach(element => {
        numberArray.push(element.count)
    });
    return Math.max(...numberArray)
}
function onPointClick(e: ChartTypes.PointClickEvent) {
    e.target.select();
}
export function SentimentHistogram() {
    const { data: sentimentData, loading } = useQuery(GET_COMMENT_SENTIMENT_COUNT)
    console.log("Sentiment count", sentimentData)
    if (loading) return (<Loading />)
    const sentimentArray = makeSentimentArray(sentimentData.commentSentimentCount)
    const ticks = calculateTicks(sentimentArray)
    const onExport = ExportCsv(sentimentArray)
    return (
        <>
            <Chart id="chart"
                title="Comentarios clasificados por sentimiento"
                dataSource={sentimentArray}
                onPointClick={onPointClick}
            >
                <CommonSeriesSettings
                    argumentField="sentiment"
                    type="bar"
                    hoverMode="allArgumentPoints"
                    selectionMode="allArgumentPoints"
                >
                    <Label visible={true}>
                        <Format type="fixedPoint" precision={0} />
                    </Label>
                </CommonSeriesSettings>
                <Series
                    valueField="negative"
                    color="#026937"
                    name="Negativo"
                />
                <Series
                    valueField="neutral"
                    color="#43B649"
                    name="Neutral"
                />
                <Series
                    valueField="positive"
                    color="#0E7774"
                    name="Positivo"
                />
                <ValueAxis title="Frecuencia" name="frequency" position="left" tickInterval={ticks + 1} />
                <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
                <Export enabled={true} formats={['JPEG', 'PDF', 'PNG']} />
            </Chart>
            <button
                className='ButtonCard'
                onClick={onExport}>
                Exportar CSV
            </button>
        </>
    )
}
