/**
 * @class Invoice.form.InvoiceForm
 * @extends Ext.form.Panel
 * The login invoice form
 */
Ext.define('Invoice.form.InvoiceForm', {
    extend: 'Ext.form.Panel',
    xtype: 'invoiceform',
    requires: ['Ext.field.Select', 'Ext.field.DatePicker', 'Ext.field.Number', 'Invoice.form.fields.ClientSelectField', 'Invoice.form.fields.ArticuloSelectField'],
    config: {
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
                xtype: 'clientselectfield',
                valueField: 'empresa'
            }, {
                xtype: 'datepickerfield',
                destroyPickerOnhide: true,
                name: 'fecha',
                placeHolder: 'Fecha',
                dateFormat: 'd/m/Y',
                picker: {
                    yearFrom: 2014,
                    yearTo: 3014,
                    value: new Date()
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
                    xtype: 'articuloselectfield'
                }, {
                    xtype: 'numberfield',
                    name: 'cantidad',
                    placeHolder: 'Cantidad'
                }]
            }]
        }, {
            xtype: 'button',
            text: 'Agregar Artículo',
            handler: function(btn) {
                var items = {
                    xtype: 'fieldset',
                    margin: 2,
                    defaults: {
                        required: true
                    },
                    items: [{
                        xtype: 'articuloselectfield'
                    }, {
                        xtype: 'numberfield',
                        name: 'cantidad',
                        placeHolder: 'Cantidad'
                    }]
                };
                btn.up('invoiceform').down('#productosFieldset').add([items]);
            }
        }]
    }
});