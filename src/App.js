import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [activeTab, setActiveTab] = useState("dogs");

  return (
    <div className="App">
      <header className="text-center p-4">
        <h1 className="text-3xl font-bold font-nunito">The Fab 4</h1>
        
        {/* Toggle Slider */}
        <div className="flex justify-center my-8 font-raleway">
          <div className="flex rounded-[15px] w-60 border-2">
            <button
              onClick={() => setActiveTab("dogs")}
              className={`flex-1 py-2 font-semibold rounded-[15px] transition-all duration-300 ${
                activeTab === "dogs"
                  ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              For Dogs
            </button>
            <button
              onClick={() => setActiveTab("humans")}
              className={`flex-1 py-2 font-semibold rounded-[15px] transition-all duration-300 ${
                activeTab === "humans"
                  ? "bg-gradient-to-r from-orange-400 to-yellow-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              For Humans
            </button>
          </div>
        </div>

        <p className="bg-yellow-300 py-2 px-4 rounded-full rounded-bl-none text-black">
          Buy multiples original canine or human products
        </p>
      </header>
      
      <ProductList />
    </div>
  );
}

export default App;