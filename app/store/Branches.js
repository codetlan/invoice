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
        autoLoad:false
    },
    data: [{
    	id: 1,
    	nombre: 'Branch 1'
    },{
    	id: 2,
    	nombre: 'Branch 2'
    },{
    	id: 3,
    	nombre: 'Branch 3'
    },{
    	id: 4,
    	nombre: 'Branch 4'
    }]
});