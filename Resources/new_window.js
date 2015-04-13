var win = Ti.UI.currentWindow;
//
var label1 = Ti.UI.createLabel({
	text: 'Details:',
	color: '#fff',
	top: 32,
	left: 10,
	font: {
		fontFamily:'Georgia',
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto'
});
//
var label2 = Ti.UI.createLabel({
	text: 'Email: hard6272@vandals.uidaho.edu \n\nPhone: 208-559-1234 \n\nExtensive work with developing and testing materials accoring to ASTM standards. \n\nCurrently developing wood-plastic composite to be used with 3D-printer technology. \n\nThorough knowledge of scientific method, lab ettiquette, and biosafety-2 protocol.',
	color: '#fff',
	top: 60,
	left: 20,
	font: {
		fontFamily:'Georgia',
		fontSize: 14
	},
	height:'auto'
});
//
win.add(label1);
win.add(label2);
