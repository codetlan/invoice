/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Invoice.controller.phone.Main', {
    extend: 'Invoice.controller.Main',
    config: {
        control: {
            'menu > list': {
                itemtap: 'onShowItemDetails'
            }
        }
    },
    onAddButtonTap: function(isEdit) {
        var me = this,
            active = me.getMenu().getActiveItem(),
            form;

        switch (active.getAction()) {
            case 'invoices':
                me.getMenu().add({
                    xtype: 'invoiceform'
                });
                break;
            case 'clients':
                form = me.getMenu().add({
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

        if (isEdit) {
            form.setRecord(active.getRecord());
        }
        me.getAddButton().hide();
        me.getEditOnPhoneButton().hide();
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

        store.add(values);
        //store.sync();
        me.getAddButton().show();
        me.getSaveOnPhoneButton().hide();
        me.getMenu().pop();
    },    
    onShowItemDetails: function(list, index, target, record) {
        var me = this;
        switch (list.getAction()) {
            case 'invoices':
                form = Ext.create('Invoice.form.InvoiceForm', options);
                break;
            case 'clients':
                me.getMenu().add({
                    xtype: 'clientcontainer'
                }).setRecord(record);
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
    },

    onEditButtonTap: function (btn) {
        var me = this,
            container = btn.up('container');

        me.onAddButtonTap(true);//True when is edit
    }
});