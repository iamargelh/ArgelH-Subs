import os
import xml.etree.ElementTree as ET
import json

def get_tree(path, base_url):
    tree = {"name": os.path.basename(path)}
    if os.path.isdir(path):
        tree["type"] = "directory"
        children = [get_tree(os.path.join(path, child), base_url) for child in os.listdir(path)]
        # ordenar los subdirectorios y archivos alfabéticamente
        children.sort(key=lambda child: (child['type'], child['name']))
        tree["children"] = children
    else:
        tree["type"] = "file"
        tree["page"] = os.path.join(base_url, os.path.relpath(path, "./subs")).replace(".md", "")
    return tree

"""
def save_tree_to_xml(tree, filename):
    def _create_element(item, name="item"):
        elem = ET.Element(name)
        if isinstance(item, dict):
            for key, val in item.items():
                if val is not None:
                    elem.append(_create_element(val, key))
        else:
            elem.text = str(item)
        return elem

    root = _create_element(tree, "tree")
    tree = ET.ElementTree(root)
    tree.write(filename, encoding="utf-8", xml_declaration=True)
"""
def save_tree_to_json(tree, filename):
    with open(filename, "w") as f:
        json.dump(tree, f, indent=4)


tree = get_tree("./subs", "https://iamargelh.github.io/ArgelH-Subs/subs/")
#save_tree_to_xml(tree, "tree.xml")
save_tree_to_json(tree, "tree.json")
