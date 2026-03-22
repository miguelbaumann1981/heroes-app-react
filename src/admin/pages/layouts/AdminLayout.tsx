import { Outlet } from 'react-router';

export const AdminLayout = () => {
  return (
    <div className='bg-blue-100'>
      <Outlet />
    </div>
  );
};
