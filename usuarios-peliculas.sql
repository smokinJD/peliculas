-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-02-2018 a las 00:50:09
-- Versión del servidor: 10.1.22-MariaDB
-- Versión de PHP: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `Password` varchar(250) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `fechaNac` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `email`, `Password`, `nombre`, `apellido`, `fechaNac`) VALUES
(1, 'julen1sma@gmail.com', '$2y$10$NhIf5l/50VwIzJ2wkwmvj.wuGc7w4vqJ4Ub7v39iOYmSURzxmG9pC', 'Julen', 'Estivez', '1997-06-04'),
(2, 'iker@iker.com', '$2y$10$NhIf5l/50VwIzJ2wkwmvj.wuGc7w4vqJ4Ub7v39iOYmSURzxmG9pC', 'iker', 'ik', '2009-06-04'),
(3, 'hola@hola.com', '$2y$10$NhIf5l/50VwIzJ2wkwmvj.wuGc7w4vqJ4Ub7v39iOYmSURzxmG9pC', 'hola', 'hola', '2018-02-02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
