CREATE DATABASE CalificaiconCatedraticos;

USE CalificaiconCatedraticos;

CREATE Table Usuarios(
    registro_academico VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL
);

CREATE Table Cursos(
    codigo_curso VARCHAR(10) PRIMARY KEY,
    nombre_curso VARCHAR(100) NOT NULL,
    creditos INT NOT NULL
);

CREATE Table Catedraticos(
    codigo_catedratico VARCHAR(10) PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL
);

CREATE Table Publicaciones(
    id_publicacion INT PRIMARY KEY AUTO_INCREMENT,
    id_curso VARCHAR(10) NOT NULL,
    id_catedratico VARCHAR(10) NOT NULL,
    registro_academico VARCHAR(20) NOT NULL,
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo ENUM('Curso', 'Catedratico') NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES Cursos(codigo_curso),
    FOREIGN KEY (id_catedratico) REFERENCES Catedraticos(codigo_catedratico),
    FOREIGN KEY (registro_academico) REFERENCES Usuarios(registro_academico)
);

CREATE Table Comentarios(
    id_comentario INT PRIMARY KEY AUTO_INCREMENT,
    id_publicacion INT NOT NULL,
    registro_academico VARCHAR(20) NOT NULL,
    comentario TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_publicacion) REFERENCES Publicaciones(id_publicacion),
    FOREIGN KEY (registro_academico) REFERENCES Usuarios(registro_academico)
);

CREATE Table Curso_catedratico(
    id_catedratico VARCHAR(10) NOT NULL,
    id_curso VARCHAR(10) NOT NULL,
    PRIMARY KEY (id_catedratico, id_curso),
    FOREIGN KEY (id_catedratico) REFERENCES Catedraticos(codigo_catedratico),
    FOREIGN KEY (id_curso) REFERENCES Cursos(codigo_curso)
);

CREATE Table Cursos_aprobados(
    registro_academico VARCHAR(20) NOT NULL,
    id_curso VARCHAR(10) NOT NULL,
    PRIMARY KEY (registro_academico, id_curso),
    FOREIGN KEY (registro_academico) REFERENCES Usuarios(registro_academico),
    FOREIGN KEY (id_curso) REFERENCES Cursos(codigo_curso)
);

-- Insertar cursos
INSERT INTO Cursos (codigo_curso, nombre_curso, creditos) VALUES
("SIS101", "Introducción a Sistemas", 4),
("SIS102", "Estructuras de Datos", 5),
("SIS103", "Bases de Datos", 4);

-- Insertar catedráticos
INSERT INTO Catedraticos (codigo_catedratico, nombre_completo) VALUES
("CAT001", "Juan Pérez"),
("CAT002", "Ana Gómez"),
("CAT003", "Carlos Rodríguez");
