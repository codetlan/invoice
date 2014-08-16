/**
 * Created by lumartin on 16/08/14.
 */
Ext.define('Invoice.form.fields.PaymentTypeSelectField', {
    extend: 'Ext.field.Select',
    xtype: 'paymenttypeselectfield',
    config: {
        name: 'paymentType',
        placeHolder: 'Metodo de Pago',
        options: [
            {
                text: 'Efectivo',
                value: 'Efectivo'
            },
            {
                text: 'Tarjeta de débito',
                value: 'Tarjeta de débito'
            },
            {
                text: 'Tarjeta de crédito',
                value: 'Tarjeta de crédito'
            }
        ]
    }
});