/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Invoice.view.phone.Main', {
    extend: 'Invoice.view.Main',
    requires: [
        'Invoice.view.Menu'
    ]/*,

    initialize: function () {
        var me = this;

        if (localStorage.getItem('user')) {
            me.add({
                xtype: 'menu'
            });
            me.setActiveItem(1);
        }
    }*/
});