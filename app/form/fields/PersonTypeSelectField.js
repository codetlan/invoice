/**
 * Created by lumartin on 15/08/14.
 */
Ext.define('Invoice.form.fields.PersonTypeSelectField', {
    extend: 'Ext.field.Select',
    xtype: 'persontypeselectfield',
    config: {
        name: 'personType',
        placeHolder: 'Tipo de Persona',
        options: [{
            text: 'Persona Física',
            value: 0
        },{
            text: 'Persona Moral',
            value: 1
        }]
    }
});