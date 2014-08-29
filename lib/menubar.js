var gui = require('nw.gui');
var turiMenu = new gui.Menu({
	type: 'menubar'
});

// Create File Menu
var fileMenu = new gui.Menu();

var fileMenuButton = new gui.MenuItem({
	label: 'File',
	submenu: fileMenu
});

var fileMenuNew = new gui.MenuItem({
	label: 'New Bot',
	click: function(e) { alert('New Bot!'); }
});
var fileMenuOpen = new gui.MenuItem({
	label: 'Open',
	click: function(e) { alert('Open Bot!'); }
});

fileMenu.append(fileMenuNew);
fileMenu.append(fileMenuOpen);

// Create mac built in menu on OSX (aka "darwin") IFF using latest version of node
if(process.platform=="darwin" && parseInt(process.versions['node-webkit'].split('.')[1]) >= 10){
	turiMenu.createMacBuiltin("Turi");
	turiMenu.insert(fileMenuButton, 1); // the 1 inserts it before the Edit/Window
} else{
	turiMenu.append(fileMenuButton);
}

gui.Window.get().menu = turiMenu;