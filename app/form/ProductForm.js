/**
 * @class Invoice.form.ProductForm
 * @extends Ext.form.Panel
 * The product form
 */
Ext.define('Invoice.form.ProductForm', {
    extend: 'Ext.form.Panel',
    xtype: 'productform',
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
            xtype: 'fieldset',
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
                name: 'precioUnitario',
                placeHolder: 'Precio Unitario'
            }, {
                xtype: 'numberfield',
                name: 'unidadMedida',
                placeHolder: 'Unidad de medida'
            }, {
                xtype: 'checkboxfield',
                name: 'tieneImpuesto',
                labelWidth: Ext.os.is.Phone ?'60%' : '50%',
                placeHolder: 'Sujeto a Impuesto',
                label: 'Sujeto a Impuesto'
            }, {
                xtype: 'checkboxfield',
                name: 'manejaIEPS',
                labelWidth: Ext.os.is.Phone ? '60%' :'50%',
                placeHolder: 'Maneja IEPS',
                label: 'Maneja IEPS'
            }]
        }]
    }
});