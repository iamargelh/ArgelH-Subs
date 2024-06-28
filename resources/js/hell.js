// Combine all scripts into a single file

// Script 1
var tituloc = document.querySelector(".titulo");
tituloc.textContent = cancion;
tituloc.style.textAlign = "center";
document.title = "(ArgelH-Subs) " + cancion;
var fuenteW1 = document.getElementById("FuenteW1");
fuenteW1.innerHTML = titulo + ": ";
var enlace = document.createElement("a");
var link = document.querySelector("link[rel~='icon']");
link = document.createElement("link");
link.rel = "icon";
document.head.appendChild(link);
link.href = "https://i.imgur.com/yDkaBI1.png";
if (wfuente) {
    enlace.href = wfuente;
    enlace.target = "_blank";
}
enlace.textContent = texto;
enlace.style.fontStyle = "italic";
fuenteW1.appendChild(enlace);
if (vocals || instrumental) {
    var spanWallpaper = document.getElementById("spanWallpaper");
    spanWallpaper.appendChild(document.createElement("br"));
    var audiosSpan = document.createElement("span");
    audiosSpan.innerHTML = "<strong>Audios:</strong>";
    spanWallpaper.parentNode.insertBefore(audiosSpan, spanWallpaper.nextSibling);
    var extractedText = document.createElement("span");
    extractedText.textContent = "(Extraídos de la canción)";
    extractedText.style.fontSize = "50%";
    extractedText.style.display = "block";
    extractedText.style.marginTop = "-2px";
    extractedText.style.marginBottom = "0px";
    audiosSpan.appendChild(extractedText);
    if (vocals) {
        var vocalsLink = document.createElement("a");
        vocalsLink.href = vocals;
        vocalsLink.target = "_blank";
        vocalsLink.textContent = "Acapella";
        audiosSpan.appendChild(vocalsLink);
        audiosSpan.appendChild(document.createElement("br"));
    }
    if (instrumental) {
        var instrumentalLink = document.createElement("a");
        instrumentalLink.href = instrumental;
        instrumentalLink.target = "_blank";
        instrumentalLink.textContent = "Instrumental";
        audiosSpan.appendChild(instrumentalLink);
    }
}

// Script 2
var celdaUrlsArtista1 = document.getElementById("UrlsArtista1");
var artistName = document.createElement("strong");
artistName.textContent = artist + ":";
celdaUrlsArtista1.appendChild(artistName);
celdaUrlsArtista1.appendChild(document.createElement("br")); // AÑADE UN SALTO DE LINEA DESPUES DEL ARTISTA
if (tidal) {
    var enlaceTidal = document.createElement("a");
    enlaceTidal.href = tidal;
    enlaceTidal.target = "_blank";
    enlaceTidal.textContent = "Tidal";
    celdaUrlsArtista1.appendChild(enlaceTidal);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (spotify) {
    var UrlsArtista1potify = document.createElement("a");
    UrlsArtista1potify.href = spotify;
    UrlsArtista1potify.target = "_blank";
    UrlsArtista1potify.textContent = "Spotify";
    celdaUrlsArtista1.appendChild(UrlsArtista1potify);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (soundcloud) {
    var UrlsArtista1oundCloud = document.createElement("a");
    UrlsArtista1oundCloud.href = soundcloud;
    UrlsArtista1oundCloud.target = "_blank";
    UrlsArtista1oundCloud.textContent = "SoundCloud";
    celdaUrlsArtista1.appendChild(UrlsArtista1oundCloud);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (youtube) {
    var enlaceYouTube = document.createElement("a");
    enlaceYouTube.href = youtube;
    enlaceYouTube.target = "_blank";
    enlaceYouTube.textContent = "YouTube";
    celdaUrlsArtista1.appendChild(enlaceYouTube);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (website) {
    var enlaceWebsite = document.createElement("a");
    enlaceWebsite.href = website;
    enlaceWebsite.target = "_blank";
    enlaceWebsite.textContent = "Website";
    celdaUrlsArtista1.appendChild(enlaceWebsite);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (discord) {
    var enlacereddit = document.createElement("a");
    enlacereddit.href = reddit;
    enlacereddit.target = "_blank";
    enlacereddit.textContent = "Reddit";
    celdaUrlsArtista1.appendChild(enlacereddit);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (discord) {
    var enlacediscord = document.createElement("a");
    enlacediscord.href = discord;
    enlacediscord.target = "_blank";
    enlacediscord.textContent = "Discord";
    celdaUrlsArtista1.appendChild(enlacediscord);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (instagram) {
    var enlaceInstagram = document.createElement("a");
    enlaceInstagram.href = instagram;
    enlaceInstagram.target = "_blank";
    enlaceInstagram.textContent = "Instagram";
    celdaUrlsArtista1.appendChild(enlaceInstagram);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (facebook) {
    var enlaceFacebook = document.createElement("a");
    enlaceFacebook.href = facebook;
    enlaceFacebook.target = "_blank";
    enlaceFacebook.textContent = "Facebook";
    celdaUrlsArtista1.appendChild(enlaceFacebook);
    celdaUrlsArtista1.appendChild(document.createElement("br"));
}
if (twitter) {
    var enlacetwitter = document.createElement("a");
    enlacetwitter.href = twitter;
    enlacetwitter.target = "_blank";
    enlacetwitter.textContent = "Twitter";
    celdaUrlsArtista1.appendChild(enlacetwitter);
}

// Script 3
if (artist2) {
    var celdaUrlsArtista1 = document.getElementById("UrlsArtista1");
    celdaUrlsArtista1.appendChild(document.createElement("br"));
    celdaUrlsArtista1.appendChild(document.createElement("br"));
    var celdaUrlsArtista2 = document.createElement("span");
    celdaUrlsArtista2.id = "UrlsArtista2";
    celdaUrlsArtista1.parentNode.insertBefore(celdaUrlsArtista2, celdaUrlsArtista1.nextSibling);
    var artistName2 = document.createElement("strong");
    artistName2.textContent = artist2 + ":";
    celdaUrlsArtista2.appendChild(artistName2);
    celdaUrlsArtista2.appendChild(document.createElement("br"));
    if (tidal2) {
        var enlaceTidal = document.createElement("a");
        enlaceTidal.href = tidal2;
        enlaceTidal.target = "_blank";
        enlaceTidal.textContent = "Tidal";
        celdaUrlsArtista2.appendChild(enlaceTidal);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (spotify2) {
        var UrlsArtista1potify = document.createElement("a");
        UrlsArtista1potify.href = spotify2;
        UrlsArtista1potify.target = "_blank";
        UrlsArtista1potify.textContent = "Spotify";
        celdaUrlsArtista2.appendChild(UrlsArtista1potify);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (soundcloud2) {
        var UrlsArtista1oundCloud = document.createElement("a");
        UrlsArtista1oundCloud.href = soundcloud2;
        UrlsArtista1oundCloud.target = "_blank";
        UrlsArtista1oundCloud.textContent = "SoundCloud";
        celdaUrlsArtista2.appendChild(UrlsArtista1oundCloud);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (youtube2) {
        var enlaceYouTube = document.createElement("a");
        enlaceYouTube.href = youtube2;
        enlaceYouTube.target = "_blank";
        enlaceYouTube.textContent = "YouTube";
        celdaUrlsArtista2.appendChild(enlaceYouTube);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (website2) {
        var enlaceWebsite = document.createElement("a");
        enlaceWebsite.href = website;
        enlaceWebsite.target = "_blank";
        enlaceWebsite.textContent = "Website";
        celdaUrlsArtista2.appendChild(enlaceWebsite);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (discord2) {
        var enlacediscord = document.createElement("a");
        enlacediscord.href = discord2;
        enlacediscord.target = "_blank";
        enlacediscord.textContent = "Discord";
        celdaUrlsArtista2.appendChild(enlacediscord);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (instagram) {
        var enlaceInstagram = document.createElement("a");
        enlaceInstagram.href = instagram;
        enlaceInstagram.target = "_blank";
        enlaceInstagram.textContent = "Instagram";
        celdaUrlsArtista2.appendChild(enlaceInstagram);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (facebook2) {
        var enlaceFacebook = document.createElement("a");
        enlaceFacebook.href = facebook2;
        enlaceFacebook.target = "_blank";
        enlaceFacebook.textContent = "Facebook";
        celdaUrlsArtista2.appendChild(enlaceFacebook);
        celdaUrlsArtista2.appendChild(document.createElement("br"));
    }
    if (twitter2) {
        var enlacetwitter = document.createElement("a");
        enlacetwitter.href = twitter2;
        enlacetwitter.target = "_blank";
        enlacetwitter.textContent = "Twitter";
        celdaUrlsArtista2.appendChild(enlacetwitter);
    }
}

// Script 4
if (artist3) {
    var celdaUrlsArtista2 = document.getElementById("UrlsArtista2");
    celdaUrlsArtista2.appendChild(document.createElement("br"));
    celdaUrlsArtista2.appendChild(document.createElement("br"));
    var celdaUrlsArtista3 = document.createElement("span");
    celdaUrlsArtista3.id = "UrlsArtista3";
    celdaUrlsArtista2.parentNode.insertBefore(celdaUrlsArtista3, celdaUrlsArtista2.nextSibling);
    var artistName3 = document.createElement("strong");
    artistName3.textContent = artist3 + ":";
    celdaUrlsArtista3.appendChild(artistName3);
    celdaUrlsArtista3.appendChild(document.createElement("br"));
    if (tidal3) {
        var enlaceTidal = document.createElement("a");
        enlaceTidal.href = tidal3;
        enlaceTidal.target = "_blank";
        enlaceTidal.textContent = "Tidal";
        celdaUrlsArtista3.appendChild(enlaceTidal);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (spotify3) {
        var UrlsArtista1potify = document.createElement("a");
        UrlsArtista1potify.href = spotify3;
        UrlsArtista1potify.target = "_blank";
        UrlsArtista1potify.textContent = "Spotify";
        celdaUrlsArtista3.appendChild(UrlsArtista1potify);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (soundcloud3) {
        var UrlsArtista1oundCloud = document.createElement("a");
        UrlsArtista1oundCloud.href = soundcloud;
        UrlsArtista1oundCloud.target = "_blank";
        UrlsArtista1oundCloud.textContent = "SoundCloud";
        celdaUrlsArtista3.appendChild(UrlsArtista1oundCloud);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (youtube) {
        var enlaceYouTube = document.createElement("a");
        enlaceYouTube.href = youtube;
        enlaceYouTube.target = "_blank";
        enlaceYouTube.textContent = "YouTube";
        celdaUrlsArtista3.appendChild(enlaceYouTube);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (website3) {
        var enlaceWebsite = document.createElement("a");
        enlaceWebsite.href = website3;
        enlaceWebsite.target = "_blank";
        enlaceWebsite.textContent = "Website";
        celdaUrlsArtista3.appendChild(enlaceWebsite);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (discord3) {
        var enlacediscord = document.createElement("a");
        enlacediscord.href = discord3;
        enlacediscord.target = "_blank";
        enlacediscord.textContent = "Discord";
        celdaUrlsArtista3.appendChild(enlacediscord);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (instagram3) {
        var enlaceInstagram = document.createElement("a");
        enlaceInstagram.href = instagram3;
        enlaceInstagram.target = "_blank";
        enlaceInstagram.textContent = "Instagram";
        celdaUrlsArtista3.appendChild(enlaceInstagram);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (facebook3) {
        var enlaceFacebook = document.createElement("a");
        enlaceFacebook.href = facebook3;
        enlaceFacebook.target = "_blank";
        enlaceFacebook.textContent = "Facebook";
        celdaUrlsArtista3.appendChild(enlaceFacebook);
        celdaUrlsArtista3.appendChild(document.createElement("br"));
    }
    if (twitter3) {
        var enlacetwitter = document.createElement("a");
        enlacetwitter.href = twitter3;
        enlacetwitter.target = "_blank";
        enlacetwitter.textContent = "Twitter";
        celdaUrlsArtista3.appendChild(enlacetwitter);
    }
}

// Script 5
if (videoLink) {
    var audiosSpan = document.querySelector("#spanWallpaper + span");
    if (!audiosSpan) {
        audiosSpan = document.querySelector("#spanWallpaper");
    }
    var br = document.createElement("br");
    audiosSpan.parentNode.insertBefore(br, audiosSpan.nextSibling);
    var videoSpan = document.createElement("span");
    videoSpan.innerHTML = "<strong>Video Con Mejor Calidad:</strong>";
    br.parentNode.insertBefore(videoSpan, br.nextSibling);
    videoSpan.appendChild(document.createElement("br"));
    var videoLinkElement = document.createElement("a");
    videoLinkElement.href = videoLink;
    videoLinkElement.target = "_blank";
    videoLinkElement.textContent = videoText;
    videoSpan.appendChild(videoLinkElement);
}
