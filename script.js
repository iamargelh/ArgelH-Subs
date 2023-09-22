window.onload = function() {
    if (window.screen.width < window.screen.height) {
      // La pantalla es vertical
      document.body.style.fontSize = `7.2em`;
    } else {
      // La pantalla es horizontal
      document.body.style.fontSize = `4.5em`;
    }
  };

let rootDirectoryName = '';

fetch("tree.json?nocache=123")
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
            pathDiv.innerHTML = "";
            for (let index = 0; index < naming.length; index++) {
                let pathElement = document.createElement("span");
                pathElement.id = index;
                pathElement.onclick = function() { customback(index); };
                if (naming[index] == naming[0]) {
                    pathElement.innerHTML = `ArgelH /<a href="#" class="folder">${naming[index]}</a>`;
                } else {
                    pathElement.innerHTML = `/<a href="#" class="folder">${naming[index]}</a> `;
                }
                pathDiv.appendChild(pathElement);
            }
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
            if (count!=0) {
                let site = count - number;
                let pastpath = pathing[count - site];
                let pastname = naming[count - site];
                const newPathElement = document.createElement("span");
                pathDiv.appendChild(newPathElement);
                newPathElement.innerText = `${pastname}`;
                for (let index = 0; index <= count - number; index++) {
                    removeDir();
                }
                renderPath();
                renderContents(pastpath);
            }
        }

        renderContents(data.children);
        renderPath();
    })
    .catch((error) => console.error(error));
