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
        padding: 10,
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
            name: 'Codigo'
        }, {
            xtype: 'fieldset',
            defaults: {
                required:true
            },
            title:'Datos Personales',
            items: [{
                xtype: 'textfield',
                name: 'Nombre',
                placeHolder: 'Nombre(s)'
            }, {
                xtype: 'textfield',
                name: 'ApellidoPaterno',
                placeHolder: 'Apellido Paterno'
            }, {
                xtype: 'textfield',
                name: 'ApellidoMaterno',
                placeHolder: 'Apellido Materno',
                required: false
            }, {
                xtype: 'textfield',
                name: 'Puesto',
                placeHolder: 'Puesto',
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
                name: 'SucursalID',
                labelWidth:  Ext.os.is.Phone ? '50%' : '30%'
            }]
        }]
    }
});