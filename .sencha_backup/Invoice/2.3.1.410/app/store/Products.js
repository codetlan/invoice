/**
 * @class Invoice.store.Products
 * @extends Ext.data.Store
 * This is the store for the products
 */
Ext.define('Invoice.store.Products', {
    extend: 'Ext.data.Store',
    requires:['Invoice.model.Product'],

    config:{
        model:'Invoice.model.Product',
        autoLoad:true
    }
});