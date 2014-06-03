/**
 * Created by lumartin on 06/05/14.
 */
Ext.define('Invoice.model.Invoice', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            }
        ]
    }
});