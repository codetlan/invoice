/**
 * @class Invoice.form.fields.SucursalSelectField
 * @extends Ext.field.select
 * Description
 */
Ext.define('Invoice.form.fields.BranchSelectField', {
    extend: 'Ext.field.Select',
    xtype :'branchselectfield',

    config: {
        name        : 'branch',
        placeHolder : 'Sucursales',
        store       : 'Branches',
        displayField: 'Nombre',
        valueField  : 'Codigo',
        autoSelect  : true//,
        //usePicker: false
    }
});