import { useState } from "react";

const Calculadora = () => {
    const [numeroX, setNumeroX] = useState(0);
    const [numeroY, setNumeroY] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calcular = (e,setNumero) =>{
        const value = e.target.value;
        setNumero(value === '' ? '' : parseFloat(value)) // Pasarlo a número porque lo reconocía como String
        }
    const calcularSuma = () =>{
        const num1 = numeroX === '' ? 0 : parseFloat(numeroX);
        const num2 = numeroY === '' ? 0 : parseFloat(numeroY);

        setResultado(numeroX+numeroY)
    }
    const calcularResta = () =>{
        const num1 = numeroX === '' ? 0 : parseFloat(numeroX);
        const num2 = numeroY === '' ? 0 : parseFloat(numeroY);

        setResultado(numeroX-numeroY)
    }
    const calcularMultiplicacion = () =>{
        const num1 = numeroX === '' ? 0 : parseFloat(numeroX);
        const num2 = numeroY === '' ? 0 : parseFloat(numeroY);

        setResultado(numeroX*numeroY)
    }
    const calcularDivision = () =>{
        const num1 = numeroX === '' ? 0 : parseFloat(numeroX);
        const num2 = numeroY === '' ? 0 : parseFloat(numeroY);

        setResultado(numeroX/numeroY)
    }
  
  
  
    // const suma = () => setResultado(numero(numeroX) + numero(numeroY));
    // const resta = () => setResultado(numero(numeroX) - numero(numeroY));
    // const multy = () => setResultado(numero(numeroX) * numero(numeroY));
    // const divide = () => setResultado(numero(numeroX) / numero(numeroY));


  return (
    <div>
      <h2>Calculadora</h2>
      <input value={numeroX} onChange={(e) => calcular(e,setNumeroX)} />
      <input
        type="number"
        value={numeroY}
        onChange={(e) => calcular(e,setNumeroY)}
      />

      <div>
        <button onClick={calcularSuma}>Suma</button>
        <button onClick={calcularResta}>Resta</button>
        <button onClick={calcularMultiplicacion}>Multiplicar</button>
        <button onClick={calcularDivision}>Dividir</button>
        <div>
        { <p>Resultado:{resultado}</p>}
        </div>
      </div>
    </div>

  );
};


export default Calculadora