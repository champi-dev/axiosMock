# axiosMock

## Usage

```javascript
import axios from './axiosMock.js'

axios
  .get('/example-route')
  .then(res => res.data)
  .catch(e => console.log(error))
```

To mock an error or alter the request delay just modify
axiosMock's status or delay property

```javascript
axios.status = 404
axios.delay = 1000
```
