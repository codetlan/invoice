/**
 * Created by lumartin on 19/08/14.
 */
Ext.define('Invoice.view.products.ProductContainer', {
    extend: 'Ext.Container',
    xtype: 'productcontainer',
    requires: [
        'Ext.XTemplate'
    ],

    config: {
        action: 'products',
        tpl: [
            '<div class="' + (Ext.os.is.Phone ? 'invoice-details-container-phone' : 'invoice-details-container-tablet' ) + '">',
            '<div class="details-content">',
            '<div class="details-image">',
            '<img src="resources/images/briefcase.png">',
            '</div>',
            '<div class="details-info">',
            '<p><span class="icon-tag"> <b>Artículo:</b> </span> {nombre}</p>',
            '<p><span class="icon-file"> <b>Descripción:</b></span>{descripcion}</p>',
            '<p><span class="icon-coin"> <b>Precio:</b></span>{precioUnitario}</p>',
            '<p><span class="icon-bars"> <b>Unidad de medida:</b></span>{unidadMedida}</p>',
            '<p><span class="icon-hammer2"> <b>Sujeto a impuesto:</b></span>{tieneImpuesto}</p>',
            '</div>',
            '</div>',
            '</div>'
        ].join(' '),

        items: [{
            xtype: 'button',
            margin: '20% 20 0 20',
            text: 'Editar Artículo',
            action: 'edit',
            docked: 'bottom',
            hidden: true
        }]
    }
});