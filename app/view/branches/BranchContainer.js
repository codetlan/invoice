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
            '<p><span class="icon-office"> <b>Sucursal:</b> </span> {Nombre}</p>',
            '<p><span class="icon-location"> <b>Calle:</b></span>{Calle}</p>',
            '<p><span class="icon-location"> <b>No. Exterior:</b></span>{NumeroExterior}</p>',
            '<p><span class="icon-location"> <b>Ciudad:</b></span>{Ciudad}</p>',
            '<p><span class="icon-location"> <b>Estado:</b></span>{Estado}</p>',
            '<p><span class="icon-location"> <b>Municipio:</b></span>{MunicipioDelegacion}</p>',
            '<p><span class="icon-location"> <b>CP:</b></span>{CodigoPostal}</p>',            
            '<p><span class="icon-tag"> <b>Lugar de Expedición:</b></span>{LugarExpedicion}</p>',
            '<p><span class="icon-file"> <b>No. Factura:</b></span>{NumeroFactura}</p>',
            '<p><span class="icon-file3"> <b>No. Nota Crédito:</b></span>{NumeroNotaCredito}</p>',
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