/**
 * Created by rloyolaj on 11/08/14.
 */
Ext.define('Invoice.view.users.UserList', {
    extend: 'Invoice.core.List',
    xtype: 'userlist',
    requires: [
        'Invoice.form.UserForm',
        'Invoice.view.users.UserContainer'
    ],

    config: {
        title: 'Usuarios',
        action: 'users',
        emptyText: 'No hay usuarios, agrega uno ...',        
        store: 'Users',
        /*grouped: true,
        indexBar : true,*/
        itemTpl: [
            '<div class="list-generic">',
                '<div class="list-generic-left">',
                    '{empresa} </br> <small class="muted">{nombre} {apellido}</small>',
                '</div>',
                '<div class="list-generic-right">',
                    '<span class="icon-phone"></span> {telefono}',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});