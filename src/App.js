import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'

class App extends React.Component {
    unsubscribeFromAuth = null

  // after this you will receive an object back from firebase contain a lot more details about the user.
  //reason why this is in the app is because it can always be used. state trickles down to lower components
  componentDidMount() {
    const {setCurrentUser} = this.props;
    //Get the currently signed-in user The recommended way to get the current user is by setting an observer on the Auth object:
    // firebase.auth().onAuthStateChanged(function(user) {
    // if (user) {
    // User is signed in.
    //   } else {
    // No user is signed in.
    //   }
    //  }); //
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

    //You can listen to a document with the onSnapshot() method. An initial call using the callback you provide creates a document snapshot immediately with the
     // current contents of the single document. Then, each time the contents change, another call updates the document snapshot.
        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
         

      }
      setCurrentUser({currentUser:userAuth});
    });
  }
  //This method is called when a component is being removed from the DOM.
  //this.unsubscribeFromAuth has been declared before but we are removing it here
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

 render()  {
   return (
    <div>
    <Header/>
    <Switch>
    <Route exact path='/' component={HomePage}></Route>
    <Route path='/shop' component={ShopPage}></Route>
    <Route path='/signin' component={SingInAndSignUpPage}></Route>
    <Route path='/signup' component={SingInAndSignUpPage}></Route>
    </Switch>
    </div>
      
   
  );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default  connect(null,mapDispatchToProps)(App);
