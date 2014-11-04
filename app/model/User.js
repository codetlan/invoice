/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'identifier',
            type: 'int'
        }, {
            name: 'sucursal',
            type: 'int'
        }, {
            name: 'nombre',
            type: 'string'
        }, {
            name: 'apellidoPaterno',
            type: 'string'
        }, {
            name: 'apellidoMaterno',
            type: 'string'
        }],
        proxy:{
            type:'sql'
        }
    }
});