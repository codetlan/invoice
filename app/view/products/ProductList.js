/**
 * @class Invoice.view.products.ProductList
 * @extends extendsClass
 * Description
 */
Ext.define('Invoice.view.products.ProductList', {
    extend: 'Ext.List',
    xtype: 'productlist',
    requires: [
        'Invoice.form.ProductForm'
    ],

    config: {
        title: 'Artículos',
        action: 'products',
        emptyText: 'No hay articulos, agrega uno ...',
        itemTpl: '{name} {description}',
        store: 'Products'
    }
});