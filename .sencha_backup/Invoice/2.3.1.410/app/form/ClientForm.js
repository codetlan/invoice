/**
 * @class Invoice.form.ClientForm
 * @extends Ext.form.Panel
 * The login client form
 */
Ext.define('Invoice.form.ClientForm', {
    extend: 'Ext.form.Panel',
    xtype: 'clientform',
    requires:['Invoice.form.fields.CurrencySelectField'],

    config: {
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Agregar Cliente',
            docked: 'top',
            hidden: Ext.os.is.Phone ? true : false,
            items: [{
                text: 'Cancelar',
                action: 'cancel',
                ui: 'decline',
                align: 'left'
            }, {
                text: 'Guardar',
                action: 'save',
                ui: 'confirm',
                align: 'right'
            }]
        }, {
            xtype: 'fieldset',
            title: 'Empresa',
            defaults: {
                required:true
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'empresa',
                placeHolder: 'Empresa'
            },{
                xtype: 'textfield',
                name: 'empresa',
                placeHolder: 'Empresa'
            }, {
                xtype: 'emailfield',
                name: 'email',
                placeHolder: 'Email'
            }, {
                xtype: 'textfield',
                name: 'rfc',
                placeHolder: 'RFC'
            }, {
                xtype: 'currencyselectfield',
                name: 'moneda',
                labelWidth:  Ext.os.is.Phone ? '50%' : '30%'
            }]
        }, {
            xtype: 'fieldset',
            defaults: {
                required:true
            },
            title:'Datos Personales',
            items: [{ //Fields
                xtype: 'textfield',
                name: 'nombre',
                placeHolder: 'Nombre(s)'
            }, {
                xtype: 'textfield',
                name: 'apellido',
                placeHolder: 'Apellido(s)'
            }, {
                xtype: 'numberfield',
                name: 'telefono',
                placeHolder: 'Teléfono'
            }, {
                xtype: 'numberfield',
                name: 'celular',
                placeHolder: 'Celular'
            }]
        }, {
            xtype: 'fieldset',
            defaults: {
                required:true
            },
            title:'Dirección',
            items: [{
                xtype: 'textfield',
                name: 'direccion',
                placeHolder: 'Dirección'
            }, {
                xtype: 'textfield',
                name: 'ciudad',
                placeHolder: 'Ciudad'
            }, {
                xtype: 'textfield',
                name: 'estado',
                placeHolder: 'Estado'
            }, {
                xtype: 'textfield',
                name: 'cp',
                placeHolder: 'Código Postal'
            }]
        }]
    }
});