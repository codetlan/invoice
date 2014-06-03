/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Invoice.controller.tablet.Main', {
    extend: 'Invoice.controller.Main',

    config: {},

    onAddButtonTap: function () {
        var me = this,
            active = me.getMenu().getActiveItem(),
            options = {
                modal: true,
                hideOnMaskTap: true,
                top: '10%',
                left: Ext.filterPlatform('ie10') ? 0 : '10%',
                right: Ext.filterPlatform('ie10') ? 0 : '10%',
                bottom: '10%'
            }, form;

        switch (active.getAction()) {
            case 'invoices':
                form = Ext.create('Invoice.form.InvoiceForm', options);
                break;
            case 'clients':
                form = Ext.create('Invoice.form.ClientForm', options);
                break;
            case 'products':
                form = Ext.create('Invoice.form.ProductForm', options);
                break;
        }

        if (!form.getParent()) {
            Ext.Viewport.add(form);
        }
        form.show();
    },

    onCancelButtonTap: function (btn) {
        var me = this,
            form = btn.up('titlebar').getParent();

        form.hide();
    },

    onSaveButtonTap: function (btn) {
        var me = this,
            form = btn.up('titlebar').getParent(),
            xtype = form.getXTypes().substr(form.getXTypes().lastIndexOf("/") + 1),
            store;
        switch (xtype) {
            case 'invoiceform':
                store = Ext.getStore('Invoices');
                break;
            case 'clientform':
                store = Ext.getStore('Clients');
                break;
            case 'productform':
                store = Ext.getStore('Clients');
                break;
        }

        store.add(form.getValues());
        store.sync();
        form.hide();
    }
});