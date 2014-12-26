/**
 * Created by Alí García on 26/12/14.
 */
Ext.define('Invoice.form.fields.PaymentTermSelectField', {
    extend: 'Ext.field.Select',
    xtype: 'paymenttermselectfield',
    config: {
        name: 'paymentTerm',
        placeHolder: 'Condición de pago',
        options: [{
            text: 'Contado',
            value: 'Contado'
        },{
            text: 'Crédito',
            value: 'Credito'
        }]
    }
});