/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.store.Clients', {
    extend: 'Invoice.core.data.Store',
    requires: ['Invoice.model.Client'],
    config: {
        model: 'Invoice.model.Client',
        autoLoad: true,
        proxy:{
            type: 'sql'
        }
    }
});