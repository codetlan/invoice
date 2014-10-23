/**
 * @class Invoice.view.users.UserContainer
 * @extends Ext.Container
 * The user container
 */
Ext.define('Invoice.view.users.UserContainer', {
    extend: 'Ext.Container',
    xtype: 'usercontainer',
    requires: [
        'Ext.XTemplate'
    ],

    config: {
        action: 'users',
        tpl: [
            '<div class="' + (Ext.os.is.Phone ? 'invoice-details-container-phone' : 'invoice-details-container-tablet' ) + '">',
            '<div class="details-content">',
            '<div class="details-image">',
            '<img src="resources/images/briefcase.png">',
            '</div>',
            '<div class="details-info">',
            '<p><span class="icon-office"> <b>Empresa:</b> </span> {empresa}</p>',
            '<p><span class="icon-mail2"> <b>Email:</b></span>{email}</p>',
            '<p><span class="icon-tag"> <b>RFC:</b></span>{rfc}</p>',
            '<p><span class="icon-profile"> <b>Nombre:</b></span>{nombre} {apellido}</p>',
            '<p><span class="icon-phone"> <b>Teléfono:</b></span>' + (Ext.os.is.Phone ? '<a href="tel:{telefono}">{telefono}</a>' : '{telefono}' ) + '</p>',
            '<p><span class="icon-mobile"> <b>Celular:</b></span>' + (Ext.os.is.Phone ? '<a href="tel:{celular}">{celular}</a>' : '{celular}' ) + '</p>',
            '<p><span class="icon-home"> <b>Dirección:</b></span>{direccion}, {ciudad}, {estado}, {cp}</p>',
            '</div>',
            '</div>',
            '</div>'
        ].join(' '),

        items: [{
            xtype: 'button',
            margin: '0 20 0 20',
            text: 'Editar Usuario',
            action: 'edit',
            docked: 'bottom',
            hidden: true
        }]
    }
});