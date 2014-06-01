/**
 * @class Invoice.form.InvoiceForm
 * @extends Ext.form.Panel
 * The login invoice form
 */
Ext.define('Invoice.form.InvoiceForm', {
    extend: 'Ext.form.Panel',
    xtype: 'invoiceform',
    requires:[
        'Ext.field.Select',
        'Ext.field.DatePicker',
        'Ext.field.Number'
    ],

    config: {
        fullscreen: true,
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Crear Factura',
            docked: 'top',
            hidden: Ext.os.is.Phone ? true : false,
            items: [{
                text: 'Cancelar',
                action: 'cancel',
                ui: 'decline',
                align: 'left'
            }, {
                text: 'Guardar',
                action: 'save',
                ui: 'confirm',
                align: 'right'
            }]
        }, {
            xtype: 'component',
            height: 30,
            html: 'Total : $5868.00',
            style: {
                'text-align': 'right',
                'font-size': '1.5em',
                color: 'blue'
            },
            docked: 'top'
        }, {
            xtype: 'fieldset',
            title: 'Cliente',
            defaults: {
                required: true
            },
            items: [{
                xtype: 'selectfield',
                name: 'cliente',
                placeHolder: 'Cliente',
                options: [{
                    text: 'Cliente uno',
                    value: 'first'
                }, {
                    text: 'Cliente dos',
                    value: 'second'
                }, {
                    text: 'Cliente tres',
                    value: 'third'
                }]
            }, {
                xtype: 'datepickerfield',
                destroyPickerOnhide: true,
                name: 'fecha',
                placeHolder: 'Fecha',
                picker: {
                    yearFrom: 2014
                }
            }]
        }, {
            xtype: 'fieldset',
            itemId: 'productosFieldset',
            title: 'Productos',
            items: [{
                xtype: 'fieldset',
                margin: 2,
                defaults: {
                    required: true
                },
                items: [{
                    xtype: 'textfield',
                    name: 'name',
                    placeHolder: 'Nombre'
                }, {
                    xtype: 'textareafield',
                    name: 'descripcion',
                    placeHolder: 'Descripcion'
                }, {
                    xtype: 'numberfield',
                    name: 'precio',
                    placeHolder: 'Precio'
                }]
            }]
        }, {
            xtype: 'button',
            text: 'Agregar Productos',
            handler: function(btn) {
                var items = {
                    xtype: 'fieldset',
                    margin: 2,
                    defaults: {
                        required: true
                    },
                    items: [{
                        xtype: 'textfield',
                        name: 'name',
                        placeHolder: 'Nombre'
                    }, {
                        xtype: 'textareafield',
                        name: 'descripcion',
                        placeHolder: 'Descripcion'
                    }, {
                        xtype: 'numberfield',
                        name: 'precio',
                        placeHolder: 'Precio'
                    }]
                };
                btn.up('invoiceform').down('#productosFieldset').add([items]);
            }
        }]
    }
});