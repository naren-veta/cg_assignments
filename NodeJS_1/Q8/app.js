const fs = require('fs');
const readline = require('readline');

async function countNumInFile() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  let sum=0;
  for await (const line of rl) {
    sum+=parseInt(line)
  }
  console.log(`Sum of all numbers in the file ${sum}`)
}

countNumInFile();