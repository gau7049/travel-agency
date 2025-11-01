import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
    layout('routes/admin/admin-layout.tsx', [
        route('dashboard', 'routes/admin/dashboard.tsx'), // children
        route('all-user', 'routes/admin/all-user.tsx') 
    ])
] satisfies RouteConfig;