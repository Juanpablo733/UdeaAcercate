import { createObjectCsvWriter } from 'csv-writer';
import { NextApiRequest, NextApiResponse } from 'next';

const exportCsv = async (req: NextApiRequest, res: NextApiResponse) => {
    const body = JSON.parse(req.body)
    const interactionsArray = body.data
    const path = `public/${body.fileName}.csv`
    const csvWriter = createObjectCsvWriter({
        path: path,
        header: body.header
    })
    // console.log("Interactions Array:", interactionsArray)
    try {
        await csvWriter.writeRecords(interactionsArray)

        console.log("Csv written")
        res.appendHeader('Content-Type', 'application/octet-stream')
            .appendHeader('Content-Disposition', 'attachment')
        res.status(200).json({ url: path })
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ error: e })
    }

}

export default exportCsv