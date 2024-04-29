import {
    Chart, ChartTypes, Series, CommonSeriesSettings, Label, Format, Legend, Export,
    ValueAxis,
} from 'devextreme-react/chart';
import { grossProductData } from './data.ts';
import React from 'react';
import { useQuery } from '@apollo/client';
import { Loading } from '../ui/Loading';
import { GET_COMMENT_SENTIMENT_COUNT } from '@/graphql/client/commentSentiment';


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
    return (
        <Chart id="chart"
            title="Comentarios clasificados por sentimiento"
            dataSource={sentimentArray}
            onPointClick={onPointClick}
        >
            <CommonSeriesSettings
                argumentField="sentiment"
                type="bar"
                hoverMode="allArgumentPoints"
                // selectionMode="allArgumentPoints"
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
            <ValueAxis title="Frecuencia" name="frequency" position="left" tickInterval={ticks+1} />
            <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
            <Export enabled={true} />
        </Chart>
    )
}
