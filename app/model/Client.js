/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.model.Client', {
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
        ],
        proxy: {
            type: "sql"
        }
    }
});