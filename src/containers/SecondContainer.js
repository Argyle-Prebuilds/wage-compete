import React, { Component } from 'react'
import firebase from '../helpers/firebase'
import DesignSecondPage from './DesignSecondPageContainer'

class SecondContainer extends Component {
   state = {
      accountID: null,
      userID: null,
      error: false,
      providerUrl: null,
      providerName: null,
   }

   componentDidMount() {
      const windowPathname = window.location.pathname;
      const providerUrl = windowPathname.substr(1, windowPathname.length);
      const providerNoSpace = providerUrl.replace('%20', '_');
      const providerLowerCase = providerNoSpace.toLowerCase();
      const provider = providerLowerCase;
      this.setState({
         providerUrl: provider
      });

      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", '../partners.txt', false);
      rawFile.onreadystatechange = () => {
         if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
               var allText = rawFile.responseText;
               var contentFile = allText.split("\n");
               for (var m = 0; m < contentFile.length - 1; m++) {
                  var flag = false;
                  var lineParsed = JSON.parse(contentFile[m]);
                  if (lineParsed.id === provider) {
                     flag = true;
                     this.setState({
                        providerName: lineParsed.name,
                     });
                     break;
                  } else {
                     this.setState({
                        providerName: 'Error',
                     });
                     flag = false;
                  }

               }
               if (flag === false) {
                  this.setState({
                     error: true
                  })
               }
            }
         }
      };
      rawFile.send(null);

      if (!localStorage.getItem('uid')) {
         const auth = firebase.auth()

         auth.signInAnonymously().catch(error => {
            console.log({ error })
         })

         auth.onAuthStateChanged(user => {
            if (user) {
               const { uid } = user
               localStorage.setItem('uid', uid)
            }
         })
      }
   }

   onSubmit = e => {
      e.preventDefault()
      const database = firebase.database()
      const uid = localStorage.getItem('uid')
      window.onOpenPlugin([this.state.providerUrl]);
      window.userCreated = ({ userToken, userId }) => {
         database.ref(`user-details/${userId}`).set({
            uid,
            userId,
            userToken
         })
         this.setState({
            userID: userId
         })
      };

      window.accountCreated = ({ accountId, userId }) => {
         localStorage.setItem('accountId', accountId);
         localStorage.setItem('userId', userId);

         this.props.history.push("/" + this.state.providerUrl + "/compare");

         localStorage.setItem('providerName', this.state.providerName);
         var srcImg = 'https://res.cloudinary.com/argyle-media/image/upload/partner-logos/' + this.state.providerUrl;
         localStorage.setItem('srcImg', srcImg);
      }
   }

   render() {
      const {
         state: { providerUrl, providerName }
      } = this;
      let srcImg;
      if (providerUrl !== null) {
         srcImg = 'https://res.cloudinary.com/argyle-media/image/upload/partner-logos/' + providerUrl;
      }
      return (
         <DesignSecondPage onSubmit={this.onSubmit}
            providerName={providerName} srcImg={srcImg}
            error={this.state.error} />
      )
   }
}

export default SecondContainer
