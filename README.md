# markdown-it-mermaid

Mermaid plugin for markdown-it.


## Installation

```
yarn install markdown-it-mermaid
```


## Usage

```JavaScript
import markdownIt from 'markdown-it'
import markdownItMermaid from 'markdown-it-mermaid'
const mdi = markdownIt()
mdi.use(markdownItMermaid)
mdi.render(`\`\`\`mermaid
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``)


## Test

```
yarn test
```
