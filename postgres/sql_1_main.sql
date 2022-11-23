--Poblado inicial de tablas:

INSERT INTO CAMPUS (idCampus, Nombre, Ciudad, Direccion, Contacto_Covid) VALUES
    ('EINA','Campus Río Ebro','Zaragoza','Calle María de Luna, s/n, 50018','subesteina@unizar.es');
	
INSERT INTO EDIFICIO (idEdificio, Nombre, Campus) VALUES
    ('CRE.1200.','Edificio Ada-Byron','EINA'),
--  ('CRE.1065.','Edificio Torres Quevedo','EINA'),
    ('CRE.1201.','Edificio Betancourt','EINA');


INSERT INTO AULA (idAula, Nombre, AforoMax, aforoactual, politicaReport, imagen, Edificio) VALUES
    ('CRE.1200.02.540','Sala de estudio  -  Ada Byron',176,100,2,'https://i.ibb.co/WG3tSMw/adabyron.jpg','CRE.1200.'),
--  ('CRE.1065.00.080','Sala de estudio  -  Torres Quevedo',0,100,2,'https://i.ibb.co/nw6BFXg/torres-Quevedo.jpg','CRE.1065.'),
    ('CRE.1201.01.480','Biblioteca  -  Hypatia de Alejandria',371,100,2,'https://i.ibb.co/68kCYwn/edificiobetancourt.jpg','CRE.1201.'),
    ('CRE.1201.02.690','Hemeroteca  -  Ed.Betancourt',66,100,2,'https://i.ibb.co/68kCYwn/edificiobetancourt.jpg','CRE.1201.'),
    ('CRE.1201.00.400','Sala Tomás Pollán  -  Ed.Betancourt',464,100,2,'https://i.ibb.co/68kCYwn/edificiobetancourt.jpg','CRE.1201.');
    
INSERT INTO SALA_ESTUDIO (idSala) VALUES
    ('CRE.1200.02.540'),
--  ('CRE.1065.00.080'),
    ('CRE.1201.01.480'),
    ('CRE.1201.02.690'),
    ('CRE.1201.00.400');

INSERT INTO USUARIO (idUsuario) VALUES
    ('desarrolladores'),
    ('usuario1');

INSERT INTO ADMINISTRADOR (Usuario, Contrasenya, LastLogin, Rol, fechafin) VALUES
    ('desarrolladores', crypt('neobigc', gen_salt('bf')), '1990-01-01 00:00:00', 'ROLE_MODERATOR', 'NO'),
	('usuario1', crypt('Usuario1', gen_salt('bf')), '1990-01-01 00:00:00', 'ROLE_ADMIN', 'NO');

INSERT INTO ADMINISTRA (idAdmin,idAula, fechaini, fechafin) VALUES
    ('usuario1','CRE.1200.02.540', '23/03/2022', 'NO'),
--  ('usuario1','CRE.1065.00.080'),
    ('usuario1','CRE.1201.00.400', '23/03/2022', 'NO');
