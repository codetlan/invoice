/**
 * Created by lumartin on 26/03/14.
 */
Ext.define('Invoice.view.clients.ClientList', {
    extend: 'Ext.List',
    xtype: 'clientlist',
    requires: [
        'Invoice.form.ClientForm'
    ],

    config: {
        title: 'Clients',
        fullscreen: true,
        action: 'clients',
        emptyText: 'There is no clients on this view',
        itemTpl: '{name} {description}',
        store: 'Clients'
    }
});