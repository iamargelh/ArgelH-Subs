import requests
import base64
import os
import json

# Configuración
owner = 'iamargelh'
repo = 'ArgelH-Subs'
root_folder = 'subs'
api_url = f'https://api.github.com/repos/{owner}/{repo}/contents/{root_folder}'
repo_path = os.environ['GITHUB_WORKSPACE']

# Función para obtener el contenido de un archivo
def get_file_content(path):
    response = requests.get(f'https://raw.githubusercontent.com/{owner}/{repo}/main/{root_folder}/{path}')
    return response.content.decode()

# Función para obtener el árbol de archivos y carpetas
def get_tree(path=''):
    response = requests.get(api_url + ('' if not path else f'/{path}'))
    data = response.json()
    tree = {}
    for item in data:
        if item['type'] == 'dir':
            tree[item['name']] = get_tree(item['path'].replace(f'{root_folder}/', ''))
        elif item['type'] == 'file' and 'content' in item:
            content = base64.b64decode(item['content']).decode()
            tree[item['name']] = content
    return tree

get_tree()
# Generar el archivo index.html con el contenido del árbol de archivos y carpetas
html_template = '''
<!DOCTYPE html>
<html>

<head>
    <title>(ArgelH-Subs)</title>
    <link rel="icon" href="https://i.imgur.com/jycGdTy.png" />
    <style>
        html {
            font-family: "Times New Roman", Times, serif;
            font-size: 62.5%;
        }

        body {
            font-size: 3.2rem;
        }
    </style>
</head>

<body>
    <div id="path"></div>
    <div id="contents"></div>

    <script>
        let tree = {{tree}};
        let path = '';

        function showTree() {
            let contentsDiv = document.getElementById('contents');
            contentsDiv.innerHTML = '';
            let pathSpan = document.getElementById('path');
            pathSpan.innerHTML = '';
            let parts = path.split('/');
            for (let i in parts) {
                let part = parts[i];
                if (part) {
                    let partSpan = document.createElement('span');
                    partSpan.innerText = part;
                    partSpan.onclick = () => {
                        path = parts.slice(0, i).join('/');
                        showTree();
                    };
                    pathSpan.appendChild(partSpan);
                    if (i < parts.length - 1) {
                        pathSpan.innerHTML += '/';
                    }
                }
            }
            if (path) {
                let backSpan = document.createElement('div');
                backSpan.innerHTML = '⤴ 📂 ..';
                backSpan.onclick = () => {
                    path = parts.slice(0, -1).join('/');
                    showTree();
                };
                contentsDiv.appendChild(backSpan);
            }
            for (let name in tree) {
                let item = tree[name];
                if (typeof item === 'object') {
                    if (item.type === 'dir') {
                        let folderSpan = document.createElement('div');
                        folderSpan.innerHTML = `↪ 📁 ${name}`;
                        folderSpan.onclick = () => {
                            path = `${path}/${name}`;
                            showTree();
                        };
                        contentsDiv.appendChild(folderSpan);
                    } else if (item.type === 'file') {
                        let fileSpan = document.createElement('div');
                        fileSpan.innerHTML = `↪ 📄 ${name.replace('.md', '')}`;
                        fileSpan.onclick = () => {
                            window.location.href =
                                `https://${owner}.github.io/${repo}/${rootFolder}/${path}/${name}`.replace('.md', '');
                        };
                        contentsDiv.appendChild(fileSpan);
                    }
                }
            }
        }
        showTree(tree);
    </script>

</body>

</html>
'''

# Escribir el contenido del archivo index.html en el disco
with open('index.html', 'w') as file:
    file.write(html_template.format(tree=json.dumps(tree)))
