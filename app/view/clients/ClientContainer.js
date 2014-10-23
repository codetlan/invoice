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
            '<p><span class="icon-office"> <b>Cliente:</b> </span> {client}</p>',
            '<p><span class="icon-mail2"> <b>Email:</b></span>{email}</p>',
            '<p><span class="icon-tag"> <b>RFC:</b></span>{rfc}</p>',
            '<p><span class="icon-mobile"> <b>Tipo de persona:</b></span>{personType}</p>',
            '<p><span class="icon-home"> <b>M&eacute;todo de pago:</b></span>{paymentType}</p>',
            '</div>',
            '</div>',
            '</div>'
        ].join(' '),

        items: [{
            xtype: 'button',
            margin: '0 20 0 20',
            text: 'Editar Cliente',
            action: 'edit',
            docked: 'bottom',
            hidden: true
        }]
    }
});