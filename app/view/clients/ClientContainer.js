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
            '<p><span class="icon-office"> <b>Cliente:</b> </span>{client}</p>',
            '<p><span class="icon-tag"> <b>RFC:</b></span>{rfc}</p>',
            '<tpl if="personType==0"><p><span class="icon-users"> <b>Tipo de persona:</b></span>Persona Física</p></tpl>',
            '<tpl if="personType==1"><p><span class="icon-users"> <b>Tipo de persona:</b></span>Persona Moral</p></tpl>',
            '<p><span class="icon-mail2"> <b>Email:</b></span>{email}</p>',
            '<p><span class="icon-coin"> <b>M&eacute;todo de pago:</b></span>{paymentType}</p>',
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