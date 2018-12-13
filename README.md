# Onfleet node.js bindings

## Installation

  npm install onfleet-wrapper

## API Overview

Every resource is accessed via your `ds` instance:

```js
var onfleet = require('onfleet-wrapper')('<API KEY>');
```

Every resource method returns a promise, so you don't have to use the regular callback. E.g.

```js
// Create batch tasks :
onfleet.tasks.createBatch(
    {...}
).then(function (res) {
    //handle response
}).catch(function (err) {
    //handle error
});
```




::: Credit goes to https://www.npmjs.com/package/onfleet ::: 
further extended for: 
- Webhooks to be handled @ http server on node 
- Batch task creation with createBatch function (to avoid multiple request to API).