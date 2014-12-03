/**
 * Created by Alí García on 03/12/14.
 */
Ext.define('Invoice.view.settings.SettingList', {
    extend: 'Invoice.core.List',
    xtype: 'settinglist',
    requires: [
        'Invoice.form.SettingForm',
        'Invoice.view.settings.SettingsContainer'
    ],

    config: {
        title: 'Configuración',
        action: 'settings',
        emptyText: 'No hay configuraciones, agrégalas ...',        
        store: 'Settings',
        //grouped: true,
        //indexBar : true,
        itemTpl: [
            '<div class="list-generic">',
                '<div class="list-generic-left">',
                    '{RFC} </br> <small class="muted">{CertificadoDigital}</small>',
                '</div>',
                // '<div class="list-generic-right">',
                //     '<span class="icon-phone"></span> {Correo}',
                // '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});