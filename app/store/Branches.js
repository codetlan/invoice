/**
 * @class Invoice.store.Branches
 * @extends Ext.data.Store
 * This is the branches store
 */
Ext.define('Invoice.store.Branches', {
    //extend: 'Invoice.core.data.Store',
    extend: 'Invoice.core.data.Store',
    requires: ['Invoice.model.Branch'],
    config: {
        model: 'Invoice.model.Branch',
        autoLoad: false,
        proxy: {        	
            url: "/CatalogoRazones/COK1_CL_Sucursal/ConsultarSucursal",
            //url: 'http://' + localStorage.getItem("dirIP") + "/CatalogoRazones/COK1_CL_Sucursal/ConsultarSucursal",
//            url: 'http://' + 'localhost:1926' + "/CatalogoRazones/COK1_CL_Sucursal/ConsultarSucursal",
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