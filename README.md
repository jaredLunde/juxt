# juxt (juxtaposition)

Creates a function that calls multiple functions with the same arguments.

Takes several functions and returns a function that applies its arguments to
each of those functions. An `array` of the results is returned.

### Installation
```yarn add juxt``` or ```npm i juxt```

_____


## Usage
#### `juxt (fn<function>, fn<function>...)`
- **returns `{array}`**

```js
import juxt from 'juxt'


const incr = val => val + 1
const decr = val => val - 1


const juxtaposedCount = juxt(incr, decr)
juxtaposedCount(0)
// [1, -1]
```
