import React, { Suspense } from "react";
import "./App.css";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() =>
  import(/* webpackChunkName: 'HomePage'*/ "./components/Home")
);
const About = React.lazy(() =>
  import(/* webpackChunkName: 'AboutPage'*/ "./components/About")
);
const NotFound = React.lazy(() =>
  import(/* webpackChunkName: 'NotFoundPage'*/ "./components/NotFound")
);

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <div className="text-center">
        <h1 className="c-red">Hello, Webpack and React!!!</h1>
        <div>
          <Link to="/home">Home 2</Link>
          <Link to="/about">About</Link>
          <Link to="/404">Not Found</Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
        <div>
          <img className="App-logo" src={logo} alt="logo" />
        </div>
      </div>
    </Suspense>
  );
};

export default App;
