import  { useState } from "react";
import "./Contact.css";
import Twitt from "../../components/twitter/twitt";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {BsFillArrowRightCircleFill} from 'react-icons/bs';

const Contact = () => {
  const objtwt = [
    { name: "Neymar", aroba: "marNeyJr", corp: "O @Patrick me ensinou a joga futebol." },
    { name: "Chicomoedas", aroba: "lastRomantic", corp: " Esse cara @Patrick me ensinou a ser um homem fiel e comprometido." },
    { name: "ElonMusk", aroba: "IronMan", corp: "Tudo que eu sei foi este homem exemplar que me ensinou @Patrick." }
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  const mostrarTestemunhoAnterior = () => {
    setIndiceAtual(indiceAtual === 0 ? objtwt.length - 1 : indiceAtual - 1);
  };

  const mostrarProximoTestemunho = () => {
    setIndiceAtual((indiceAtual + 1) % objtwt.length);
  };

  return (
    <div className="divp">
      <h1 className="azul">Testimonial</h1>
      <p>My client saying</p>
      <Twitt
        name={objtwt[indiceAtual].name}
        aroba={objtwt[indiceAtual].aroba}
        corp={objtwt[indiceAtual].corp}
      ></Twitt>
      <BsFillArrowLeftCircleFill  onClick={mostrarTestemunhoAnterior}>Anterior</BsFillArrowLeftCircleFill>
      <BsFillArrowRightCircleFill  onClick={mostrarProximoTestemunho}>Próximo</BsFillArrowRightCircleFill>
    </div>
  );
};

export default Contact;
