/**
 * Created by lumartin on 12/03/14.
 */
Ext.define('Invoice.store.Menu',{
    extend:'Ext.data.Store',
    config:{
        autoload: true,
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'icon',
                type: 'string'
            },
            {
                name: 'action',
                type: 'string'
            }
        ],
        data: [
            {name: 'Facturas',  icon: 'resources/images/analytics.png', action: 'invoices'},
            {name: 'Clientes',   icon: 'resources/images/box.png', action: 'clients'},
            {name: 'Gastos', icon: 'resources/images/briefcase.png', action: 'expenses'},
            {name: 'Proyectos', icon: 'resources/images/browser.png', action: 'projects'},
            {name: 'Estimados',   icon: 'resources/images/bubbles.png', action: 'estimates'},
            {name: 'Reportes',   icon: 'resources/images/clock.png', action: 'reports'},
            {name: 'Facturas 2',  icon: 'resources/images/graph.png', action: 'facturas2'},
            {name: 'Clientes 2',   icon: 'resources/images/man.png', action: 'clientes2'},
            {name: 'Gastos 2', icon: 'resources/images/map.png', action: 'gastos2'},
            {name: 'Proyectos 2', icon: 'resources/images/open-box.png', action: 'proyectos2'},
            {name: 'Estimados 2',   icon: 'resources/images/package.png', action: 'estimados2'},
            {name: 'Reportes 2',   icon: 'resources/images/settings.png', action: 'reportes2'}
        ]
    }
});