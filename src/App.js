import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './global.css'; // All of our styles

import Header from './components/Header';

const { PUBLIC_URL } = process.env;

const Index = lazy(() => import('./pages'));
const Media = lazy(() => import('./pages/media'));
const Resume = lazy(() => import('./pages/resume'));
const NotFound = lazy(() => import('./pages/notfound'));
const Projects = lazy(() => import('./pages/projects'));
const Blog = lazy(() => import('./pages/blog'));
const Books = lazy(() => import('~/src/pages/books'));

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
