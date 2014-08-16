/**
 * Created by lumartin on 12/08/14.
 */
Ext.define('Invoice.core.data.Store', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],
    config: {
        autoLoad: false,
        listeners: {
            beforeload: function (store, operation, ops) {
                var me = this,
                    extraParams = store.getProxy().getExtraParams();
                me.params.RFC = localStorage.getItem("RFC");
                me.params.Token = localStorage.getItem("Token");

                if (me.resetParams) {
                    store.getProxy().setExtraParams(me.params);
                    me.resetParams = false;
                } else {
                    store.getProxy().setExtraParams(me.mergePropertiesObject(extraParams, me.params));
                }
            }
        }
    },

    setParams: function (params, resetParams) {
        var me = this;

        me.params = params;
        me.resetParams = resetParams;
    },

    mergePropertiesObject: function (obj1, obj2) {
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (var attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    },

    resetCurrentPage: function () {
        var me = this;
        me.currentPage = 1;
    }
});