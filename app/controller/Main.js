/**
 * Created by lumartin on 08/03/14.
 */
Ext.define('Invoice.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: {
                selector: 'main'
            },
            loginForm: {
                selector: 'loginform'
            },
            menu: {
                selector: 'menu'
            },
            logOutButton: {
                selector: 'menu button[action=logOut]'
            },
            addButton: {
                selector: 'menu button[action=add]'
            }
        },
        control: {
            'loginform button[action=login]': {
                tap: 'onLoginButtonTap'
            },
            'addButton': {
                tap: 'onAddButtonTap'
            },
            'menu #navigationBar': {
                back: 'onMenuBackButtonTap'
            },
            'menu button[action=logOut]': {
                tap: 'onLogOutButtonTap'
            },
            'menu > carousel > container > dataview': {
                itemtap: 'onMenuItemTap'
            },
            'button[action=cancel]': {
                tap: 'onCancelButtonTap'
            },
            'button[action=save]': {
                tap: 'onSaveButtonTap'
            }
        }
    },
    launch: function () {
        var me = this;
        if (localStorage.getItem('invoiceToken')) {
            me.getMain().setActiveItem(1);
        }
    },

    onLoginButtonTap: function() {
        var me = this,
            valores = me.getLoginForm().getValues();

        if(valores.password === 'rifa') {
            localStorage.setItem("invoiceToken", 123456789);
            me.getMain().setActiveItem(1);
        } else {
            Ext.Msg.alert("Login", "Usuario o contraseña incorrectos.");
        }
    },

    onLogOutButtonTap: function () {
        var me = this;
        localStorage.removeItem("invoiceToken");
        me.getMain().setActiveItem(0);
    },

    onMenuItemTap: function (dataview, index, target, record, e, eOpts) {
        var me = this;

        me.getLogOutButton().hide();
        me.getAddButton().show();

        switch (record.get('action')) {
            case 'invoices':
                me.getMenu().add({
                    xtype:'invoicelist'
                });
                break;
            case 'clients':
                me.getMenu().add({
                    xtype:'clientlist'
                });
                break;
        }
    },

    onMenuBackButtonTap: function () {
        var me = this,
            size = me.getMenu().getItems().length;
        if (size == 3) {
            me.getLogOutButton().show();
            me.getAddButton().hide();
        } else if (size == 4) {
            me.getAddButton().show();
        }

        me.getMenu().pop();
    },

    onAddButtonTap: Ext.emptyFn,

    onCancelButtonTap: Ext.emptyFn,

    onSaveButtonTap: Ext.emptyFn
});