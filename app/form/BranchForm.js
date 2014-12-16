/**
 * @class Invoice.form.BranchForm
 * @extends Ext.form.Panel
 * The branch form
 */
Ext.define('Invoice.form.BranchForm', {
    extend: 'Ext.form.Panel',
    xtype:'branchform',
    requires: [
        'Ext.field.Hidden'
    ],
    config: {
        padding: 10,
        style: {
            background: 'url("/invoice/resources/images/shattered-island-green.gif")'
        },
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Crear Sucursal',
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
            defaults: {
                required: true
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'Codigo'
            },{
                xtype: 'textfield',
                name: 'Nombre',
                placeHolder: 'Nombre'
            },{
                xtype: 'textfield',
                name: 'Calle',
                placeHolder: 'Calle'
            },{
                xtype: 'textfield',
                name: 'NumeroExterior',
                placeHolder: 'Número exterior'
            }, {
                xtype: 'textfield',
                name: 'Ciudad',
                placeHolder: 'Ciudad'
            },{
                xtype: 'textfield',
                name: 'Estado',
                placeHolder: 'Estado'
            },{
                xtype: 'textfield',
                name: 'MunicipioDelegacion',
                placeHolder: 'Municipio/Delegación'
            },{
                xtype: 'textfield',
                name: 'CodigoPostal',
                placeHolder: 'Codigo Postal'
            },{
                xtype: 'textfield',
                name: 'LugarExpedicion',
                placeHolder: 'Lugar de expedición'
            },{
                xtype: 'textfield',
                name: 'NumeroFactura',
                placeHolder: 'Factura'
            },{
                xtype: 'textfield',
                name: 'NumeroNotaCredito',
                placeHolder: 'Nota de crédito'
            }]
        }]
    }
});