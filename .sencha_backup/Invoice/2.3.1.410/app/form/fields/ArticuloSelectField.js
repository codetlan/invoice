/**
 * @class Invoice.form.fields.ArticuloSelectField
 * @extends Ext.field.select
 * Description
 */
Ext.define('Invoice.form.fields.ArticuloSelectField', {
    extend: 'Ext.field.Select',
    xtype :'articuloselectfield',

    config: {
        name:'articulo',
        placeHolder: 'Articulo',
        store:'Products',
        displayField:'nombre',
        valueField: 'id',
        autoSelect: false
    }
});