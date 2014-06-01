/**
 * @class Invoice.form.LoginForm
 * @extends Ext.form.Panel
 * The login form
 */
Ext.define('Invoice.form.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
    requires: ['Ext.form.FieldSet', 'Ext.field.Email', 'Ext.field.Password', 'Ext.Img'],
    config: {
        padding: '15 15 15 15',
        baseCls: 'login-background',
        margin:'-100 0 0 0',
        scrollable:null,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'strech'
        },
        items: [{
            xtype: 'image',
            margin: '0 0 10 0',
            height: 80,
            src: 'resources/images/briefcase.png'
        }, {
            xtype: 'textfield',
            name: 'rfc',
            placeHolder: 'RFC',
            clearIcon: true
        }, {
            xtype: 'component',
            height: Ext.os.is.Phone ? 5 : 10,
        }, {
            xtype: 'passwordfield',
            name: 'password',
            placeHolder: 'Contraseña',
            clearIcon: true
            //}]
        }, {
            xtype: 'component',
            height: 30
        }, {
            xtype: 'button',
            text: 'Entrar',
            action: 'login'
        }, {
            xtype: 'component',
            height: Ext.os.is.Phone ? 15 : 50,
        }, {
            xtype: 'button',
            text: 'Crear cuenta',
            baseCls: 'sigup-btn',
            action: 'sigup',
            handler: function () {
                alert(2343);
            }
        }]
    }
});