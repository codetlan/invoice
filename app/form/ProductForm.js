/**
 * @class Invoice.form.ProductForm
 * @extends Ext.form.Panel
 * The product form
 */
Ext.define('Invoice.form.ProductForm', {
    extend: 'Ext.form.Panel',
    xtype: 'productform',
    requires: [
        'Ext.field.Hidden'
    ],
    config: {
        padding: 10,
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Crear Artículo',
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
            xtype: 'fieldset',            
            defaults: {
                required: true
            },
            items: [{
                xtype: 'hiddenfield',
                name: 'Codigo'
            }, {
                xtype: 'textfield',
                name: 'Descripcion',
                placeHolder: 'Nombre'
            }, {
                xtype: 'numberfield',
                name: 'PrecioUnitario',
                placeHolder: 'Precio Unitario'
            }, {
                xtype: 'textfield',
                name: 'UnidaMedida',
                placeHolder: 'Unidad de medida'
            }, {
                xtype: 'checkboxfield',
                name: 'SujetoImpuesto',
                labelWidth: Ext.os.is.Phone ?'60%' : '50%',
                placeHolder: 'Sujeto a Impuesto',
                label: 'Sujeto a Impuesto'
            }, {
                xtype: 'checkboxfield',
                name: 'ManejaIEPS',
                labelWidth: Ext.os.is.Phone ? '60%' :'50%',
                placeHolder: 'Maneja IEPS',
                label: 'Maneja IEPS'
            }, {
                xtype: 'textareafield',
                name: 'NumeroIndetificacion',
                placeHolder: 'Número de identificación'
            }]
        }]
    }
});