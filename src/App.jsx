import { useState } from "react";
import Calculadora from "./estructura/calculadora";
import Header from "./estructura/Cabecera";
import Pie from "./estructura/footer";
import "./App.css";

let empleados = [
  { name: "Juan", lastName: "Perez", hobbies: ["fútbol", "lectura"], age: 25 },
  {
    name: "María",
    lastName: "González",
    hobbies: ["pintura", "música"],
    age: 30,
  },
  {
    name: "Pedro",
    lastName: "López",
    hobbies: ["senderismo", "cine"],
    age: 28,
  },
  { name: "Ana", lastName: "Martínez", hobbies: ["baile", "viajar"], age: 22 },
  {
    name: "Carlos",
    lastName: "Sánchez",
    hobbies: ["cocina", "videojuegos"],
    age: 35,
  },
  { name: "Sofía", lastName: "Ruiz", hobbies: ["natación", "teatro"], age: 29 },
  {
    name: "Luis",
    lastName: "Hernández",
    hobbies: ["jardinería", "patinar"],
    age: 31,
  },
  {
    name: "Elena",
    lastName: "Díaz",
    hobbies: ["fotografía", "montañismo"],
    age: 27,
  },
  { name: "Javier", lastName: "Torres", hobbies: ["ajedrez", "surf"], age: 33 },
  { name: "Laura", lastName: "Romero", hobbies: ["yoga", "ciclismo"], age: 26 },
  {
    name: "David",
    lastName: "Gómez",
    hobbies: ["escritura", "musculación"],
    age: 34,
  },
  {
    name: "Isabel",
    lastName: "Jiménez",
    hobbies: ["piano", "voleibol"],
    age: 23,
  },
  {
    name: "Miguel",
    lastName: "Alvarez",
    hobbies: ["cocina", "pintura"],
    age: 37,
  },
  {
    name: "Carmen",
    lastName: "Moreno",
    hobbies: ["jardinería", "cine"],
    age: 24,
  },
  {
    name: "Alejandro",
    lastName: "Dominguez",
    hobbies: ["viajar", "fotografía"],
    age: 30,
  },
  { name: "Rosa", lastName: "Ortega", hobbies: ["bailar", "leer"], age: 32 },
  {
    name: "Francisco",
    lastName: "Vargas",
    hobbies: ["música", "senderismo"],
    age: 28,
  },
  {
    name: "Lucía",
    lastName: "Ramos",
    hobbies: ["gimnasia", "ciclismo"],
    age: 26,
  },
  {
    name: "Antonio",
    lastName: "Castillo",
    hobbies: ["cocinar", "pintura"],
    age: 29,
  },
  { name: "Eva", lastName: "Iglesias", hobbies: ["cine", "teatro"], age: 31 },
  {
    name: "José",
    lastName: "Fernández",
    hobbies: ["fútbol", "baloncesto"],
    age: 27,
  },
  {
    name: "Teresa",
    lastName: "Serrano",
    hobbies: ["pintura", "música"],
    age: 33,
  },
  {
    name: "Manuel",
    lastName: "Garrido",
    hobbies: ["cocina", "fotografía"],
    age: 30,
  },
  { name: "Rocío", lastName: "Cortés", hobbies: ["patinar", "leer"], age: 28 },
  {
    name: "Pablo",
    lastName: "Marín",
    hobbies: ["surf", "senderismo"],
    age: 25,
  },
  { name: "Beatriz", lastName: "Luna", hobbies: ["piano", "yoga"], age: 29 },
  {
    name: "Diego",
    lastName: "Ibáñez",
    hobbies: ["ciclismo", "música"],
    age: 34,
  },
  { name: "Nuria", lastName: "Gil", hobbies: ["teatro", "cocina"], age: 27 },
  { name: "Rubén", lastName: "Sanz", hobbies: ["fútbol", "lectura"], age: 32 },
  {
    name: "Cristina",
    lastName: "Herrero",
    hobbies: ["bailar", "pintura"],
    age: 26,
  },
];

function App() {

  let almacenamiento = [];
  for (let i = 0; i < empleados.length; i++) {
    almacenamiento.push(
      <div key={i}>
        <p>Nombre: {empleados[i].name}</p>
        <p>Apellidos: {empleados[i].lastName}</p>
        <p>Hobbies: {empleados[i].hobbies.join(", ")}</p>
        <p>Edad: {empleados[i].age}</p>
      </div>
    );
  }



  return (
    <div>
      <div>
        <header>
          <Header />
        </header>

        <div>
          <Calculadora />
          <div>
            <main>
              <div className="envoltura">
                <h2>Info Empleados</h2>
                {almacenamiento}
              </div>
            </main>
            <footer>
             <Pie/>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
