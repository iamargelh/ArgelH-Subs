import os
import requests

owner = 'iamargelh'
repo = 'ArgelH-Subs'
root_folder = 'subs'

def get_repo_tree():
    headers = {'Authorization': f'token {os.environ["MY_ACCESS_TOKEN"]}'}
    response = requests.get(f'https://api.github.com/repos/{owner}/{repo}/git/trees/main?recursive=1', headers=headers)
    data = response.json()
    print(data)
    return data['tree']

def generate_link(path):
    return f'https://{owner}.github.io/{repo}/{path}'

def generate_folder_element(name, path):
    return f'<div style="color: blue; cursor: pointer;" onclick="updateContents(\'{path}\'); updatePath(\'{path}\')">' + f'↪ 📁 {name}' + '</div>'

def generate_file_element(name, path):
    return f'<div style="color: blue; cursor: pointer;" onclick="window.location.href=\'{generate_link(path)}\'">' + f'↪ 📄 {name.replace(".md", "")}' + '</div>'

def generate_back_element(path):
    parts = path.split('/')
    parts.pop()
    parent_path = '/'.join(parts)
    return f'<div style="color: blue; cursor: pointer;" onclick="updateContents(\'{parent_path}\'); updatePath(\'{parent_path}\')">' + f'⤴ 📂 ..' + '</div>'

def generate_html(tree):
    html = '''<!DOCTYPE html>
    <html>
    <head>
      <title>Index</title>
      <script>
        const item;
        const tree = ''' + str(tree) + ''';
        
        function generateLink(path) {
          return `https://${owner}.github.io/${repo}/${path}`;
        }
        
        function updatePath(path) {
          const parts = path.split('/');
          let currentPath = '';
          pathSpan.innerHTML = '';
          for (let i = 0; i < parts.length; i++) {
            if (i > 0) {
              currentPath += '/';
              pathSpan.appendChild(document.createTextNode('/'));
            }
            currentPath += parts[i];
            const partSpan = document.createElement('span');
            partSpan.innerHTML = parts[i];
            partSpan.style.color = 'blue';
            partSpan.style.cursor = 'pointer';
            partSpan.addEventListener('click', () => {
              updatePath(currentPath);
              updateContents(currentPath);
            });
            pathSpan.appendChild(partSpan);
          }
        }
        
        function updateContents(path) {
          contentsSpan.innerHTML = '';
          if (path !== rootFolder) {
            contentsSpan.innerHTML += `''' + generate_back_element(root_folder) + '''`;
          }
          
          for (let i = 0; i < tree.length; i++) {
            let item = tree[i];
            if (item.path.startsWith(path + '/') && !item.path.slice(path.length + 1).includes('/')) {
              if (item.type === 'tree') {
                contentsSpan.innerHTML += `''' + generate_folder_element('${item["path"].split("/")[-1]}', item['path']) + '''`;
              } else if (item.type === 'blob') {
                contentsSpan.innerHTML += `''' + generate_file_element('${item["path"].split("/")[-1]}', item['path']) + '''`;
              }
            } else {
              continue;
            }
          }
        }
        
        let tree;
        
        function init() {
          tree = ''' + str(tree) + ''';
          
          updatePath(rootFolder);
          
          updateContents(rootFolder);
        }
        
        init();
      </script>
    </head>
    <body>
      <span id="path"></span><br><br>
      <span id="contents"></span>
      <script>
        const owner = \'''' + owner + '''\';
        const repo = \'''' + repo + '''\';
        const rootFolder = \'''' + root_folder + '''\';
        
        const pathSpan = document.querySelector('#path');
        const contentsSpan = document.querySelector('#contents');
      </script>
    </body>
    </html>
    '''
    
    with open('index.html', 'w') as file:
        file.write(html)

tree = get_repo_tree()

generate_html(tree)
