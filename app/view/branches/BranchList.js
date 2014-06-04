/**
 * @class Invoice.view.branches.BranchList
 * @extends Ext.List
 * Description
 */
Ext.define('Invoice.view.branches.BranchList', {
    extend: 'Invoice.core.List',
    xtype:'branchlist',
    requires: [
        'Invoice.form.BranchForm'
    ],

    config: {
        title: 'Sucursales',
        action: 'branches',
        emptyText: 'No hay sucursales, agrega una ...',
        itemTpl: '{nombre} {direccion}',
        store: 'Branches'
    }
});