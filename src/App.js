import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './global.css'; // All of our styles

import Header from './components/Header';

const { PUBLIC_URL } = process.env;

const Index = lazy(() => import('./pages/Index'));
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const Books = lazy(() => import('./pages/Books'));
const Media = lazy(() => import('./pages/Media'));

const App = () => (
  <div>
    <BrowserRouter basename={PUBLIC_URL}>
      <Header />
      <Suspense fallback={<Header />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/books" component={Books} />
          <Route path="/media" component={Media} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

export default App;
