-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4308
-- Generation Time: Nov 21, 2024 at 04:46 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `learning_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses_material_tbl`
--

CREATE TABLE `courses_material_tbl` (
  `material_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `material_type` enum('announcement','assignment','','') NOT NULL DEFAULT 'announcement',
  `material_title` varchar(255) NOT NULL,
  `create_date` date NOT NULL DEFAULT current_timestamp(),
  `material_content` text NOT NULL,
  `material_file` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses_material_tbl`
--

INSERT INTO `courses_material_tbl` (`material_id`, `course_id`, `material_type`, `material_title`, `create_date`, `material_content`, `material_file`) VALUES
(1, 2, 'announcement', 'material title', '2024-11-21', 'material content\n', NULL),
(3, 2, 'announcement', 'material title', '2024-11-21', 'content', NULL),
(11, 2, 'assignment', 'material title 10', '2024-11-21', 'material content\r\n', 'file_673f1690099cc9.63283371.docx');

-- --------------------------------------------------------

--
-- Table structure for table `courses_tbl`
--

CREATE TABLE `courses_tbl` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL DEFAULT 1,
  `craete_date` date NOT NULL DEFAULT current_timestamp(),
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses_tbl`
--

INSERT INTO `courses_tbl` (`course_id`, `course_name`, `user_id`, `craete_date`, `description`) VALUES
(2, 'ccourse name update', 2, '2024-11-20', 'Note update asd'),
(3, 'course name 2', 2, '2024-11-20', 'Note2'),
(4, 'course name 2', 1, '2024-11-20', 'Note2'),
(5, 'course name 4', 1, '2024-11-20', 'Note 5'),
(6, 'ddd', 2, '2024-11-20', 'Note'),
(7, 'ddd', 2, '2024-11-20', 'Note'),
(8, 'ddd123', 1, '2024-11-20', 'Note123'),
(9, 'ddd123', 1, '2024-11-20', 'Note123'),
(10, 'ddd123', 1, '2024-11-20', 'Note123');

-- --------------------------------------------------------

--
-- Table structure for table `enroll_course_tbl`
--

CREATE TABLE `enroll_course_tbl` (
  `enroll_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `craete_date` date NOT NULL,
  `is_accept` tinyint(4) NOT NULL DEFAULT 0,
  `invite_note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enroll_course_tbl`
--

INSERT INTO `enroll_course_tbl` (`enroll_id`, `student_id`, `course_id`, `craete_date`, `is_accept`, `invite_note`) VALUES
(2, 5, 2, '0000-00-00', 0, 'invite note21'),
(3, 5, 3, '0000-00-00', 0, 'invite note21');

-- --------------------------------------------------------

--
-- Table structure for table `students_assignment_tbl`
--

CREATE TABLE `students_assignment_tbl` (
  `student_assignment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `material_id` int(11) NOT NULL,
  `assignment_content` text NOT NULL,
  `create_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `students_comments_tbl`
--

CREATE TABLE `students_comments_tbl` (
  `student_comment_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `comment_content` text NOT NULL,
  `is_private` tinyint(4) NOT NULL DEFAULT 0,
  `create_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users_tbl`
--

CREATE TABLE `users_tbl` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `role` enum('student','instructor','admin','') NOT NULL DEFAULT 'student',
  `is_active` int(11) NOT NULL DEFAULT 1,
  `create_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_tbl`
--

INSERT INTO `users_tbl` (`user_id`, `username`, `password`, `role`, `is_active`, `create_date`) VALUES
(1, 'yousif', '$2y$10$uxhso0J/ydC/ZBbY6Gb8n.Gbmo13aM3ikcBofCDwxSmqzX6320J/a', 'admin', 1, '2024-11-19'),
(2, 'yousif1', '$2y$10$s05sjDLHjhAHxsUjcNCHceA74LuIxBX7FL8ZLGFGUpZagUO5NcMfe', 'instructor', 0, '2024-11-19'),
(3, 'youisf', '$2y$10$1XLkZ0MBcXPHWsu36zvZOO5rmrll4uz0VCuvaL/wJNL8KxvGb4nhS', 'student', 0, '2024-11-19'),
(4, 'yousif2', '$2y$10$DXoJ3UyllW3/UWZ7qxZoPehvNQlhg0BuYRvK2K5k.rBgzyUg3mMrq', 'student', 1, '2024-11-19'),
(5, 'yousif3', '$2y$10$hIIz44Avfp/chQlXR2Hza.ofUJ5woykKHd3HXOlYrI3aHKya/AYkC', 'student', 1, '2024-11-19'),
(6, 'asdasd', '$2y$10$/oCsX/QWXIUXrWh07YWd/OX.YgAhxSn4igSRRXwBCaQjq0uIV/85G', 'instructor', 1, '2024-11-20'),
(7, 'User Name', '$2y$10$v3.jfbz0m/YoOdSpaLJgF..kS9c/yBvuFlbgmoD8TLMKW7..ms94m', 'instructor', 1, '2024-11-20'),
(8, 'youisf1', '$2y$10$bBKaibng/P8LIpbGoS9N/uPbFGRylLSy0rxroYFp6I2WcPdkMXXn6', 'student', 1, '2024-11-21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses_material_tbl`
--
ALTER TABLE `courses_material_tbl`
  ADD PRIMARY KEY (`material_id`),
  ADD KEY `metrial_course_id` (`course_id`);

--
-- Indexes for table `courses_tbl`
--
ALTER TABLE `courses_tbl`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `enroll_course_tbl`
--
ALTER TABLE `enroll_course_tbl`
  ADD PRIMARY KEY (`enroll_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `course_id` (`course_id`);

--
-- Indexes for table `students_assignment_tbl`
--
ALTER TABLE `students_assignment_tbl`
  ADD PRIMARY KEY (`student_assignment_id`),
  ADD KEY `material_id` (`material_id`),
  ADD KEY `material_student_id` (`student_id`);

--
-- Indexes for table `students_comments_tbl`
--
ALTER TABLE `students_comments_tbl`
  ADD PRIMARY KEY (`student_comment_id`),
  ADD KEY `student_id_comment` (`student_id`),
  ADD KEY `course_id_comment` (`course_id`);

--
-- Indexes for table `users_tbl`
--
ALTER TABLE `users_tbl`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses_material_tbl`
--
ALTER TABLE `courses_material_tbl`
  MODIFY `material_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `courses_tbl`
--
ALTER TABLE `courses_tbl`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `enroll_course_tbl`
--
ALTER TABLE `enroll_course_tbl`
  MODIFY `enroll_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `students_assignment_tbl`
--
ALTER TABLE `students_assignment_tbl`
  MODIFY `student_assignment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students_comments_tbl`
--
ALTER TABLE `students_comments_tbl`
  MODIFY `student_comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users_tbl`
--
ALTER TABLE `users_tbl`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses_material_tbl`
--
ALTER TABLE `courses_material_tbl`
  ADD CONSTRAINT `metrial_course_id` FOREIGN KEY (`course_id`) REFERENCES `courses_tbl` (`course_id`) ON DELETE CASCADE;

--
-- Constraints for table `courses_tbl`
--
ALTER TABLE `courses_tbl`
  ADD CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users_tbl` (`user_id`);

--
-- Constraints for table `enroll_course_tbl`
--
ALTER TABLE `enroll_course_tbl`
  ADD CONSTRAINT `course_id` FOREIGN KEY (`course_id`) REFERENCES `courses_tbl` (`course_id`),
  ADD CONSTRAINT `student_id` FOREIGN KEY (`student_id`) REFERENCES `users_tbl` (`user_id`);

--
-- Constraints for table `students_assignment_tbl`
--
ALTER TABLE `students_assignment_tbl`
  ADD CONSTRAINT `material_id` FOREIGN KEY (`material_id`) REFERENCES `courses_material_tbl` (`material_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `material_student_id` FOREIGN KEY (`student_id`) REFERENCES `users_tbl` (`user_id`);

--
-- Constraints for table `students_comments_tbl`
--
ALTER TABLE `students_comments_tbl`
  ADD CONSTRAINT `course_id_comment` FOREIGN KEY (`course_id`) REFERENCES `courses_tbl` (`course_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `student_id_comment` FOREIGN KEY (`student_id`) REFERENCES `users_tbl` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
