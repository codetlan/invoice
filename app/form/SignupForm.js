/**
 * @class Invoice.form.SignupForm
 * @extends Ext.form.Panel
 * The signup form
 */
Ext.define('Invoice.form.SignupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'signupform',
    config: {
        baseCls: 'login-background',
        scrollable: null,
        layout: 'card',
        items: [
            {
                xtype: 'container',
                padding: '15 15 15 15',
                margin: '-100 0 0 0',
                baseCls: 'login-background',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'strech'
                },
                items: [
                    {
                        xtype: 'textfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'rfc',
                        placeHolder: 'RFC',
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'name',
                        placeHolder: 'Nombre',
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'calle',
                        placeHolder: 'Calle y número',
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'municipio',
                        placeHolder: 'Delegación/Municipio',
                        clearIcon: true
                    },
                    {
                        xtype: 'numberfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'codigo',
                        placeHolder: 'Codigo Postal',
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'estado',
                        placeHolder: 'Estado',
                        clearIcon: true
                    },
                    {
                        xtype: 'textfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'regimen',
                        placeHolder: 'Régimen Fiscal',
                        clearIcon: true
                    },
                    {
                        xtype: 'selectfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'razon',
                        placeHolder: 'Razón Social',
                        options: [
                            {
                                text: 'Física',
                                value: 'fisica'
                            },
                            {
                                text: 'Moral',
                                value: 'moral'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        margin: '30 0 0 0',
                        text: 'Siguiente',
                        action: 'nextSignUp'
                    },
                    {
                        xtype: 'button',
                        margin: Ext.os.is.Phone ? '15 0 0 0' : '50 0 0 0',
                        text: 'Regresar',
                        baseCls: 'signup-btn',
                        action: 'backToLogin'
                    }
                ]
            },
            {
                xtype: 'container',
                padding: '15 15 15 15',
                margin: '-100 0 0 0',
                baseCls: 'login-background',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'strech'
                },
                items: [
                    {
                        xtype: 'emailfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'email',
                        placeHolder: 'Email',
                        clearIcon: true
                    },
                    {
                        xtype: 'passwordfield',
                        margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
                        name: 'password',
                        placeHolder: 'Contraseña',
                        clearIcon: true
                    },
                    {
                        xtype: 'button',
                        margin: '30 0 0 0',
                        text: 'Registrarse',
                        action: 'register'
                    },
                    {
                        xtype: 'button',
                        margin: Ext.os.is.Phone ? '15 0 0 0' : '50 0 0 0',
                        text: 'Regresar',
                        baseCls: 'signup-btn',
                        action: 'backSignUp'
                    }
                ]
            }
        ]
    }
});