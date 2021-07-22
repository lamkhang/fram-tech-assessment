import React, { Fragment, Suspense } from 'react';
import './App.css';
import Header from './components/header';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {routes} from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.length > 0 ?
              routes.map((item: any, index: number) => {
                return <Route exact={item.exact} path={item.path} component={item.component} key={index}/>
              }) : ''
            }
          </Switch>




        </Suspense>

      </Fragment>
    </BrowserRouter>
  );
}

export default App;
