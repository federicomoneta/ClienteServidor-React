import React, { Component } from "react";
import './App.css';
import { Link, Switch, Route } from "react-router-dom";
import ProductList from './components/principal.component'
import PrincipalPage from "./components/servicios.component";

class App extends Component {
  render() {
      return (
      <div class= "text-center">
        <div class="cover-container d-flex h-100 p-3 mx flex-column">
          <header class="masthead mb">
                  <div class="inner">
                  <h4 class="masthead-brand ">
                    <a href="/principal" className="navbar-brand">
                         Corralon Nak
                    </a>
                    </h4>
                    <nav class="nav nav-masthead justify-content-center">
                       <a class="nav-link active">
                          <Link to={"/principal"}>
                              Principal
                         </Link>
                       </a>
                        <a class="nav-link active">
                          <Link to={"/servicios"}>
                              Servicios
                          </Link>
                       </a>
                  </nav>
                  </div>
              </header>        
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/servicios"]} component={ProductList} />
              <Route exact path={["/", "/principal"]} component={PrincipalPage} />
            </Switch>
          </div>
        </div>
      </div>
      );
  }
}

export default App;