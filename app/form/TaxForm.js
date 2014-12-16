/**
 * @class Invoice.form.TaxForm
 * @extends Ext.form.Panel
 * The product form
 */
Ext.define('Invoice.form.TaxForm', {
    extend: 'Ext.form.Panel',
    xtype: 'taxform',
    requires: [
        'Ext.field.Hidden',
        'Invoice.form.fields.TaxTypeSelectField'

    ],
    config: {
        padding: 10,
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Crear Artículo',
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
            }, {
                xtype: 'numberfield',
                name: 'Tasa',
                placeHolder: 'Tasa'
            }, {
                xtype: 'taxtypeselectfield',
                name: 'TipoImpuesto',
                placeHolder: 'Tipo de impuesto'
            }]
        }]
    }
});