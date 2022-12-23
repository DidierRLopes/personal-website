import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './global.css'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Index = lazy(() => import('./pages/Index'));
const Resume = lazy(() => import('./pages/Resume'));
const Books = lazy(() => import('./pages/Books'));
/*
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Stats = lazy(() => import('./pages/Stats'));
*/

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/resume" component={Resume} />
        <Route path="/books" component={Books} />
        { /*
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/blog" component={Blog} />
        <Route component={NotFound} status={404} />
        */ }
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
