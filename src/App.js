import "./App.css";
import { useEffect, useState } from "react";
import { useRef } from "react";
import audio from "./assets/beep.mp3";

function App() {
  const button = useRef();
  let [number, setNumber] = useState("0");

  const handleDigit = (d) => {
    button.current.currentTime = 0;
    button.current.play();
    if (number === "0") {
      setNumber(d);
    } else setNumber(`${number}${d}`);
  };

  useEffect(() => {
    // console.log(number)
    const input = document.querySelector(".calculator__input");
    input.textContent = number;
  }, [number]);

  const remove = () => {
    if (number === "0") return;

    const len = number.length;

    if (len <= 1) {
      setNumber("0");
    } else setNumber(number.slice(0, len - 1));
  };

  const calc = async () => {
    const res = await eval?.(`"use strict";(${number})`);
    try {
      const output = document.querySelector(".calculator__output");
      output.textContent = res;
      // console.log(res);
    } catch (e) {
      console.log(e);
      return;
    }
    //

    // setNumber(res);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculator</h2>
      </header>

      <main className="calculator__container">
        <audio src={audio} ref={button}></audio>
        <section className="calculator">
          <div className="calculator__input" id="inner-shadow"></div>
          <div className="calculator__output" id="inner-shadow"></div>
          <div className="calculator__digits">
            <div className="grid-container">
              <div className="calc-item">
                {" "}
                <div
                  className="grid-item blue"
                  id="drop-shadow"
                  onClick={() => {
                    setNumber("0");
                  }}
                  style={{ background: "#7d0505" }}
                >
                  C
                </div>
                <div
                  className="op__square blue"
                  onClick={() => handleDigit("**")}
                >
                  X&#178;
                </div>
                <div
                  className="op__modulus blue"
                  id="drop-shadow"
                  onClick={() => handleDigit("%")}
                >
                  %
                </div>
                <div
                  className="op__divide grid-sign  "
                  id="drop-shadow"
                  onClick={() => handleDigit("/")}
                >
                  ÷
                </div>
              </div>
              <div className="calc-item">
                {" "}
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("7")}
                >
                  7
                </div>
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("8")}
                >
                  8
                </div>
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("9")}
                >
                  9
                </div>
                <div
                  className="op__multiply grid-sign  "
                  id="drop-shadow"
                  onClick={() => handleDigit("*")}
                >
                  x
                </div>
              </div>
              <div className="calc-item">
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("4")}
                >
                  4
                </div>
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("5")}
                >
                  5
                </div>
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("6")}
                >
                  6
                </div>{" "}
                <div
                  className="op__minus grid-sign  "
                  id="drop-shadow"
                  onClick={() => handleDigit("-")}
                >
                  -
                </div>
              </div>
              <div className="calc-item">
                <div
                  className="grid-item shadow__box "
                  onClick={() => handleDigit("1")}
                >
                  1
                </div>
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("2")}
                >
                  2
                </div>
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit("3")}
                >
                  3
                </div>{" "}
                <div
                  className="op__plus grid-sign  "
                  id="drop-shadow"
                  onClick={() => handleDigit("+")}
                >
                  +
                </div>
              </div>
              <div className="calc-item">
                {" "}
                <div className="grid-item shadow__box" onClick={remove}>
                  CE
                </div>
                <div
                  className="grid-item shadow__box"
                  onClick={() => handleDigit(0)}
                >
                  0
                </div>
                <div
                  className="op__power grid-item shadow__box"
                  onClick={() => handleDigit(".")}
                >
                  .
                </div>
                <div
                  className="op__calc grid-sign  "
                  id="drop-shadow"
                  onClick={calc}
                  style={{ background: "#b36d06" }}
                >
                  =
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
