/**
 * Created by Alí García on 03/12/14.
 */
Ext.define('Invoice.store.Settings', {
    extend: 'Ext.data.Store',
    requires: ['Invoice.model.Setting'],
    config: {
        model: 'Invoice.model.Setting',
        autoLoad: false,
        proxy: {
            url: 'http://' + 'localhost:1926' + "/CatalogoRazones/COK1_CL_Configuracion/ConsultarConfiguracion",
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