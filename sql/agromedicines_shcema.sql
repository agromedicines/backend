DROP DATABASE IF EXISTS `agromedicines`;
CREATE DATABASE `agromedicines`;
USE `agromedicines`;

CREATE TABLE `agromedicines`.`category` (
	`id` int primary key auto_increment,
	`name` text NOT NULL
);

CREATE TABLE `agromedicines`.`medicine` (
	`id` int primary key auto_increment,
    `name` text NOT NULL,
    `category_id` int NOT NULL,
    FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);

CREATE TABLE `agromedicines`.`problem` (
	`id` int primary key auto_increment,
	`name` text NOT NULL,
    `category_id` int NOT NULL,
    FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);

CREATE TABLE `agromedicines`.`culture` (
	`id` int primary key auto_increment,
	`name` text NOT NULL
);

CREATE TABLE `agromedicines`.`pc`(
	problem_id INT,
	culture_id INT,
	PRIMARY KEY (`problem_id`, `culture_id`),
	foreign key (`problem_id`) references `problem` (`id`),
	foreign key (`culture_id`) references `culture` (`id`)
);

DELIMITER $$

CREATE DEFINER='root'@'localhost' TRIGGER delete_from_pc_when_culture_was_deleted
BEFORE DELETE 
ON `agromedicines`.`culture` FOR EACH ROW 
BEGIN
	DELETE FROM `agromedicines`.`pc`
	WHERE culture_id = OLD.id;
END $$

DELIMITER ;

DELIMITER $$

CREATE DEFINER='root'@'localhost' TRIGGER delete_from_pc_when_problem_was_deleted
BEFORE DELETE 
ON `agromedicines`.`problem` FOR EACH ROW 
BEGIN
	DELETE FROM `agromedicines`.`pc`
	WHERE problem_id = OLD.id;
END $$

DELIMITER ;


CREATE TABLE `agromedicines`.`treatment` (
	`id` int primary key auto_increment,
    `medicine_id` int,
    `cultures` text,
    `problems` text,
    FOREIGN KEY (`medicine_id`) REFERENCES `medicine` (`id`)
);

DELIMITER $$

CREATE DEFINER='root'@'localhost' TRIGGER delete_treatments_when_medicine_was_deleted
BEFORE DELETE
ON `agromedicines`.`medicine` FOR EACH ROW
BEGIN 
	DELETE FROM `agromedicines`.`treatment`
	WHERE medicine_id = OLD.id;
END $$

DELIMITER ;

-- Insert categories
INSERT INTO `category` (`name`) VALUES ('Інсектицид');
INSERT INTO `category` (`name`) VALUES ('Фунгіцид');
INSERT INTO `category` (`name`) VALUES ('Гербіцид');

-- INSERT INTO `medicine` (`name`, `category_id`) VALUES ('Medicine A', 1);
-- INSERT INTO `medicine` (`name`, `category_id`) VALUES ('Medicine B', 2);
-- INSERT INTO `medicine` (`name`, `category_id`) VALUES ('Medicine C', 3);

-- INSERT INTO `problem` (`name`, `category_id`) VALUES ('Problem A', 1);
-- INSERT INTO `problem` (`name`, `category_id`) VALUES ('Problem B', 2);
-- INSERT INTO `problem` (`name`, `category_id`) VALUES ('Problem C', 3);
-- INSERT INTO `problem` (`name`, `category_id`) VALUES ('Problem A2', 1);

-- INSERT INTO `culture` (`name`) VALUES ('Culture A');
-- INSERT INTO `culture` (`name`) VALUES ('Culture B');
-- INSERT INTO `culture` (`name`) VALUES ('Culture C');
-- INSERT INTO `culture` (`name`) VALUES ('Culture A2');
-- INSERT INTO `culture` (`name`) VALUES ('Culture A3');

-- INSERT INTO `pc` (`problem_id`, `culture_id`) VALUES (1, 1);
-- INSERT INTO `pc` (`problem_id`, `culture_id`) VALUES (2, 2);
-- INSERT INTO `pc` (`problem_id`, `culture_id`) VALUES (3, 3);
-- INSERT INTO `pc` (`problem_id`, `culture_id`) VALUES (1, 4);
-- INSERT INTO `pc` (`problem_id`, `culture_id`) VALUES (4, 4);
-- INSERT INTO `pc` (`problem_id`, `culture_id`) VALUES (4, 5);
-- INSERT INTO `pc` (`problem_id`, `culture_id`) VALUES (1, 5);
