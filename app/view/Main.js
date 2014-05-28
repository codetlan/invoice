Ext.define('Invoice.view.Main', {
    extend: 'Ext.Container',
    xtype:'main',
    requires: [
        'Invoice.form.LoginForm',
        'Invoice.view.Menu'
    ],
    config: {
        layout: 'card',
        fullscreen: true,
        autoDestroy: false,
        activeItem:0,

        items: [{
            xtype: 'loginform'
        },{
            xtype:'menu'
        }]
    }
});
