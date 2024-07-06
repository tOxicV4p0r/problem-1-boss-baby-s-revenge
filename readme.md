# Boss Baby

The program evaluates a string of actions where 'S' stands for a "shot" and 'R' stands for "revenge". Depending on the sequence of string, it will return either "Bad boy" or "Good boy".

## Description

The function `evaluateActions` in `solution.js` takes a string of actions and analyzes it.

### Complexity
Time complexity of O(n)

Space complexity of O(n)

## Installation

To get started with this project, you need to have Node.js installed on your machine, then follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tOxicV4p0r/Assignments.git

2. Install the required dependencies:
   ```bash
   cd Problem-1
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


   