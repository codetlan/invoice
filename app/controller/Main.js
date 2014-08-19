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
            },
            saveOnPhoneButton: {
                selector: 'menu button[action=saveOnPhone]'
            },
            editOnPhoneButton: {
                selector: 'menu button[action=edit]'
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
            },
            'button[action=saveOnPhone]': {
                tap: 'onSaveButtonTap'
            },
            'button[action=signup]': {
                tap: 'onShowSigupForm'
            },
            'button[action=backToLogin]': {
                tap: 'onShowLoginForm'
            },
            'button[action=edit]': {
                tap: 'onEditButtonTap'
            },
            'list > toolbar > searchfield': {
                keyup: 'onSearchFieldKeyUp'
            },
            'list > toolbar > button': {
                tap: 'onSearchFieldButtonTap'
            }
        }
    },
    launch: function() {
        var me = this;
        if (localStorage.getItem('Token')) {
            me.getMain().setActiveItem(1);
        }
    },
    onShowLoginForm: function() {
        var me = this;
        me.getMain().setActiveItem(0);
    },
    onShowSigupForm: function() {
        var me = this;
        me.getMain().setActiveItem(2);
    },
    onLoginButtonTap: function() {
        var me = this,
            valores = me.getLoginForm().getValues();
        if (valores.password === 'rifa') {
            localStorage.setItem("RFC", "MAGL860228TF4");
            localStorage.setItem("Token", "abc123");
            me.getMain().setActiveItem(1);
        } else {
            Ext.Msg.alert("Login", "Usuario o contraseña incorrectos.");
        }
        // me.mask('Validando credenciales ...');
        // Ext.data.JsonP.request({
        //     url: 'http://187.174.229.88/',
        //     params: valores,
        //     callback: function(c, response) {
        //         response = Ext.decode(response);
        //         me.unmask();
        //     }
        // });
    },
    onLogOutButtonTap: function() {
        var me = this;
        localStorage.removeItem("invoiceToken");
        me.getMain().setActiveItem(0);
    },
    onMenuItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this;
        me.getLogOutButton().hide();
        me.getAddButton().show();
        switch (record.get('action')) {
            case 'invoices':
                me.getMenu().add({
                    xtype: 'invoicelist'
                });
                break;
            case 'clients':
                me.getMenu().add({
                    xtype: 'clientlist'
                });
                break;
            case 'products':
                me.getMenu().add({
                    xtype: 'productlist'
                });
                break;
            case 'branches':
                me.getMenu().add({
                    xtype: 'branchlist'
                });
                break;
        }
    },
    onMenuBackButtonTap: function() {
        var me = this,
            size = me.getMenu().getItems().length;
        if (size == 3) {
            me.getLogOutButton().show();
            me.getAddButton().hide();
        } else if (size == 4) {
            me.getAddButton().show();
            me.getSaveOnPhoneButton().hide();
            me.getEditOnPhoneButton().hide();
        } else if (size == 5) {
            me.getSaveOnPhoneButton().hide();
            me.getEditOnPhoneButton().show();
        }
        me.getMenu().pop();
    },
    mask: function(txt) {
        var me = this;
        me.getMain().setMasked({
            xtype: 'loadmask',
            message: txt
        });
    },
    unmask: function() {
        var me = this;
        me.getMain().setMasked(false);
    },

    onSearchFieldKeyUp: function (searchField, e, eOpts) {console.log('aaaaa');
        var me = this,
            value = searchField.getValue(),
            list = searchField.up('list'),
            store;
        if (value.length > 3) {

            switch (list.getAction()) {
                case 'invoices':
                    store = Ext.getStore('Invoices');
                    break;
                case 'clients':
                    store = Ext.getStore('Clients');
                    break;
                case 'products':
                    store = Ext.getStore('Products');
                    break;
                case 'branches':
                    store = Ext.getStore('Branches');
                    break;
            }

            store.setParams({
                nombre: searchField.getValue()
            });

            store.load();
        }
    },

    onSearchFieldButtonTap: function (button, e, eOpts) {
        var searchField = button.up('toolbar').down('searchfield'),
            list = searchField.up('list'),
            store;

        switch (list.getAction()) {
            case 'invoices':
                store = Ext.getStore('Invoices');
                break;
            case 'clients':
                store = Ext.getStore('Clients');
                break;
            case 'products':
                store = Ext.getStore('Products');
                break;
            case 'branches':
                store = Ext.getStore('Branches');
                break;
        }

        store.setParams({
            nombre: searchField.getValue()
        });

        store.load();
    },

    onAddButtonTap: Ext.emptyFn,
    onCancelButtonTap: Ext.emptyFn,
    onSaveButtonTap: Ext.emptyFn,
    onEditButtonTap: Ext.emptyFn
});