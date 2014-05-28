/**
 * @class Invoice.form.InvoiceForm
 * @extends Ext.form.Panel
 * The login invoice form
 */
Ext.define('Invoice.form.InvoiceForm', {
    extend: 'Ext.form.Panel',
    xtype: 'invoiceform',

    config: {
        fullscreen: true,
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Add Invoice',
            docked: 'top',
            hidden: Ext.os.is.Phone ? true : false,
            //ui: 'neutral',
            items: [{
                text: 'cancel',
                action: 'cancel',
                ui:'decline',
                align: 'left'
            },{
                text: 'save',
                action: 'save',
                ui: 'confirm',
                align: 'right'
            }]
        }, {//Fields
            xtype: 'textfield',
            name: 'name',
            label: 'Nombre Cliente'
        }, {
            xtype: 'textfield',
            name: 'description',
            label: 'Dirección'
        }]
    }
});