
/**
 * @class Invoice.form.SignupForm
 * @extends Ext.form.Panel
 * The signup form
 */
Ext.define('Invoice.form.SignupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'signupform',
    config: {
        padding: '15 15 15 15',
        baseCls: 'login-background',
        margin: '-100 0 0 0',
        scrollable: null,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'strech'
        },
        items: [{
            xtype: 'textfield',
            name: 'name',
            placeHolder: 'Nombre',
            clearIcon: true
        }, {
            xtype: 'component',
            height: Ext.os.is.Phone ? 5 : 10,
        }, {
            xtype: 'textfield',
            name: 'rfc',
            placeHolder: 'RFC',
            clearIcon: true
        }, {
            xtype: 'component',
            height: Ext.os.is.Phone ? 5 : 10,
        }, {
            xtype: 'selectfield',
            name: 'razon',
            placeHolder: 'Razón Social',
            options: [{
                text: 'Física',
                value: 'fisica'
            }, {
                text: 'Moral',
                value: 'moral'
            }]
        }, {
            xtype: 'component',
            height: Ext.os.is.Phone ? 5 : 10,
        }, {
            xtype: 'emailfield',
            name: 'email',
            placeHolder: 'Email',
            clearIcon: true
        }, {
            xtype: 'component',
            height: Ext.os.is.Phone ? 5 : 10,
        }, {
            xtype: 'passwordfield',
            name: 'password',
            placeHolder: 'Contraseña',
            clearIcon: true
        }, {
            xtype: 'component',
            height: 30
        }, {
            xtype: 'button',
            text: 'Registrarse',
            action: 'register'
        }, {
            xtype: 'component',
            height: Ext.os.is.Phone ? 15 : 50,
        }, {
            xtype: 'button',
            text: 'Regresar',
            baseCls: 'signup-btn',
            action: 'backToLogin'
        }]
    }
});