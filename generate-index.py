import os
from jinja2 import Template

# Obtener la ruta de la carpeta raíz del repositorio
repo_path = os.getcwd()

# Obtener la ruta de la carpeta subs y construir el link a la página de GitHub Pages
subs_path = os.path.join(repo_path, 'subs')
github_pages_link = 'https://{username}.github.io/{repository_name}/subs/'.format(
    username='<tu_nombre_de_usuario_en_GitHub>',
    repository_name='<nombre_del_repositorio>')

# Recorrer la estructura de carpetas y archivos y construir una lista de diccionarios con la información necesaria
file_tree = []

for root, dirs, files in os.walk(subs_path):
    # Construir el link para la carpeta actual
    path_parts = os.path.relpath(root, start=subs_path).split(os.sep)
    current_path = os.path.join(github_pages_link, *path_parts)
    current_name = path_parts[-1] if path_parts else 'subs'

    # Añadir la carpeta actual a la lista de archivos y carpetas
    file_tree.append({
        'name': current_name,
        'link': current_path,
        'type': 'folder'
    })

    # Recorrer los archivos de la carpeta actual y añadirlos a la lista de archivos y carpetas
    for file_name in files:
        file_path = os.path.join(root, file_name)
        file_link = os.path.join(current_path, file_name[:-3])
        file_tree.append({
            'name': file_name[:-3],
            'link': file_link,
            'type': 'file'
        })

# Ordenar la lista de archivos y carpetas alfabéticamente
file_tree.sort(key=lambda x: x['name'].lower())

# Construir el HTML utilizando jinja2 y escribirlo en un archivo index.html
template = Template('''
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Explorador de archivos y carpetas</title>
</head>
<body>
    <div id="explorer">
        <div id="path">{{ path }}</div>
        <div id="contents">
            {% for item in file_tree %}
                {% if item['type'] == 'folder' %}
                    <span>↪ 📁 <a href="{{ item['link'] }}">{{ item['name'] }}</a></span>
                {% else %}
                    <span>↪ 📄 <a href="{{ item['link'] }}">{{ item['name'] }}</a></span>
                {% endif %}
            {% endfor %}
        </div>
    </div>
</body>
</html>
''')

with open(os.path.join(repo_path, 'index.html'), 'w') as f:
    f.write(template.render(path='subs', file_tree=file_tree))
