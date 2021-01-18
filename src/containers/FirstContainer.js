import React, { Component } from 'react'
import firebase from '../helpers/firebase'
import '../helpers/main.css'
import DesignFirstPage from './DesignFirstPageContainer'

class FirstContainer extends Component {
   state = {
      results: null,
      showComponent: false,
      showModal: false
   }


   constructor(props) {
      super(props);
      this.state = {
         results: null,
         showComponent: false,
         showModal: false
      }
      this.handleCloseModal = this.handleCloseModal.bind(this);
   }

   componentDidMount() {
      window.initArgyle();
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
      this.readTextFile("../partners.txt");
   }

   handleCloseModal() {
      this.setState({ showModal: false });
   }

   readTextFile = file => {
      var rawFile = new XMLHttpRequest();
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = () => {
         if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
               var allText = rawFile.responseText;
               var contentFile = allText.split("\n");
               this.setState({
                  results: contentFile
               });
            }
         }
      };
      rawFile.send(null);
   };



   onSubmit = e => {
      e.preventDefault()
      const database = firebase.database()
      const uid = localStorage.getItem('uid')
      window.userCreated = ({ userToken, userId }) => {
         database.ref(`user-details/${userId}`).set({
            uid,
            userId,
            userToken
         })
      }
      this.setState({
         showComponent: true,
         showModal: true
      });
   }

   render() {
      return (
         <DesignFirstPage onSubmit={this.onSubmit} showComponent={this.state.showComponent}
            showModal={this.state.showModal}
            results={this.state.results}
            handleCloseModal={this.handleCloseModal}
            history={this.props.history} />
      )
   }
}

export default FirstContainer
