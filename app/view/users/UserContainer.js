/**
 * @class Invoice.view.users.UserContainer
 * @extends Ext.Container
 * The user container
 */
Ext.define('Invoice.view.users.UserContainer', {
    extend: 'Ext.Container',
    xtype: 'usercontainer',
    requires: [
        'Ext.XTemplate'
    ],

    config: {
        action: 'users',
        tpl: new Ext.XTemplate([
            '<div class="' + (Ext.os.is.Phone ? 'invoice-details-container-phone' : 'invoice-details-container-tablet' ) + '">',
            '<div class="details-content">',
            '<div class="details-image">',
            '<img src="resources/images/briefcase.png">',
            '</div>',
            '<div class="details-info">',
            '<p><span class="icon-office"> <b>Sucursal:</b> </span>{[this.getSucursal(values.sucursal)]}</p>',
            '<p><span class="icon-profile"> <b>Nombre:</b></span>{nombre} {apellidoPaterno} {apellidoMaterno}</p>',
            '</div>',
            '</div>',
            '</div>'].join(' '),
            {
                getSucursal: function (sucursalId) {
                    var store = Ext.getStore('Branches'),
                        index = store.find('identifier', sucursalId),
                        record = store.getAt(index);

                    return record.get('nombre');
                }
            }
        ),

        items: [{
            xtype: 'button',
            margin: '20% 20 0 20',
            text: 'Editar Usuario',
            action: 'edit',
            docked: 'bottom',
            hidden: true
        }]
    }
});