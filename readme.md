# Boss Baby
![enter image description here](https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge/blob/main/resources/images/Goodboy.gif?raw=true)

## Description

The program evaluates a string of actions where `S` stands for a **shot** and `R` stands for **revenge**. Depending on the sequence of string, it will return either `Bad boy` or `Good boy`.
The function `evaluateActions` in `solution.js` takes a string of actions and analyzes it.

### Complexity
- Time complexity of `O(n)`
- Space complexity of `O(n)`

## Algorithm Explanation

1. Retrieve and remove the first element from the array.

2. - If the value is `S`, increase `NEED_SHOOT_COUNT` by 1 (Boss Baby needs to seek revenge at least once) and set `IS_NEED_REVENGE` to `True`
   - If the value is `R`, decrease `NEED_SHOOT_COUNT` by 1 (Bose Baby has shooted back)
   - If `NEED_SHOOT_COUNT` reaches 0, this indicates that the revenge is complete, and set `IS_NEED_REVENGE` to `False`
3. After processing all array elements.
   - If `IS_NEED_REVENGE` is `True`, it means revenge is not fulfilled, and displays `Bad boy`.
   - If `IS_NEED_REVENGE` is `False`, it means revenge is complete, and displays `Good boy`.

![Bad boy case](https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge/blob/main/resources/images/Badboy.gif?raw=true)
>Bad boy case

![Good boy case](https://github.com/tOxicV4p0r/problem-1-boss-baby-s-revenge/blob/main/resources/images/Goodboy.gif?raw=true)
>Good boy case

## Installation

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
## Testing the Project
   ```bash
   npm test
   ```
## Example Usage
You can use this function in a Node.js script as follows:
   ```javascript
    const { evaluateActions } = require('./solution');

    console.log(evaluateActions('SRSSRRR'));
    console.log(evaluateActions('RSSRR'));
    console.log(evaluateActions('SSSRRRRS'));
    console.log(evaluateActions('SRRSSR'));
    console.log(evaluateActions('SSRSRRR'));


   