/**
 * @class Invoice.core.List
 * @extends extendsClass
 * Description
 */
Ext.define('Invoice.core.List', {
    extend: 'Ext.List',
    requires: ['Ext.field.Search'],
    initialize: function() {
        var me = this;
        me.setItems(me.buildItems());
        me.callParent(arguments);
    },
    buildItems: function() {
        return [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'searchfield',
                name: 'search',
                placeHolder: 'Buscar...',
                flex: 9
            }, {
                xtype: 'button',
                iconCls: 'search',
                flex: 1
            }]
        }];
    }
});