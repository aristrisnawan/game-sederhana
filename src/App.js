import { useState } from "react";
import "./styles.css";

export default function App() {

  let [result, setResult] = useState("Game Belum di mulai")
  let [angka1, setAngka1] = useState("click button")
  let [angka2, setAngka2] = useState("click button")
  const handleSubmit = () => {
    let nama;
     let number1 = Math.floor(Math.random()*10)+1
     setAngka1(number1)
     let number2 = Math.floor(Math.random()*10)+1
     setAngka2(number2)

     if (number1 === number2) {
       nama = "Game seri"
     }
     else if (number1 > number2){
       nama = "Player 1 win"
     }
     else {
       nama = "Player 2 win"
     }
    setResult(nama)

     
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="row">
        <h3>{result}</h3>
          <div className="column">
              <h1>{angka1}</h1>
          </div>
          <div className="column">
              <h1>{angka2}</h1>
          </div>
      </div>
      <div>
        <button onClick={handleSubmit}>Play Game</button>
      </div>
    </div>
  );
}
