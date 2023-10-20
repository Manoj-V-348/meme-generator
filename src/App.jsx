import { useState } from "react";

import "../src/index.css";

import Header from "../components/header";
import Meme from "../components/Meme";

export default function App() {
  return (
    <>
      <Header />
      <Meme />
    </>
  );
}
