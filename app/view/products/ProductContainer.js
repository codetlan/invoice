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
            '<p><span class="icon-tag"> <b>Artículo:</b> </span> {Descripcion}</p>',            
            //'<p><span class="icon-file"> <b>Descripción:</b></span>{descripcion}</p>',
            '<p><span class="icon-coin"> <b>Precio:</b></span>{PrecioUnitario}</p>',
            '<p><span class="icon-bars"> <b>Unidad de medida:</b></span>{UnidaMedida}</p>',
            '<tpl if="SujetoImpuesto==true"><p><span class="icon-hammer2"> <b>Sujeto a impuesto:</b></span>Sí</p></tpl>',
            '<tpl if="SujetoImpuesto==false"><p><span class="icon-hammer2"> <b>Sujeto a impuesto:</b></span>No</p></tpl>',
            '<tpl if="ManejaIEPS==true"><p><span class="icon-hammer2"> <b>Maneja IEPS:</b></span>Sí</p></tpl>',
            '<tpl if="ManejaIEPS==false"><p><span class="icon-hammer2"> <b>Maneja IEPS:</b></span>No</p></tpl>',
            //'<p><span class=""> <b>Sujeto a impuesto:</b></span>{SujetoImpuesto}</p>',
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