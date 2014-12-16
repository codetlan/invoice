/**
 * Created by Alí García on 08/12/14.
 */
Ext.define('Invoice.store.Taxes', {
    extend: 'Invoice.core.data.Store',
    requires: ['Invoice.model.Tax'],
    config: {
        model: 'Invoice.model.Tax',
        autoLoad: false,
        proxy: {
            //url: 'http://' + 'localhost:1926' + "/CatalogoRazones/COK1_CL_Impuesto/ConsultarImpuesto",
            url: "/CatalogoRazones/COK1_CL_Impuesto/ConsultarImpuesto",
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