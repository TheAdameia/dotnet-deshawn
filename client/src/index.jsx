import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import { DogList } from "./Dogs/DogList";
import { OneDog } from "./Dogs/OneDog";
import { DogForm } from "./Dogs/DogForm";
import { WalkerList } from "./Walkers/WalkerList";
import { SelectDogForWalker } from "./Walkers/SelectDogForWalker";
import { CitiesList } from "./Cities/CitiesList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={
          <>
          <Home />
          <DogList />
          </>
        } />
        <Route path="dogs" element={<DogList />} />
        <Route path="dogs/:dogId" element={<OneDog />} />
        <Route path="dogs/create" element={<DogForm />} />
        <Route path="walkers" element={<WalkerList />} />
        <Route path="walkers/:walkerId" element={<SelectDogForWalker />} />
        <Route path="cities" element={<CitiesList />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
