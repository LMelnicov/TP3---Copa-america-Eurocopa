import React from "react";
import appFirebase from "../credenciales";
import { getAuth } from "firebase/auth";
import './output.css'; // Importa el archivo CSS directamente

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Copa America USA</h2>
                    <p className="mt-4 text-gray-500">
                    El torneo de 2024 contará con la participación de selecciones sudamericanas y también podría incluir equipos invitados de otras confederaciones. La competencia se extenderá por varias ciudades en EE.UU. y será una oportunidad para que los equipos sudamericanos jueguen en un entorno diferente y para que el público estadounidense disfrute del fútbol de alta calidad.
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Cantidad de equipos</dt>
                            <dd className="mt-2 text-sm text-gray-500">16 selecciones participan en esta copa</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Estadios</dt>
                            <dd className="mt-2 text-sm text-gray-500">Nissan Stadium (Nashville, Tennessee)Rose Bowl (Pasadena, California)Lumen Field (Seattle, Washington)Hard Rock Stadium (Miami, Florida)
Arrowhead Stadium (Kansas City, Missouri)</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Vigente Campeon</dt>
                            <dd className="mt-2 text-sm text-gray-500">Seleccion Argentina</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Inicio de la competencia</dt>
                            <dd className="mt-2 text-sm text-gray-500">
                            La primera edición de la Copa América, originalmente conocida como el Campeonato Sudamericano de Selecciones, se llevó a cabo en 1916. El torneo inaugural comenzó el 2 de julio de 1916 en Argentina, y se celebró en conmemoración del centenario de la independencia del país.</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">El maximo ganador</dt>
                            <dd className="mt-2 text-sm text-gray-500">Las seleciiones mas ganadoras son Argentina y Uruguay</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                            <dt className="font-medium text-gray-900">Proximo partido de la copa america</dt>
                            <dd className="mt-2 text-sm text-green-500">Argentina y Ecuador</dd>
                        </div>
                    </dl>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100" />
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100" />
                    <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100" />
                </div>
            </div>
        </div>
    );
}

export default Home;
