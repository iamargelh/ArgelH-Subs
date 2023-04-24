let rootDirectoryName = '';

fetch("tree.json")
    .then((response) => response.json())
    .then((data) => {
        const contentsDiv = document.getElementById("contents");
        const pathDiv = document.getElementById("path");
        rootDirectoryName = data.name;
        let pathing = [];
        let naming = [];
        let count = 0;
        pathing.push(data.children);
        naming.push(data.name);

        function renderPath() {
            let path = "";
            //const pathElements = Array.from(pathDiv.childNodes);
            //
            for (let index = 0; index < naming.length; index++) {
                if (naming[index] == naming[0]) {
                    path += "ArgelH-Subs/"+naming[index];
                } else {
                    path += `/${naming[index]}`;
                    //<button onclick="getElementById('demo').innerHTML = Date()">What is the time?</button>

                }
            }
            pathDiv.innerHTML = `${path}`;
            console.log(path);
        }

        function renderContents(node) {
            contentsDiv.innerHTML = "";
            const firstDiv = document.createElement("div");
            firstDiv.innerHTML = `<a href="#" class="folder"> ⤴ 📂 .. </a>`;
            if (count != 0) {
                firstDiv.addEventListener("click", () => {
                    back();
                });
            }
            contentsDiv.appendChild(firstDiv);
            node.forEach((child) => {
                const childDiv = document.createElement("div");
                if (child.type === "file") {
                    const fileName = child.name.replace(".md", "");
                    childDiv.innerHTML = `<a href="${child.page}" target="_blank" class="folder">↪</a><a href="${child.page}" target="_blank"> 📄 ${fileName}</a>`;
                } else if (child.type === "directory") {
                    childDiv.innerHTML = `<a href="#" class="folder">↪ 📁 ${child.name}</a>`;
                    childDiv.addEventListener("click", () => {
                        const newPathElement = document.createElement("span");
                        addDir(child.name, child.children);
                        renderContents(child.children);
                        renderPath();
                    });
                }
                contentsDiv.appendChild(childDiv);
            });
        }

        function addDir(name, path) {
            pathing.push(path);
            naming.push(name);
            count = count + 1;
            //console.log("Aumentado a " + count);
            //console.log("Aumentado a " + count);
        }
        function removeDir() {
            pathing.pop();
            naming.pop();
            count = count - 1;
            console.log("Disminuído a " + count);
        }
        function back() {
            let pastpath = pathing[count - 1];
            let pastname = naming[count - 1];
            const newPathElement = document.createElement("span");
            pathDiv.appendChild(newPathElement);
            newPathElement.innerText = `${pastname}`;
            removeDir();
            renderPath();
            renderContents(pastpath);
        }
        function customback(number) {
            for (let index = 0; index < naming.length-number; index++) {
                removeDir();
            }
            renderPath();
            renderContents(pathing);
        }

        renderContents(data.children);
        renderPath();
    })
    .catch((error) => console.error(error));
