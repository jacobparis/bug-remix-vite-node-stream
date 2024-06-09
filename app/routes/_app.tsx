import { Link, Outlet } from '@remix-run/react';

export default function App() {
  return (
    <div>
      <p>
        Hard navigations to Bad Link will succeed, but client side navigations
        fail and Vite simply refreshes.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to="/"> Good link </Link>
        <Link to="/bad"> Bad link </Link>
      </div>
      <Outlet />
    </div>
  );
}
