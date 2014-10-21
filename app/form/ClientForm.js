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
        'Invoice.form.fields.PaymentTypeSelectField'
    ],

    config: {
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
                        name: 'identifier'
                    },
                    {
                        xtype: 'textfield',
                        name: 'client',
                        placeHolder: 'Cliente'
                    },
                    {
                        xtype: 'textfield',
                        name: 'rfc',
                        placeHolder: 'RFC'
                    },
                    {
                        xtype: 'persontypeselectfield',
                        name: 'personType'
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        placeHolder: 'Email'
                    },
                    {
                        xtype: 'paymenttypeselectfield',
                        name: 'paymentType'
                    }
                ]
            }
        ]
    }
});