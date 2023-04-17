// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'collapse',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false,
            children: [
                {
                    id: 'record',
                    title: 'Record',
                    type: 'item',
                    url: '',
                    breadcrumbs: false
                },
                {
                    id: 'report',
                    title: 'Reports',
                    type: 'item',
                    url: '',
                    breadcrumbs: false
                },
                {
                    id: 'Analyze',
                    title: 'Record',
                    type: 'item',
                    url: '',
                    breadcrumbs: false
                },
                {
                    id: 'learn',
                    title: 'Learn',
                    type: 'item',
                    url: '',
                    breadcrumbs: false
                }
            ]
        }
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default dashboard;
