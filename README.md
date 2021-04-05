# pugtohtml
Convert pug to html (requires a network connection)

## Usage
You can convert an html string:
```
import * as htmlconverter from "@mehtaarn000/pugtohtml"

const converter = new htmlconverter.HtmlConverter()
const htmlData = "<h1>Hello World!</h1>"

const pugData = converter.convertHtml(htmlData)
console.log(pugData)
```

An html file:
```
const pugData = converter.convertHtmlFile("index.html")
console.log(pugData)
```

Or convert an html file and write it to a pug file:
```
converter.convertAndWriteHtmlFile("index.html", "index.pug")
```