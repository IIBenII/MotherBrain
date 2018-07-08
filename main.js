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
