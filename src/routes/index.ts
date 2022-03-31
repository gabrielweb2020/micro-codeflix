import {RouteProps} from "react-router-dom";
import Home from "./../pages/Home";
import VideosByCategory from "../pages/VideosByCategory";

export interface MyRouteProps extends RouteProps {
    name: string
    label: string
}

const routes: MyRouteProps[] = [
    {
        name: 'home',
        label: 'Home',
        path: '/',
        component: Home,
        exact: true
    },
    {
        name: 'video.by-category',
        label: 'Vídeos Por Categoria',
        path: '/categorias/:id',
        component: VideosByCategory,
        exact: true
    },
];

export default routes;
