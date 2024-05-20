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
import { createObjectCsvStringifier } from 'csv-writer';

const sentimentSources = [
  { value: 'confidence', name: 'Confianza', color: "#0E7774" }
];
const EXPORT_FILE_NAME = "Sentimientos-Comentarios"
let fileName

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
  { id: 'arg', title: 'Sentimiento' },
  { id: 'confidence', title: 'Porcentaje de confianza' },
];
function getFileNameAtNow() {
  return `${EXPORT_FILE_NAME}`
    + `_${new Date(Date.now()).toLocaleDateString()
      .replaceAll('/', '_')}`
    + `_${new Date(Date.now()).toLocaleTimeString()
      .replaceAll(':', '_')}`
}
export function SentimentAnalysisChart() {
  const { data, loading, error } = useQuery(GET_SENTIMENT_CONFIDENCE_AVERAGE)
  if (loading) return <Loading />
  const confidenceArray = makeConfidenceArray(data.commentSentimentConfidenceAverage)
  const onExport = ExportCsv(confidenceArray)
  console.log(data)
  return (
    <>
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
        <Export enabled={true} formats={['JPEG', 'PDF', 'PNG']} />
        <Tooltip enabled={true} />
      </PolarChart>
      <button
        className='ButtonCard'
        onClick={onExport}>
        Exportar CSV
      </button>
    </>
  );
}

