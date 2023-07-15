FROM mysql

ENV MYSQL_ROOT_USER=root
ENV MYSQL_ROOT_PASSWORD=root

COPY greenpark.sql /docker-entrypoint-initdb.d/greenpark.sql

ENV MYSQL_DATABASE=greenpark_desenvolvimento
