CREATE TABLE user(
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '인덱스 번호',
  `user_id` VARCHAR(20) NOT NULL COMMENT '유저 아이디',
  `user_pw` VARCHAR(255) NULL COMMENT '유저 패스워드',
  `user_name` VARCHAR(20) NOT NULL COMMENT '유저 이름',
  `user_auth` VARCHAR(1) DEFAULT 'U' COMMENT '유저 권한',
  `join_date` DATE COMMENT '유저 생성 날짜',
   PRIMARY KEY(id),
   UNIQUE INDEX (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=`utf8` COMMENT "유저 목록";

insert into user (`user_id`, `user_pw`, `user_name`, `user_auth`) value ("devel", "oY0+SxGkrCQ9+Q9jagUTcW4kBRLi2ifxikMm2GunoozwIAFEjvCbpewSLjEm///QG3hIUhSBglP0D74NW6bL4A==", "관리자", "D");
insert into user (`user_id`, `user_pw`, `user_name`, `user_auth`) value ("admin", "oY0+SxGkrCQ9+Q9jagUTcW4kBRLi2ifxikMm2GunoozwIAFEjvCbpewSLjEm///QG3hIUhSBglP0D74NW6bL4A==", "관리자", "A");

