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
    onAddButtonTap: function(record) {
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
                form = me.getMenu().add({
                    xtype: 'productform'
                });
                break;
            case 'branches':
                form = me.getMenu().add({
                    xtype: 'branchform'
                });
                break;
            case 'users':
                form = me.getMenu().add({
                    xtype: 'userform'
                });
                break;
        }
        if (record != undefined) {
            //form.setRecord(record.data);            
            form.setValues(record.data);
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
            store, record, container, cadena, parametro, objeto,
            pop = values.Codigo == "" ? 1: 2,            
            params = {
                    Token: localStorage.getItem('invoiceToken'),
                    RFC: localStorage.getItem('rfc')                    
                };        

        switch (xtype) {
            case 'invoiceform':
                store = Ext.getStore('Invoices');
                break;
            case 'clientform':
                store = Ext.getStore('Clients');
                container = me.getMenu().down('clientcontainer');
                objeto = 'Cliente';
                break;
            case 'productform':
                store = Ext.getStore('Products');
                container = me.getMenu().down('productcontainer');
                objeto = 'Articulo';
                break;
            case 'branchform':
                store = Ext.getStore('Branches');
                container = me.getMenu().down('branchcontainer');                
                objeto = 'Sucursal';
                break;
            case 'userform':
                store = Ext.getStore('Users');
                container = me.getMenu().down('usercontainer');
                objeto = 'Usuario';
                break;
        }

        parametro = objeto + ".";
        params = me.estableceParametros(values, parametro, params);
        me.actualizaObjeto(params, store, pop, objeto);
    },

    estableceParametros: function (values, parametro, params){
        Ext.Object.each(values, function(key, value, myself) {                    
            cadena = parametro + key;
            Object.defineProperty(params, cadena, {value: value, writable:true, enumerable:true, configurable:true});
        });

        return params;
    },

    actualizaObjeto: function(params, store, pop, objeto){
        var me = this,
            url;

        console.log(params);

        switch(objeto){
            case 'Sucursal':
                url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Sucursal/ActualizarSucursal";
                break;

            case 'Usuario':
                url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Usuario/ActualizarUsuario";
                break;

            case 'Cliente':
                url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Cliente/ActualizarCliente";
                break;

            case 'Articulo':
                url = "http://" + localStorage.getItem('dirIP') + "//CatalogoRazones/COK1_CL_Articulo/ActualizarArticulo";
        }

        Ext.data.JsonP.request({            
            url: url,
            params: params,
            
            callbackKey: 'callback',
            success: function (response) {
                var procesada = response.Success;

                if (procesada) {
                    params = {
                            Token: localStorage.getItem('invoiceToken'),
                            RFC: localStorage.getItem('rfc'),
                            Todos: true
                        };
                    console.log(params);
                    store.setParams(params);
                    store.load();

                    me.getSaveOnPhoneButton().hide();
                    me.getMenu().pop(pop);
                    
                } else {
                    Ext.Msg.alert('Datos Incorrectos', response.Descripcion, Ext.emptyFn);
                }
            }
        });
    },

    onShowItemDetails: function(list, index, target, record) {
        var me = this,
            container;

        switch (list.getAction()) {
            case 'invoices':
                form = Ext.create('Invoice.form.InvoiceForm', options);
                break;
            case 'clients':
                container = me.getMenu().add({
                    xtype: 'clientcontainer'
                });
                break;
            case 'users':
                container = me.getMenu().add({
                    xtype: 'usercontainer'
                });
                break;
            case 'products':
                container = me.getMenu().add({
                    xtype: 'productcontainer'
                });
                break;
            case 'branches':
                container = me.getMenu().add({
                    xtype: 'branchcontainer'
                });
                break;
        }

        container.setRecord(record);
        me.getAddButton().hide();
        me.getEditOnPhoneButton().show();
    },

    onEditButtonTap: function (btn) {
        var me = this,
            container = me.getMenu().getActiveItem();

        me.onAddButtonTap(container.getRecord());
    }
});