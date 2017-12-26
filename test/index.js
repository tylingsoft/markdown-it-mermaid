import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItLatex from '../dist/index'

const mdi = markdownIt()
mdi.use(markdownItLatex)

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>', '# Hello world')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>', 'Hello world')

console.log(mdi.render(`\`\`\`mermaid
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``))
console.log(mdi.render(`\`\`\`
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``))
console.log(mdi.render(`\`\`\`
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B ----> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``))

assert(mdi.render(`\`\`\`mermaid
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``).indexOf('class="mermaid"') > -1)
assert(mdi.render(`\`\`\`
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``).indexOf('class="mermaid"') > -1)
assert(mdi.render(`\`\`\`
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B ----> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
\`\`\``).indexOf('<pre>Parse error') > -1)
