/**
 * Created by lumartin on 26/03/14.
 */
Ext.define('Invoice.view.clients.ClientList', {
    extend: 'Invoice.core.List',
    xtype: 'clientlist',
    requires: [
        'Invoice.form.ClientForm'
    ],

    config: {
        title: 'Clientes',
        action: 'clients',
        emptyText: 'No hay clientes, agrega uno ...',        
        store: 'Clients',
        //grouped: true,
        indexBar : true,
        itemTpl: [
            '<div class="list-generic">',
                '<div class="list-generic-left">',
                    '{empresa} </br> <small class="muted">{nombre} {apellido}</small>',
                '</div>',
                '<div class="list-generic-right">',
                    '<span class="icon-phone"></span> {telefono}',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});