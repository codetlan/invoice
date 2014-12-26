/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.model.Client', {
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
                name: 'Correo',
                type: 'string'
            },
            {
                name: 'correoMostrado',
                type: 'string'
            },
            {
                name: 'RFC',
                type: 'string'
            },
            {
                name: 'MetodoPago',
                type: 'string'
            },
            {
                name: 'TipoPersona',
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
                name: 'NumeroInterior',
                type: 'string'
            },
            {
                name: 'Ciudad',
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
                name: 'Estado',
                type: 'string'
            },
            {
                name: 'NumeroCuenta',
                type: 'string'
            },
            {
                name: 'CondicionPago',
                type: 'string'
            }
        ],

        validations: [
            {type: 'presence', field: 'Nombre', message: 'Cliente: No puede estar vácio.'},
            {type: 'presence', field: 'Correo', message: 'Email: No puede estar vácio.'},
            {type: 'presence', field: 'RFC', message: 'RFC: No puede estar vácio.'},
            {type: 'email', field: 'Correo', message: 'Email: No es una dirección de correo válida.'},
            {type: 'format', field: 'RFC', matcher: /^[A-Z]{4}\d{6}([a-zA-Z0-9]{3})?$/, message: 'RFC: Verifique el RFC.'}
        ]
    }
});