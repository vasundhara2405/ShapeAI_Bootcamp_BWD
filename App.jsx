import React from "react";
import "/src/styles.css";
import Header from "../components/Header";
import Note from "../components/Note";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Note />
      <Note />
      <Note />
      <Note />
      <Footer />
    </div>
  );
}
