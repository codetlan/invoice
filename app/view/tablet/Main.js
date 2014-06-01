/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Invoice.view.tablet.Main', {
    extend: 'Invoice.view.Main',
    requires: ['Invoice.view.Menu'],
    config: {
        layout: 'card',
        fullscreen: true,
        autoDestroy: false,
        activeItem: 0,        
        items: [{
            xtype: 'container',
            baseCls: 'login-background',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'strech'
            },
            defaults: {
                flex: 1
            },
            items: [{
                xtype: 'component'
            }, {
                xtype: 'loginform',
                margin:'-200 0 0 0',                
                baseCls:''
            }, {
                xtype: 'component'
            }]
        }, {
            xtype: 'menu'
        }]
    }
});