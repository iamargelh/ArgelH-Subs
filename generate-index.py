import requests
import json
import xml.etree.ElementTree as ET

owner = "iamargelh"
repo = "ArgelH-Subs"
root_folder = "subs"
api_url = f"https://api.github.com/repos/{owner}/{repo}/contents/{root_folder}"


def get_tree(path=""):
    response = requests.get(api_url + ("/" + path if path else ""))
    data = response.json()
    tree = {}
    for item in data:
        if item["type"] == "dir":
            tree[item["name"]] = get_tree(item["path"].replace(f"{root_folder}/", ""))
        else:
            tree[item["name"]] = item["download_url"]
    return tree


def save_tree_to_json(tree, file_path):
    with open(file_path, "w") as f:
        json.dump(tree, f, indent=4)


def save_tree_to_xml(tree, file_path):
    def _create_element(item, name):
        if isinstance(item, dict):
            elem = ET.Element(name)
            for key, val in item.items():
                elem.append(_create_element(val, key))
            return elem
        else:
            return ET.Element(name).text(str(item))

    root = _create_element(tree, "tree")
    tree_xml = ET.ElementTree(root)
    tree_xml.write(file_path)


tree = get_tree()
save_tree_to_json(tree, "tree.json")
save_tree_to_xml(tree, "tree.xml")