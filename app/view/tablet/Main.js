/**
 * Created by lumartin on 26/02/14.
 */
Ext.define('Invoice.view.tablet.Main', {
    extend: 'Invoice.view.Main',
    requires: [
        'Invoice.view.Menu'
    ]/*,

    initialize: function () {console.log('tablet');
        var me = this;

        if (localStorage.getItem('user')) {
            me.add({
                xtype: 'menu'
            });
            me.setActiveItem(1);
        }
    }*/
});