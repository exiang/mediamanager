import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useHistory } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import useToken from './useToken';
import Home from './pages/Home'
import Protected from './pages/Protected'
import Login from './pages/Login'
import Logout from './pages/Logout'

function App() {
  const { jwt, setToken } = useToken();

  if(!jwt) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
      <nav class="bg-gray-800 text-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Media Manager</span>
          </a>
          <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li><Link to="/" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link></li>
              <li><Link to="/protected" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Protected</Link></li>
              <li><Link to="/logout" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div class="container justify-between items-center mx-auto dark:text-gray-200">

      <div class="p-1 mb-8 text-sm text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800" role="alert">
        <span class="font-medium">Welcome!</span> {jwt? jwt.username:"Guest"}
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          {jwt && (
            <>
              <Route path="/protected" element={<Protected />} />
              <Route path="/logout" element={<Logout />} />
            </>
          )}
        </Routes>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;