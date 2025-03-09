import { cn } from '@/lib/utils';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Label } from '../ui/label';

interface AdminState {
  ADMIN: boolean;
}

const Navbar: React.FC<AdminState> = ({ ADMIN }) => {
  return (
    <nav className="flex flex-col text-center gap-4">
      <NavLink to="/profile" className={({ isActive }) => cn('px-4 py-2 rounded-md transition', isActive ? 'shadow-inset_neu rounded-[10px]' : ' hover:bg-gray-200 rounded-[10px]')}>
        <Label>Profile</Label>
      </NavLink>

      {ADMIN ? (
        <NavLink to="/" className={({ isActive }) => cn('px-4 py-2 rounded-md transition', isActive ? 'shadow-inset_neu rounded-[10px]' : ' hover:bg-gray-200 rounded-[10px]')}>
          <Label>Dashboard</Label>
        </NavLink>
      ) : (
        ''
      )}

      <NavLink to="/employees" className={({ isActive }) => cn('px-4 py-2 rounded-md transition', isActive ? 'shadow-inset_neu rounded-[10px]' : ' hover:bg-gray-200 rounded-[10px]')}>
        <Label>Employees</Label>
      </NavLink>
    </nav>
  );
};

export default Navbar;
