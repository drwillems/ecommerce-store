import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SingInAndSignUpPage from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser : null
    }
  }


  unsubscribeFromAuth = null

  // after this you will receive an object back from firebase contain a lot more details about the user.
  //reason why this is in the app is because it can always be used. state trickles down to lower components
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState ({currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

 render()  {
   return (
    <div>
    <Header currentUser={this.state.currentUser}/>
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

export default App;
