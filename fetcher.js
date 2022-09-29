let args = process.argv.slice(2);
let urlAndPath = args[0] + args[1].slice(2);
let destination = "/home/labber/lighthouse/page-fetcher/fetchedData.txt";

const fs = require('fs');
const request = require('request');
request(urlAndPath, (error, response, body) => {
  if (error) {
    console.log('Error:', error);
  }
  console.log('statusCode:', response && response.statusCode);

  fs.writeFile(destination, body, error => {
    if (error) {
      console.log('Error: ', error);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${destination}.`);
  })
});