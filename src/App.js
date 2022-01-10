import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './main.scss';
import Header from "./components/Header";
import Loading from "./components/Loading";
import SearchContainer from "./components/SearchContainer";
import Footer from "./components/Footer";
import { DataProvider } from "./contexApi";

function App() {

  
  return (
    <>
      <Router>
          <DataProvider>
        <Routes>
            <Route path={"/:searchParam"} element={<SearchContainer />} />
            <Route path="/" element={<Navigate to="/all"/>} />
        </Routes>
          </DataProvider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
