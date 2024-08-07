# Boss Baby
![enter image description here](https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge/blob/main/resources/images/Goodboy.gif?raw=true)

## Description
`Story`

Boss Baby, deals with the kids who shoot water guns at his house. Boss Baby seeks revenge by shooting at least one shot back, but only if the kids have already shot at him first.

`Program`

The program evaluates a string of actions where `S` stands for a **shot** and `R` stands for **revenge**. Depending on the sequence of string, it will return either `Bad boy` or `Good boy`.

## Algorithm Explanation
**Complexity**
- Time complexity of `O(n)`
- Space complexity of `O(n)`

**Algorithm**
1. Retrieve and remove the first element from the array.

2. - If the value is `S`, increase `NEED_SHOOT_COUNT` by 1 (Boss Baby needs to seek revenge at least once) and set `IS_NEED_REVENGE` to `True`.
   - If the value is `R`
      - If `IS_NEED_REVENGE` is `False`, return and display `Bad boy` (Boss Baby should not shoot first).
      - Decrease `NEED_SHOOT_COUNT` by 1 (Boss Baby has shot back).
   - If `NEED_SHOOT_COUNT` reaches 0, this indicates that the revenge is completed.
3. After processing all array elements.
   - If `NEED_SHOOT_COUNT` is more than 0, it means revenge is not fulfilled, and displays `Bad boy`.
   - If `NEED_SHOOT_COUNT` is equal to 0, it means revenge is complete, and displays `Good boy`.

![Bad boy case](https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge/blob/main/resources/images/Badboy.gif?raw=true)
>Bad boy case

![Good boy case](https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge/blob/main/resources/images/Goodboy.gif?raw=true)
>Good boy case

## Installation

#### Prerequisite
- Node.js

To get started with this project, you need to have `Node.js` installed on your machine, then follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge.git

2. Install the required dependencies:
   ```bash
   npm install

## Running the Project

   ```bash
   npm start
   ```
or
   ```bash
    node index.js
   ```
## Usage
### Syntax
#### evaluateActions(action)

```bash
 action - List of actions in string `S` or `R`
 // example: 'SSSRRRSRSR'
```

#### Output
```javascript
// return string value
`Good boy` or `Bad boy`
```

### Example
```javascript
// Load the functions from the module.
// CommonJS
const { evaluateActions } = require('./solution');

const result = evaluateActions('SRSSRRR');
console.log(result);
// output : Good boy

console.log(evaluateActions('RSSRR'));
// output : Bad boy

console.log(evaluateActions('SSSRRRRS'));
// output : Bad boy

console.log(evaluateActions('SRRSSR'));
// output : Bad boy

console.log(evaluateActions('SSRSRRR'));
// output : Good boy
```


   