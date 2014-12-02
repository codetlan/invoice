/**
 * @class Invoice.view.branches.BranchList
 * @extends Ext.List
 * Description
 */
Ext.define('Invoice.view.branches.BranchList', {
    extend: 'Invoice.core.List',
    xtype:'branchlist',
    requires: [
        'Invoice.form.BranchForm',
        'Invoice.view.branches.BranchContainer'
    ],

    config: {
        title: 'Sucursales',
        action: 'branches',
        emptyText: 'No hay sucursales, agrega una ...',
        store: 'Branches',
        itemTpl: [
            '<div class="list-generic">',
                '<div class="list-generic-left">',
                    '{Nombre} </br> <small class="muted">{Calle} {NumeroExterior},{Ciudad}, {Estado}, {MunicipioDelegacion}, {CodigoPostal}</small>',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});