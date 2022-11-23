--Creación de tablas

create table usuario
(
    idusuario varchar(255) not null,
    constraint usuario_pkey
        primary key (idusuario)
);

alter table usuario
    owner to admin;

create table administrador
(
    usuario     varchar(255) not null,
    contrasenya varchar(255)     not null,
    lastlogin   timestamp with time zone,
    rol         varchar(255)     not null,
    fechafin   varchar(255) not null,
    constraint administrador_pkey
        primary key (usuario),
    constraint administrador_usuario_fkey
        foreign key (usuario) references usuario
);

alter table administrador
    owner to admin;

create table alumno
(
    correo varchar(255) not null,
    constraint alumno_pkey
        primary key (correo),
    constraint alumno_correo_fkey
        foreign key (correo) references usuario
);

alter table alumno
    owner to admin;

create table campus
(
    idcampus       varchar(255) 	not null,
    nombre         varchar(255)     not null,
    ciudad         varchar(255)     not null,
    direccion      varchar(255)     not null,
    contacto_covid varchar(255)     not null,
    constraint campus_pkey
        primary key (idcampus)
);

alter table campus
    owner to admin;

create table edificio
(
    idedificio varchar(255) 	not null,
    nombre     varchar(255)     not null,
    campus     varchar(255)		not null,
    constraint edificio_pkey
        primary key (idedificio),
    constraint edificio_campus_fkey
        foreign key (campus) references campus
);

alter table edificio
    owner to admin;

create table aula
(
    idaula    		varchar(255) 	   	not null,
    nombre    		varchar(255)     	not null,
    aforomax  		double precision 	not null,
	aforoactual 	double precision 	not null,
	politicaReport 	double precision 	not null,
	imagen			varchar(255)	   not null,
    edificio  		varchar(255)	   not null,
    constraint aula_pkey
        primary key (idaula),
    constraint aula_edificio_fkey
        foreign key (edificio) references edificio
);

alter table aula
    owner to admin;

create table biblioteca
(
    idbiblio varchar(255)	 not null,
    constraint biblioteca_pkey
        primary key (idbiblio),
    constraint biblioteca_idbiblio_fkey
        foreign key (idbiblio) references aula
);

alter table biblioteca
    owner to admin;

create table sala_estudio
(
    idsala varchar(255)     not null,
    constraint sala_estudio_pkey
        primary key (idsala),
    constraint sala_estudio_idsala_fkey
        foreign key (idsala) references aula
);

alter table sala_estudio
    owner to admin;

create table asiento
(
    idaula varchar(255)     not null,
    fila integer            not null,
    columna varchar(255)    not null,
    enchufe varchar(255)    not null,
    ethernet varchar(255)   not null,
    constraint asiento_pkey
        primary key (idaula, fila, columna),
    constraint asiento_idaula_fkey
        foreign key (idaula) references aula
);

alter table asiento
    owner to admin;

create table reserva
(
    "createdAt"            timestamp with time zone,
    "updatedAt"            timestamp with time zone,
    idreserva            serial           not null,
    idalumno             varchar(255)     not null,
    idasiento            varchar(255)     not null,
    idaula               varchar(255)	  not null,
    fecha                varchar(255)     not null,
    horainicio           varchar(255)     not null,
    horafin              varchar(255)     not null,
    estadoasiento        varchar(255)     not null,
    "confirmadaDeadline" double precision not null,
    confirmada           double precision not null,
    horaconfirmacion     varchar(255)     not null,
	escaneada			 double precision not null,
    horaescaneo          varchar(255)     not null,
    finalizada           double precision not null,
    
    constraint reserva_pkey
        primary key (idasiento, idaula, fecha, horainicio),
    constraint reserva_idalumno_fkey
        foreign key (idalumno) references usuario,
    constraint reserva_idaula_fkey
        foreign key (idaula) references aula
);

alter table reserva
    owner to admin;

create table administra
(
    "createdAt" timestamp with time zone,
    "updatedAt" timestamp with time zone,
    idaula      varchar(255)     not null,
    idadmin     varchar(255)     not null,
    fechaini    varchar(255)     not null,
    fechafin    varchar(255)     not null,
    constraint administra_pkey
        primary key (idaula, idadmin,fechafin),
    constraint administra_idaula_fkey
        foreign key (idaula) references aula
            on update cascade on delete cascade,
    constraint administra_idadmin_fkey
        foreign key (idadmin) references administrador
            on update cascade on delete cascade
);

alter table administra
    owner to admin;
