import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './global.css'; // All of our styles

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Blog = lazy(() => import('./pages/Blog'));
const Index = lazy(() => import('./pages/Index'));
// const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Books = lazy(() => import('./pages/Books'));

const App = () => (
  <Switch>
    <Route exact path="/" component={Main}>
      <Route path="/projects" component={Projects} />
      <Route path="/stats" component={Stats} />
      <Route path="/blog" component={Blog} />
      <Route path="/resume" component={Resume} />
      <Route path="/books" component={Books} />
      { /* <Route component={NotFound} status={404} /> */ }
      <Route path="*" component={Index} />
    </Route>
  </Switch>
);

export default App;
