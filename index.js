/* IMPORTS */
const express = require('express')  //az express csomagot importáljuk
const path = require('path') //beimportáljuk a path modult


const app = express() /* APP NÉVEN ELINDÍTJUK AZ EXPRESS MODULUNKAT */
const port = 3000 //meghatározzuk a "port" változót


/* A localhost:port vagy 127.0.0.1:port/ felkeresésekor elérhetővé tesszük az index html fájlunkat */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/index.html')) //elküldjök az adott helyen lévő fájlunkat
})

/* A localhost:port vagy 127.0.0.1:port/ felkeresésekor elérhetővé tesszük az script js fájlunkat */
//az első paraméter  mindig a request, a második a respons - más nevet is adhatok neki, de ezt fogja jelenteni
//adhatnám neki azt is kifelé, hogy app.get('/kismacska.css', .... Ha a köv. sorban style.css van, ami létezik )
//A html és az index.js viszont egyezzen! 
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/static/css/style.css'))
})

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/static/js/script.js'))
})


app.get('/users/:userid', (req, res) => {
    res.send(req.params.userid) // : utáni rész userid néven jön létre a backenden a request paramsben
    /* a : létrejött nem fix, az adott helyen jön létre, ez változhat
    Ahol nincs kettőspont, az fix dolog. */
    //const userId = Number(req.params.userid) //ez és a következő sor is használható, ugyanazt az eredményt kapjuk
    const userId = parseInt(req.params.userid)
    if (isNaN(userId)) {
        console.log('userId must be a number') 
        console.log()
    } else {
        console.log('reading file...')
    }
    console.log(userId)
    
    /* beolvasom a ... fájlt */
    fs.readFile('text.txt', "utf8", (err, data) => { /* a paraméterek: fájl elérési útja/neve, kódolás, cb függvény, amiben 2 paramétert várunk: error object, data object */
        /* hibakezelés, ha nem tud lefutni a beolvasás */
        


        
    })
})


/* a  /public címen elérhetővé tesszök a /frontend/static mappánk tartalmát. MAszkolunk
Maga a mappa nem lesz látható, csak a tartalma */
app.use('/public', express.static(path.join(__dirname, '/frontend/static')))



app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, '/data/users.json'))
})



/* elkezdi figyelni az adott portot a számítógépen(localhost vagy 127.0.0.1) */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})