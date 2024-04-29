import React from 'react';
import {
  PolarChart,
  CommonSeriesSettings,
  Series,
  Export,
  Tooltip,
} from 'devextreme-react/polar-chart';
import { useQuery } from '@apollo/client';
import { GET_SENTIMENT_CONFIDENCE_AVERAGE } from '@/graphql/client/commentSentiment';
import { Loading } from '../ui/Loading';

const sentimentSources = [
  { value: 'confidence', name: 'Confianza', color: "#0E7774" }
];

function makeConfidenceArray(data) {
  return [
    {
      arg: "Positivo",
      confidence: data.positive
    },
    {
      arg: "Negativo",
      confidence: data.negative
    },
    {
      arg: "Neutral",
      confidence: data.neutral
    },
  ]
}

export function SentimentAnalysisChart() {
  const { data, loading, error } = useQuery(GET_SENTIMENT_CONFIDENCE_AVERAGE)
  if (loading) return <Loading />
  const confidenceArray = makeConfidenceArray(data.commentSentimentConfidenceAverage)
  console.log(data)
  return (
    <PolarChart
      id="chart"
      dataSource={confidenceArray}
      useSpiderWeb={true}
      title="Porcentage de confianza media en la clasificación de sentimientos"
    >
      <CommonSeriesSettings type="line" />
      {
        sentimentSources.map((item) => <Series
          key={item.value}
          valueField={item.value}
          name={item.name} 
          color={item.color}
          />)
      }
      <Export enabled={true} />
      <Tooltip enabled={true} />
    </PolarChart>
  );
}

