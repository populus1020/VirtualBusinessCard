var tabGroup = Titanium.UI.createTabGroup();
//
var win1 = Titanium.UI.createWindow({
    url:'window1.js',
    title:'Myself',
    backgroundColor: '#B18E5F'
});
//
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Profile',
    window:win1
});
//
tabGroup.addTab(tab1);
// 
tabGroup.open();