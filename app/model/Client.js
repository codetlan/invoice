/**
 * Created by lumartin on 05/05/14.
 */
Ext.define('Invoice.model.Client', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'identifier',
        fields: [
            {
                name: 'identifier',
                type: 'int'
            },
            {
                name: 'client',
                type: 'string'
            },
            {
                name: 'email',
                type: 'string'
            },
            {
                name: 'rfc',
                type: 'string'
            },
            {
                name: 'paymentType',
                type: 'string'
            },
            {
                name: 'personType',
                type: 'string'
            }
        ],

        validations: [
            {type: 'presence', field: 'client', message: 'Cliente: No puede estar vácio.'},
            {type: 'presence', field: 'email', message: 'Email: No puede estar vácio.'},
            {type: 'presence', field: 'rfc', message: 'RFC: No puede estar vácio.'},
            {type: 'email', field: 'email', message: 'Email: No es una dirección de correo válido.'},
            {type: 'format', field: 'rfc', matcher: /^[A-Z]{4}\d{6}([a-zA-Z0-9]{3})?$/, message: 'RFC: Verifique el RFC.'}
        ]
    }
});