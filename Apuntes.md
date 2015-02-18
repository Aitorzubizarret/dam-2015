# APUNTES
Apuntes del curso Desarrollo de Aplicaciones Móviles :iphone:

## Apache
Servidor web que utilizaremos en las prácticas de nuestros ejercicios de HTML + CSS + JavaScript.

### Instalación
Instalación de apache a través del termina.

    sudo apt-get install apache2

### Configuración de hosts virtuales
Primero escribimos en el documento hosts que se encuentra en /private/etc/

    sudo nano /private/etc/hosts

Descomentamos la línea de virtual hosts para activarla

    # Virtual hosts
    # Include /Applications/MAMP/conf/apache/extra/httpd-vhosts.conf
    
* http://jason.pureconcepts.net/2014/11/configure-apache-virtualhost-mac-os-x/
* http://www.abhinavsood.com/working-apache-port-80-localhost-in-mamp-or-mamp-pro/
* http://butlerccwebdev.net/support/testingserver/install-mamp.html
* http://foundationphp.com/tutorials/vhosts_mamp.php
* http://clickontyler.com/virtualhostx/index2.php

## Git + GitHub
Software de control de versiones que utilizaremos en nuestro desarrollo. Utilizaremos GitHub para tener una copia de seguridad de nuestro repositorio local.

### Instalación
Instalación de git a través del termina.

    sudo apt-get install git

### Configuración de usuario
Tendremos que configurar nuestro usuario, email y nombre, para que el software sepa quien es el autor de los cambios. Tendremos que usar el mismo email que hemos usado a la hora de crear nuestra cuenta de GitHub.

    git config --global user.email "email"
    git config --global user.name "user"

En caso de que queramos saber los datos de configuración de nuestro repositorio: 
* Nombre de usuario
* Email
* Dirección del repositorio maestro
* ...

    git config --list

### Clonar un repositorio de GitHub
Primero tendremos que posicionarnos en la carpeta de nuestro equipo donde queremos descargarlo, y después tendremos que saber la URL del repositorio de GitHub que queremos clonar. La podremos obtener en la web de GitHub, dentro de nuestro repositorio, debajo del menu vertical que aparece a la derecha.

Por ejemplo, la URL de este repositorio es https://github.com/Aitorzubizarret/dam-2015.git

    git clone URL

###Para ver el estado del repositorio

    git status

###Para añadir los cambios creados al repositorio:

    git add -A
    git add FICHERO
    git add DIRECTORIO\
    

Para confirmar los cambios y que se suban definitivamente al repositorio

    git commit -m "mensaje"


El primer comando nos sirve para visualizar que archivos se van a añadir, y el commit confirmará los cambios.

###Para guardar los cambios de nuestro repositorio, y mantener así una copia de seguridad en GitHub

    git push origin master

###Actualizar nuestro repositorio local

    git pull

Links de interes:
* http://es.wikipedia.org/wiki/Git
* http://guides.railsgirls.com/github/
* https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/
* http://www.git-tower.com/learn/

## Terminal
Si queremos ver los archivos ocultos de un directorio usando *ls* tan solo tendremos que añadirle *-la*.

    ls -la

## Sublime Text
Instalaremos el gestor de paquetes [Package Control](https://packagecontrol.io)

Paquetes que instalaremos
* Emmet

### Paquete Emmet
Documentación de emmet [en su web](http://docs.emmet.io/)

## Markdown
Guia
* https://guides.github.com/features/mastering-markdown/

Emoji
* http://www.emoji-cheat-sheet.com

Links de interes:
* http://daringfireball.net/projects/markdown/basics
* http://macdown.uranusjr.com
* http://25.io/mou/
* http://computers.tutsplus.com/tutorials/introducing-markdown-on-os-x--cms-20764

## HTML

## CSS
    <link rel="stylesheet" href="/css/main.css" />
    /* Comentario */
    * {}
    html, body {}

http://leaverou.github.io/prefixfree/
http://caniuse.com/
fontsquirrel.com

column break after
column break before
    
