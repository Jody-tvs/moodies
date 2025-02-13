const express = require("express")
const app = express()
const PORT = 5000

app.get("/", (req, res) => {
    res.send("Backend Moodies fonctionne !")
})

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`)
})