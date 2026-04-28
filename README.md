### HackerRank TypeScript Runner

#### Stack

- TypeScript for strict typing
- Node.js runtime
- Jest for testing
- ts-node for direct execution

#### Setup

```
git clone https://github.com/wwwbrunagon/hackerRank
cd hackerRank
npm install
```

#### Project Structure

```
src/
  problems/
    example.ts
    example.test.ts
  index.ts
```

#### Usage
* Run tests: `npm test`
* Watch mode: `npm run test:watch`
* Run a solution directly: `npm run dev`

#### Writing a Problem
```
export function solve(input: any): any {
  // implement logic
}
```

#### Test
```
import { solve } from './example';

describe('solve', () => {
  it('should return expected result', () => {
    expect(solve(/* input */)).toEqual(/* output */);
  });
});
```

#### Simulating HackerRank Input (stdin)
```
function processData(input: string) {
  // parse input
  console.log(input);
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', chunk => inputString += chunk);
process.stdin.on('end', () => processData(inputString));
```

Run with:
```
echo -e "input here" | npm run dev
```
