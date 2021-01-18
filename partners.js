const fs = require("fs");
const request = require('request-promise');
const dotenv = require('dotenv');
dotenv.config();

async function getAllPartners() {
    let offset = 0;
    let orders = [];
    let lastResult = [];
    do {
      try {
        if (offset == 0) {
          console.log(offset);
          const data = await request.get('https://api.argyle.io/v1/link-items', {
            auth: {
              username: process.env.REACT_APP_CLIENT_ID,
              password: process.env.REACT_APP_CLIENT_SECRET
            }
          });
          var dataJSON = JSON.parse(data);
          lastResult = dataJSON;
          for (var i = 0; i < dataJSON.results.length; i++) {
            orders.push(dataJSON.results[i]);
          }
        } else {
          console.log(offset);
          const url = 'https://api.argyle.io/v1/link-items?limit=10&offset=';
          const data = await request.get((url.toString() + offset.toString()).toString(), {
            auth: {
              username: process.env.REACT_APP_CLIENT_ID,
              password: process.env.REACT_APP_CLIENT_SECRET
            }
          });
          console.log((url.toString() + offset.toString()).toString());
          var dataJSON = JSON.parse(data);
          lastResult = dataJSON;
          for (var i = 0; i < dataJSON.results.length; i++) {
            orders.push(dataJSON.results[i]);
          }
        }
        offset = offset + 10;
      } catch (err) {
        console.error(`Error, ${err}`);
      }
      // keep running until there's no next page
    } while (lastResult.next !== null);
  
    var partnerName = [];
    for (var j = 0; j < orders.length; j++) {
      partnerName.push(orders[j]);
    }
    var file = fs.createWriteStream('./public/partners.txt');
    file.on('error', function (err) { console.log(err) });
    for (var k = 0; k < partnerName.length; k++) {
      file.write(`{"id": "` + partnerName[k].id + `", "name": "` + partnerName[k].name + `", "type": "` + partnerName[k].type + `"}\n`);
    }
    file.end();
    console.log('done');
  }
  
    getAllPartners();

