-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2024 a las 14:19:10
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
-- Base de datos: `gestion_camara`
--

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
('123', 'a', 'sartunduaga2005@gmail.com', 'user', '$2a$05$P2KT55QbaXT09iK/VlafueZfAWMi02wgTnBfNe/RK3HPK3mnlEOH2'),
('132', 'e', 'yo@yo.com', 'admin', '$2a$05$x4JhRgnHn/EKeE/nSeeUnu6e8rNqpoClVdKThzyFZ7gAbeDY8AMKq'),
('312', 'e', 'yo@yo.com', 'report', '$2a$05$x4JhRgnHn/EKeE/nSeeUnu6e8rNqpoClVdKThzyFZ7gAbeDY8AMKq'),
('321', 'e', 'yo@yo.com', 'superAdmin', '$2a$05$x4JhRgnHn/EKeE/nSeeUnu6e8rNqpoClVdKThzyFZ7gAbeDY8AMKq');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
