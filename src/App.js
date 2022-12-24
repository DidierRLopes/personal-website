import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './global.css'; // All of our styles

import Header from './components/Header';

const { PUBLIC_URL } = process.env;

const Index = lazy(() => import('./pages/Index'));
const Resume = lazy(() => import('./pages/Resume'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
/*
const Index = lazy(() => import('./pages/Index'));
const Resume = lazy(() => import('./pages/Resume'));
const Books = lazy(() => import('./pages/Books'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Stats = lazy(() => import('./pages/Stats'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/resume" component={Resume} />
        <Route path="/books" component={Books} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
  );
*/

const App = () => (
  <div>
    <Header />
    <BrowserRouter basename={PUBLIC_URL}>
      <Suspense fallback={<Header />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </div>
);

export default App;
