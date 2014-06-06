/**
 * @class Invoice.store.Branches
 * @extends Ext.data.Store
 * This is the branches store
 */
Ext.define('Invoice.store.Branches', {
    extend: 'Ext.data.Store',
	requires:['Invoice.model.Branch'],
    config:{
        model:'Invoice.model.Branch',
        autoLoad:true
    }
});