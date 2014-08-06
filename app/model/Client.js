/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.model.Client', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'id',
            type: 'int'
        }, {
            name: 'empresa',
            type: 'string'
        }, {
            name: 'email',
            type: 'string'
        }, {
            name: 'rfc',
            type: 'string'
        }, {
            name: 'moneda',
            type: 'string'
        }, {
            name: 'nombre',
            type: 'string'
        }, {
            name: 'apellido',
            type: 'string'
        }, {
            name: 'telefono',
            type: 'string'
        }, {
            name: 'celular',
            type: 'string'
        }, {
            name: 'direccion',
            type: 'string'
        }, {
            name: 'ciudad',
            type: 'string'
        }, {
            name: 'estado',
            type: 'string'
        }, {
            name: 'cp',
            type: 'int'
        }],
        proxy:{
            type: 'jsonp',
            url : Invoice.core.Utils + 'ConsultarCliente/jsonp?callback=RazonSocial&RFC=PRUEBA01R&Token=abc123&Todos=true&Pagina=1'
        }
    }
});