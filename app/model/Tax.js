/**
 * @class Invoice.model.Tax
 * @extends Ext.data.Model
 * The tax model
 */
Ext.define('Invoice.model.Tax', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'Codigo',
        fields: [{
            name: 'Codigo',
            type: 'int'
        }, {
            name: 'Tasa',
            type: 'string'
        }, {
            name: 'TipoImpuesto',
            type: 'int'
        }]
    }
});