import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Home } from '../pages/Home';
import { Route } from '../types';

export const publicRoutes: Route[] = [
    { path: '/', component: Home, layout: DefaultLayout },
];
