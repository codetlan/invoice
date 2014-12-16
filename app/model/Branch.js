/**
 * @class Invoice.model.Branch
 * @extends Ext.data.Model
 * Description
 */
Ext.define('Invoice.model.Branch', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'Codigo',
        fields: [
            {
                name: 'Codigo',
                type: 'int'
            },
            {
                name: 'Nombre',
                type: 'string'
            },
            {
                name: 'Calle',
                type: 'string'
            },
            {
                name: 'NumeroExterior',
                type: 'string'
            },
            {
                name: 'Ciudad',
                type: 'string'
            },
            {
                name: 'Estado',
                type: 'string'
            },
            {
                name: 'MunicipioDelegacion',
                type: 'string'
            },
            {
                name: 'CodigoPostal',
                type: 'string'
            },
            {
                name: 'LugarExpedicion',
                type: 'string'
            },
            {
                name: 'NumeroFactura',
                type: 'string'
            },
            {
                name: 'NumeroNotaCredito',
                type: 'string'
            }
        ]
    }
});