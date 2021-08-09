import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import test from './assets/test.jpeg'

function App() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <h1 className="center">Fiji Radio</h1>
      <div>
        <br></br>
        <div className="text-center border">
          <h1>Radio Fiji 2</h1>
          <audio controls>
            <source
              src="http://peridot.streamguys.com:7150/RFTwo"
              type="audio/mp3"
            />
          </audio>
        </div>
        <br></br>
        <div className="text-center border">
          <h1>Radio navtarang fiji</h1>
          <audio controls preload="auto">
            <source
              src="https://stream.fijivillage.com/navtarang?ver=636650.mp3"
              type="audio/mp3"
            ></source>
          </audio>
        </div>
        <br></br>
        <div className="text-center border">
          <h1>Radio Sargam</h1>
          <audio controls preload="auto">
            <source
              src="https://stream.fijivillage.com/radiosargam"
              type="audio/mp3"
            ></source>
          </audio>
          <br></br>
        </div>
      </div>
      <br></br>
      <div className="text-center border">
        <h1>Bula FM Fiji</h1>
        <audio controls>
          <source
            src="http://peridot.streamguys.com:7150/Bula"
            type="audio/mp3"
          ></source>
        </audio>
      </div>
      <div className="text-center border">
        <h1>Radio Mirchi Fiji</h1>
        <audio width="" height="" controls>
          <source
            src="http://peridot.streamguys.com:7150/Mirchi"
            type="audio/mp3"
          />
        </audio>
      </div>

      <div className="text-center">
        <button className="" onClick={refreshPage}>
          Click to reload!
        </button>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src={test} alt="Man looking at item at a store"></img>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>

      <footer className="colorFooter text-center">
        Made By Chidoro Batkau V1.0 MixKarDo
      </footer>
    </div>
  );
}

export default App;
