-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 29, 2020 at 06:35 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `UserDataBase`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `PhoneNumber` varchar(15) NOT NULL,
  `Gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`FirstName`, `LastName`, `PhoneNumber`, `Gender`) VALUES
('ahmed', 'samir', '64564556', 'Male'),
('asma', 'guetchen', '766454433', 'Female'),
('asmar', 'ahmed', '4324343', 'Male'),
('claudia', 'jen', '534543665', 'Female'),
('eric', 'baudry', '545345644', 'Male'),
('hamza', 'jemmy', '5454643', 'Male'),
('jean', 'francois', '0012545465', 'Male'),
('kamel', 'ghembaza', '12345678', 'Male'),
('khaled', 'nouri', '5145944354', 'Male'),
('samira', 'sam', '4324234', 'Female'),
('sara', 'baudry', '41459453242', 'Female'),
('tina', 'jem', '435643534543', 'Female');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`FirstName`,`LastName`,`PhoneNumber`),
  ADD UNIQUE KEY `PhoneNumber` (`PhoneNumber`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
