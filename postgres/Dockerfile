FROM postgres
#COPY . /docker-entrypoint-initdb.d/  Por alguna razón copia todo el repositorio
ENV POSTGRES_USER=admin 
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=neob
EXPOSE 5432
ADD . /docker-entrypoint-initdb.d/