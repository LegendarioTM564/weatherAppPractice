import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { IconosDays } from "./IconosDays";

export const Card = ({ days }) => {
  return (
    <div className=" lg:flex lg:flex-row">
      {days.map((datos, index) => (
        <div
          key={index}
          className=" w-full my-3 shadow-xl   bg-gray-900 rounded-md bg-clip-padding backdrop-filter  bg-opacity-70 border border-gray-100 xl:mx-1 "
        >
          <div className="p-3 flex flex-col items-center  ">
            <h2 className="card-title text-2xl my-2">
              {format(new Date(datos.datetime), "EEEE", {
                locale: es,
              }).toUpperCase()}
            </h2>
            <img
              className="h-28 w-28 relative bottom-2"
              src={IconosDays(datos.icon)}
              alt="iconos"
            />

            <div className=" grid grid-cols-2 gap-1">
              <div className="badge badge-outline text-xl p-3 ">
                Max {datos.tempmax.toFixed(0)}&deg;
              </div>
              <div className="badge badge-outline text-xl p-3">
                Min {datos.tempmin.toFixed(0)}&deg;
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
