/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Invoice.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        name: 'tablet',
        controllers: ['Main'],
        views: ['Main']
    },
    isActive: function(){
        return !Ext.os.is.Phone;
    },
    launch: function(){
        Ext.create('Invoice.view.tablet.Main');
    }
});