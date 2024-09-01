import React from "react";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      
      <section id="home" className="h-screen bg-gray-200">
        <h1 className="text-4xl text-center py-20">Home Section</h1>
      </section>
      
      <section id="about" className="h-screen bg-gray-300">
        <h1 className="text-4xl text-center py-20">About Me Section</h1>
      </section>
      
      <section id="projects" className="h-screen bg-gray-400">
        <h1 className="text-4xl text-center py-20">Projects Section</h1>
      </section>
      
      <section id="contact" className="h-screen bg-gray-500">
        <h1 className="text-4xl text-center py-20">Contact Section</h1>
      </section>
    </div>
  );
}

export default App;