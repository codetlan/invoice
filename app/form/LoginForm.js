/**
 * @class Invoice.form.LoginForm
 * @extends Ext.form.Panel
 * The login form
 */
Ext.define('Invoice.form.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.Img'],

    config: {
        padding: '15 15 15 15',
        items: [{
            xtype: 'image',
            margin: '0 0 10 0',
            height: 80,
            src: 'http://placehold.it/110x80'
        }, {
            xtype: 'fieldset',
            defaults: {
                required: true
            },
            items: [{
                xtype: 'emailfield',
                name: 'email',
                clearIcon: true
            }, {
                xtype: 'passwordfield',
                name: 'password',
                clearIcon: true
            }]
        }, {
            xtype: 'fieldset',
            items: [{
                xtype: 'button',
                text: 'Login',
                action: 'login',
                scope: this
            }]
        }]
    }
});