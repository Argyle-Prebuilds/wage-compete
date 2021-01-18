# Wage Compete
A production version of this app can be accessed at https://wagecompete.com/

### Homepage Screenshot
![Home](/screenshots/home.png width=300)
### Compare Screenshot (after Argyle Link) 
![Compate](/screenshots/compare.png width=300)

## How to set up and run the app locally:

### Create and set up a project in [Firebase](https://firebase.google.com/docs/web/setup)

Firebase is used in this project to store `uid`, `userId` and `userToken` for each user in the user list. `userId` is neccessary to fetch data for each user individually. For example [list profiles](https://argyle.io/docs/api-reference/profiles/list-profiles).


#### Steps for creating a Firebase project:

- Go to [Firebase Console](https://console.firebase.google.com)
- Click **Add Project** button
- Add your project name, follow the steps displayed.
- Under _Get started by adding Firebase to your app.._ choose **Web** icon and create a web project
- Add a name for the Project
- Save the API keys (you can find them later in the project settings)
- Go to "Realtime Database" section on the left panel, create a new database in Test mode
- Go to "Authentication" section on the left panel, select "Sign-in method", scroll down and enable "Anonymous" auth method.

```js
var firebaseConfig = {
  apiKey: 'example-api-key',
  authDomain: 'example-domain.firebaseapp.com',
  databaseURL: 'https://example-urk.firebaseio.com',
  projectId: 'example-id',
  storageBucket: 'example-bucket-id',
  messagingSenderId: 'example-sender-id',
  appId: 'example-app-id',
  measurementId: 'example-measurement-id',
}
```

#### Rename `.env.example` to `.env` in the root folder:

#### Add the keys in `.env` file in the root folder:

```
REACT_APP_API_URL=https://api.argyle.io/v1
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_PLUGIN_KEY=
REACT_APP_CLIENT_ID=
REACT_APP_CLIENT_SECRET=
```

- `REACT_APP_FIREBASE_API_KEY`, `REACT_APP_FIREBASE_DATABASE_URL`, `REACT_APP_FIREBASE_AUTH_DOMAIN`, `REACT_APP_FIREBASE_PROJECT_ID`- use _apiKey, databaseURL, authDomain, projectId_ which you retrieved from firebase setup (or settings in your created app).
- `REACT_APP_PLUGIN_KEY`, `REACT_APP_CLIENT_ID`, `REACT_APP_CLIENT_SECRET`  - go to [Argyle Console](https://console.argyle.io) and copy the `plugin_key`, `client_id` and  `client_secret` values from API Keys.


If you are working with Sandbox environment, you have to change REACT_APP_API_URL to use the Sandbox API:

```
REACT_APP_API_URL=https://api-sandbox.develop.argyle.io/v1
```

#### Add the Firebase project name to `.firebaserc` file in the project root

```
{
  "projects": {
    "default": "<YOUR_PROJECT_NAME>"
  }
}
```

## Start the app:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). ⚛️

Run:

#### `npm install`

Installs all the dependencies for the project.

#### `node users.js`

This command will fetch data about all users and write it in `users.txt` file from `public` folder. This should be executed after each account connection to a company. If you are working with Sandbox environment, you have to change the URL to use the Sandbox API.

#### `node partners.js`

This command will fetch data about all data partners and write it in `partners.txt` file from `public` folder. This information is used to implement the search bar. If you are working with Sandbox environment, you have to change the URL to use the Sandbox API.

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `firebase deploy`

Run this command to deploy the app on firebase. `npm run build` should be run before that.
For this to work you need to install firebase tools globally
`npm install -g firebase-tools`

#### `node app.js`

Run this command after `npm run build` and you can use a server to run the app. You can add an env variable `REACT_APP_PORT` or it will run on 8080 as default.  

Execute `users.js` and `partners.js` everyday by making cron jobs in order to scan the Argyle link-items API for new partners and get data about new users at a desired time interval.
# wage-compete
