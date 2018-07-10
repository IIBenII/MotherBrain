const {
    app,
    BrowserWindow,
    ipcMain
} = require("electron")

/*var knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./database.sqlite"
    }
});*/
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database.sqlite', (err) => {
    
    db.run("CREATE TABLE if not exists Data (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, DateTime TEXT, Title TEXT, Code BLOB, Comment TEXT )");
    db.run("CREATE TABLE if not exists Tags (id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, idData TEXT, Tag TEXT )");
    
  });

db.close();

app.on("ready", () => {
    let mainWindow = new BrowserWindow({
        height: 700,
        width: 1100,
        minWidth: 800,
        minHeight: 700,
        show: false
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.once("ready-to-show", () => {
        mainWindow.show()
    })


});



app.on("window-all-closed", () => {
    app.quit()
})
