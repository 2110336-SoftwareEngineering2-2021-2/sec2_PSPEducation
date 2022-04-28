FROM mongo:5.0

ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD 1234
ENV MONGO_INITDB_DATABASE whereismytutor

COPY data ./docker-entrypoint-initdb.d/db-dump
COPY mongorestore.sh ./docker-entrypoint-initdb.d

