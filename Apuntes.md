# Apuntes
Apuntes del curso Desarrollo de Aplicaciones Móviles :iphone:

## Apache
Instalación de Apache en ubuntu mediante terminal
- `sudo apt-get install apache2`

## Git + GitHub

### Instalación
Instalación de GIT en ubuntu mediante terminal
- `sudo apt-get install git`

### Configuración de nuestra cuenta e identidad
- `git config --global user.email "email"`
- `git config --global user.name "user"`

Si queremos saber los datos de nuestra cuenta
- `git config --list`

### Clonar un repositorio de GitHub
Primero tendremos que posicionarnos en la carpeta donde queremos descargarlo
- `git clone URL`
La URL la obtendremos desde GitHub

Para ver el estado del repositorio
- `git status`

Para añadir los cambios creados al repositorio:
- `git add -A`
- `git add FICHERO`
- `git add DIRECTORIO\`

Para confirmar los cambios y que se suban definitivamente al repositorio
- `git commit -m "mensaje"`


El primer comando nos sirve para visualizar que archivos se van a añadir, y el commit confirmará los cambios.

Para guardar los cambios de nuestro repositorio, y mantener así una copia de seguridad en GitHub
- `git push origen master`

Actualizar nuestro repositorio local
- `git pull`

Links de interes
- http://guides.railsgirls.com/github/
- https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
- http://www.git-tower.com/learn/

## Terminal
Archivos ocultos
- `ls -la`

## Sublime Text
Instalaremos el gestor de paquetes [Package Control](https://packagecontrol.io)

Paquetes que instalaremos
Emmet

## Markdown
Guia
- https://guides.github.com/features/mastering-markdown/

Emoji
- http://www.emoji-cheat-sheet.com