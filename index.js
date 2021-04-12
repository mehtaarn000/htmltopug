import { readFileSync, writeFileSync } from "fs"
import fetch from "node-fetch"

const url = "https://us-central1-website-html-to-pug.cloudfunctions.net/convertHtmlToPug"

export class HtmlConverter {

    /**
     * Convert an HTML file to a Pug string
     * @param {String} filename - The name of the file you want to convert
     * @returns {String} The converted Pug data
     */
    async convertHtmlFile(filename) {
        const htmlData = readFileSync(filename, "utf8")
        const pugData = await this.convertHtml(htmlData)
        return pugData
    }
    
    /**
     * Convert an HTML file and write the Pug data to another file
     * @param {String} filename - The name of the file you want to convert
     * @param {String} outfile - The name of the file you want to write the Pug data to 
     */
    async convertAndWriteHtmlFile(filename, outfile) {
        const htmlData = readFileSync(filename, "utf8")
        const pugData = await this.convertHtml(htmlData)
        writeFileSync(outfile, pugData)
    }
    
    /**
     * Convert an HTML string to a Pug string
     * @param {String} htmlData - The HTML data you want to convert 
     * @returns {String} The converted pug data
     */
    async convertHtml(htmlData) {
        const timestamp = Date.now();
        const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({"timestamp": timestamp, "htmlData": htmlData}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })

        const users = await response.json()
        return users["pugData"].toString()
    }
    
}
