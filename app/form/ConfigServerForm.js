Ext.define('Invoice.form.ConfigServerForm', {
    extend: 'Ext.form.Panel',
    xtype: 'configserverform',
    config: {
        padding: 15
    },

    initialize: function (){
        var me = this;

        me.setItems([{
                    xtype: 'button',
                    action: 'configBackButton',
                    iconCls: 'arrow_left',
                    margin: '10 0 0 0',
                    right: 15
                },{
                xtype: 'fieldset',
                title: 'Configuración',//APP.core.config.Locale.config.lan.ConfiguracionForm.titulo,
                defaults: {
                    clearIcon: true,
                    autoCapitalize: true,
                    labelWidth: '55%'
                },
                style: {
                    fontSize: '13px',
                    marginTop: '70px',
                    marginBottom: '20px'
                },
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                flex: 1,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'servidor',
                        label: 'Servidor'//APP.core.config.Locale.config.lan.ConfiguracionForm.servidor
                    }/*,
                    {
                        xtype: 'selectfield',
                        name: 'idioma',
                        label: 'Idioma',
                        options: [
                            {
                                text: 'Español',
                                value: 'es'
                            },
                            {
                                text: 'Inglés',
                                value: 'en'
                            }
                        ]
                    }*/
                ]
            },
            {
                xtype: 'button',
                text: 'Guardar',//APP.core.config.Locale.config.lan.ConfiguracionForm.guardar,
                itemId: 'saveConfiguration',
                margin: '0 auto',
                width: '50%'
            }
        ]);

        me.callParent(arguments);
    }
});