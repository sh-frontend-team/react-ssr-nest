import React from 'react';
import { StaticRouter } from 'react-router'
import { Route, Redirect, Switch } from "react-router-dom";
import { routes } from './router';

interface IndexProps {
  message?: string;
  url?: string;
}

const Index = (props: IndexProps) => {
  console.log(props.url);
  return (
    <React.Fragment>
      <StaticRouter
          location={props.url}
          context={{}}
          basename="/pages"
      >
          <Switch>
              {routes.map(function(v,k){
                  const {component, ...props}=v;
                  return (<Route key={k} {...props} component={component}/>)
              })}
          </Switch>
      </StaticRouter>
    </React.Fragment>
  );
};

export default Index;
