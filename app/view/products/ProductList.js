/**
 * @class Invoice.view.products.ProductList
 * @extends extendsClass
 * Description
 */
Ext.define('Invoice.view.products.ProductList', {
    extend: 'Invoice.core.List',
    xtype: 'productlist',
    requires: [
        'Invoice.form.ProductForm',
        'Invoice.view.products.ProductContainer'
    ],

    config: {
        title: 'Artículos',
        action: 'products',
        emptyText: 'No hay articulos, agrega uno ...',        
        store: 'Products',
        itemTpl: [
            '<div class="list-generic">',
                '<div class="list-generic-left">',
                    '{Descripcion} </br> <small class="muted">{descripcion}</small>',
                '</div>',
                '<div class="list-generic-right">',
                    '<span class="icon-money"></span> {PrecioUnitario} {UnidaMedida}',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});