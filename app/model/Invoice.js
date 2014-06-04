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
                name: 'cliente',
                type: 'string'
            },
            {
                name: 'fecha',
                type: 'date',
                dateFormat :'d/m/Y'
            },
            {
                name: 'productos',
                type: 'array'
            },
            {
                name: 'total',
                type: 'float',
                defaultValue: 88.88
            }
        ]
    }
});