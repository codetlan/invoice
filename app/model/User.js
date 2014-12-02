/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.model.User', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'Codigo',
        fields: [{
            name: 'Codigo',
            type: 'int'
        }, {
            name: 'SucursalID',
            type: 'int'
        }, {
            name: 'Sucursal',
            type: 'string',
            mapping: 'Sucursal.Nombre'
        }, {
            name: 'Nombre',
            type: 'string'
        }, {
            name: 'ApellidoPaterno',
            type: 'string'
        }, {
            name: 'ApellidoMaterno',
            type: 'string'
        }, {
            name: 'Puesto',
            type: 'string'
        }],
    }
});