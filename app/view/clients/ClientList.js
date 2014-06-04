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
        itemTpl: '{name} {description}',
        store: 'Clients'
    }
});