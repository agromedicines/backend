USE `agromedicines`;

DELETE FROM `category` WHERE `id` = 1;
DELETE FROM `category` WHERE `id` = 2;
DELETE FROM `category` WHERE `id` = 3;


DELETE FROM `vendor` WHERE `id` = 1;
DELETE FROM `vendor` WHERE `id` = 2;
DELETE FROM `vendor` WHERE `id` = 3;

INSERT INTO `vendor` (`name`) VALUES ('Vendor A');
INSERT INTO `vendor` (`name`) VALUES ('Vendor B');
INSERT INTO `vendor` (`name`) VALUES ('Vendor C');


DELETE FROM `problem` WHERE `id` = 1;
DELETE FROM `problem` WHERE `id` = 2;
DELETE FROM `problem` WHERE `id` = 3;

INSERT INTO `problem` (`name`, `category_id`) VALUES ('Problem A', 1);
INSERT INTO `problem` (`name`, `category_id`) VALUES ('Problem B', 2);
INSERT INTO `problem` (`name`, `category_id`) VALUES ('Problem C', 3);


DELETE FROM `culture` WHERE `id` = 1;
DELETE FROM `culture` WHERE `id` = 2;
DELETE FROM `culture` WHERE `id` = 3;

INSERT INTO `culture` (`name`) VALUES ('Culture A');
INSERT INTO `culture` (`name`) VALUES ('Culture B');
INSERT INTO `culture` (`name`) VALUES ('Culture C');

INSERT INTO `medicine` (`name`, `vendor_id`, `category_id`) VALUES ('Medicine A', 1, 1);
INSERT INTO `medicine` (`name`, `vendor_id`, `category_id`) VALUES ('Medicine B', 2, 2);
INSERT INTO `medicine` (`name`, `vendor_id`, `category_id`) VALUES ('Medicine C', 3, 3);

INSERT INTO `pc` VALUES (1,1);
INSERT INTO `pc` VALUES (2,2);
INSERT INTO `pc` VALUES (3,3);