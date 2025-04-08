sqlite3

.open testDB.db
.open BlogDB.db

DROP TABLE BlogDB.Document;

CREATE TABLE Document(
   id INTEGER PRIMARY KEY   autoincrement   NOT NULL,
   title           VARCHAR(255),
   create_time INT NOT NULL,
   description VARCHAR(255),
      cover TEXT,
   content TEXT,
   tag VARCHAR(255)

);

CREATE TABLE COMPANY(
   ID INT PRIMARY KEY   autoincrement   NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);


INSERT INTO Document (title,create_time,description,cover,content,tag)
VALUES ('测试标题', 1744016863, '这是一篇测试文章的描述','https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png', '1234543', '测试分组' );



INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Paul', 32, 'California', 20000.00 );

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (2, 'Allen', 25, 'Texas', 15000.00 );

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (5, 'David', 27, 'Texas', 85000.00 );

INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (6, 'Kim', 22, 'South-Hall', 45000.00 );
