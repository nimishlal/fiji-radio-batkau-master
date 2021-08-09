import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css"


function App() {
  function refreshPage() {
    window.location.reload(true);
  }
  return (
    <div className="App">
      <h1 className="center animate__animated animate__pulse pt-5">Fiji Radio App</h1>
      <div>
        <div className="text-center pt-5">
          <h1>Radio Fiji 2</h1>
          <audio controls >
            <source
              src="http://peridot.streamguys.com:7150/RFTwo"
              type="audio/mp3"
            />
          </audio>
        </div>
        <div className="text-center">
          <h1>Radio navtarang fiji</h1>
          <audio controls preload="auto">
            <source
              src="https://stream.fijivillage.com/navtarang?ver=636650.mp3"
              type="audio/mp3"
            ></source>
          </audio>
        </div>
        <div className="text-center">
          <h1>Radio Sargam</h1>
          <audio controls preload="auto">
            <source
              src="https://stream.fijivillage.com/radiosargam"
              type="audio/mp3"
            ></source>
          </audio>
        </div>
      </div>
      <div className="text-center">
        <h1>Bula FM Fiji</h1>
        <audio controls>
          <source
            src="http://peridot.streamguys.com:7150/Bula"
            type="audio/mp3"
          ></source>
        </audio>
      </div>
      <div className="text-center">
        <h1>Radio Mirchi Fiji</h1>
        <audio width="" height="" controls>
          <source
            src="http://peridot.streamguys.com:7150/Mirchi"
            type="audio/mp3"
          />
        </audio>
      </div>

      <div className="pt-5 text-center">
        <button className="" onClick={refreshPage}>
          Click to reload!
        </button>
      </div>
      <footer className="colorFooter text-center">
        Made By Chidoro Batkau V1.0 MixKarDo
      </footer>
    </div>
  );
}

export default App;
