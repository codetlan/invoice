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
                text: 'Tarjeta bancaria',
                value: 'Tarjeta bancaria'
            },
            {
                text: 'Cheque',
                value: 'Cheque'
            },
            {
                text: 'Transferencia bancaria',
                value: 'Transferencia bancaria'
            },
            {
                text: 'No identificado',
                value: 'No identificado'
            }
        ]
    }
});