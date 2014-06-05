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
        store: 'Invoices',
        itemTpl: [
            '<div class="list-generic">',
                '<div class="list-generic-left">',
                    '{cliente} </br> #00001 <small class="muted">{fecha:date("d/m/Y")}</small>',
                '</div>',
                '<div class="list-generic-right">',
                    '<span class="icon-money"></span> {total}',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});