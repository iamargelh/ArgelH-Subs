import requests
import json
import xml.etree.ElementTree as ET

owner = 'iamargelh'
repo = 'ArgelH-Subs'
rootFolder = 'subs'
apiUrl = f'https://api.github.com/repos/{owner}/{repo}/contents/{rootFolder}'

response = requests.get(apiUrl)
data = response.json()

# Guardar en un archivo JSON
with open('tree.json', 'w') as f:
    json.dump(data, f)

# Guardar en un archivo XML
root = ET.Element('root')
for item in data:
    if item['type'] == 'dir':
        folder = ET.SubElement(root, 'folder', {'name': item['name']})
        # Agregar subcarpetas y archivos
    elif item['type'] == 'file':
        file = ET.SubElement(root, 'file', {'name': item['name'], 'url': item['download_url']})
tree = ET.ElementTree(root)
tree.write('tree.xml')