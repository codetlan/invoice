/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Invoice.profile.Phone', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'phone',
        controllers: ['Main'],
        views: ['Main']
    },
    isActive: function(){
        return Ext.os.is.Phone;
    },
    launch: function(){
        Ext.create('Invoice.view.phone.Main');
    }
});