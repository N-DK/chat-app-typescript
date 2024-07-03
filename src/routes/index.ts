import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Authentication } from '../pages/Authentication';
import { Home } from '../pages/Home';
import { Route } from '../types';

export const publicRoutes: Route[] = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/:conversation_id', component: Home, layout: DefaultLayout },
    { path: '/login', component: Authentication, layout: DefaultLayout },
];
