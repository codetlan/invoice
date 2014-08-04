/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Invoice.controller.phone.Main', {
    extend: 'Invoice.controller.Main',
    config: {},
    onAddButtonTap: function() {
        var me = this,
            active = me.getMenu().getActiveItem();
        switch (active.getAction()) {
            case 'invoices':
                me.getMenu().add({
                    xtype: 'invoiceform'
                });
                break;
            case 'clients':
                me.getMenu().add({
                    xtype: 'clientform'
                });
                break;
            case 'products':
                me.getMenu().add({
                    xtype: 'productform'
                });
                break;
            case 'branches':
                me.getMenu().add({
                    xtype: 'branchform'
                });
                break;
        }
        me.getAddButton().hide();
        me.getSaveOnPhoneButton().show();
    },
    onSaveButtonTap: function(btn) {
        var me = this,
            form = me.getMenu().getActiveItem(),
            xtype = form.getXTypes().substr(form.getXTypes().lastIndexOf("/") + 1),
            values = form.getValues(),
            store;
        switch (xtype) {
            case 'invoiceform':
                store = Ext.getStore('Invoices');
                break;
            case 'clientform':
                store = Ext.getStore('Clients');
                break;
            case 'productform':
                store = Ext.getStore('Products');
                break;
            case 'branchform':
                store = Ext.getStore('Branches');
                break;
        }

        // if(values.fecha){
        //     values.fecha = Ext.Date.format(values.fecha,'d/m/Y');
        // }

        // console.log(values);
        store.add(values);
        store.sync();
        me.getAddButton().show();
        me.getSaveOnPhoneButton().hide();
        me.getMenu().pop();
    },    
    onShowItemDetails: function(list) {
        var me = this;
        switch (list.getAction()) {
            case 'invoices':
                form = Ext.create('Invoice.form.InvoiceForm', options);
                break;
            case 'clients':
                me.getMenu().add({
                    xtype: 'clientcontainer'
                });
                break;
            case 'products':
                form = Ext.create('Invoice.form.ProductForm', options);
                break;
            case 'branches':
                form = Ext.create('Invoice.form.BranchForm', options);
                break;
        }
         me.getAddButton().hide();
         me.getEditOnPhoneButton().show();
    }
});