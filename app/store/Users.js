/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.store.Users', {
    extend: 'Ext.data.Store',
    requires: ['Invoice.model.User'],
    config: {
        model: 'Invoice.model.User',
        autoLoad: true,
        proxy: {
            type: 'sql'
        }
    }
});