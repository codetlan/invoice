/**
 * @class Invoice.model.Settings
 * @extends Ext.data.Model
 * The product model
 */
Ext.define('Invoice.model.Setting', {
    extend: 'Ext.data.Model',
    config: {
        //idProperty: 'Codigo',
        fields: [/*{
            name: 'Codigo',
            type: 'int'
        },*/ {
            name: 'RFC',
            type: 'string'
        }, {
            name: 'Activado',
            type: 'boolean'
        }, {
            name: 'CertificadoDigital',
            type: 'string'
        }, {
            name: 'LlavePrivada',
            type: 'string'
        }, {
            name: 'ContrasenaLlave',
            type: 'string'
        }, {
            name: 'InicioCertificado',
            type: 'string'
        }, {
            name: 'ExpiracionCertificado',
            type: 'string'
        }, {
            name: 'AvisoExpiracion',
            type: 'int'
        }, {
            name: 'CertificadoCancelacion',
            type: 'string'
        }, {
            name: 'LlaveCancelacion',
            type: 'string'
        }, {
            name: 'ContrasenaCancelacion',
            type: 'string'
        }, {
            name: 'TimbresDisponibles',
            type: 'int'
        }, {
            name: 'NumeroTimbresAlarma',
            type: 'int'
        }, {
            name: 'CorreoRemitente',
            type: 'string'
        }, {
            name: 'AsuntoCorreo',
            type: 'string'
        }, {
            name: 'MensajeCorreo',
            type: 'string'
        }, {
            name: 'ServidorCorreo',
            type: 'string'
        }, {
            name: 'Puerto',
            type: 'int'
        }]
    }
});