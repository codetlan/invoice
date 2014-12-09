/**
 * Created by Alí García on 08/12/14.
 */
Ext.define('Invoice.view.tax.TaxContainer', {
    extend: 'Ext.Container',
    xtype: 'taxcontainer',
    requires: [
        'Ext.XTemplate'
    ],

    config: {
        action: 'taxes',
        tpl: [
            '<div class="' + (Ext.os.is.Phone ? 'invoice-details-container-phone' : 'invoice-details-container-tablet' ) + '">',
            '<div class="details-content">',
            '<div class="details-image">',
            '<img src="resources/images/briefcase.png">',
            '</div>',
            '<div class="details-info">',
            '<p><span class="icon-tag"> <b>Tasa:</b> </span> {Tasa}</p>',            
            //'<p><span class="icon-file"> <b>Descripción:</b></span>{descripcion}</p>',
            //'<p><span class="icon-coin"> <b>Impuesto:</b></span>{Impuesto}</p>',
            '<tpl if="TipoImpuesto==0"><p><span class="icon-coin"> <b>Impuesto:</b></span>IVA</p></tpl>',
            '<tpl if="TipoImpuesto==1"><p><span class="icon-coin"> <b>Impuesto:</b></span>ISR</p></tpl>',
            '<tpl if="TipoImpuesto==2"><p><span class="icon-coin"> <b>Impuesto:</b></span>IEPS</p></tpl>',
            // '<tpl if="SujetoImpuesto==false"><p><span class="icon-hammer2"> <b>Sujeto a impuesto:</b></span>No</p></tpl>',
            // '<tpl if="ManejaIEPS==true"><p><span class="icon-hammer2"> <b>Maneja IEPS:</b></span>Sí</p></tpl>',
            // '<tpl if="ManejaIEPS==false"><p><span class="icon-hammer2"> <b>Maneja IEPS:</b></span>No</p></tpl>',
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