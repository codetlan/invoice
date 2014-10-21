/**
 * @class Invoice.form.ClientForm
 * @extends Ext.form.Panel
 * The login client form
 */
Ext.define('Invoice.form.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',
    requires:[
        'Ext.field.Hidden',
        'Invoice.form.fields.BranchSelectField'
    ],
    config: {
        items: [{
            xtype: 'titlebar', //Use in Tablet mode
            title: 'Agregar Usuario',
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
            xtype: 'hiddenfield',
            name: 'identifier'
        }, {
            xtype: 'fieldset',
            defaults: {
                required:true
            },
            title:'Datos Personales',
            items: [{
                xtype: 'textfield',
                name: 'nombre',
                placeHolder: 'Nombre(s)'
            }, {
                xtype: 'textfield',
                name: 'apellido_paterno',
                placeHolder: 'Apellido Paterno'
            }, {
                xtype: 'textfield',
                name: 'apellido_materno',
                placeHolder: 'Apellido Materno',
                required: false
            }]
        }, {
            xtype: 'fieldset',
            title: 'Otros',
            defaults: {
                required:true
            },
            items: [{
                xtype: 'branchselectfield',
                name: 'sucursal',
                labelWidth:  Ext.os.is.Phone ? '50%' : '30%'
            }]
        }]
    }
});