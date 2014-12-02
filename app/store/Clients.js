/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.store.Clients', {
    extend: 'Ext.data.Store',
    requires: ['Invoice.model.Client'],
    config: {
        model: 'Invoice.model.Client',
        autoLoad: false,
        proxy: {
            url: 'http://' + 'localhost:1926' + "/CatalogoRazones/COK1_CL_Cliente/ConsultarCliente",
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