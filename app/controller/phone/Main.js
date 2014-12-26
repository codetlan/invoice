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

        console.log(record);
        console.log(active.getAction());

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
            case 'settings':
                form = me.getMenu().add({
                    xtype: 'settingform'
                });
                break;
            case 'taxes':
                form = me.getMenu().add({
                    xtype: 'taxform'
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
        console.log(values.Codigo);
        switch (xtype) {
            case 'invoiceform':
                store = Ext.getStore('Invoices');
                break;
            case 'clientform':     
                //console.log(me.validaDatos('clientform'));
                if(me.validaDatos('clientform')){
                    store = Ext.getStore('Clients');
                    container = me.getMenu().down('clientcontainer');
                    objeto = 'Cliente';                
                    break;
                } else {                    
                    return;
                }
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
            case 'settingform':
                store = Ext.getStore('Settings');
                container = me.getMenu().down('settingscontainer');
                objeto = 'Configuracion';
                pop = 2;
                break;
            case 'taxform':
                store = Ext.getStore('Taxes');
                container = me.getMenu().down('taxcontainer');
                objeto = 'Impuesto';                
                break;
        }

        parametro = objeto + ".";
        params = me.estableceParametros(values, parametro, params);
        me.actualizaObjeto(params, store, pop, objeto);
    },

    // estableceParametros: function (values, parametro, params){
    //     Ext.Object.each(values, function(key, value, myself) {                    
    //         cadena = parametro + key;
    //         Object.defineProperty(params, cadena, {value: value, writable:true, enumerable:true, configurable:true});
    //     });

    //     return params;
    // },

    // actualizaObjeto: function(params, store, pop, objeto){
    //     var me = this,
    //         url;

    //     console.log(params);

    //     switch(objeto){
    //         case 'Sucursal':
    //             url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Sucursal/ActualizarSucursal";
    //             break;

    //         case 'Usuario':
    //             url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Usuario/ActualizarUsuario";
    //             break;

    //         case 'Cliente':
    //             url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Cliente/ActualizarCliente";
    //             break;

    //         case 'Articulo':
    //             url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Articulo/ActualizarArticulo";
    //             break;
    //         case 'Configuracion':
    //             url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Configuracion/ActualizarConfiguracion";
    //             break;
    //     }

    //     Ext.data.JsonP.request({            
    //         url: url,
    //         params: params,
            
    //         callbackKey: 'callback',
    //         success: function (response) {
    //             var procesada = response.Success;

    //             if (procesada) {
    //                 params = {
    //                         Token: localStorage.getItem('invoiceToken'),
    //                         RFC: localStorage.getItem('rfc'),
    //                         Todos: true
    //                     };
    //                 console.log(params);
    //                 store.setParams(params);
    //                 store.load();

    //                 me.getSaveOnPhoneButton().hide();
    //                 me.getMenu().pop(pop);
                    
    //             } else {
    //                 Ext.Msg.alert('Datos Incorrectos', response.Descripcion, Ext.emptyFn);
    //             }
    //         }
    //     });
    // },

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
            case 'settings':
                container = me.getMenu().add({
                    xtype: 'settingscontainer'
                });

                console.log(record);
                break;
            case 'taxes':
                container = me.getMenu().add({
                    xtype: 'taxcontainer'
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