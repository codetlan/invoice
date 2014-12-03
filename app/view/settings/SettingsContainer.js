/**
 * @class Invoice.view.settings.ClientContainer
 * @extends Ext.Container
 * The settings container
 */
Ext.define('Invoice.view.settings.SettingsContainer', {
    extend: 'Ext.Container',
    xtype: 'settingscontainer',
    requires: [
        'Ext.XTemplate'
    ],

    config: {
        action: 'settings',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        tpl: [
            '<div class="' + (Ext.os.is.Phone ? 'invoice-details-container-phone' : 'invoice-details-container-tablet' ) + '">',
            '<div class="details-content">',
            '<div class="details-image">',
            '<img src="resources/images/briefcase.png">',
            '</div>',
            '<div class="details-info">',
            '<p><span class="icon-office"> <b>RFC:</b> </span>{RFC}</p>',
            //'<p><span class="icon-tag"> <b>RFC:</b></span>{RFC}</p>',
            '<p><span class="icon-users"> <b>Activado:</b></span>{Activado}</p>',
            //'<tpl if="TipoPersona==1"><p><span class="icon-users"> <b>Tipo de persona:</b></span>Persona Moral</p></tpl>',
            '<p><span class="icon-mail2"> <b>Certificado Digital:</b></span>{CertificadoDigital}</p>',
            '<p><span class="icon-coin"> <b>Llave Privada:</b></span>{LlavePrivada}</p>',
            '<p><span class="icon-location"> <b>Contraseña Llave:</b></span>{ContrasenaLlave}</p>',
            '<p><span class="icon-location"> <b>No. Inicio Certificado:</b></span>{InicioCertificado}</p>',
            '<p><span class="icon-location"> <b>Expiración Certificado:</b></span>{ExpiracionCertificado}</p>',
            '<p><span class="icon-location"> <b>Aviso Expiración:</b></span>{AvisoExpiración}</p>',
            '<p><span class="icon-location"> <b>Certificado Cancelación:</b></span>{CertificadoCancelacion}</p>',
            '<p><span class="icon-location"> <b>Llave Cancelacion:</b></span>{LlaveCancelacion}</p>',
            '<p><span class="icon-location"> <b>Contraseña Cancelación:</b></span>{ContrasenaCancelacion}</p>',
            '<p><span class="icon-location"> <b>Timbres Disponibles:</b></span>{TimbresDisponibles}</p>',
            '<p><span class="icon-location"> <b>Número Timbres Alarma:</b></span>{NumeroTimbresAlarma}</p>',
            '<p><span class="icon-location"> <b>Correo Remitente:</b></span>{CorreoRemitente}</p>',
            '<p><span class="icon-location"> <b>Asunto Correo:</b></span>{AsuntoCorreo}</p>',
            '<p><span class="icon-location"> <b>Mensaje Correo:</b></span>{MensajeCorreo}</p>',
            '<p><span class="icon-location"> <b>Servidor Correo:</b></span>{ServidorCorreo}</p>',
            '<p><span class="icon-location"> <b>Puerto:</b></span>{Puerto}</p>',
            '</div>',
            '</div>',
            '</div>'
        ].join(' '),

        items: [{
            xtype: 'button',
            margin: '20% 20 0 20',
            text: 'Editar Configuración',
            action: 'edit',
            docked: 'bottom',
            hidden: true
        }]
    }
});