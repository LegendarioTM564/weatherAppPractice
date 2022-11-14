import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Iconos } from "./components/Iconos";
import {
  Despejado1,
  Despejado2,
  Despejado3,
  Despejado4,
  Despejado5,
  Lluvia1,
  Lluvia2,
  Lluvia3,
  Lluvia4,
  Lluvia5,
  Nublado1,
  Nublado2,
  Nublado3,
  Nublado4,
  Nublado5,
  Nieve1,
  Nieve2,
  Nieve3,
  Nieve4,
  Nieve5,
  NocheDespejada1,
  NocheDespejada5,
  NocheDespejada2,
  NocheDespejada3,
  NocheDespejada4,
} from "./assets/WeatherImg";
import backGround from "/images/backGround.jpg";
import humedad from "../public/icons/Humedad.svg";
import termometro from "../public/icons/Termometro.svg";
import viento from "../public/icons/Viento.svg";
import visibilidad from "../public/icons/Visibilidad.svg";
import { Card } from "./components/Card";

function App() {
  const backgroundImgs = {
    Despejado: [
      Despejado1(),
      Despejado2(),
      Despejado3(),
      Despejado4(),
      Despejado5(),
    ],
    Lluvia: [Lluvia1(), Lluvia2(), Lluvia3(), Lluvia4(), Lluvia5()],
    Nublado: [Nublado1(), Nublado2(), Nublado3(), Nublado4(), Nublado5()],
    Nieve: [Nieve1(), Nieve2(), Nieve3(), Nieve4(), Nieve5()],
    NocheDespejada: [
      NocheDespejada1(),
      NocheDespejada2(),
      NocheDespejada3,
      NocheDespejada4,
      NocheDespejada5(),
    ],
  };

  const [busqueda, setBusqueda] = useState("");
  const [valor, setValor] = useState("");
  const [days, setDays] = useState([]);
  const [daysIcons, setDaysIcons] = useState("");
  let [icono, setIcono] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [backImg, setBackImg] = useState(backGround);

  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${busqueda}/next5days?unitGroup=metric&lang=es&contentType=json&key=${
    import.meta.env.VITE_API_KEY
  }`;

  const HoraURL = `https://timezone.abstractapi.com/v1/current_time/?api_key=${
    import.meta.env.VITE_API_KEY_HOURS
  }&location=${busqueda}`;

  const getData = async () => {
    const respuesta = await axios.get(URL);
    const respuestatiempo = await axios.get(HoraURL);

    if (respuesta.status >= 400) {
      setValor(false);
    } else {
      setTimeZone(respuestatiempo.data.datetime);
      setIcono(respuesta.data.currentConditions.icon);
      setValor(respuesta.data);
      setDays(respuesta.data.days.splice(2, 5));
    }
  };

  useEffect(() => {
    if (busqueda.length) {
      getData();
    }
  }, [busqueda]);

  useEffect(() => {
    switch (icono) {
      case "clear-day":
        setBackImg(backgroundImgs.Despejado[Math.floor(Math.random() * 2.99)]);
        break;
      case "rain":
        setBackImg(backgroundImgs.Lluvia[Math.floor(Math.random() * 2.99)]);
        break;
      case "snow":
        setBackImg(backgroundImgs.Nieve[Math.floor(Math.random() * 2.99)]);
        break;
      case "thunderstorm":
        setBackImg(backgroundImgs.Lluvia[Math.floor(Math.random() * 2.99)]);
        break;
      case "cloudy":
        setBackImg(backgroundImgs.Nublado[Math.floor(Math.random() * 2.99)]);
        break;
      case "partly-cloudy-day":
        setBackImg(backgroundImgs.Nublado[Math.floor(Math.random() * 2.99)]);

        break;
      case "partly-cloudy-night":
        setBackImg(backgroundImgs.Nublado[Math.floor(Math.random() * 2.99)]);
        break;
      case "fog":
        setBackImg(backgroundImgs.Nublado[Math.floor(Math.random() * 2.99)]);
        break;
      case "drizzle":
        setBackImg(backgroundImgs.Lluvia[Math.floor(Math.random() * 2.99)]);
        break;
      case "haze":
        icono = "icons/Bruma.svg";
        break;
      case "smoke":
        icono = "icons/Humo.svg";
        break;
      case "clear-night":
        setBackImg(
          backgroundImgs.NocheDespejada[Math.floor(Math.random() * 2.99)]
        );
        break;
      default:
        break;
    }
  }, [icono]);

  const handleBusqueda = (e) => {
    if (e.key === "Enter") {
      setBusqueda(e.target.value);
    }
  };

  return (
    <div
      className="main w-full h-screen flex flex-col items-center justify-center px-4 lg:px-0  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <h1 className=" text-gray-800 text-4xl my-5 font-bold underline xl:text-6xl">
        Weather App
      </h1>
      <div className=" flex justify-center w-full m-5">
        <input
          type="text"
          placeholder="Buscar Ciudad"
          className=" text-center input input-bordered md:w-[60%] lg:w-[30%] xl:w-[30%]"
          onKeyDown={handleBusqueda}
          autoFocus
        />
      </div>

      {/* Card */}
      {valor ? (
        <div className="Card text-white w-full max-w-[450px] max-h-[580px] overflow-auto shadow-xl rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border bg-gray-100 border-gray-100 py-6 px-2 lg:max-w-[950px] lg:max-h-[750px] xl:py-3 xl:max-w-[1250px] 2xl:max-w-[1100px]">
          
          {/* Card Top */}
          <div className="CardTop flex flex-col items-center ">
            <div className="flex flex-col items-center w-full  shadow-xl bg-gray-900 rounded-md bg-clip-padding backdrop-filter  bg-opacity-70 border border-gray-100 xl:h-[120px] xl:my-2  ">
              <h1 className="  text-4xl font-bold my-5 lg:text-6xl xl:my-3 ">
                {valor.address.toUpperCase()}
              </h1>

              <div className="flex flex-col w-full items-center md:flex-row md:justify-center">
                <h2 className="text-[18px] mx-2 lg:text-xl xl:text-2xl">
                  {format(new Date(timeZone), "eeee d MMM", {
                    locale: es,
                  }).toUpperCase()}
                </h2>
                <h2 className="text-[18px] lg:text-xl xl:text-2xl">
                  {format(new Date(timeZone), "kk:mm a", { locale: es })}
                </h2>
              </div>
            </div>

            {/* Tiempo */}
            <div className="flex flex-wrap justify-center md:flex-wrap md:justify-center lg:flex lg:justify-start lg:mt-3 lg:flex-nowrap lg:w-full lg:shadow-xl bg-gray-900 rounded-md bg-clip-padding backdrop-filter bg-opacity-70 border border-gray-100 xl:my-1  xl:h-[300px]">
              <img className="h-32 md:h-52" src={Iconos(icono)} alt="iconos" />
              <p className=" text-5xl self-end md:text-7xl lg:self-center">
                {valor.currentConditions.temp.toFixed(0)}&deg;
              </p>
              
              {/* Card Conditions */}
              <div className="flex flex-col my-3 items-center py-3  md:w-full lg:border-l-2 ">
                <h2 className="text-3xl my-4  border-b-2  md:text-5xl md:uppercase lg:hidden">
                  Condiciones
                </h2>

                <div className="grid grid-cols-2 text-[17px] w-full md:text-2xl lg:text-[30px] xl:text-[40px]">
                  <div className="flex flex-col ">
                    <div className="lg:flex lg:ml-8 ">
                      
                      <h2 className="mx-2 md:ml-8 lg:self-center lg:mx-0 ">
                        Max: {valor.days[0].tempmax.toFixed(0)}
                      </h2>
                      <img
                        className="hidden lg:block lg:h-24 lg:relative lg:-ml-8 "
                        src={termometro}
                        alt=""
                      />
                    </div>

                    <div className="lg:flex lg:ml-8">
                      
                      <h2 className="mx-2 md:ml-8 lg:self-center lg:mx-0 ">
                        Min: {valor.days[0].tempmin.toFixed(0)}
                      </h2>
                      <img
                        className="hidden lg:block lg:h-24 lg:relative lg:-ml-8 "
                        src={termometro}
                        alt=""
                      />
                    </div>

                    <div className="lg:flex lg:ml-8">
                      
                      <h2 className="mx-2 md:ml-8 lg:self-center lg:mx-0 ">
                        S. Termica:
                        {valor.currentConditions.feelslike.toFixed(0)}
                      </h2>
                      <img
                        className="hidden lg:block lg:h-24 lg:relative lg:-ml-8 "
                        src={termometro}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="flex flex-col lg: ">
                    <div className="lg:flex lg:justify-center lg:h-[96px]">
                      
                      <img
                        className="hidden lg:block lg:h-14 lg:w-12 lg:self-center lg:-ml-4 xl:-ml-24 "
                        src={visibilidad}
                        alt=""
                      />
                      <h2 className="lg:self-center lg:ml-2 ">
                        Visibilidad:
                        {valor.currentConditions.visibility.toFixed(0)}Km
                      </h2>
                    </div>

                    <div className="lg:flex">
                      
                      <img
                        className="hidden lg:block lg:h-24 lg:relative  lg:self-center lg:-ml-7 "
                        src={humedad}
                        alt=""
                      />
                      <h2 className="lg:self-center lg:-ml-4">
                        
                        Humedad: {valor.currentConditions.humidity.toFixed(0)}%
                      </h2>
                    </div>

                    <div className="lg:flex lg:mt-5">
                      
                      <img
                        className="hidden lg:block lg:h-[58px] lg:self-center lg:-ml-1"
                        src={viento}
                        alt=""
                      />
                      <h2 className=" lg:self-center ">
                        Viento: {valor.currentConditions.windspeed}Km
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Body */}

          <div className=" flex justify-center w-full my-3 lg:my-0 xl:my-0">
            {" "}
            <h2 className="text-3xl underline uppercase lg:hidden xl:hidden">
              Proximos Días
            </h2>
          </div>
          <Card days={days} />
        </div>
      ) : (
        <div>
          <h2 className=" text-white text-2xl font-semibold">Ingrese una Ciudad</h2>
        </div>
      )}
    </div>
  );
}

export default App;
