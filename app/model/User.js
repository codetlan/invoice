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
            name: 'sucrusal',
            type: 'int'
        }, {
            name: 'nombre',
            type: 'string'
        }, {
            name: 'apellido_paterno',
            type: 'string'
        }, {
            name: 'apellido_materno',
            type: 'string'
        }],
        proxy:{
            type:'sql'
        }
    }
});