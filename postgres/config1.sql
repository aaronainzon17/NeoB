--Creación del esquema principal y añadir extensiones
CREATE SCHEMA neob_main_schema;

ALTER SCHEMA neob_main_schema OWNER to admin;

ALTER DATABASE neob SET search_path to neob_main_schema;

CREATE EXTENSION pgcrypto;

ALTER EXTENSION pgcrypto set schema neob_main_schema;

--Creación de usuario de lectura

--CREATE ROLE lector LOGIN PASSWORD 'lector123';

--GRANT CONNECT ON DATABASE neob TO lector;

--GRANT USAGE ON SCHEMA neob_main_schema TO lector;

--GRANT SELECT ON ALL TABLES IN SCHEMA neob_main_schema TO lector;