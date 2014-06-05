/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.store.Clients', {
    extend: 'Ext.data.Store',
    requires: ['Invoice.model.Client'],
    config: {
        model: 'Invoice.model.Client',
        autoLoad: true,
        sorters: 'empresa',
        grouper: {
            groupFn: function(record) {
                return record.get('empresa')[0];
            }
        }
    }
});