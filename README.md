# Triviareloaded
Reto 1, esta es nuestra trivia :)

(Descargar Git, hacer cuenta en github)

Creando repositorio

Dimos click en la parte superior derecha, en el signo de más, en "Nuevo repositorio"
Agregamos el nombre del repositorio, la descripción, lo configuramos como público y elegimos crearlo con un README
Después copiamos la dirección HTTPS

Subiendo archivos a GitHub
1.- Configuramos usuario y correo usando los comandos git config --global usa.name "nombre de usuario" / git config --global usar.email "correodelusuario@gmail.com"
2.- Utilizamos el comando $ git init para iniciar nuestro repositorio local
3.- Utilizamos $ git status para abrir el directorio y revisar qué archivos estaban en la terminal
4.- Utilizamos $ git clone para hacer una copia del servidor a la computadora. Copiamos el link HTTPS del repositorio ubicado en GitHub
5.- Utilizamos $1s para imprimir el directorio donde estábamos trabajando. Nos dimos cuenta que estábamos en el directorio equivocado.
6.- Utilizamos $cd (cambio de directorio) para ubicarnos correctamente en la carpeta y cambiar a Trivia
7.- Utilizamos $ git init para inicializar la carpeta Trivia en el repositorio
7.1 - se inicializó una carpeta git vacía en la dirección de Trivia
8.- Utilizamos $git remote add origin (remote fue utilziado para referirnos a la ubicación de Github y no a la ubicación local) junto con el link de GitHub
8.1 - usamos $ git remote -v para mostrar las urls asociadas a cada repositorio
9.- Utilizamos $git add para añadir a las urls los archivos de la carpeta de origen
10.- $git commit "subiendo archivos"
11 .- $git push para subir archivos a un repositorio remoto
12.- $git fetch origin para traer los cambios
12.1 $git merge origin
13.- Actualizamos la página de Github, aparecieron los archivos

Creando GH pages
1.- Click en el botón Branch:master de la página del repositorio
2.- Escribir gh-pages dentro del cuadro desplegado (para crear una rama nueva)
3.- Acceder a settings y dar click en branches
4.- Cambiar la rama "master" por "gh-pages"
5.- Click en Update, aceptar mensaje
6.- Regresar a Options, bajar a GitHub Pages y abrir el enlace que se muestra
