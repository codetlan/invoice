/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Invoice.controller.tablet.Main', {
    extend: 'Invoice.controller.Main',

    config: {},

    onAddButtonTap: function (record) {
        var me = this,
            active = me.getMenu().getActiveItem().down('list'),
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
                if (record) {
                    form.down('titlebar').setTitle('Editar Cliente');
                    form.setRecord(record);
                }
                break;
            case 'products':
                form = Ext.create('Invoice.form.ProductForm', options);
                break;
            case 'branches':
                form = Ext.create('Invoice.form.BranchForm', options);
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
                store = Ext.getStore('Products');
                break;
            case 'branchform':
                store = Ext.getStore('Branches');
                break;
        }

        store.add(form.getValues());
        //store.sync();
        form.hide();
    },
    onMenuItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this,
            container;
        me.getLogOutButton().hide();
        me.getAddButton().show();

        container = {
            xtype:'container',
            action: 'invoices',
            layout:'hbox'
        };

        switch (record.get('action')) {
            case 'invoices':
                container.items=[{
                    xtype: 'invoicelist',
                    flex:2
                },{
                    xtype:'clientcontainer',
                    flex:3
                }];
                me.getMenu().add(container);
                break;
            case 'clients':
                container.items=[{
                    xtype: 'clientlist',
                    flex:2
                },{
                    xtype:'clientcontainer',
                    flex:.5
                }];
                me.getMenu().add(container);
                break;
            case 'products':
                container.items=[{
                    xtype: 'productlist',
                    flex:2
                },{
                    xtype:'clientcontainer',
                    flex:3
                }];
                me.getMenu().add(container);
                break;
            case 'branches':
                container.items=[{
                    xtype: 'branchlist',
                    flex:2
                },{
                    xtype:'clientcontainer',
                    flex:3
                }];
                me.getMenu().add(container);
                break;
        }
    }, 
    onShowItemDetails: function(list, index, target, record) {
        var me = this,
            menu = list.up('menu'),
            container;


        switch (list.getAction()) {
            case 'invoices':
                form = Ext.create('Invoice.form.InvoiceForm', options);
                break;
            case 'clients':
                container = menu.down('clientcontainer');
                break;
            case 'products':
                form = Ext.create('Invoice.form.ProductForm', options);
                break;
            case 'branches':
                form = Ext.create('Invoice.form.BranchForm', options);
                break;
        }
        container.down('button').setDisabled(false);
        container.setRecord(record);
        container.setFlex(3);
    },

    onEditButtonTap: function (btn) {
        var me = this,
            container = btn.up('container');

        me.onAddButtonTap(container.getRecord());
    }
});