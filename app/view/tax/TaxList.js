/**
 * @class Invoice.view.tax.TaxList
 * @extends extendsClass
 * Description
 */
Ext.define('Invoice.view.tax.TaxList', {
    extend: 'Invoice.core.List',
    xtype: 'taxlist',
    requires: [
        'Invoice.form.TaxForm',
        'Invoice.view.tax.TaxContainer'
    ],

    config: {
        title: 'Impuestos',
        action: 'taxes',
        emptyText: 'No hay impuestos, agrega uno ...',
        store: 'Taxes',
        itemTpl: [
            '<div class="list-generic">',
                '<div class="list-generic-left">',
                    '<tpl if="TipoImpuesto==0"><p><span> <b>IVA</b></span></p></tpl>',
                    '<tpl if="TipoImpuesto==1"><p><span> <b>ISR</b></span></p></tpl>',
                    '<tpl if="TipoImpuesto==2"><p><span> <b>IEPS</b></span></p></tpl>',
                    //'{Tasa} </br> <small class="muted">{Tasa}</small>',
                    '<small class="muted">Tasa {Tasa}</small>',
                '</div>',
                '<div class="list-generic-right">',
                    //'<span class="icon-money"></span> {TipoImpuesto} {UnidaMedida}',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});