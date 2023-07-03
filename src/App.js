import React, { Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './global.css'; // All of our styles

import Index from './pages/Index';
import Media from './pages/Media';
import Resume from './pages/Resume';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Books from './pages/Books';

import Header from './components/Header';

const { PUBLIC_URL } = process.env;

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
