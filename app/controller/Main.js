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
            signupForm:{
                selector: 'signupform'
            },
            businessNameForm:{
                selector: 'businessnameform'
            },
            configServerForm:{
                selector: 'configserverform'
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
            },
            clientForm:{
                selector: 'clientform'
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
                clearicontap: 'cleanSearch'
                //keyup: 'onSearchFieldKeyUp'
            },
            'list > toolbar > button': {
                tap: 'onSearchFieldButtonTap'
            },
            'signupform button[action=backSignUp]': {
                tap: 'onBackSignUpButtonTap'
            },
            'signupform button[action=register]': {
                tap: 'onRegisterButtonTap'
            },
            'businessnameform button[action=backRegister]': {
                tap: 'onBackRegisterButtonTap'
            },
            'businessnameform button[action=sendData]': {
                tap: 'onSendDataButtonTap'
            },
            'loginform field': {
                keyup: 'onLoginFieldsKeyUp'
            },
            'loginform image[action=configServer]': {
                tap: 'showConfigOptions'
            },
            'configserverform button[action=configBackButton]': {
                tap: 'onShowLoginForm'
            },
            'configserverform button[itemId=saveConfiguration]': {
                tap: 'onSaveConfiguration'
            }/*,
            'clientform #fieldRFC':{
                change: 'validaCamposCliente'
            }*/
        }
    },

    launch: function() {
        var me = this;
        if (localStorage.getItem('invoiceToken')) {
            me.getMain().setActiveItem(1);
        }
    },

    /**
    * Muestra la pantalla de configuración.
    */
    showConfigOptions: function (x) {
        var me = this,
            configForm = me.getConfigServerForm();

        me.getMain().setActiveItem(4);

        configForm.setValues({
//            cod_soc: localStorage.getItem('CodigoSociedad'),
//            cod_dis: localStorage.getItem('CodigoDispositivo'),
            servidor: localStorage.getItem('dirIP')
//            idioma: localStorage.getItem('idioma')
        });

        /*var form = this.getLoginForm(),
            server = this.getServidorLogin(),
            idioma = this.getIdiomaLogin();

        if (server.isHidden()) {
            server.setHidden(false);
            idioma.setHidden(false);
        }
        else {
            server.setHidden(true);
            idioma.setHidden(true);
        }*/
    },

    onShowLoginForm: function() {
        var me = this;
        me.getMain().setActiveItem(0);
    },

    onShowSigupForm: function() {
        var me = this;
        me.getMain().setActiveItem(2);
    },

    /**
    * Guarda la configuración establecida.
    */
    onSaveConfiguration: function () {
        var me = this,
            configForm = me.getConfigServerForm();
            values = configForm.getValues();

        //me.confirma(APP.core.config.Locale.config.lan.Login.confirmaTitle,
        me.confirma('Configuración',
         //APP.core.config.Locale.config.lan.Login.confirmaMsg, 300,
         "¿Estás seguro que deseas cambiar la configuración?", 300,
            function (buttonId) {
                if (buttonId == 'yes') {
                    localStorage.setItem('dirIP', values.servidor);                    

                    me.getMain().setActiveItem(0);
                }
            }
        );
    },

    /**
    * Muestra un MsgBox y ejecuta la función de acuerdo a la opción elegida.
    * @titulo El título del mensaje.
    * @mensaje El mensaje.
    * @ancho El ancho de la ventana del mensaje.
    * @param funcion La función a ejecutarse de acuerdo a la opción elegida.
    */
    confirma: function (titulo, mensaje, ancho, funcion){
        Ext.Msg.show({
            title: titulo,
            message: mensaje,
            width: ancho,
            buttons: [{
                itemId : 'no',
                //text   : APP.core.config.Locale.config.lan.Ordenes.confirmaNo
                text : 'No'
            },{
                itemId : 'yes',
                //text   : APP.core.config.Locale.config.lan.Ordenes.confirmaSi,
                text : 'Si',
                ui     : 'action'
            }],
            fn: funcion
        });
    },

    onLoginButtonTap: function() {
        var me = this,
            values = me.getLoginForm().getValues();

            //localStorage.setItem('dirIP', 'localhost:1926');

            console.log(localStorage.getItem('dirIP'));

            Ext.data.JsonP.request({
                url: "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_RazonSocial/Login",

                params: {
                    RFC: values.rfc,
                    Contrasenia: values.password
                },

                callbackKey: 'callback',
                success: function (response) {
                    var procesada = response.Success;

                    if (procesada) {
                        var token = response.Data[0];

                        me.getMain().setActiveItem(1);
                        localStorage.setItem('invoiceToken', token);
                        localStorage.setItem('rfc', values.rfc);
                        me.getLoginForm().reset();
                    } else {
                        Ext.Msg.alert('Datos Incorrectos', response.Descripcion, Ext.emptyFn);
                    }
                }
            });
            //query = 'SELECT * FROM BusinessName WHERE rfc="' + values.rfc + '" AND password="' + values.password + '"',
        //     db;

        // db = openDatabase('Sencha', '1.0', 'Sencha DB', 2 * 1024 * 1024);
        // db.transaction(function (tx) {
        //     tx.executeSql(query, [], function (tx, results) {
        //         if (results.rows.length === 1){
        //             console.log(results.rows.item(0));
        //             me.getMain().setActiveItem(1);
        //             localStorage.setItem('invoiceToken', 'tokenizer')
        //             me.getLoginForm().reset();
        //         } else {
        //             Ext.Msg.alert("Login", "Usuario o contraseña incorrectos.");
        //         }
        //     }, null);
        // });

        /*if (values.password === 'rifa') {
            localStorage.setItem("RFC", "MAGL860228TF4");
            localStorage.setItem("Token", "abc123");
            me.getMain().setActiveItem(1);
        } else {
            Ext.Msg.alert("Login", "Usuario o contraseña incorrectos.");
        }*/
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
        var me = this,
            store;
            // params = {
            //         Todos: true
            //     };
// console.log(params);
        localStorage.setItem("todos", true);

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
                store = Ext.getStore("Clients");
                //me.validaCorreo();
                break;
            case 'products':
                me.getMenu().add({
                    xtype: 'productlist'
                });
                store = Ext.getStore("Products");                
                break;
            case 'branches':
                me.getMenu().add({
                    xtype: 'branchlist'
                });
                store = Ext.getStore("Branches");
                break;
            case 'users':
                me.getMenu().add({
                    xtype: 'userlist'
                });
                store = Ext.getStore("Users");
                break;
            case 'settings':
                me.getMenu().add({
                    xtype: 'settinglist'
                });
                store = Ext.getStore("Settings");
                break;
            case 'taxes':
                me.getMenu().add({
                    xtype: 'taxlist'
                });
                store = Ext.getStore("Taxes");
                break;
        }

//        store.setParams(params);        
        store.load();
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
            store, query, db;
        if (value.length > 3) {

            switch (list.getAction()) {
                case 'invoices':
                    store = Ext.getStore('Invoices');
                    break;
                case 'clients':
                    store = Ext.getStore('Clients');
                    query = "SELECT * FROM Client WHERE ((cliente like '%" + value + "%')) ORDER BY cliente ASC ";
                    break;
                case 'products':
                    store = Ext.getStore('Products');
                    query = "SELECT * FROM Product WHERE ((nombre like '%" + value + "%')) ORDER BY nombre ASC ";
                    break;
                case 'branches':
                    store = Ext.getStore('Branches');
                    query = "SELECT * FROM Branch WHERE ((nombre like '%" + value + "%')) ORDER BY nombre ASC ";
                    break;
                case 'users':
                    store = Ext.getStore('Users');
                    query = "SELECT * FROM User WHERE ((nombre like '%" + value + "%')) ORDER BY nombre ASC ";
                    break;
            }
            db = store.getModel().getProxy().getDatabaseObject();

            /*store.setParams({
                nombre: searchField.getValue()
            });
            store.load();*/
            store.removeAll();
            db.transaction(function(tx) {
                tx.executeSql(query, [], function(tx, results) {
                    var len = results.rows.length,
                        i;
                    for (i = 0; i < len; i++) {
                        store.add(results.rows.item(i));
                    }
                    me.unmask();
                }, null);
            });
        }
    },

    onSearchFieldButtonTap: function (button, e, eOpts) {
        var me = this,
            searchField = button.up('toolbar').down('searchfield'),
            value = searchField.getValue(),
            list = searchField.up('list'),
            store, parametro, params = new Object();
            // params={
            //     // Token: localStorage.getItem('invoiceToken'),
            //     // RFC: localStorage.getItem('rfc')                
            //     Todos: false
            // };

        localStorage.setItem("todos", false);

        switch (list.getAction()) {
            case 'invoices':
                store = Ext.getStore('Invoices');
                break;
            case 'clients':
                store = Ext.getStore('Clients');
                parametro = 'Cliente.Nombre';
                break;
            case 'products':
                store = Ext.getStore('Products');
                parametro = 'Articulo.Nombre';
                break;
            case 'branches':
                store = Ext.getStore('Branches');
                parametro = 'Sucursal.Nombre';
                break;
            case 'users':
                store = Ext.getStore('Users');
                parametro = 'Usuario.Nombre';
                break;
        }

        if(Ext.isEmpty(value)){
            me.cleanSearch(searchField);            
            return;                    
        } else {
            Object.defineProperty(params, parametro, {value: value, writable:true, enumerable:true, configurable:true});
        }

        store.setParams(params);
        store.load();
    },

    cleanSearch:function(searchfield){
        var me = this,            
            list = searchfield.up('list'),
            store;
            // params={
            //     Token: localStorage.getItem('invoiceToken'),
            //     RFC: localStorage.getItem('rfc'),
            //     Todos: true
            // };

        //Object.defineProperty(params, 'Todos', {value: true, writable:true, enumerable:true, configurable:true});

        localStorage.setItem('todos', true);

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
            case 'users':
                store = Ext.getStore('Users');
        }

        //store.setParams(params);
        store.load();
    },

    onBackSignUpButtonTap: function (btn) {
        var me = this;

        me.getMain().setActiveItem(0);
    },

    onRegisterButtonTap: function (btn) {
        var me = this,
            form = btn.up('signupform');
            values = form.getValues();
            //values2;

        //TODO add validations here
        if (values.rfc && values.email && values.password && values.passwordConfirm && values.password === values.passwordConfirm) { 
            me.getMain().getActiveItem().values = form.getValues();
            me.getMain().setActiveItem(3);

            // db = openDatabase('Sencha', '1.0', 'Sencha DB', 2 * 1024 * 1024);
            // db.transaction(function (tx) {
            //     tx.executeSql('CREATE TABLE IF NOT EXISTS BusinessName (identifier INTEGER PRIMARY KEY, rfc VARCHAR, name VARCHAR, calle VARCHAR, municipio VARCHAR, codigo VARCHAR, estado VARCHAR, regimen VARCHAR, razon VARCHAR, email VARCHAR, password VARCHAR)', [], function () {
            //         console.log('create ', arguments);
            //     });
            //     tx.executeSql('INSERT INTO BusinessName (rfc, email, password) VALUES (?, ?, ?)',
            //         [values.rfc, values.email, values.password],
            //         function (tx, result) {
            //             console.log('insert success ', arguments, result);
            //         },
            //         function (tx, error) {
            //             console.log('insert error ', arguments, error);
            //         }
            //     );
            // },
            // function (error) {
            //     console.log('error transaction ', arguments);
            // },
            // function () {
            //     console.log('success transaction ', arguments);
            //     me.getMain().setActiveItem(0);
            //     form.reset();
            //     Ext.Msg.alert("Registro", "Ahora puedes loguearte.");
            // });
        } else {
            Ext.Msg.alert("Registro", "Algún dato no es correcto.");
        }
    },

    onSendDataButtonTap: function(btn){
        var me = this,
            form = btn.up('businessnameform'),
            values = me.getMain().getAt(2).values,
            objeto = 'RazonSocial',
            parametro = objeto + ".";    
            params = {
                'RazonSocial.RFC': values.rfc,
                'RazonSocial.Correo': values.email,
                'RazonSocial.Contrasenia': values.password
            };            

        values = form.getValues();        
        params = me.estableceParametros(values, parametro, params);

console.log(params);
        //localStorage.setItem('dirIP', 'localhost:1926');

        Ext.data.JsonP.request({
            url: "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_RazonSocial/CrearRazonSocial",

            params: params,            

            callbackKey: 'callback',
            success: function (response) {
                var procesada = response.Success;

                if (procesada) {
                    me.getLoginForm().reset();
                    me.getSignupForm().reset();
                    me.getBusinessNameForm().reset(); 
                    me.getMain().setActiveItem(0);

                    Ext.Msg.alert('Registro exitoso', 'Ingrese con su RFC y Contraseña');
                } else {
                    Ext.Msg.alert('Datos Incorrectos', response.Descripcion, Ext.emptyFn);
                }
            }
        });
    },

    onBackRegisterButtonTap: function(btn){
        var me = this;

        me.getMain().setActiveItem(2);
    },
    
    onLoginFieldsKeyUp: function (field, e) {
        if (e.browserEvent.keyCode === 13) {
            this.onLoginButtonTap();
        }
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
                url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Articulo/ActualizarArticulo";
                break;
            case 'Configuracion':
                url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Configuracion/ActualizarConfiguracion";
                break;
            case 'Impuesto':
                url = "http://" + localStorage.getItem('dirIP') + "/CatalogoRazones/COK1_CL_Impuesto/ActualizarImpuesto";
                break;
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
                    me.getAddButton().show();
                    me.getMenu().pop(pop);
                    
                } else {
                    Ext.Msg.alert('Datos Incorrectos', response.Descripcion, Ext.emptyFn);
                }
            }
        });
    },

    // validaCamposCliente: function (textfield, newValue, oldValue){
    //     var me = this;

    //     switch(textfield.getItemId()){
    //         case 'fieldRFC':

    //             break:
    //     }        
    // }

    validaDatos: function(selector){
        var me = this,
            form = me.getClientForm(),
            values = form.getValues(),
            cliente = Ext.getStore('Clients').getModel(),
            clienteActual = Ext.ModelMgr.create(values, cliente),
            errores;

console.log(values);

        switch(selector){
            case 'clientform':
                var validaciones = cliente.getValidations().items;
                console.log(validaciones);

                if(values.TipoPersona == 0){            
                    Object.defineProperty(validaciones[4], 'matcher', {value: /^[A-Z]{4}\d{6}([a-zA-Z0-9]{3})$/, writable:true, enumerable:true, configurable:true});
                } else {
                    Object.defineProperty(validaciones[4], 'matcher', {value: /^[A-Z]{3}\d{6}([a-zA-Z0-9]{3})$/, writable:true, enumerable:true, configurable:true});
                }

                errores = clienteActual.validate();

                if(!errores.isValid()){
                    var msg = "";

                    errores.each(function(error){
                        msg += error.getMessage() + "<br/>";
                    });

                    Ext.Msg.alert('ERROR', msg);

                    return false;
                }
                break;
        }        

        return true;
    },

    onAddButtonTap: Ext.emptyFn,
    onCancelButtonTap: Ext.emptyFn,
    onSaveButtonTap: Ext.emptyFn,
    onEditButtonTap: Ext.emptyFn
});