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
            {name: 'Clientes',   icon: 'resources/images/man.png', action: 'clients'},
            //{name: 'Gastos', icon: 'resources/images/briefcase.png', action: 'expenses'},
            {name: 'Artículos',   icon: 'resources/images/box.png', action: 'products'},
            //{name: 'Proyectos', icon: 'resources/images/browser.png', action: 'projects'},
            {name: 'Sucursales',   icon: 'resources/images/map.png', action: 'branches'},
            {name: 'Reportes',   icon: 'resources/images/graph.png', action: 'reports'},
            /*{name: 'Facturas 2',  icon: 'resources/images/graph.png', action: 'facturas2'},
            {name: 'Clientes 2',   icon: 'resources/images/man.png', action: 'clientes2'},
            {name: 'Gastos 2', icon: 'resources/images/map.png', action: 'gastos2'},
            {name: 'Proyectos 2', icon: 'resources/images/open-box.png', action: 'Productos'},*/            
            {name: 'Configuración',   icon: 'resources/images/settings.png', action: 'settings'}
        ]
    }
});