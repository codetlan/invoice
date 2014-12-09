Ext.define('Invoice.view.Main', {
    extend: 'Ext.Container',
    xtype:'main',
    requires: [
        'Invoice.form.LoginForm',
        'Invoice.view.Menu',
        'Invoice.form.SignupForm',
        'Invoice.form.BusinessNameForm'        
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
        },{
            xtype:'signupform'
        },{
            xtype: 'businessnameform'
        }]
    }
});
