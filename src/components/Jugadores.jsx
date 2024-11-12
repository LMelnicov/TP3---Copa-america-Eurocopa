import React from "react";
import Slider from "react-slick";
import Imagencmessi from "../assets/messi.jpeg";
import Imagencjames from "../assets/james.jpg";
import Imagencvini from "../assets/vini.jpg";
import Imagencmusiala from "../assets/musiala.png";
import Imagencelamine from "../assets/lamine.webp";
import Imagencmbappe from "../assets/mbappe.webp";

// Configuración del carrusel
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Jugadores = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-center text-5xl font-bold text-white mb-12 font-sans shadow-lg">
        MÁXIMAS FIGURAS
      </h1>

      <Slider {...settings}>
        {[
          {
            name: "Lionel Messi",
            country: "Argentina - 37 años",
            team: "Inter Miami",
            img: Imagencmessi,
            description: "Considerado uno de los mejores futbolistas de todos los tiempos, con múltiples Balones de Oro y títulos internacionales.",
            titles: "7 Ballon d'Or, 4 Champions League, 1 Copa del Mundo",
            goals: "800+ goles en su carrera",
          },
          {
            name: "James Rodríguez",
            country: "Colombia - 33 años",
            team: "São Paulo",
            img: Imagencjames,
            description: "Centrocampista talentoso, famoso por su golazo en el Mundial 2014 y su habilidad para hacer jugadas espectaculares.",
            titles: "1 Copa América, 1 Champions League",
            goals: "130+ goles en su carrera",
          },
          {
            name: "Vinicius Junior",
            country: "Brasil - 24 años",
            team: "Real Madrid",
            img: Imagencvini,
            description: "Joven estrella brasileña conocida por su velocidad y habilidad de driblar, pieza clave en el Real Madrid.",
            titles: "1 Champions League, 1 La Liga",
            goals: "50+ goles en su carrera",
          },
          {
            name: "Jamal Musiala",
            country: "Alemania - 21 años",
            team: "Bayern Munich",
            img: Imagencmusiala,
            description: "Promesa alemana con gran capacidad técnica y visión de juego, jugando en uno de los clubes más importantes de Europa.",
            titles: "1 Bundesliga, 1 Champions League",
            goals: "20+ goles en su carrera",
          },
          {
            name: "Kylian Mbappé",
            country: "Francia - 25 años",
            team: "Paris Saint Germain",
            img: Imagencmbappe,
            description: "Uno de los futbolistas más rápidos y talentosos del mundo, campeón del mundo con Francia en 2018.",
            titles: "1 Copa del Mundo, 5 Ligue 1",
            goals: "300+ goles en su carrera",
          },
          {
            name: "Lamine Yamal",
            country: "España - 17 años",
            team: "Barcelona",
            img: Imagencelamine,
            description: "Joven prodigio español que rápidamente ha ganado protagonismo en el Barcelona, destacando por su agilidad y técnica.",
            titles: "Ninguno (promesa en ascenso)",
            goals: "10+ goles en su carrera",
          },
        ].map((jugador, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <img
                className="h-40 w-40 rounded-full border-4 border-blue-500 mb-4 shadow-lg transition-all transform hover:scale-110"
                src={jugador.img}
                alt={jugador.name}
              />
              <p className="text-2xl font-semibold text-gray-900">{jugador.name}</p>
              <p className="text-sm text-gray-600">{jugador.country}</p>
              <p className="mt-2 text-xl text-blue-600 font-medium">{jugador.team}</p>

              {/* Descripción adicional */}
              <div className="mt-4 text-gray-800 px-4">
                <p className="italic">{jugador.description}</p>
              </div>

              {/* Títulos y logros */}
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-900">Títulos:</p>
                <p className="text-sm text-gray-600">{jugador.titles}</p>
              </div>

              {/* Estadísticas de goles */}
              <div className="mt-2">
                <p className="text-lg font-semibold text-gray-900">Goles en carrera:</p>
                <p className="text-sm text-gray-600">{jugador.goals}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Jugadores;


