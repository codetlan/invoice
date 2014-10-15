/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Invoice.controller.tablet.Main', {
    extend: 'Invoice.controller.Main',

    config: {
        control: {
            'menu > container > list': {
                itemtap: 'onShowItemDetails'
            }
        }
    },

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
            }, form, title = '';

        switch (active.getAction()) {
            case 'invoices':
                form = Ext.create('Invoice.form.InvoiceForm', options);
                break;
            case 'clients':
                form = Ext.create('Invoice.form.ClientForm', options);
                title = 'Editar Cliente';
                break;
            case 'products':
                form = Ext.create('Invoice.form.ProductForm', options);
                title = 'Editar Artículo';
                break;
            case 'branches':
                form = Ext.create('Invoice.form.BranchForm', options);
                title = 'Editar Sucursal';
                break;
            case 'users':
                form = Ext.create('Invoice.form.UserForm', options);
                title = 'Editar Usuario';
                break;
        }
        if (record && record.data) {
            form.down('titlebar').setTitle(title);
            form.setRecord(record);
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
            values = form.getValues(),
            xtype = form.getXTypes().substr(form.getXTypes().lastIndexOf("/") + 1),
            store, model, errors, errorMessage = '', record;

        switch (xtype) {
            case 'invoiceform':
                store = Ext.getStore('Invoices');
                break;
            case 'clientform':
                store = Ext.getStore('Clients');
                model = Ext.create('Invoice.model.Client');
                break;
            case 'productform':
                store = Ext.getStore('Products');
                model = Ext.create('Invoice.model.Product');
                break;
            case 'branchform':
                store = Ext.getStore('Branches');
                model = Ext.create('Invoice.model.Branch');
                break;
            case 'userform':
                store = Ext.getStore('Users');
                model = Ext.create('Invoice.model.User');
                break;
        }

        form.updateRecord(model);
        errors = model.validate();

        if (!errors.isValid()) {
            errors.each(function (err) {
                errorMessage += err.getMessage() + '<br/>';
            }); // each()
            Ext.Msg.alert('Error', errorMessage);
        } else {
            if (values.id) {
                record = store.findRecord('id', values.id);
                record.setData(values);
            } else {
                store.add(values);
            }
            store.sync();
            form.hide();
        }
    },
    onMenuItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this,
            container;
        me.getLogOutButton().hide();
        me.getAddButton().show();

        container = {
            xtype:'container',
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
                break;
            case 'clients':
                container.items=[{
                    xtype: 'clientlist',
                    flex:2
                },{
                    xtype:'clientcontainer',
                    flex:.5
                }];
                break;
            case 'products':
                container.items=[{
                    xtype: 'productlist',
                    flex:2
                },{
                    xtype:'productcontainer',
                    flex:.5
                }];
                break;
            case 'branches':
                container.items=[{
                    xtype: 'branchlist',
                    flex:2
                },{
                    xtype:'branchcontainer',
                    flex:.5
                }];
                break;
            case 'users':
                container.items=[{
                    xtype: 'userlist',
                    flex:2
                },{
                    xtype:'usercontainer',
                    flex:.5
                }];
                break;
        }

        me.getMenu().add(container);
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
                container = menu.down('productcontainer');
                break;
            case 'branches':
                container = menu.down('branchcontainer');
                break;
            case 'users':
                container = menu.down('usercontainer');
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