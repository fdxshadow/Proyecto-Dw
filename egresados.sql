-- MySQL dump 10.16  Distrib 10.1.21-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: localhost
-- ------------------------------------------------------
-- Server version	10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `egresado`
--

DROP TABLE IF EXISTS `egresado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `egresado` (
  `id_egresado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `año_ingreso` int(4) NOT NULL,
  `año_egreso` int(4) NOT NULL,
  `año_titulacion` int(4) DEFAULT NULL,
  `carrera` enum('ejecucion','informatica','civil') COLLATE utf8_spanish_ci NOT NULL,
  `nec_cap` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `sat_carrera` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nota_carrera` float(2,1) DEFAULT NULL,
  `linkedin` varchar(255) COLLATE utf8_spanish_ci DEFAULT NULL,
  `postgrado` enum('magister','doctorado') COLLATE utf8_spanish_ci DEFAULT NULL,
  `area_postgrado` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `Cv` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `rut` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_egresado`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `egresado`
--

LOCK TABLES `egresado` WRITE;
/*!40000 ALTER TABLE `egresado` DISABLE KEYS */;
INSERT INTO `egresado` VALUES (1,'ivette ','leon',2014,2020,2020,'informatica','0','5',1.0,'linkkkkk','',NULL,'x','19152972-3'),(2,'cristian','rojas',2015,2017,2018,'ejecucion','pico','excelente puu compare',2.0,'nose','magister','nose aun','x','10-8'),(3,'Javier','perez',1998,2017,2019,'civil','emememem','wena wena qlo',1.0,'www.redtube.com','magister','caca','asdasd','18172636-4');
/*!40000 ALTER TABLE `egresado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleo`
--

DROP TABLE IF EXISTS `empleo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empleo` (
  `id_empleo` int(11) NOT NULL AUTO_INCREMENT,
  `id_egresado` int(11) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `id_supervisor1` int(11) DEFAULT NULL,
  `id_supervisor2` int(11) DEFAULT NULL,
  `id_supervisor3` int(11) DEFAULT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_termino` date DEFAULT NULL,
  `pais` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `comuna_ciudad` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `cargo` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `rango_sueldo` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id_empleo`),
  KEY `id_egresado` (`id_egresado`),
  KEY `id_empresa` (`id_empresa`),
  KEY `id_supervisor` (`id_supervisor1`),
  KEY `id_supervisor2` (`id_supervisor2`,`id_supervisor3`),
  KEY `id_supervisor3` (`id_supervisor3`),
  CONSTRAINT `empleo_ibfk_1` FOREIGN KEY (`id_egresado`) REFERENCES `egresado` (`id_egresado`),
  CONSTRAINT `empleo_ibfk_2` FOREIGN KEY (`id_empresa`) REFERENCES `empresa` (`id_empresa`),
  CONSTRAINT `empleo_ibfk_3` FOREIGN KEY (`id_supervisor1`) REFERENCES `supervisor` (`id_supervisor`),
  CONSTRAINT `empleo_ibfk_4` FOREIGN KEY (`id_supervisor2`) REFERENCES `supervisor` (`id_supervisor`),
  CONSTRAINT `empleo_ibfk_5` FOREIGN KEY (`id_supervisor3`) REFERENCES `supervisor` (`id_supervisor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleo`
--

LOCK TABLES `empleo` WRITE;
/*!40000 ALTER TABLE `empleo` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresa` (
  `id_empresa` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `rut` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `rubro` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `prioridad` float(2,1) DEFAULT NULL,
  `pais_origen` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  `especialidad` enum('software','base de datos','redes') COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_empresa`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (39,'arg','16756567','informatica',0.0,'chile','base de datos'),(40,'YOGITO','11111110','CACA',0.0,'chile','software'),(41,'DISICO','19272362','WEAS',0.0,'chile','redes'),(42,'adsads','19272362','Suministro de Electricidad, Gas y Agua',3.0,'España','software');
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supervisor`
--

DROP TABLE IF EXISTS `supervisor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `supervisor` (
  `id_supervisor` int(11) NOT NULL AUTO_INCREMENT,
  `rut` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(40) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` int(9) NOT NULL,
  `nota` float(2,1) DEFAULT NULL,
  PRIMARY KEY (`id_supervisor`),
  UNIQUE KEY `rut` (`rut`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supervisor`
--

LOCK TABLES `supervisor` WRITE;
/*!40000 ALTER TABLE `supervisor` DISABLE KEYS */;
INSERT INTO `supervisor` VALUES (47,'19152972-3','ivi','ajaj@ajaja',1212,2.0);
/*!40000 ALTER TABLE `supervisor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-13 20:13:04
