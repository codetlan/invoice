/**
 * Created by lumartin on 06/05/14.
 */
Ext.define('Invoice.store.Invoices', {
    extend: 'Ext.data.Store',
    requires:['Invoice.model.Invoice'],
    config:{
        model:'Invoice.model.Invoice',
        autoLoad: true,
        proxy: {
            type: 'sql'
        }
    }
});