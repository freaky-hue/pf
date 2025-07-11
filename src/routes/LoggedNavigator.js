import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home,Album,Albums,Artist,Artists,Profile} from "../pages"

export function LoggedNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/artists" element = {<Artists/>}/>
        <Route path="/artists:id" element = {<Artist/>}/>
        <Route path="/albums" element = {<Albums/>}/>
        <Route path="/albums/:id" element = {<Album/>}/>
        <Route path="/profile" element = {<Profile/>}/>

        

      </Routes>
    </BrowserRouter>
  );
}

