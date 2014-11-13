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
                name: 'identifier'
            },{
                xtype: 'textfield',
                name: 'nombre',
                placeHolder: 'Nombre'
            },{
                xtype: 'textareafield',
                name: 'direccion',
                placeHolder: 'Dirección'
            }, {
                xtype: 'textfield',
                name: 'ciudad',
                placeHolder: 'Ciudad'
            },{
                xtype: 'textfield',
                name: 'estado',
                placeHolder: 'Estado'
            },{
                xtype: 'textfield',
                name: 'municipio',
                placeHolder: 'Municipio'
            },{
                xtype: 'numberfield',
                name: 'cp',
                placeHolder: 'Codigo Postal'
            }]
        }]
    }
});