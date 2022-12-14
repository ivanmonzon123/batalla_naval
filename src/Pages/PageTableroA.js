import React from "react";
import Tablero from "../Componets/Tablero";
import FormAtaque from "../Componets/FormAtaque";
import { doc, onSnapshot, setDoc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConf";
import { useEffect, useState } from "react";
import ModalConf from "../Componets/ModalConf";
import { findWin } from "../Helpers/findWin";

function PageTableroA() {
  const [hisTable, sethisTable] = useState([]);
  const [myOcean, setmyOcean] = useState([]);
  const [myAtacks, setmyAtacks] = useState([]);
  const [controlButon, setcontrolButon] = useState(false);
  const [gane, setgane] = useState(false);
  const [gano, setgano] = useState(false);

  const getTablas = async () => {
    const getdate = doc(db, "Jugadores", "PrimerJugador");
    const TablaOceano = await getDoc(getdate);
    //console.log("Oceano:", TablaOceano.data());
    await setmyOcean(TablaOceano.data());
    await setgano(findWin(TablaOceano.data()));

    const getAtac = doc(db, "Jugadores", "AtaquePrimerJugador");
    const MiTablaAtaques = await getDoc(getAtac);
    //console.log("Mis Ataques:", MiTablaAtaques.data());
    await setmyAtacks(MiTablaAtaques.data());

    const getHisAtaq = doc(db, "Jugadores", "SegundoJugador");
    const SuTabla = await getDoc(getHisAtaq);
    //console.log("Sus Ataques:", SuTabla.data());
    await sethisTable(SuTabla.data());
    await setgane(findWin(SuTabla.data()));

    setcontrolButon(false);
  };

  useEffect(() => {
    const nada = onSnapshot(doc(db, "Jugadores", "PrimerJugador"), (doc) => {
      console.log("Current data: ", doc.data());
      getTablas();
      
    });
    const nope = onSnapshot(
      doc(db, "Jugadores", "AtaquePrimerJugador"),
      (doc) => {
        console.log("Current data: ", doc.data());
        getTablas();
        
      }
    );
    const fall = onSnapshot(doc(db, "Jugadores", "SegundoJugador"), (doc) => {
      setgane(findWin(doc.data()));
    });
    return () => {
      nada();
    };
  }, []);


  if (gane === true) {
    return <ModalConf show={true} mensaje={"Ganaste"} />;
  } else {
    if (gano === true) {
      return <ModalConf show={true} mensaje={"Perdiste"} />;
    } else {
      return (
        <div
          className="w-100 d-flex justify-content-evenly align-items-center"
          style={{ height: "100vh" }}
        >
          <Tablero table={myOcean} key={"tab1A"} />
          <Tablero table={myAtacks} key={"tab1B"} />
          <FormAtaque
            ataque={myAtacks}
            impacto={hisTable}
            user={"AtaquePrimerJugador"}
            enemy={"SegundoJugador"}
            controlButon={controlButon}
          />
        </div>
      );
    }
  }
}

export default PageTableroA;
