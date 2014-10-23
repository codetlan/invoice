/**
 * @class Invoice.view.branches.BranchContainer
 * @extends Ext.Container
 * The branch container
 */
Ext.define('Invoice.view.branches.BranchContainer', {
    extend: 'Ext.Container',
    xtype: 'branchcontainer',
    requires: [
        'Ext.XTemplate'
    ],

    config: {
        action: 'branches',
        tpl: [
            '<div class="' + (Ext.os.is.Phone ? 'invoice-details-container-phone' : 'invoice-details-container-tablet' ) + '">',
            '<div class="details-content">',
            '<div class="details-image">',
            '<img src="resources/images/briefcase.png">',
            '</div>',
            '<div class="details-info">',
            '<p><span class="icon-office"> <b>Sucursal:</b> </span> {nombre}</p>',
            '<p><span class="icon-location"> <b>Direcci&oacute;n:</b></span>{direccion}</p>',
            '<p><span class="icon-tag"> <b>Ciudad:</b></span>{ciudad}</p>',
            '<p><span class="icon-tag"> <b>Estado:</b></span>{estado}</p>',
            '<p><span class="icon-tag"> <b>Municipio:</b></span>{municipio}</p>',
            '<p><span class="icon-mail4"> <b>CP:</b></span>{cp}</p>',
            '</div>',
            '</div>',
            '</div>'
        ].join(' '),

        items: [{
            xtype: 'button',
            margin: '20% 20 0 20',
            text: 'Editar Sucursal',
            action: 'edit',
            docked: 'bottom',
            hidden: true
        }]
    }
});