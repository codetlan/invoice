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
        autoLoad: true,
        proxy: {
            url: 'http://' + 'localhost:1926' + "/CatalogoRazones/COK1_CL_Articulo/ConsultarArticulo",
            type: 'jsonp',
            callbackKey: 'callback',
            reader: {
                type: 'json',
                rootProperty: 'Data'
            },
            extraParams:{
                format:'json'
            }
        }
    }
});