/**
 * Created by lumartin on 26/03/14.
 */
Ext.define('Invoice.view.invoices.InvoiceList', {
    extend: 'Invoice.core.List',
    xtype: 'invoicelist',
    requires: [
        'Invoice.form.InvoiceForm'
    ],

    config: {
        title: 'Facturas',
        fullscreen: true,
        action: 'invoices',
        //itemTpl: '{cliente} {fecha} {total}',
        itemTpl: '<div>{cliente} &mdash; <small class="muted">{fecha:date("d/m/Y")}</small> {total}</div>',
        store: 'Invoices'
    }
});