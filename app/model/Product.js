/**
 * @class Invoice.model.Product
 * @extends Ext.data.Model
 * The product model
 */
Ext.define('Invoice.model.Product', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'Codigo',
        fields: [{
            name: 'Codigo',
            type: 'int'
        }, {
            name: 'Descripcion',
            type: 'string'
        }, {
            name: 'NumeroIndetificacion',
            type: 'string'
        }, {
            name: 'PrecioUnitario',
            type: 'float'
        }, {
            name: 'UnidaMedida',
            type: 'string'
        }, {
            name: 'SujetoImpuesto',
            type: 'boolean'
        }, {
            name: 'ManejaIEPS',
            type: 'boolean'
        }]
    }
});