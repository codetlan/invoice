/**
 * @class Invoice.form.fields.ClientSelectField
 * @extends Ext.field.select
 * Description
 */
Ext.define('Invoice.form.fields.ClientSelectField', {
    extend: 'Ext.field.Select',
    xtype :'clientselectfield',

    config: {
        name:'cliente',
        placeHolder: 'Cliente',
        store:'Clients',
        displayField:'empresa',
        valueField: 'id',
        autoSelect: false
    }
});