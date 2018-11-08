/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : shiro

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2018-10-22 15:54:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for registration_code_info
-- ----------------------------
DROP TABLE IF EXISTS `registration_code_info`;
CREATE TABLE `registration_code_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL COMMENT '姓名',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(11) DEFAULT NULL COMMENT '手机号',
  `location` varchar(50) DEFAULT NULL COMMENT '地址',
  `validPeriod` varchar(50) DEFAULT NULL COMMENT '过期时间',
  `active` tinyint(4) DEFAULT NULL COMMENT '注册码是否激活',
  `registration_code` varchar(256) DEFAULT NULL COMMENT '校验组件',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='注册码信息表\r\n';

-- ----------------------------
-- Records of registration_code_info
-- ----------------------------

-- ----------------------------
-- Table structure for registration_component_info
-- ----------------------------
DROP TABLE IF EXISTS `registration_component_info`;
CREATE TABLE `registration_component_info` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `registration_code` varchar(32) DEFAULT NULL COMMENT '注册码',
  `computer_name` varchar(50) DEFAULT NULL COMMENT '计算机名称',
  `sys_install_time` varchar(50) DEFAULT NULL COMMENT '系统安装时间',
  `cpu` varchar(100) DEFAULT NULL COMMENT '处理器',
  `mac` varchar(20) DEFAULT NULL COMMENT 'Mac地址',
  `ip` varchar(20) DEFAULT NULL COMMENT 'ip地址',
  `check_component` longblob COMMENT '校验组件',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='注册组件信息表\r\n';

-- ----------------------------
-- Records of registration_component_info
-- ----------------------------

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  `permission` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', 'user', 'normal');
INSERT INTO `role` VALUES ('2', 'admin', 'vip');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `permission` varchar(255) DEFAULT NULL,
  `ban` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin', 'admin', 'vip', '0');
