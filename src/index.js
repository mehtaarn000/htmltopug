import { readFileSync, writeFileSync } from "fs"
import fetch from "node-fetch"

const url = "https://us-central1-website-html-to-pug.cloudfunctions.net/convertHtmlToPug"

export class HtmlConverter {

    async convertHtmlFile(filename) {
        const htmlData = readFileSync(filename, "utf8")
        const pugData = await this.convertHtml(htmlData)
        return pugData
    }
    
    async convertAndWriteHtmlFile(filename, outfile) {
        const htmlData = readFileSync(filename, "utf8")
        const pugData = await this.convertHtml(htmlData)
        writeFileSync(outfile, pugData)
    }
    
    async convertHtml(htmlData) {
        const timestamp = Date.now();
        const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({"timestamp": timestamp, "htmlData":htmlData}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })

        const users = await response.json()
        return users["pugData"].toString()
    }
    
}
