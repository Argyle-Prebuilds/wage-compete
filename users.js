const fs = require("fs");
const request = require('request-promise');
const dotenv = require('dotenv');
dotenv.config();

async function getAllUsers() {
		let offset = 0;
		let users = [];
		let lastResult = [];
		do {
			try {
				if (offset == 0) {
					console.log(offset);
					const data = await request.get('https://api.argyle.io/v1/users', {
						auth: {
							username: process.env.REACT_APP_CLIENT_ID,
							password: process.env.REACT_APP_CLIENT_SECRET
						}
					});
					var dataJSON = JSON.parse(data);
					lastResult = dataJSON;
					for (var i = 0; i < dataJSON.results.length; i++) {
						users.push(dataJSON.results[i]);
					}
				} else {
					console.log(offset);
					const url = 'https://api.argyle.io/v1/users?limit=10&offset=';
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
						users.push(dataJSON.results[i]);
					}
				}
				offset = offset + 10;
			} catch (err) {
				console.error(`Error, ${err}`);
			}
		} while (lastResult.next !== null);

		var file = fs.createWriteStream('./public/users.txt');
		file.on('error', function (err) { console.log(err) });
		for (var j = 0; j < users.length; j++) {
			file.write(`{"id": "` + users[j].id + `", "employers_connected": "` + users[j].employers_connected + `"}\n`);
		}
		file.end();
		console.log('done');
}

  getAllUsers();