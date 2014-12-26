/**
 * @class Invoice.form.ClientForm
 * @extends Ext.form.Panel
 * The client form
 */
Ext.define('Invoice.form.ClientForm', {
    extend: 'Ext.form.Panel',
    xtype: 'clientform',
    requires: [
        'Ext.field.Hidden',
        'Invoice.form.fields.PersonTypeSelectField',
        'Invoice.form.fields.PaymentTypeSelectField',
        'Invoice.form.fields.PaymentTermSelectField'
    ],

    config: {
        padding: 10,
        items: [
            {
                xtype: 'titlebar', //Use in Tablet mode
                title: 'Agregar Cliente',
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
                        name: 'Nombre',
                        placeHolder: 'Cliente'
                    },
                    {
                        xtype: 'textfield',
                        name: 'RFC',
                        placeHolder: 'RFC',
                        itemId: 'fieldRFC'
                    },
                    {
                        xtype: 'persontypeselectfield',
                        name: 'TipoPersona'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'Correo',
                        placeHolder: 'Email'
                    },
                    {
                        xtype: 'paymenttypeselectfield',
                        name: 'MetodoPago'
                    },
                    {
                        xtype: 'textfield',
                        name: 'NumeroCuenta',
                        placeHolder: 'Número de cuenta'
                    },
                    {
                        xtype: 'paymenttermselectfield',
                        name: 'CondicionPago',
                        placeHolder: 'Condición de pago'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Calle',
                        placeHolder: 'Calle'
                    },
                    {
                        xtype: 'textfield',
                        name: 'NumeroExterior',
                        placeHolder: 'Número exterior'
                    },
                    {
                        xtype: 'textfield',
                        name: 'NumeroInterior',
                        placeHolder: 'Número interior'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Ciudad',
                        placeHolder: 'Ciudad'
                    },
                    {
                        xtype: 'textfield',
                        name: 'MunicipioDelegacion',
                        placeHolder: 'Municipio/Delegación'
                    },
                    {
                        xtype: 'textfield',
                        name: 'CodigoPostal',
                        placeHolder: 'Código Postal'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Estado',
                        placeHolder: 'Estado'
                    }
                ]
            }
        ]
    }
});