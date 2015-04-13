var win = Ti.UI.currentWindow;
//
var label1 = Ti.UI.createLabel({
	text: 'Cole Harder',
	color: '#fff',
	top: 10,
	textAlign:'center',
	font: {
		fontFamily:'Georgia',
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
//
var label2 = Ti.UI.createLabel({
	text: 'Senior - Renewable Materials, University of Idaho',
	color: '#fff',
	top: 32,
	textAlign:'center',
	font: {
		fontFamily:'Georgia',
		fontSize: 14
	},
	height:'auto'
});
//
var imgv = Ti.UI.createImageView({
  image:'/images/P4img.jpg',
  top:57
});
//
var open_window = Titanium.UI.createButton({
    title:'Personal Information',
    font: {
    	fontFamily:'Georgia'
    },
    top:302,
    width: 180,
    height:35,
    color: '#fff',
    backgroundColor: '9f9d9d'
});
//
open_window.addEventListener('click', function() {
    var newWindow = Titanium.UI.createWindow({
        url:'new_window.js',
        title:'Personal Information'
    });
//
    Titanium.UI.currentTab.open(newWindow);
});
//
var label3 = Ti.UI.createLabel({
	text: 'Why make college the best four years of your life, if you can make it six?',
	color: '#fff',
	top: 357,
	textAlign:'center',
	font: {
		fontFamily:'Georgia-Italic',
		fontSize: 13
	},
	height:'auto'
});
//
win.add(label1);
win.add(label2);
win.add(imgv);
win.add(open_window);
win.add(label3);