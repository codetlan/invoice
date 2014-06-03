/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Invoice.controller.phone.Main', {
    extend: 'Invoice.controller.Main',

    config: {},

    onAddButtonTap: function () {
        var me = this,
            active = me.getMenu().getActiveItem();

        switch (active.getAction()) {
            case 'invoices':
                me.getMenu().add({
                    xtype:'invoiceform'
                });
                break;
            case 'clients':
                me.getMenu().add({
                    xtype:'clientform'
                });
                break;
            case 'products':
                me.getMenu().add({
                    xtype:'productform'
                });
                break;
        }
        me.getAddButton().hide();
        me.getSaveButtonPhone().show();
    }
});