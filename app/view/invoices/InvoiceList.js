/**
 * Created by lumartin on 26/03/14.
 */
Ext.define('Invoice.view.invoices.InvoiceList', {
    extend: 'Ext.List',
    xtype: 'invoicelist',
    requires: [
        'Invoice.form.InvoiceForm'
    ],

    config: {
        title: 'Invices',
        fullscreen: true,
        action: 'invoices',
        itemTpl: '{name} {description}',
        store: 'Invoices'
    }
});