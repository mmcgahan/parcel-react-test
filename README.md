This repo demonstrates a runtime error that appears when using async instance properties/methods
in class-based React components and bundling with Parcel 2 _for Internet Explorer 11_

## Instructions

1. Install with `yarn`
2. Bundle with `yarn parcel build src/index.tsx`
3. Start a static server of your choice in the root of the directory, e.g. `python -m SimpleHTTPServer 8000`
4. Open http://localhost:8000 in Chrome and note the error in the browser console

```
react-dom.production.min.js:216 ReferenceError: this hasn't been initialised - super() hasn't been called
    at i (_assert_this_initialized.js:3)
    at new n (App.tsx:3)
    at Oa (react-dom.production.min.js:135)
    at ru (react-dom.production.min.js:181)
    at oi (react-dom.production.min.js:269)
    at Bi (react-dom.production.min.js:250)
    at Ai (react-dom.production.min.js:250)
    at Ui (react-dom.production.min.js:250)
    at Oi (react-dom.production.min.js:243)
    at Ci (react-dom.production.min.js:237)
```
