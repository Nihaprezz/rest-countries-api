import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "./navbar/navBar";
import Main from "./mainpage/mainPage"
import ShowPage from "./showpage/showPage"

function App() {
  return (
    <div className="App">
      {/* navbar will be present on all pages */}
      <Navbar/>

      <Switch>
        <Route exact path="/" render={() => < Main />}/>

        <Route exact path="/country/:id" render={(props) => {
          return < ShowPage country={props.match.params.id} />
        }}/>
        
      </Switch>
      {/* switch between the routes for the main and show page */}
    </div>
  );
}

export default App;
