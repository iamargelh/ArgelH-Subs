#!/bin/bash

# Navegar al directorio subs
cd subs

# Obtener una lista de todos los archivos y directorios
entries=$(ls)

# Crear un archivo index.html en la raíz del repositorio
index_file="../index.html"
echo "<html><body><ul>" > $index_file

# Para cada entrada en el directorio subs
for entry in $entries; do
  # Si la entrada es un archivo .md
  if [[ $entry == *.md ]]; then
    # Agregar un enlace sin la extensión .md
    echo "<li><a href=\"subs/${entry%.md}\">${entry%.md}</a></li>" >> $index_file
  else
    # Agregar un elemento de lista sin enlace
    echo "<li>$entry</li>" >> $index_file
  fi
done

echo "</ul></body></html>" >> $index_file
