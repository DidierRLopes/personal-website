import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './global.css'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Blog = lazy(() => import('./pages/Blog'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const Books = lazy(() => import('./pages/Books'));

const App = () => (
  <Router basename={PUBLIC_URL}>
    <div className="bg-indigo-900 text-center py-4 lg:px-4">
      <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">NOTE</span>
        <span className="font-semibold mr-2 text-left flex-auto">Currently learning frontend and converting css to Tailwind</span>
      </div>
    </div>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/blog" component={Blog} />
        <Route path="/resume" component={Resume} />
        <Route path="/books" component={Books} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
