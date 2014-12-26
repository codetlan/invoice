/**
 * @class Invoice.view.clients.ClientContainer
 * @extends Ext.Container
 * The client container
 */
Ext.define('Invoice.view.clients.ClientContainer', {
    extend: 'Ext.Container',
    xtype: 'clientcontainer',
    requires: [
        'Ext.XTemplate'
    ],

    config: {
        action: 'clients',
        tpl: [
            '<div class="' + (Ext.os.is.Phone ? 'invoice-details-container-phone' : 'invoice-details-container-tablet' ) + '">',
            '<div class="details-content">',
            '<div class="details-image">',
            '<img src="resources/images/briefcase.png">',
            '</div>',
            '<div class="details-info">',
            '<p><span class="icon-user"> <b>Cliente:</b> </span>{Nombre}</p>',
            '<p><span class="icon-file"> <b>RFC:</b></span>{RFC}</p>',
            '<tpl if="TipoPersona==0"><p><span class="icon-users"> <b>Tipo de persona:</b></span>Persona Física</p></tpl>',
            '<tpl if="TipoPersona==1"><p><span class="icon-users"> <b>Tipo de persona:</b></span>Persona Moral</p></tpl>',
            '<p><span class="icon-mail2"> <b>Email:</b></span>{Correo}</p>',
            '<p><span class="icon-coin"> <b>M&eacute;todo de pago:</b></span>{MetodoPago}</p>',
            '<p><span class="icon-coin"> <b>Número de cuenta:</b></span>{NumeroCuenta}</p>',
            '<p><span class="icon-coin"> <b>Condición de pago:</b></span>{CondicionPago}</p>',
            '<p><span class="icon-location"> <b>Calle:</b></span>{Calle}</p>',
            '<p><span class="icon-location"> <b>No. Exterior:</b></span>{NumeroExterior}</p>',
            '<p><span class="icon-location"> <b>No. Interior:</b></span>{NumeroInterior}</p>',
            '<p><span class="icon-location"> <b>Ciudad:</b></span>{Ciudad}</p>',
            '<p><span class="icon-location"> <b>Estado:</b></span>{Estado}</p>',
            '<p><span class="icon-location"> <b>Municipio:</b></span>{MunicipioDelegacion}</p>',
            '<p><span class="icon-location"> <b>CP:</b></span>{CodigoPostal}</p>',
            '</div>',
            '</div>',
            '</div>'
        ].join(' '),

        items: [{
            xtype: 'button',
            margin: '20% 20 0 20',
            text: 'Editar Cliente',
            action: 'edit',
            docked: 'bottom',
            hidden: true
        }]
    }
});