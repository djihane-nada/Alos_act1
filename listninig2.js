var unirest = require("unirest")

 var req = unirest("GET", "http://localhost:3000/products")

 req.headers({
     //Role de ligne 06: cache-control est un en tête du protocole HTTP Indique de renvoyer systématiquement la requête au serveur et ne servir une éventuelle version en cache que dans le cas où le serveur le demande
 "cache-control": "no-cache",
 })

 req.end(function (res) {
 if (res.error) throw new Error(res.error)
 //afficher seulement les 10 premiers enregistrements
 for (var i = 0;i<10;i++){
    console.log(res.body[i])
}
// filter seulement les clients dont le nom commence par la lettre M

function fil() {
    for (var i=0 ;i<100 ;i++){
            if (res.body[i]["name_product"].charAt(0) === "M")
                    console.log(res.body[i]["name_product"])
    }
}

fil();
 })