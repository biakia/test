/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : cashflow

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2013-12-11 19:57:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `table_category`
-- ----------------------------
DROP TABLE IF EXISTS `table_category`;
CREATE TABLE `table_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_item` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_category
-- ----------------------------
INSERT INTO `table_category` VALUES ('100', '衣服饰品');
INSERT INTO `table_category` VALUES ('103', '食品酒水');
INSERT INTO `table_category` VALUES ('104', '居家物业');
INSERT INTO `table_category` VALUES ('105', '行车交通');
INSERT INTO `table_category` VALUES ('106', '交流通讯');
INSERT INTO `table_category` VALUES ('107', '休闲娱乐');
INSERT INTO `table_category` VALUES ('108', '学习进修');
INSERT INTO `table_category` VALUES ('110', '金融保险');
INSERT INTO `table_category` VALUES ('120', '其他杂项');
INSERT INTO `table_category` VALUES ('121', '人情往来');
INSERT INTO `table_category` VALUES ('131', '医疗保健');
INSERT INTO `table_category` VALUES ('200', '工资收入');
INSERT INTO `table_category` VALUES ('202', '职业收入');
INSERT INTO `table_category` VALUES ('203', '其他收入');

-- ----------------------------
-- Table structure for `table_count`
-- ----------------------------
DROP TABLE IF EXISTS `table_count`;
CREATE TABLE `table_count` (
  `count_id` int(11) NOT NULL AUTO_INCREMENT,
  `count_name` varchar(50) DEFAULT NULL,
  `count_cash` double DEFAULT NULL,
  `count_remark` varchar(50) DEFAULT NULL,
  `userid` int(11) NOT NULL,
  PRIMARY KEY (`count_id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_count
-- ----------------------------
INSERT INTO `table_count` VALUES ('4', '美元账户', '4000', '美元狼藉.', '1');
INSERT INTO `table_count` VALUES ('18', '欧元账户', '4974', '欧元疲惫，美元狼藉', '1');
INSERT INTO `table_count` VALUES ('100', '现金', '1200', null, '1');
INSERT INTO `table_count` VALUES ('102', '备用金', '2344', null, '1');
INSERT INTO `table_count` VALUES ('103', '信用卡', '3444', null, '1');
INSERT INTO `table_count` VALUES ('104', '银行卡', '2222', null, '1');
INSERT INTO `table_count` VALUES ('105', '存折', '6766', null, '1');
INSERT INTO `table_count` VALUES ('106', '理财产品', '8782', null, '1');
INSERT INTO `table_count` VALUES ('107', '应付款项', '2221', null, '1');

-- ----------------------------
-- Table structure for `table_flag`
-- ----------------------------
DROP TABLE IF EXISTS `table_flag`;
CREATE TABLE `table_flag` (
  `flag_id` int(11) NOT NULL AUTO_INCREMENT,
  `flag_item` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`flag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_flag
-- ----------------------------

-- ----------------------------
-- Table structure for `table_main`
-- ----------------------------
DROP TABLE IF EXISTS `table_main`;
CREATE TABLE `table_main` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `categoey_id` int(11) DEFAULT NULL,
  `cash` double DEFAULT NULL,
  `count_id` int(11) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `remark` varchar(50) DEFAULT NULL,
  `flag_id` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_main
-- ----------------------------
INSERT INTO `table_main` VALUES ('1', '102', '100', '4', '2013-11-18', null, '0', '1');
INSERT INTO `table_main` VALUES ('2', '102', '1000', '4', '2013-11-18', null, '0', '1');
INSERT INTO `table_main` VALUES ('3', '103', '180', '4', '2013-18-11', null, '0', '1');
INSERT INTO `table_main` VALUES ('4', '104', '1000', '24', '2013-11-11', null, '0', '1');
INSERT INTO `table_main` VALUES ('5', '200', '1200', '4', '2013-11-28', null, '1', '1');
INSERT INTO `table_main` VALUES ('6', '202', '123', '24', '2013-08-09', null, '1', '1');
INSERT INTO `table_main` VALUES ('7', '200', '4590', '18', '2013-11-11', null, '1', '1');
INSERT INTO `table_main` VALUES ('8', '203', '2989', '4', '2013-10-9', null, '1', '1');
INSERT INTO `table_main` VALUES ('57', '110', '3000', '106', '2013-09-10', '今天买了糊涂虫子工作室的3000快股票', '0', '1');
INSERT INTO `table_main` VALUES ('58', '104', '50000', '104', '2013-10-15', '发工资啦~', '0', '1');
INSERT INTO `table_main` VALUES ('59', '104', '50', '104', '2013-10-20', '花费50', '0', '1');
INSERT INTO `table_main` VALUES ('61', '100', '200', '100', '2013-10-28', '买水果', '0', '1');
INSERT INTO `table_main` VALUES ('64', '200', '5000', '103', '2013-11-01', '工资', '1', '1');
INSERT INTO `table_main` VALUES ('65', '202', '350', '100', '2013-11-01', '请客吃饭', '1', '1');
INSERT INTO `table_main` VALUES ('66', '100', '500', '104', '2013-11-02', '买衣服', '0', '1');
INSERT INTO `table_main` VALUES ('78', '200', '1000', '4', '2013-11-30', '奖金', '1', '1');
INSERT INTO `table_main` VALUES ('79', '200', '12000', '100', '2013-11-30', '涨工资了', '1', '1');
INSERT INTO `table_main` VALUES ('80', '103', '10', '102', '2013-12-01', '也', '0', '1');
INSERT INTO `table_main` VALUES ('81', '100', '1099', '100', '2013-12-2', '点击填写备注', '0', '1');
INSERT INTO `table_main` VALUES ('82', '103', '123', '100', '2013-12-04', '测试分页', '0', '1');
INSERT INTO `table_main` VALUES ('83', '104', '222', '100', '2013-12-04', '测试分页', '0', '1');
INSERT INTO `table_main` VALUES ('84', '100', '2311', '100', '2013-12-4', 'ces', '0', '1');
INSERT INTO `table_main` VALUES ('85', '100', '234', '100', '2013-12-4', '衣服', '0', '1');
INSERT INTO `table_main` VALUES ('86', '103', '11', '100', '2013-12-4', '早餐', '0', '1');
INSERT INTO `table_main` VALUES ('87', '100', '23', '4', '2013-12-11', '点击填写备注', '0', '1');

-- ----------------------------
-- Table structure for `table_users`
-- ----------------------------
DROP TABLE IF EXISTS `table_users`;
CREATE TABLE `table_users` (
  `users_id` int(11) NOT NULL AUTO_INCREMENT,
  `users_name` varchar(50) NOT NULL,
  `users_mail` varchar(50) DEFAULT NULL,
  `users_password` char(50) NOT NULL,
  `imagename` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`users_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of table_users
-- ----------------------------
INSERT INTO `table_users` VALUES ('1', 'wujixin', 'biakia0610@sina.com', 'wujixin', 'wujixin1386688707939.jpg');
INSERT INTO `table_users` VALUES ('2', 'biakia', 'abc@163.com', 'biakia', null);
INSERT INTO `table_users` VALUES ('3', 'rose', 'abc@163.com', 'rose', null);
