import { Outlet, createBrowserRouter, Link } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import TodosListPage from './pages/TodosListPage';
import ImportantTasksListPage from './pages/ImportantTasksListPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout><Outlet /></AppLayout>,
        children: [
            {
                index: true,
                element: <TodosListPage />
            },
            {
                path: 'important',
                element: <ImportantTasksListPage />
            }
        ],
        errorElement: <div><Link to={'/'}>saji </Link></div>
    }
]);