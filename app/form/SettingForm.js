/**
 * @class Invoice.form.SettingForm
 * @extends Ext.form.Panel
 * The setting form
 */
Ext.define('Invoice.form.SettingForm', {
    extend: 'Ext.form.Panel',
    xtype: 'settingform',
    requires: [
        'Ext.field.Hidden'
    ],

    config: {
        items: [
            {
                xtype: 'titlebar', //Use in Tablet mode
                title: 'Agregar Configuración',
                docked: 'top',
                hidden: Ext.os.is.Phone ? true : false,
                items: [
                    {
                        text: 'Cancelar',
                        action: 'cancel',
                        ui: 'decline',
                        align: 'left'
                    },
                    {
                        text: 'Guardar',
                        action: 'save',
                        ui: 'confirm',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                defaults: {
                    required: true
                },
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'Codigo'
                    },
                    {
                        xtype: 'textfield',
                        name: 'RFC',
                        placeHolder: 'RFC'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Activado',
                        placeHolder: 'Activado'
                    },
                    {
                        xtype: 'textfield',
                        name: 'CertificadoDigital',
                        placeHolder: 'Certificación digital'
                    },
                    {
                        xtype: 'textfield',
                        name: 'LlavePrivada',
                        placeHolder: 'Llave privada'
                    },
                    {
                        xtype: 'textfield',
                        name: 'ContrasenaLlave',
                        placeHolder: 'Contraseña llave'
                    },
                    {
                        xtype: 'textfield',
                        name: 'InicioCertificado',
                        placeHolder: 'Inicio certificado'
                    },
                    {
                        xtype: 'textfield',
                        name: 'ExpiracionCertificado',
                        placeHolder: 'Expiracion certificado'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'AvisoExpiracion',
                        placeHolder: 'Aviso expiracion'
                    },
                    {
                        xtype: 'textfield',
                        name: 'CertificadoCancelacion',
                        placeHolder: 'Certificado cancelación'
                    },
                    {
                        xtype: 'textfield',
                        name: 'LlaveCancelacion',
                        placeHolder: 'Llave cancelación'
                    },
                    {
                        xtype: 'textfield',
                        name: 'ContrasenaCancelacion',
                        placeHolder: 'Contraseña cancelación'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'TimbresDisponibles',
                        placeHolder: 'Timbres disponibles'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'NumeroTimbresAlarma',
                        placeHolder: 'Numero timbres alarma'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'CorreoRemitente',
                        placeHolder: 'Corero remitente'
                    },
                    {
                        xtype: 'textfield',
                        name: 'AsuntoCorreo',
                        placeHolder: 'Corero remitente'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'MensajeCorreo',
                        placeHolder: 'Mensaje de correo'
                    },
                    {
                        xtype: 'textfield',
                        name: 'ServidorCorreo',
                        placeHolder: 'Servidor de correo'
                    },
                    {
                        xtype: 'numberfield',
                        name: 'Puerto',
                        placeHolder: 'puerto'
                    }
                ]
            }
        ]
    }
});