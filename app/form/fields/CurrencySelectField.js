/**
 * @class Invoice.form.fields.CurrencySelectField
 * @extends Ext.field.Select
 * Este es el combo para saber si fuma o no
 */
Ext.define('Invoice.form.fields.CurrencySelectField', {
    extend: 'Ext.field.Select',
    xtype:'currencyselectfield',
    config: {
        name:'moneda',
        label:'Modeda',
        //usePicker:false,
        options:[{
        	text:'PESOS MEXICANOS',
        	value:'mxn'
        },{
        	text:'DOLARES AMERICANOS',
        	value:'usd'
        }]
    }
});