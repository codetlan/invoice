/**
 * Created by lumartin on 26/03/14.
 */
Ext.define('Invoice.view.clients.ClientList', {
    extend: 'Invoice.core.List',
    xtype: 'clientlist',
    requires: [
        'Invoice.form.ClientForm',
        'Invoice.view.clients.ClientContainer'
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
                    '<tpl if="TipoPersona==0"><p><span> {Nombre} </br><small class="muted">Persona física</small></span></p></tpl>',
                    '<tpl if="TipoPersona==1"><p><span> {Nombre} </br><small class="muted">Persona moral</small></span></p></tpl>',
                    //'{Nombre} </br> <small class="muted">{TipoPersona}</small>',
                '</div>',
                '<div class="list-generic-right">',
                    '<span class="icon-mail4"></span> {Correo}',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});