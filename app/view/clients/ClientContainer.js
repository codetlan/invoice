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
            '</div>',
        ].join(' '),

        items: [
            {
                xtype: 'component',
                docked: 'bottom',
                height: '20%',
                hidden: Ext.os.is.Phone
            },
            {
                xtype: 'button',
                text: 'Editar Cliente',
                action: 'edit',
                disabled: true,
                docked: 'bottom',
                hidden: Ext.os.is.Phone
            }
        ]/*,

        data: {
            empresa: 'Codetlan',
            email: 'armando@codetlan.com',
            rfc: 'GOLA80089023',
            nombre: 'Armando',
            apellido: 'Gonzalez',
            telefono: '551534888',
            celular: '551534888',
            direccion: 'Belgica 310',
            ciudad: 'Mexico',
            estado: 'DF',
            cp: '03300'
        }*/
    }
});