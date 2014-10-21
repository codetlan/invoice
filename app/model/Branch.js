/**
 * @class Invoice.model.Branch
 * @extends Ext.data.Model
 * Description
 */
Ext.define('Invoice.model.Branch', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'identifier',
                type: 'int'
            },
            {
                name: 'nombre',
                type: 'string'
            },
            {
                name: 'direccion',
                type: 'string'
            },
            {
                name: 'ciudad',
                type: 'string'
            },
            {
                name: 'estado',
                type: 'string'
            },
            {
                name: 'municipio',
                type: 'string'
            },
            {
                name: 'cp',
                type: 'string'
            }
        ],
        proxy:{
            type:'sql'
        }
    }
});