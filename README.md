# htmltopug
Convert html (requires a network connection)

## Usage
You can convert an html string:
```js
import * as htmlconverter from "@mehtaarn000/pugtohtml"

const converter = new htmlconverter.HtmlConverter()
const htmlData = "<h1>Hello World!</h1>"

const pugData = await converter.convertHtml(htmlData)
console.log(pugData)
```

An html file:
```js
const pugData = await converter.convertHtmlFile("index.html")
console.log(pugData)
```

Or convert an html file and write it to a pug file:
```js
converter.convertAndWriteHtmlFile("index.html", "index.pug")
```