import React from "react";
import Imagencmessi from "../assets/messi.jpeg";
import Imagencjames from "../assets/james.jpg";
import Imagencvini from "../assets/vini.jpg";
import Imagencmusiala from "../assets/musiala.png";
import Imagencelamine from "../assets/lamine.webp";
import Imagencmbappe from "../assets/mbappe.webp";

const Jugadores = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold font-sans">MÁXIMAS FIGURAS</h1>
      <ul role="list" class="divide-y divide-gray-100 m-2">
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={Imagencmessi} alt="" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">LIONEL MESSI</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">Argentina</p>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Inter Miami</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">37 años</p>
          </div>
        </li>
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={Imagencjames} alt="" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">JAMES RODRIGUEZ</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">Colombia</p>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Sao Paulo</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">33 años</p>
          </div>
        </li>
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={Imagencvini} alt="" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">VINICIUS JUNIOR</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">Brasil</p>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Real Madrid</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">24 años</p>
          </div>
        </li>
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={Imagencmusiala} alt="" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">JAMAL MUSIALA</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">Alemania</p>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Bayern Munich</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">21 años</p>
          </div>
        </li>
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={Imagencmbappe} alt="" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">MBAPPE LOTTIN</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">Francia</p>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Paris Saint Germain</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">25 años</p>
          </div>
        </li>
        <li class="flex justify-between gap-x-6 py-5">
          <div class="flex min-w-0 gap-x-4">
            <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={Imagencelamine} alt="" />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">LAMINE YAMAL</p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">España</p>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">Barcelona</p>
            <p class="mt-1 text-xs leading-5 text-gray-500">17 años</p>
          </div>
        </li>
      </ul>

    </div>
  );
};

export default Jugadores;