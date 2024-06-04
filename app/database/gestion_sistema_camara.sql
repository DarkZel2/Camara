-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-06-2024 a las 14:28:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestion_sistema_camara`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dayevent`
--

CREATE TABLE `dayevent` (
  `id` int(11) NOT NULL,
  `day` int(2) NOT NULL,
  `month` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `dayevent`
--

INSERT INTO `dayevent` (`id`, `day`, `month`, `year`, `event`) VALUES
(1, 28, 5, 2024, 1),
(2, 18, 5, 2024, 2),
(3, 18, 5, 2024, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `time` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `events`
--

INSERT INTO `events` (`id`, `title`, `time`) VALUES
(1, 'New Event', '10:00 AM - 12:30 PM'),
(2, 'Event 1', '8:00 AM - 8:30 PM'),
(3, 'Event 1', '9:00 AM - 10:30 PM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salones`
--

CREATE TABLE `salones` (
  `ID` char(10) NOT NULL,
  `Nombre_salon` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `salones`
--

INSERT INTO `salones` (`ID`, `Nombre_salon`) VALUES
('1', 'Salón 1'),
('1', 'Salón 1'),
('2', 'Salón 2'),
('3', 'Salón 3'),
('4', 'Salón 4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(200) NOT NULL,
  `access` enum('user','admin','report','superAdmin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `name`, `email`, `password`, `access`) VALUES
(123, 'a', 'hola@yo.com', '$2a$05$P2KT55QbaXT09iK/VlafueZfAWMi02wgTnBfNe/RK3HPK3mnlEOH2', 'user'),
(321, 'admin', 'solicitud@cc.com', '', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dayevent`
--
ALTER TABLE `dayevent`
  ADD PRIMARY KEY (`id`),
  ADD KEY `event` (`event`);

--
-- Indices de la tabla `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `dayevent`
--
ALTER TABLE `dayevent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dayevent`
--
ALTER TABLE `dayevent`
  ADD CONSTRAINT `dayevent_ibfk_1` FOREIGN KEY (`event`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
