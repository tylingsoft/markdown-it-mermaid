# markdown-it-mermaid

Mermaid plugin for markdown-it.


## Installation

```
yarn install markdown-it-mermaid
```


## Usage

```js
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
```

### Customize mermaid

```js
mdi.mermaid.loadPreferences({
  get: key => {
    if (key === 'mermaid-theme') {
      return 'forest'
    } else if (key === 'gantt-axis-format') {
      return '%Y/%m/%d'
    } else {
      return undefined
    }
  }
})
```

You can `loadPreferences` from any preferences store as long as it supports the `get` method. For example, you can use `js-cookie` library as a preferences store. Or you can write your own preferences store to achieve more flexibility.

`mdi.mermaid.loadPreferences` not only applies the preferences, it also return the preferences loaded. Just in case you need to access the loaded preferences.

`mdi.mermaid.loadPreferences` could be invoked multiple times. And the preferences applied later will override ones applied earlier.


## Development

### Build

```
yarn build:watch
```

### Test

```
yarn test
```

### Distribution

```
yarn release && npm publish
```


## Todo

`gantt-axis-format` should support large date ranges
