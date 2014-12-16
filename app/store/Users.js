/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.store.Users', {
    extend: 'Invoice.core.data.Store',
    requires: ['Invoice.model.User'],
    config: {
        model: 'Invoice.model.User',
        autoLoad: false,
        proxy: {
//            url: 'http://' + 'localhost:1926' + "/CatalogoRazones/COK1_CL_Usuario/ConsultarUsuario",
            url: "/CatalogoRazones/COK1_CL_Usuario/ConsultarUsuario",
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