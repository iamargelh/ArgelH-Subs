<html>
   <!-- VARIABLES -->
   <script>
      //
      //CANCION
      var cancion = "AJR - The Dumb Song";
      //
      //WALLPAPER
      var titulo = "Artstation";
      var texto = "Yun Yin";
      var wfuente = "";
      //
      //PISTAS
      var vocals = "";
      var instrumental = "";
      //
      //ARTISTA 1
      var artist = "AJR";
      var tidal = "a";
      var spotify = "";
      var instagram = "";
      var twitter = "";
      var soundcloud = "";
      var website = "";
      var facebook = "";
      var youtube = "";
      var discord = "";
      //
      //ARTISTA 2
      var artist2 = "";
      var tidal2 = "";
      var spotify2 = "";
      var instagram2 = "";
      var twitter2 = "";
      var soundcloud2 = "";
      var website2 = "";
      var facebook2 = "";
      var youtube2 = "";
      var discord2 = "";
      //
      //ARTISTA 3
      var artist3 = "";
      var tidal3 = "";
      var spotify3 = "";
      var instagram3 = "";
      var twitter3 = "";
      var soundcloud3 = "";
      var website3 = "";
      var facebook3 = "";
      var youtube3 = "";
      var discord3 = "";
      //
      //LYRICS
      var eng = "Oh, In My Head<br><br>You Said With Certainty<br>I May Be The Dumbest Person That You′Ve Ever Seen<br>You Think You're Hurting Me<br>Bet You Won′t Believe It, But You Kinda Set Me Free<br><br>You've Mentioned Adderall<br>Slip This Guy A Sedative, He's Bouncing Off The Wall<br>Honey, It′s No Big Deal<br>We′ll Get You Back To College, You Could Study Somethin' Real<br><br>So If That′s How You Feel<br>When We Go Down<br>When Kingdom Come<br><br>Don't Look At Me, Don′t Look At Me<br>I'm Just Too Dumb<br>I′D Love To Stay (Love To Stay)<br>But Like You Said (Like You Said)<br>Don't Look At Me, 'Cause I Got Nothin′ In My Head<br>Oh, In My Head<br><br>Too Dumb For Breakin′ Up<br>I'd Do It In Person, But I′d Probably Mess It Up<br>I'll Text You, That′s Enough<br>That's How Empty-Headed People Get Through Stuff<br><br>Your World Is Ending Soon<br>Mine′s A Little Better 'Cause I Never Watch The News<br>You Make My Lunch Today<br>I Would Do It, But I Couldn't Work My Microwave<br>So If That′s What You′Re Saying<br><br>When We Go Down<br>When Kingdom Come<br><br>Don't Look At Me, Don′t Look At Me<br>I'm Just Too Dumb<br>I′d Love To Stay (Love To Stay)<br>But Like You Said (Like You Said)<br>Don't Look At Me, ′Cause I Got Nothin' In My Head<br>Oh, In My Head<br><br>You Should Not Have Done That<br><br>When We Go Down (We Go Down)<br>When Kingdom Come (Kingdom Come)<br><br>Don't Look At Me, Don′t Look At Me<br>I′m Much Too Dumb<br>I'd Love To Stay (Love To Stay)<br>But Like You Said (Like You Said)<br>Don′T Look At Me, 'Cause I Got Nothin′ In My Head<br>Oh, In My Head<br>Oh, In My Head<br><br>When We Go Down<br>When Kingdom Come<br>Don't Look At Me, Don′t Look At Me<br>I'm Just Too Dumb.";
      //
      var esp = "Oh, En Mi Cabeza<br><br>Dijiste Con Seguridadㅤㅤ<br>Que Podría Ser La Persona Más Tonta Que Hayas Visto<br>Piensas Que Me Haces Sufrir<br>Tal Vez Te Sorprenda, Pero Me Liberaste Un Pocoㅤㅤㅤㅤ<br><br>Mencionaste Unos Fármacos<br>\"Seden A Ese Chico, Está A Punto De Explotar De Tanta Energía\"<br>Tranquila, No Es Para Tanto<br>\"Te Devolveremos A La Universidad, Así Podrás Estudiar Algo De Verdad\"<br><br>Así Que Si Eso Es Lo Que Piensas<br>Cuando Estamos Débiles<br>Cuando Todo Se Desmorona<br><br>No Me Mires A Mi, No Me Mires A Mi<br>Soy Demasiado Tonto<br>Me Encantaría Quedarme (Me Encantaría Quedarme)<br>Pero Como Dijiste (Como Dijiste)<br>No Me Mires, Porque No Tengo Nada En Mi Cabeza<br>Oh, En Mi Cabeza<br><br>Soy Demasiado Tonto Para Terminarte<br>Lo Haría En Persona, Pero Probablemente Lo Arruinaría<br>Te Enviaré Un Mensaje De Texto, Eso Es Suficiente<br>Así Es Como Las Personas Con Nada En La Cabeza Se Las Arreglan<br><br>Tu Mundo Se Está Terminando Pronto<br>El Mío Está Un Poco Mejor Porque Nunca Veo Las Noticias<br>Me Preparaste El Almuerzo Hoy<br>Lo Haría Yo, Pero No Podría Hacer Funcionar Mi Microondas :D<br><br>Así Que Si Eso Es Lo Que Piensas<br>Cuando Estamos Débiles<br>Cuando Todo Se Desmorona<br><br>No Me Mires A Mi, No Me Mires A Mi<br>Soy Demasiado Tonto<br>Me Encantaría Quedarme (Me Encantaría Quedarme)<br>Pero Como Dijiste (Como Dijiste)<br>No Me Mires, Porque No Tengo Nada En Mi Cabeza<br>Oh, En Mi Cabeza<br><br>No Deberías Haber Hecho Eso :D<br><br>Cuando Estamos Débiles (Estamos Débiles)<br>Cuando Todo Se Desmorona (Se Desmorona)<br><br>No Me Mires A Mi, No Me Mires A Mi<br>Soy Tonto Mucho Demasiado<br>Me Encantaría Quedarme (Me Encantaría Quedarme)<br>Pero Como Dijiste (Como Dijiste)<br>No Me Mires, Porque No Tengo Nada En Mi Cabeza<br>Oh, En Mi Cabeza<br>Oh, En Mi Cabeza<br><br>Cuando Estamos Débiles<br>Cuando Todo Se Desmorona<br>No Me Mires A Mi, No Me Mires A Mi<br>Soy Demasiado Tonto.";
   </script>
   <!-- ESTILOS -->
   <head>
      <style>
         table {
         border-collapse: collapse;
         font-family: "Times New Roman", Times, serif;
         width: 760px;
         }
         th,
         td {
         padding: 8px;
         }
         .titulo {
         text-align: center;
         }
         .ingles {
         text-align: right;
         width: 380px;
         }
         .espanol {
         text-align: left;
         width: 380px;
         }
         .borde-derecho {
         border-right: 1px solid black;
         }
         .mitad-tamano {
         font-size: 50%;
         display: block;
         margin-top: -2px;
         margin-bottom: 0px;
         }
         .top-align {
         vertical-align: top;
         }
         .mid-align {
         vertical-align: middle;
         }
      </style>
   </head>
   <!-- CUERPO CON LA TABLA -->
   <body>
      <table>
         <tr>
            <th colspan="4" class="titulo">Título</th>
         </tr>
         <tr>
            <th colspan="2" class="ingles borde-derecho top-align">English</th>
            <th colspan="2" class="espanol top-align">Español</th>
         </tr>
         <tr>
            <td colspan="2" class="ingles borde-derecho"><a id="LyricEng"></a></td>
            <td colspan="2" class="espanol"><a id="LyricEsp"></a></td>
         </tr>
         <tr>
            <td class="top-align"><span id="spanWallpaper"><b>Wallpaper:</b><span class="mitad-tamano">(Usado en mi
               video)</span><span id="FuenteW1">Oficial: bitbird</span></span>
            </td>
            <td class="top-align"><span id="UrlsArtista1"></span></td>
            <td class="top-align" style="text-align: right;">Interpretación por: <b>Argel H</b><br>Redes:<br><a
               href="https://linktr.ee/iamargelh">linktr.ee/iamargelh</a></td>
            <td class="mid-align"><img src="//resources/g6qk73.gif" width="70ch"></td>
         </tr>
      </table>
      <!-- INFIERNO DE LOS SCIRPT -->
      <script>
         var celdaLyricEsp = document.getElementById("LyricEsp");
         var artistName = document.createElement("strong");
         artistName.textContent = artist + ":";
         //
         var celdaLyricEsp = document.getElementById("LyricEsp");
         celdaLyricEsp.innerHTML = esp;
         var celdaLyricEng = document.getElementById("LyricEng");
         celdaLyricEng.innerHTML = eng;
         //
         var tituloc = document.querySelector(".titulo");
         tituloc.textContent = cancion;
         tituloc.style.textAlign = "center";
         var fuenteW1 = document.getElementById("FuenteW1");
         fuenteW1.innerHTML = titulo + ": ";
         var enlace = document.createElement("a");
         if (wfuente) {
             enlace.href = wfuente;
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
                 vocalsLink.textContent = "Acapella";
                 audiosSpan.appendChild(vocalsLink);
                 audiosSpan.appendChild(document.createElement("br"));
             }
             if (instrumental) {
                 var instrumentalLink = document.createElement("a");
                 instrumentalLink.href = instrumental;
                 instrumentalLink.textContent = "Instrumental";
                 audiosSpan.appendChild(instrumentalLink);
             }
         }
      </script>
      <script>
         var celdaUrlsArtista1 = document.getElementById("UrlsArtista1");
         var artistName = document.createElement("strong");
         artistName.textContent = artist + ":";
         celdaUrlsArtista1.appendChild(artistName);
         celdaUrlsArtista1.appendChild(document.createElement("br")); // AÑADE UN SALTO DE LINEA DESPUES DEL ARTISTA
         if (tidal) {
             var enlaceTidal = document.createElement("a");
             enlaceTidal.href = tidal;
             enlaceTidal.textContent = "Tidal";
             celdaUrlsArtista1.appendChild(enlaceTidal);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (spotify) {
             var UrlsArtista1potify = document.createElement("a");
             UrlsArtista1potify.href = spotify;
             UrlsArtista1potify.textContent = "Spotify";
             celdaUrlsArtista1.appendChild(UrlsArtista1potify);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (soundcloud) {
             var UrlsArtista1oundCloud = document.createElement("a");
             UrlsArtista1oundCloud.href = soundcloud;
             UrlsArtista1oundCloud.textContent = "SoundCloud";
             celdaUrlsArtista1.appendChild(UrlsArtista1oundCloud);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (youtube) {
             var enlaceYouTube = document.createElement("a");
             enlaceYouTube.href = youtube;
             enlaceYouTube.textContent = "YouTube";
             celdaUrlsArtista1.appendChild(enlaceYouTube);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (website) {
             var enlaceWebsite = document.createElement("a");
             enlaceWebsite.href = website;
             enlaceWebsite.textContent = "Website";
             celdaUrlsArtista1.appendChild(enlaceWebsite);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (discord) {
             var enlacediscord = document.createElement("a");
             enlacediscord.href = discord;
             enlacediscord.textContent = "Discord";
             celdaUrlsArtista1.appendChild(enlacediscord);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (instagram) {
             var enlaceInstagram = document.createElement("a");
             enlaceInstagram.href = instagram;
             enlaceInstagram.textContent = "Instagram";
             celdaUrlsArtista1.appendChild(enlaceInstagram);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (facebook) {
             var enlaceFacebook = document.createElement("a");
             enlaceFacebook.href = facebook;
             enlaceFacebook.textContent = "Facebook";
             celdaUrlsArtista1.appendChild(enlaceFacebook);
             celdaUrlsArtista1.appendChild(document.createElement("br"));
         }
         if (twitter) {
             var enlacetwitter = document.createElement("a");
             enlacetwitter.href = twitter;
             enlacetwitter.textContent = "Twitter";
             celdaUrlsArtista1.appendChild(enlacetwitter);
         }
      </script>
      <script>
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
                 enlaceTidal.textContent = "Tidal";
                 celdaUrlsArtista2.appendChild(enlaceTidal);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (spotify2) {
                 var UrlsArtista1potify = document.createElement("a");
                 UrlsArtista1potify.href = spotify2;
                 UrlsArtista1potify.textContent = "Spotify";
                 celdaUrlsArtista2.appendChild(UrlsArtista1potify);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (soundcloud2) {
                 var UrlsArtista1oundCloud = document.createElement("a");
                 UrlsArtista1oundCloud.href = soundcloud2;
                 UrlsArtista1oundCloud.textContent = "SoundCloud";
                 celdaUrlsArtista2.appendChild(UrlsArtista1oundCloud);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (youtube2) {
                 var enlaceYouTube = document.createElement("a");
                 enlaceYouTube.href = youtube2;
                 enlaceYouTube.textContent = "YouTube";
                 celdaUrlsArtista2.appendChild(enlaceYouTube);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (website2) {
                 var enlaceWebsite = document.createElement("a");
                 enlaceWebsite.href = website;
                 enlaceWebsite.textContent = "Website";
                 celdaUrlsArtista2.appendChild(enlaceWebsite);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (discord2) {
                 var enlacediscord = document.createElement("a");
                 enlacediscord.href = discord2;
                 enlacediscord.textContent = "Discord";
                 celdaUrlsArtista2.appendChild(enlacediscord);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (instagram) {
                 var enlaceInstagram = document.createElement("a");
                 enlaceInstagram.href = instagram;
                 enlaceInstagram.textContent = "Instagram";
                 celdaUrlsArtista2.appendChild(enlaceInstagram);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (facebook2) {
                 var enlaceFacebook = document.createElement("a");
                 enlaceFacebook.href = facebook2;
                 enlaceFacebook.textContent = "Facebook";
                 celdaUrlsArtista2.appendChild(enlaceFacebook);
                 celdaUrlsArtista2.appendChild(document.createElement("br"));
             }
             if (twitter2) {
                 var enlacetwitter = document.createElement("a");
                 enlacetwitter.href = twitter2;
                 enlacetwitter.textContent = "Twitter";
                 celdaUrlsArtista2.appendChild(enlacetwitter);
             }
         }
      </script>
      <script>
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
                 enlaceTidal.textContent = "Tidal";
                 celdaUrlsArtista3.appendChild(enlaceTidal);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (spotify3) {
                 var UrlsArtista1potify = document.createElement("a");
                 UrlsArtista1potify.href = spotify3;
                 UrlsArtista1potify.textContent = "Spotify";
                 celdaUrlsArtista3.appendChild(UrlsArtista1potify);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (soundcloud3) {
                 var UrlsArtista1oundCloud = document.createElement("a");
                 UrlsArtista1oundCloud.href = soundcloud;
                 UrlsArtista1oundCloud.textContent = "SoundCloud";
                 celdaUrlsArtista3.appendChild(UrlsArtista1oundCloud);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (youtube) {
                 var enlaceYouTube = document.createElement("a");
                 enlaceYouTube.href = youtube;
                 enlaceYouTube.textContent = "YouTube";
                 celdaUrlsArtista3.appendChild(enlaceYouTube);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (website3) {
                 var enlaceWebsite = document.createElement("a");
                 enlaceWebsite.href = website3;
                 enlaceWebsite.textContent = "Website";
                 celdaUrlsArtista3.appendChild(enlaceWebsite);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (discord3) {
                 var enlacediscord = document.createElement("a");
                 enlacediscord.href = discord3;
                 enlacediscord.textContent = "Discord";
                 celdaUrlsArtista3.appendChild(enlacediscord);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (instagram3) {
                 var enlaceInstagram = document.createElement("a");
                 enlaceInstagram.href = instagram3;
                 enlaceInstagram.textContent = "Instagram";
                 celdaUrlsArtista3.appendChild(enlaceInstagram);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (facebook3) {
                 var enlaceFacebook = document.createElement("a");
                 enlaceFacebook.href = facebook3;
                 enlaceFacebook.textContent = "Facebook";
                 celdaUrlsArtista3.appendChild(enlaceFacebook);
                 celdaUrlsArtista3.appendChild(document.createElement("br"));
             }
             if (twitter3) {
                 var enlacetwitter = document.createElement("a");
                 enlacetwitter.href = twitter3;
                 enlacetwitter.textContent = "Twitter";
                 celdaUrlsArtista3.appendChild(enlacetwitter);
             }
         }
      </script>
   </body>
</html>