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
                    '{Nombre} {ApellidoPaterno} {ApellidoMaterno} </br> <small class="muted">{Sucursal}</small>',
                '</div>',
                '<div class="list-generic-right">',
                    '<span class="icon-profile"></span> {Puesto}',
                '</div>',
                '</div style="clear:both"> </div>',
            '</div>'
        ].join('')
    }
});