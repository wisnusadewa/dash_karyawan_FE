import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { Label } from '../ui/label';

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4">
      <NavLink to="/" className={({ isActive }) => cn('px-4 py-2 rounded-md transition', isActive ? 'shadow-inset_neu rounded-[10px]' : ' hover:bg-gray-200 rounded-[10px]')}>
        <Label>Dashboard</Label>
      </NavLink>

      <NavLink to="/employees" className={({ isActive }) => cn('px-4 py-2 rounded-md transition', isActive ? 'shadow-inset_neu rounded-[10px]' : ' hover:bg-gray-200 rounded-[10px]')}>
        <Label>Employees</Label>
      </NavLink>
    </nav>
  );
};

export default Navbar;
