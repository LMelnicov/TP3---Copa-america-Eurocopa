import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import Slider from "react-slick";
import appFirebase from "../credenciales";
import Imagenc from "../assets/copa.webp";
import Imagenj from "../assets/jug.avif";
import Imagenm from "../assets/mascota.jpg";
import Imagence from "../assets/estadio.jpg";

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
    const navigate = useNavigate();

    const handleVerMas = () => {
        navigate('/jugadores');
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error("Error al cerrar sesión: ", error);
            });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-500 via-white-500 text-white">
            <div className="container mx-auto px-4 py-6">
                <button
                    className="btn btn-dark m-3 p-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-md shadow-md transition-all"
                    onClick={handleVerMas}
                >
                    Estadísticas sobre los jugadores
                </button>
                <form role="search" onSubmit={(e) => e.preventDefault()}>
                    <button
                        className="btn btn-dark position-absolute top-0 end-0 m-3 p-3 bg-red-600 hover:bg-red-700 rounded-md shadow-md transition-all"
                        style={{ width: '175px' }}
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </button>
                </form>

                <Slider {...settings}>
                    <div className="bg-trasparent rounded-lg shadow-xl overflow-hidden">
                        <div className="mx-auto max-w-2xl grid items-center gap-8 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Copa América USA 2024</h2>
                                <p className="mt-4 text-gray-500">
                                    El torneo de 2024 contará con la participación de selecciones sudamericanas, además de equipos invitados de otras confederaciones. La Copa América se jugará en varias ciudades de EE.UU., brindando una oportunidad única para que el público estadounidense disfrute del fútbol de alta calidad.
                                </p>
                                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Cantidad de equipos</dt>
                                        <dd className="mt-2 text-sm text-gray-500">16 selecciones participan en esta copa.</dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Estadios</dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            Nissan Stadium (Nashville), Rose Bowl (California), Lumen Field (Seattle), Hard Rock Stadium (Miami), Arrowhead Stadium (Kansas City).
                                        </dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Vigente Campeón</dt>
                                        <dd className="mt-2 text-sm text-gray-500">Selección Argentina</dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Inicio de la competencia</dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            La primera edición de la Copa América se celebró en 1916, conmemorando el centenario de la independencia de Argentina.
                                        </dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">El máximo ganador</dt>
                                        <dd className="mt-2 text-sm text-gray-500">Las selecciones más ganadoras son Argentina y Uruguay.</dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Próximo partido de la Copa América</dt>
                                        <dd className="mt-2 text-sm text-green-500">Argentina vs Ecuador</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="grid grid-cols-1">
                                <img
                                    src={Imagenm}
                                    alt="Mascota"
                                    className="rounded-lg bg-gray-100 object-cover w-full h-100 shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-trasparent rounded-lg shadow-xl overflow-hidden">
                        <div className="mx-auto max-w-2xl grid items-center gap-8 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Eurocopa 2024</h2>
                                <p className="mt-4 text-gray-500">
                                    La Eurocopa de 2024 se llevará a cabo en Alemania, con la participación de las mejores selecciones europeas. Será un torneo de alto nivel con equipos luchando por el título en varios estadios de renombre en todo el país.
                                </p>
                                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Cantidad de equipos</dt>
                                        <dd className="mt-2 text-sm text-gray-500">24 selecciones participan en esta copa.</dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Estadios</dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            Borussia Park (Mönchengladbach), Allianz Arena (Múnich), Mercedes-Benz Arena (Stuttgart), entre otros.
                                        </dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Vigente Campeón</dt>
                                        <dd className="mt-2 text-sm text-gray-500">Selección de Italia</dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Inicio de la competencia</dt>
                                        <dd className="mt-2 text-sm text-gray-500">
                                            La primera edición de la Eurocopa se celebró en 1960, y desde entonces ha sido un torneo muy esperado en Europa.
                                        </dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">El máximo ganador</dt>
                                        <dd className="mt-2 text-sm text-gray-500">Selección de Alemania (tres títulos).</dd>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">Próximo partido de la Eurocopa</dt>
                                        <dd className="mt-2 text-sm text-green-500">España vs Polonia</dd>
                                    </div>
                                </dl>
                            </div>
                            <div className="grid grid-cols-1">
                                <img
                                    src={Imagence}
                                    alt="Estadio"
                                    className="rounded-lg bg-white-100 object-cover w-full h-100 shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Home;



