# Manual de Instalación de Ubuntu y Uso de la Terminal

## Instalación de Ubuntu

Existen tres formas de instalar Ubuntu: directamente en el disco duro, mediante un sistema de virtualización o en un disco externo. Se recomienda VirtualBox para la virtualización, pero el estudiante puede elegir la herramienta de su preferencia.

### Instalación en Disco Duro

1. Descargue la imagen ISO de Ubuntu desde [Ubuntu Official Website](https://ubuntu.com/download/desktop).
2. Cree un medio de instalación con una memoria USB utilizando herramientas como Rufus o Balena Etcher.
3. Configure la BIOS para arrancar desde el USB.
4. Siga el asistente de instalación, eligiendo particiones adecuadas y configuraciones.
5. Reinicie y acceda al sistema Ubuntu instalado.

### Instalación en VirtualBox

1. Descargue e instale VirtualBox desde su [sitio oficial](https://www.virtualbox.org/).
2. Cree una nueva máquina virtual asignando:
   - **Tipo:** Linux.
   - **Versión:** Ubuntu (64-bit).
   - **Memoria RAM:** Mínimo 2 GB recomendados.
   - **Disco duro:** Dinámico, al menos 20 GB.
3. Monte la imagen ISO de Ubuntu en la máquina virtual.
4. Inicie la máquina virtual y siga el asistente de instalación.
5. Finalizada la instalación, reinicie la máquina virtual y acceda a Ubuntu.

### Instalación en un Disco Externo

También es posible instalar Ubuntu en un disco externo, lo que permite ejecutarlo en diferentes equipos sin afectar el sistema principal.

1. Conecte el disco externo a su computadora.
2. Descargue la imagen ISO de Ubuntu.
3. Cree un medio de instalación en una USB.
4. Arranque desde la USB y seleccione "Instalar Ubuntu".
5. En la sección de particionamiento, elija el disco externo como destino de instalación.
6. Finalice la instalación y reinicie con el disco externo conectado para arrancar Ubuntu.

---

## Uso de la Terminal - Consola

A continuación, se describen los comandos fundamentales de la terminal de Ubuntu:

### Navegación entre archivos y directorios

- `pwd` : Muestra la ruta del directorio actual.
- `ls` : Lista los archivos en un directorio.
- `cd <directorio>` : Cambia de directorio.
  - Ejemplo: `cd Documentos` (entra a Documentos).
- `cd ..` : Retrocede un nivel en la estructura de directorios.

### Creación y gestión de archivos y directorios

- `mkdir <nombre>` : Crea un nuevo directorio.
  - Ejemplo: `mkdir Proyectos`.
- `cp <origen> <destino>` : Copia archivos o directorios.
  - Ejemplo: `cp archivo.txt /home/usuario/Documentos`.
- `mv <origen> <destino>` : Mueve archivos o directorios.
  - Ejemplo: `mv archivo.txt /home/usuario/Descargas`.
- `rm <archivo>` : Elimina un archivo.
  - Ejemplo: `rm documento.txt`.
- `rm -r <directorio>` : Elimina un directorio y su contenido.
  - Ejemplo: `rm -r CarpetaVieja`.

### Uso de permisos y superusuario

- `sudo <comando>` : Ejecuta comandos como superusuario.
  - Ejemplo: `sudo apt update`.
- `chmod <permisos> <archivo>` : Cambia los permisos de un archivo.
  - Ejemplo: `chmod 755 script.sh`.

### Edición de archivos desde la terminal

- `nano <archivo>` : Abre un archivo en el editor Nano.
  - Ejemplo: `nano documento.txt`.
- `vim <archivo>` : Abre un archivo en el editor Vim.
  - Ejemplo: `vim script.sh`.

### Administración de paquetes

- `sudo apt install <paquete>` : Instala un paquete.
  - Ejemplo: `sudo apt install tree`.
- `sudo apt update` : Actualiza la lista de paquetes.
- `sudo apt upgrade` : Actualiza los paquetes instalados.
- `sudo apt remove <paquete>` : Elimina un paquete.
  - Ejemplo: `sudo apt remove tree`.

---

## Desarrollo de la Actividad

1. **Instalar el servidor HTTP Apache2**
   ```bash
   sudo apt update
   sudo apt install apache2
   ```
2. **Ingresar a Localhost en el navegador**
   - Abrir un navegador web y escribir: `http://localhost`
3. **Moverse al directorio /var/www/html/**
   ```bash
   cd /var/www/html/
   ```
4. **Modificar el archivo index.html**
   ```bash
   sudo nano index.html
   ```
   - Agregar el siguiente contenido y guardar:
     ```html
     <html>
     <head><title>Mi Página</title></head>
     <body>
       <h1>No. Carnet: 202104727</h1>
       <h2>Nombre: Luigi Andersón López Suy</h2>
     </body>
     </html>
     ```
5. **Verificar los cambios en el navegador**
   - Refrescar `http://localhost` para ver la actualización.

Con estos pasos, los estudiantes lograrán instalar Ubuntu, aprender a usar la terminal y completar la actividad solicitada.

