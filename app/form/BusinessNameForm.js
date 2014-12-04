/**
 * @class Invoice.form.SignupForm
 * @extends Ext.form.Panel
 * The signup form
 */
Ext.define('Invoice.form.BusinessNameForm', {
    extend: 'Ext.form.Panel',
    xtype: 'businessnameform',
    requires: [        
        'Invoice.form.fields.PersonTypeSelectField'        
    ],
    config: {
        //scrollable: null,
        padding: '15 15 15 15',
        //margin: '-100 0 0 0',
        baseCls: 'login-background',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'strech'
        },
        items: [{
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'Nombre',
            placeHolder: 'Nombre',
            clearIcon: true
        },{
            xtype: 'persontypeselectfield',
            name: 'TipoPersona'
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'Calle',
            placeHolder: 'Calle',
            clearIcon: true
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'NoExterior',
            placeHolder: 'Número exterior',
            clearIcon: true
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'NoInterior',
            placeHolder: 'Número interior',
            clearIcon: true
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'Ciudad',
            placeHolder: 'Ciudad',
            clearIcon: true
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'CodigoPostal',
            placeHolder: 'Código Postal',
            clearIcon: true
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'Municipio',
            placeHolder: 'Municipio/Delegación',
            clearIcon: true
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'Estado',
            placeHolder: 'Estado',
            clearIcon: true
        }, {
            xtype: 'textfield',
            margin: Ext.os.is.Phone ? '5 0 0 0' : '10 0 0 0',
            name: 'RegimenFiscal',
            placeHolder: 'Régimen Fiscal',
            clearIcon: true
        }, {
            xtype: 'button',
            margin: '30 0 0 0',
            text: 'Enviar datos',
            action: 'sendData'
        }, {
            xtype: 'button',
            margin: Ext.os.is.Phone ? '15 0 0 0' : '50 0 0 0',
            text: 'Regresar',
            baseCls: 'signup-btn',
            action: 'backRegister'
        }]
    }
});