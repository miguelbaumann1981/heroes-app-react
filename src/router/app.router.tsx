import { createBrowserRouter } from 'react-router';
import { AdminPage } from '@/admin/pages/AdminPage';
import { AdminLayout } from '@/admin/pages/layouts/AdminLayout';
import { HeroPage } from '@/heroes/pages/hero/HeroPage';
import { HomePage } from '@/heroes/pages/home/HomePage';
import { HeroesLayout } from '@/heroes/pages/layouts/HeroesLayout';
import { lazy } from 'react';
// import { SearchPage } from '@/heroes/pages/search/SearchPage';

const SearchPage = lazy(() => import('@/heroes/pages/search/SearchPage'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'heroes/1',
        element: <HeroPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
