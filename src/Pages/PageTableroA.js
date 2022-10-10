import React from "react";
import Tablero from "../Componets/Tablero";
import FormAtaque from "../Componets/FormAtaque";
import { doc, onSnapshot, setDoc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConf";
import { useEffect,useState } from "react";
import { async } from "@firebase/util";


function PageTableroA() {
const [myOcean, setmyOcean] = useState([]);
const [myAtacks, setmyAtacks] = useState([]);
const [hisAtacks, sethisAtacks] = useState([]);

const [bandera, setbandera] = useState(0);
// let bandera = 0;

const getTablas = async ()=>{
  const getdate = doc(db, "Jugadores", "PrimerJugador");
  const TablaOceano = await getDoc(getdate);
  //console.log("Oceano:", TablaOceano.data());
  setmyOcean(TablaOceano.data());

  const getAtac = doc(db, "Jugadores", "AtaquePrimerJugador");
  const MiTablaAtaques = await getDoc(getAtac);
  //console.log("Mis Ataques:", MiTablaAtaques.data());
  setmyAtacks(MiTablaAtaques.data());

  const getHisAtaq = doc(db, "Jugadores", "AtaqueSegundoJugador");
  const SuTablaAtaques = await getDoc(getHisAtaq);
  //console.log("Sus Ataques:", SuTablaAtaques.data());
  sethisAtacks(SuTablaAtaques);
}

useEffect(() => {
  const nada = onSnapshot(doc(db, "Jugadores", "PrimerJugador"), (doc) => {
    console.log("Current data: ", doc.data());
    getTablas();
  });
  return () => {
    nada();
  };
}, []);

  // useEffect(() => {
  //   getTablas();
  // }, []);

  return (
    <div
      className="w-100 d-flex justify-content-evenly align-items-center"
      style={{ height: "100vh" }}
    >
      <Tablero table={myOcean}/>
      <Tablero table={myAtacks}/>
      <FormAtaque />
    </div>
  );
};

export default PageTableroA;
