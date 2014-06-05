/**
 * @class Invoice.model.Product
 * @extends Ext.data.Model
 * The product model
 */
Ext.define('Invoice.model.Product', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'nombre',
            type: 'string'
        }, {
            name: 'descripcion',
            type: 'string'
        }, {
            name: 'precioUnitario',
            type: 'float'
        }, {
            name: 'unidadMedida',
            type: 'string'
        }, {
            name: 'tieneImpuesto',
            type: 'boolean'
        }, {
            name: 'manejaIEPS',
            type: 'boolean'
        }],
        proxy:{
            type:'sql'
        }
    }
});