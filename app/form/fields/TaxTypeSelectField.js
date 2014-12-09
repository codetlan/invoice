/**
 * Created by Alí García on 08/12/14.
 */
Ext.define('Invoice.form.fields.TaxTypeSelectField', {
    extend: 'Ext.field.Select',
    xtype: 'taxtypeselectfield',
    config: {
        name: 'taxType',
        placeHolder: 'Tipo de Impuesto',
        options: [{
            text: 'IVA',
            value: 0
        },{
            text: 'ISR',
            value: 1
        },{
            text: 'IEPS',
            value: 2
        }]
    }
});