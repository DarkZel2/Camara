-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-10-2024 a las 18:09:47
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_camara_v2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adicionales_details`
--

CREATE TABLE `adicionales_details` (
  `DetailsID` int(11) NOT NULL,
  `CaracteristicasID` int(11) DEFAULT NULL,
  `AdicionalesID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `adicionales_details`
--

INSERT INTO `adicionales_details` (`DetailsID`, `CaracteristicasID`, `AdicionalesID`) VALUES
(2, 1, 2),
(3, 1, 3),
(5, 1, 5),
(6, 1, 6),
(7, 1, 7),
(8, 1, 16),
(9, 1, 18),
(10, 1, 19),
(11, 1, 20),
(12, 1, 12),
(13, 2, 2),
(14, 2, 3),
(15, 2, 5),
(16, 2, 6),
(17, 2, 7),
(18, 2, 12),
(19, 2, 16),
(20, 2, 18),
(21, 2, 19),
(22, 2, 20),
(23, 3, 2),
(24, 3, 3),
(25, 3, 5),
(26, 3, 6),
(27, 3, 7),
(28, 3, 12),
(29, 3, 16),
(30, 3, 18),
(31, 3, 19),
(32, 3, 20),
(33, 4, 2),
(34, 4, 3),
(35, 4, 5),
(36, 4, 6),
(37, 4, 7),
(38, 4, 12),
(39, 4, 16),
(40, 4, 18),
(41, 4, 19),
(42, 4, 20),
(43, 5, 2),
(44, 5, 3),
(45, 5, 5),
(46, 5, 6),
(47, 5, 7),
(48, 5, 12),
(49, 5, 16),
(50, 5, 18),
(51, 5, 19),
(52, 5, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adicionales_salones`
--

CREATE TABLE `adicionales_salones` (
  `AdicionalesID` int(11) NOT NULL,
  `Description` text DEFAULT NULL,
  `InterPrice` int(11) DEFAULT 0,
  `ExterPrice` int(11) NOT NULL DEFAULT 0,
  `ImgDescriptiva` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `adicionales_salones`
--

INSERT INTO `adicionales_salones` (`AdicionalesID`, `Description`, `InterPrice`, `ExterPrice`, `ImgDescriptiva`) VALUES
(2, 'Sonido Profesional', 1200000, 1200000, '/img/icons/sonido_pro'),
(3, 'Acceso a sonido externo', 120000, 120000, '/img/icons/sonido_ex'),
(5, 'Manteles Grandes', 11000, 18000, '/img/icons/manteles'),
(6, 'Máquina para hacer Raspados', 30000, 30000, '/img/icons/maquina'),
(7, 'Tapas para Manteles', 5000, 8000, ''),
(12, 'Apartaestudio', 150000, 220000, ''),
(16, 'Pantalla LED', 1200000, 1200000, ''),
(18, 'Tarima Grande', 500000, 700000, ''),
(19, 'Carpa 3x3', 80000, 100000, ''),
(20, 'Carpa 4x4', 100000, 120000, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `capacidad_salones`
--

CREATE TABLE `capacidad_salones` (
  `CapacidadID` int(11) NOT NULL,
  `Sociales` text DEFAULT NULL,
  `Empresariales` text DEFAULT NULL,
  `ImgSocial` text NOT NULL,
  `ImgEmpresarial` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `capacidad_salones`
--

INSERT INTO `capacidad_salones` (`CapacidadID`, `Sociales`, `Empresariales`, `ImgSocial`, `ImgEmpresarial`) VALUES
(1, '120 Personas', '180 Personas', '/img/icons/social', '/img/icons/empresarial'),
(2, '400 Personas', '1.300 Personas', '/img/icons/social', '/img/icons/empresarial'),
(3, '600 Personas', 'Igual que el evento Social', '/img/icons/social', '/img/icons/empresarial'),
(4, '35 Personas', '16 Personas', '/img/icons/social', '/img/icons/empresarial'),
(5, '15 Personas\r\n', '20 Personas\r\n', '/img/icons/social', '/img/icons/empresarial');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caracteristicas_salones`
--

CREATE TABLE `caracteristicas_salones` (
  `CaracteristicasID` int(11) NOT NULL,
  `Disponibilidad` text DEFAULT NULL,
  `CapacidadID` int(11) DEFAULT NULL,
  `ImgDisponibilidad` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `caracteristicas_salones`
--

INSERT INTO `caracteristicas_salones` (`CaracteristicasID`, `Disponibilidad`, `CapacidadID`, `ImgDisponibilidad`) VALUES
(1, 'Lunes - Domingo', 1, '/img/icons/calendario'),
(2, 'Lunes - Domingo', 2, '/img/icons/calendario'),
(3, 'Lunes - Domingo', 3, '/img/icons/calendario'),
(4, 'Lunes - Domingo', 4, '/img/icons/calendario'),
(5, 'Lunes - Domingo\r\n', 5, '/img/icons/calendario\r\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cotizacion_salones`
--

CREATE TABLE `cotizacion_salones` (
  `CotizacionID` int(11) NOT NULL,
  `Date` text NOT NULL,
  `HourI` text NOT NULL,
  `HourE` text NOT NULL,
  `PeopleNum` int(11) NOT NULL,
  `EventType` text NOT NULL,
  `Activity` text NOT NULL,
  `EventCharacter` text NOT NULL,
  `Name` text NOT NULL,
  `Phone` text NOT NULL,
  `Email` text NOT NULL,
  `PersonType` text NOT NULL,
  `Nit` text NOT NULL DEFAULT 'No aplica',
  `Company` text NOT NULL DEFAULT 'No aplica',
  `Tel` text NOT NULL DEFAULT 'No aplica',
  `Address` text NOT NULL,
  `Country` text NOT NULL,
  `Services` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Logistic` text NOT NULL,
  `TimePrice` int(11) NOT NULL DEFAULT 0,
  `ServicesPrice` int(11) NOT NULL DEFAULT 0,
  `TotalPrice` int(11) NOT NULL DEFAULT 0,
  `Estado` text NOT NULL DEFAULT 'En espera'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cotizacion_salones`
--

INSERT INTO `cotizacion_salones` (`CotizacionID`, `Date`, `HourI`, `HourE`, `PeopleNum`, `EventType`, `Activity`, `EventCharacter`, `Name`, `Phone`, `Email`, `PersonType`, `Nit`, `Company`, `Tel`, `Address`, `Country`, `Services`, `Logistic`, `TimePrice`, `ServicesPrice`, `TotalPrice`, `Estado`) VALUES
(1, '2024-10-20', '8:00 PM', '10:00 PM', 100, 'Social', 'Cumpleaños', 'Privado con asistentes de un solo tipo o afinidad definida', 'Andres', '3122225555', 'sartunduaga2005@gmail.com', 'PersonaNatural', 'No aplica', 'No aplica', 'No aplica', 'Cra 5', 'Ibagué', '[ 2000, 120000 ]', 'No', 368000, 122000, 490000, 'Aceptada'),
(2, '2024-10-25', '8:00 PM', '10:00 PM', 100, 'Social', 'Cumpleaños', 'Privado con asistentes de un solo tipo o afinidad definida', 'Andres', '3122225555', 'sartunduaga2005@gmail.com', 'PersonaNatural', 'No aplica', 'No aplica', 'No aplica', 'Cra 5', 'Ibagué', '[ 2000, 120000 ]', 'No', 368000, 122000, 490000, 'Aceptada'),
(3, '2024-10-27', '7:00 AM', '11:00 AM', 0, '${eventType}', '${activity}', '${eventCharacter}', '${name}', '${phone}', '${email}', '${personType}', '${nit}', '${reason}', '${tel}', '${address}', '${country}', '[65416, 6516]', '${logistic}', 0, 0, 0, 'Denegada'),
(8, '2024-10-29', '8:00 AM', '10:00 AM', 95, 'Social', 'Bautizo', 'Privado con asistentes de un solo tipo o afinidad definida', 'Yohan', '3122225555', 'correo@ejemplo.com', 'Persona Natural', 'No aplica', 'No aplica', 'No aplica', 'Cra 5', 'Ibagué', '\'Mesas RIMAX\', \'Manteles Grandes\'', 'No', 328000, 13000, 341000, 'Aceptada'),
(11, '2024-10-15', '3:00 PM', '8:00 PM', 50, 'Social', 'Cumpleaños', 'Privado con asistentes de un solo tipo o afinidad definida', 'Andres', '3212215242', 'correo@ejemplo.com', 'Persona Natural', 'No aplica', 'No aplica', 'No aplica', 'Cra 5', 'Ibagué', 'Mesas RIMAX, Sonido Profesional', 'Si', 0, 0, 0, 'En espera'),
(27, '2024-10-22', '6:00 AM', '10:00 AM', 321, 'Social', 'Bautizo', 'Abierta a todo tipo de público mezclado en un único escenario', 'Catufa', '3122225555', 'soli@tud.com', 'Persona Natural', 'No aplica', 'No aplica', 'No aplica', 'Cra 5', 'Purificación', '2000,11000', 'Si', 656000, 13000, 669000, 'En espera'),
(28, '2024-10-31', '9:00 AM', '10:00 AM', 100, 'Social', 'Grados', 'Abierta a todo tipo de público en varios escenarios', 'Yohan', '3122225555', 'sartunduaga2005@gmail.com', 'Persona Natural', 'No aplica', 'No aplica', 'No aplica', 'Cra 5', 'Ibagué', '30000,1200000,80000', 'Si', 164000, 1310000, 1474000, 'Denegada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalles_salones`
--

CREATE TABLE `detalles_salones` (
  `SalonID` int(11) NOT NULL,
  `TarjetaID` int(11) DEFAULT NULL,
  `CaracteristicasID` int(11) DEFAULT NULL,
  `PriceID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalles_salones`
--

INSERT INTO `detalles_salones` (`SalonID`, `TarjetaID`, `CaracteristicasID`, `PriceID`) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 3),
(4, 4, 4, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos_detalles`
--

CREATE TABLE `eventos_detalles` (
  `EventsID` int(11) NOT NULL,
  `Title` text NOT NULL,
  `InitHour` text NOT NULL,
  `EndHour` text NOT NULL,
  `TarjetaID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos_salones`
--

CREATE TABLE `eventos_salones` (
  `EventoID` int(11) NOT NULL,
  `Day` int(11) NOT NULL,
  `Month` int(11) NOT NULL,
  `Year` int(11) NOT NULL,
  `InitHour` text NOT NULL,
  `EndHour` text NOT NULL,
  `TarjetaID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos_salones`
--

INSERT INTO `eventos_salones` (`EventoID`, `Day`, `Month`, `Year`, `InitHour`, `EndHour`, `TarjetaID`) VALUES
(1, 17, 9, 2024, '12:00 PM', '1:00 PM', 1),
(2, 19, 9, 2024, '8:00 PM', '10:00 PM', 1),
(3, 20, 9, 2024, '8:00 AM', '10:00 AM', 5),
(4, 16, 9, 2024, '11:00 AM', '1:00 PM', 3),
(5, 15, 9, 2024, '6:00 PM', '10:00 PM', 2),
(6, 20, 10, 2024, '7:00 PM', '8:00 PM', 1),
(16, 13, 10, 2024, '12:00 PM', '4:00 PM', 1),
(17, 23, 10, 2024, '10:00 AM', '2:00 PM', 1),
(18, 26, 10, 2024, '9:00 AM', '11:00 AM', 1),
(19, 31, 10, 2024, '8:00 PM', '12:00 AM', 1),
(20, 1, 11, 2024, '6:00 AM', '10:00 AM', 1),
(21, 2, 11, 2024, '8:00 PM', '12:00 AM', 1),
(22, 29, 10, 2024, '5:00 AM', '10:00 AM', 1),
(23, 9, 11, 2024, '6:00 PM', '10:00 PM', 1),
(24, 29, 10, 2024, '6:00 AM', '9:00 AM', 1),
(25, 29, 10, 2024, '6:00 AM', '9:00 AM', 1),
(26, 23, 10, 2024, '6:00 AM', '10:00 AM', 1),
(27, 23, 10, 2024, '9:00 AM', '11:00 AM', 1),
(28, 22, 10, 2024, '7:00 AM', '9:00 AM', 1),
(29, 23, 10, 2024, '7:00 AM', '8:00 AM', 1),
(30, 16, 10, 2024, '5:00 AM', '8:00 AM', 1),
(31, 22, 10, 2024, '6:00 AM', '10:00 AM', 1),
(32, 31, 10, 2024, '9:00 AM', '10:00 AM', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horas_salones`
--

CREATE TABLE `horas_salones` (
  `HorasID` int(11) NOT NULL,
  `AfiliadoID` int(11) DEFAULT NULL,
  `ParticularID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `horas_salones`
--

INSERT INTO `horas_salones` (`HorasID`, `AfiliadoID`, `ParticularID`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hora_salones`
--

CREATE TABLE `hora_salones` (
  `HoraID` int(11) NOT NULL,
  `Lunes` int(11) DEFAULT 0,
  `Martes` int(11) NOT NULL DEFAULT 0,
  `Miercoles` int(11) NOT NULL DEFAULT 0,
  `Jueves` int(11) NOT NULL DEFAULT 0,
  `Viernes` int(11) DEFAULT 0,
  `Sabado` int(11) NOT NULL DEFAULT 0,
  `Domingo` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hora_salones`
--

INSERT INTO `hora_salones` (`HoraID`, `Lunes`, `Martes`, `Miercoles`, `Jueves`, `Viernes`, `Sabado`, `Domingo`) VALUES
(1, 164000, 164000, 164000, 164000, 184000, 184000, 184000),
(2, 225000, 225000, 225000, 225000, 260000, 260000, 260000),
(3, 200000, 200000, 200000, 200000, 250000, 250000, 250000),
(4, 70000, 70000, 70000, 70000, 100000, 100000, 100000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `OrderID` int(11) NOT NULL,
  `UserID` char(10) NOT NULL,
  `TarjetaID` int(11) NOT NULL,
  `CotizacionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`OrderID`, `UserID`, `TarjetaID`, `CotizacionID`) VALUES
(1, '123', 1, 1),
(2, '1108', 2, 2),
(7, '999', 3, 3),
(8, '47', 1, 8),
(10, '123', 1, 11),
(18, '132', 1, 27),
(19, '123', 1, 28);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `price_afiliado`
--

CREATE TABLE `price_afiliado` (
  `AfiliadoID` int(11) NOT NULL,
  `Week` int(11) DEFAULT 0,
  `Weekend` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `price_afiliado`
--

INSERT INTO `price_afiliado` (`AfiliadoID`, `Week`, `Weekend`) VALUES
(1, 878000, 1010000),
(2, 1380000, 1800000),
(3, 1350000, 1775000),
(4, 450000, 650000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `price_particular`
--

CREATE TABLE `price_particular` (
  `ParticularID` int(11) NOT NULL,
  `Week` int(11) DEFAULT 0,
  `Weekend` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `price_particular`
--

INSERT INTO `price_particular` (`ParticularID`, `Week`, `Weekend`) VALUES
(1, 1145000, 1145000),
(2, 1450000, 1980000),
(3, 1420000, 1950000),
(4, 540000, 750000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `price_salones`
--

CREATE TABLE `price_salones` (
  `PriceID` int(11) NOT NULL,
  `HoraID` int(11) DEFAULT NULL,
  `HorasID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `price_salones`
--

INSERT INTO `price_salones` (`PriceID`, `HoraID`, `HorasID`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios_details`
--

CREATE TABLE `servicios_details` (
  `DetailsID` int(11) NOT NULL,
  `CaracteristicasID` int(11) DEFAULT NULL,
  `ServiciosID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios_details`
--

INSERT INTO `servicios_details` (`DetailsID`, `CaracteristicasID`, `ServiciosID`) VALUES
(2, 1, 2),
(3, 1, 3),
(4, 1, 4),
(6, 2, 2),
(8, 2, 6),
(9, 2, 3),
(10, 2, 7),
(11, 3, 2),
(13, 3, 8),
(14, 3, 3),
(15, 4, 9),
(16, 4, 2),
(18, 4, 3),
(19, 4, 10),
(20, 1, 11),
(21, 2, 11),
(22, 3, 11),
(23, 4, 11),
(24, 5, 11),
(25, 5, 12),
(26, 5, 2),
(27, 5, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios_salones`
--

CREATE TABLE `servicios_salones` (
  `ServiciosID` int(11) NOT NULL,
  `Description` text DEFAULT NULL,
  `ImgDescriptiva` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios_salones`
--

INSERT INTO `servicios_salones` (`ServiciosID`, `Description`, `ImgDescriptiva`) VALUES
(2, 'Acceso a Parqueadero', '/img/icons/parqueadero'),
(3, 'Ayudas Audiovisuales', '/img/icons/audiovisual'),
(4, '200 Sillas RIMAX o 180 Sillas Interlocutoras', '/img/icons/silla'),
(6, '60 Ventiladores', '/img/icons/ventiladores'),
(7, '400 Sillas RIMAX o 150 Sillas Interlocutoras', '/img/icons/silla'),
(8, '400 Sillas RIMAX  sin Brazo', '/img/icons/sillaSin'),
(9, 'Mesa Ovalada con Capacidad para 16 Personas', '/img/icons/mesaO'),
(10, 'Aire Acondicionado', '/img/icons/aire'),
(11, 'Conectividad WIFI', '/img/icons/wifi'),
(12, '20 Sillas Académicas', '/img/icons/sillaA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tarjetas_salones`
--

CREATE TABLE `tarjetas_salones` (
  `TarjetaID` int(11) NOT NULL,
  `Name` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Img1` text DEFAULT NULL,
  `Img2` text DEFAULT NULL,
  `Img3` text DEFAULT NULL,
  `Img4` text DEFAULT NULL,
  `ImgPlano` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tarjetas_salones`
--

INSERT INTO `tarjetas_salones` (`TarjetaID`, `Name`, `Description`, `Img1`, `Img2`, `Img3`, `Img4`, `ImgPlano`) VALUES
(1, 'Auditorio Presidentes', 'Un salón muy amplio y fresco.', 'https://articles-img.sftcdn.net/t_articles/auto-mapping-folder/sites/2/2023/01/rio-mont-saint-michel.jpg', 'https://www.ifam.es/colombia/wp-content/uploads/sites/13/2015/08/imagenes-de-paisajes-hermosos-4.jpg', 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg', '/img/presidentes/plano'),
(2, 'Auditorio Empresarial', 'Recién renovado.', 'https://articles-img.sftcdn.net/t_articles/auto-mapping-folder/sites/2/2023/01/rio-mont-saint-michel.jpg', 'https://www.ifam.es/colombia/wp-content/uploads/sites/13/2015/08/imagenes-de-paisajes-hermosos-4.jpg', 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg', '/img/empresarial/plano'),
(3, 'Plazoleta Eduardo Aldana', 'Tiene bastante espacio, muy optimo para grandes cantidades de personas.', 'https://articles-img.sftcdn.net/t_articles/auto-mapping-folder/sites/2/2023/01/rio-mont-saint-michel.jpg', 'https://www.ifam.es/colombia/wp-content/uploads/sites/13/2015/08/imagenes-de-paisajes-hermosos-4.jpg', 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg', '/img/aldana/plano'),
(4, 'Salón Luis Umaña Peñuela', 'Un salón muy amplio perfecto para reuniones familiares o sociales.', 'https://articles-img.sftcdn.net/t_articles/auto-mapping-folder/sites/2/2023/01/rio-mont-saint-michel.jpg', 'https://www.ifam.es/colombia/wp-content/uploads/sites/13/2015/08/imagenes-de-paisajes-hermosos-4.jpg', 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg', '/img/umaña/plano'),
(5, 'Salón Catufa', 'Salón pequeño pero muy cómodo, es perfecto para reuniones empresariales.', 'https://articles-img.sftcdn.net/t_articles/auto-mapping-folder/sites/2/2023/01/rio-mont-saint-michel.jpg', 'https://www.ifam.es/colombia/wp-content/uploads/sites/13/2015/08/imagenes-de-paisajes-hermosos-4.jpg', 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg', 'https://thumbs.dreamstime.com/b/paisajes-de-yosemite-46208063.jpg', '/img/catufa/plano');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` char(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `access` set('user','superAdmin','report','admin') NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `email`, `access`, `password`) VALUES
('1108', 'Yohan', 'sartunduaga2005@gmail.com', 'user', '$2a$05$jGUpyn/uWE.O7rhJD.PkCu2S.cda28PF6e1Aca6Ce3yNaH2iQZ9pi'),
('123', 'a', 'sartunduaga2005@gmail.com', 'user', '$2a$05$P2KT55QbaXT09iK/VlafueZfAWMi02wgTnBfNe/RK3HPK3mnlEOH2'),
('132', 'e', 'yo@yo.com', 'admin', '$2a$05$x4JhRgnHn/EKeE/nSeeUnu6e8rNqpoClVdKThzyFZ7gAbeDY8AMKq'),
('312', 'e', 'yo@yo.com', 'report', '$2a$05$x4JhRgnHn/EKeE/nSeeUnu6e8rNqpoClVdKThzyFZ7gAbeDY8AMKq'),
('321', 'e', 'yo@yo.com', 'superAdmin', '$2a$05$x4JhRgnHn/EKeE/nSeeUnu6e8rNqpoClVdKThzyFZ7gAbeDY8AMKq'),
('47', 'solicitud', 'soli@tud.com', 'admin', '$2a$05$CYk/8du6lEZ0f/M0shUxROMqnen2D8EnmuL0iuIBlIi4tvrwRnE3m'),
('65631', 'sandra', 'scaste@gmail.com', 'user', '$2a$05$2l3Qy4V0VQzauYDWGCxqneHk7X8UrHLMPLQklM7KCkTxdhlELhDla'),
('999', 'json', 'si@yo.com', 'user', '$2a$05$mYmUb9p7ZcwDaagQRIgSQ.laSO5qMaFjddrVawSKZAEjZtEHdwmKK');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `adicionales_details`
--
ALTER TABLE `adicionales_details`
  ADD PRIMARY KEY (`DetailsID`),
  ADD KEY `AdicionalesID` (`AdicionalesID`),
  ADD KEY `CaracteristicasID` (`CaracteristicasID`);

--
-- Indices de la tabla `adicionales_salones`
--
ALTER TABLE `adicionales_salones`
  ADD PRIMARY KEY (`AdicionalesID`);

--
-- Indices de la tabla `capacidad_salones`
--
ALTER TABLE `capacidad_salones`
  ADD PRIMARY KEY (`CapacidadID`);

--
-- Indices de la tabla `caracteristicas_salones`
--
ALTER TABLE `caracteristicas_salones`
  ADD PRIMARY KEY (`CaracteristicasID`),
  ADD KEY `CapacidadID` (`CapacidadID`);

--
-- Indices de la tabla `cotizacion_salones`
--
ALTER TABLE `cotizacion_salones`
  ADD PRIMARY KEY (`CotizacionID`),
  ADD KEY `Date` (`Date`(768)),
  ADD KEY `Estado` (`Estado`(768));

--
-- Indices de la tabla `detalles_salones`
--
ALTER TABLE `detalles_salones`
  ADD PRIMARY KEY (`SalonID`),
  ADD KEY `CaracteristicasID` (`CaracteristicasID`),
  ADD KEY `PriceID` (`PriceID`),
  ADD KEY `TarjetaID` (`TarjetaID`);

--
-- Indices de la tabla `eventos_detalles`
--
ALTER TABLE `eventos_detalles`
  ADD PRIMARY KEY (`EventsID`),
  ADD UNIQUE KEY `Hour` (`InitHour`,`TarjetaID`) USING HASH;

--
-- Indices de la tabla `eventos_salones`
--
ALTER TABLE `eventos_salones`
  ADD PRIMARY KEY (`EventoID`),
  ADD KEY `TarjetaID` (`TarjetaID`);

--
-- Indices de la tabla `horas_salones`
--
ALTER TABLE `horas_salones`
  ADD PRIMARY KEY (`HorasID`),
  ADD KEY `AfiliadoID` (`AfiliadoID`),
  ADD KEY `ParticularID` (`ParticularID`);

--
-- Indices de la tabla `hora_salones`
--
ALTER TABLE `hora_salones`
  ADD PRIMARY KEY (`HoraID`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `UserID` (`UserID`) USING BTREE,
  ADD KEY `TarjetaID` (`TarjetaID`),
  ADD KEY `CotizacionID` (`CotizacionID`);

--
-- Indices de la tabla `price_afiliado`
--
ALTER TABLE `price_afiliado`
  ADD PRIMARY KEY (`AfiliadoID`);

--
-- Indices de la tabla `price_particular`
--
ALTER TABLE `price_particular`
  ADD PRIMARY KEY (`ParticularID`);

--
-- Indices de la tabla `price_salones`
--
ALTER TABLE `price_salones`
  ADD PRIMARY KEY (`PriceID`),
  ADD KEY `HoraID` (`HoraID`),
  ADD KEY `HorasID` (`HorasID`);

--
-- Indices de la tabla `servicios_details`
--
ALTER TABLE `servicios_details`
  ADD PRIMARY KEY (`DetailsID`),
  ADD KEY `CaracteristicasID` (`CaracteristicasID`),
  ADD KEY `ServiciosID` (`ServiciosID`);

--
-- Indices de la tabla `servicios_salones`
--
ALTER TABLE `servicios_salones`
  ADD PRIMARY KEY (`ServiciosID`);

--
-- Indices de la tabla `tarjetas_salones`
--
ALTER TABLE `tarjetas_salones`
  ADD PRIMARY KEY (`TarjetaID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `adicionales_details`
--
ALTER TABLE `adicionales_details`
  MODIFY `DetailsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `adicionales_salones`
--
ALTER TABLE `adicionales_salones`
  MODIFY `AdicionalesID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `capacidad_salones`
--
ALTER TABLE `capacidad_salones`
  MODIFY `CapacidadID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `caracteristicas_salones`
--
ALTER TABLE `caracteristicas_salones`
  MODIFY `CaracteristicasID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cotizacion_salones`
--
ALTER TABLE `cotizacion_salones`
  MODIFY `CotizacionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `detalles_salones`
--
ALTER TABLE `detalles_salones`
  MODIFY `SalonID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `eventos_detalles`
--
ALTER TABLE `eventos_detalles`
  MODIFY `EventsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `eventos_salones`
--
ALTER TABLE `eventos_salones`
  MODIFY `EventoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `horas_salones`
--
ALTER TABLE `horas_salones`
  MODIFY `HorasID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `hora_salones`
--
ALTER TABLE `hora_salones`
  MODIFY `HoraID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `price_afiliado`
--
ALTER TABLE `price_afiliado`
  MODIFY `AfiliadoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `price_particular`
--
ALTER TABLE `price_particular`
  MODIFY `ParticularID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `price_salones`
--
ALTER TABLE `price_salones`
  MODIFY `PriceID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `servicios_details`
--
ALTER TABLE `servicios_details`
  MODIFY `DetailsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `servicios_salones`
--
ALTER TABLE `servicios_salones`
  MODIFY `ServiciosID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tarjetas_salones`
--
ALTER TABLE `tarjetas_salones`
  MODIFY `TarjetaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adicionales_details`
--
ALTER TABLE `adicionales_details`
  ADD CONSTRAINT `adicionales_details_ibfk_1` FOREIGN KEY (`AdicionalesID`) REFERENCES `adicionales_salones` (`AdicionalesID`),
  ADD CONSTRAINT `adicionales_details_ibfk_2` FOREIGN KEY (`CaracteristicasID`) REFERENCES `caracteristicas_salones` (`CaracteristicasID`);

--
-- Filtros para la tabla `caracteristicas_salones`
--
ALTER TABLE `caracteristicas_salones`
  ADD CONSTRAINT `caracteristicas_salones_ibfk_1` FOREIGN KEY (`CapacidadID`) REFERENCES `capacidad_salones` (`CapacidadID`);

--
-- Filtros para la tabla `detalles_salones`
--
ALTER TABLE `detalles_salones`
  ADD CONSTRAINT `detalles_salones_ibfk_1` FOREIGN KEY (`CaracteristicasID`) REFERENCES `caracteristicas_salones` (`CaracteristicasID`),
  ADD CONSTRAINT `detalles_salones_ibfk_2` FOREIGN KEY (`PriceID`) REFERENCES `price_salones` (`PriceID`),
  ADD CONSTRAINT `detalles_salones_ibfk_3` FOREIGN KEY (`TarjetaID`) REFERENCES `tarjetas_salones` (`TarjetaID`);

--
-- Filtros para la tabla `eventos_salones`
--
ALTER TABLE `eventos_salones`
  ADD CONSTRAINT `eventos_salones_ibfk_1` FOREIGN KEY (`TarjetaID`) REFERENCES `tarjetas_salones` (`TarjetaID`);

--
-- Filtros para la tabla `horas_salones`
--
ALTER TABLE `horas_salones`
  ADD CONSTRAINT `horas_salones_ibfk_1` FOREIGN KEY (`AfiliadoID`) REFERENCES `price_afiliado` (`AfiliadoID`),
  ADD CONSTRAINT `horas_salones_ibfk_2` FOREIGN KEY (`ParticularID`) REFERENCES `price_particular` (`ParticularID`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`TarjetaID`) REFERENCES `tarjetas_salones` (`TarjetaID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`CotizacionID`) REFERENCES `cotizacion_salones` (`CotizacionID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`UserID`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `price_salones`
--
ALTER TABLE `price_salones`
  ADD CONSTRAINT `price_salones_ibfk_1` FOREIGN KEY (`HoraID`) REFERENCES `hora_salones` (`HoraID`),
  ADD CONSTRAINT `price_salones_ibfk_2` FOREIGN KEY (`HorasID`) REFERENCES `horas_salones` (`HorasID`);

--
-- Filtros para la tabla `servicios_details`
--
ALTER TABLE `servicios_details`
  ADD CONSTRAINT `servicios_details_ibfk_1` FOREIGN KEY (`CaracteristicasID`) REFERENCES `caracteristicas_salones` (`CaracteristicasID`),
  ADD CONSTRAINT `servicios_details_ibfk_2` FOREIGN KEY (`ServiciosID`) REFERENCES `servicios_salones` (`ServiciosID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
