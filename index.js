const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')


let win

function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        maximizable: false
    });

    win.setResizable(false);

    win.setMenu(null)

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });

    

    
}


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

app.on('ready', createWindow);