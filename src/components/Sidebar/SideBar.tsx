import Navbar from '@/components/Navbar/Navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Gear, SignOut } from '@phosphor-icons/react';

const SideBar = () => {
  return (
    <div className="shadow-neumorph rounded-[15px] flex flex-col items-center h-full w-1/4 py-5 px-5 gap-20">
      {/* PROFILE */}
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full shadow-neumorph ">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <Label>Wisnu Sadewa</Label>
        <Label>Wisnu@gmail.com</Label>

        <div className="bg-card_neo">
          <Button>
            <Gear size={26} />
          </Button>
        </div>
      </div>

      {/* LIST */}
      <div>
        <Navbar />
      </div>

      {/* LOGOUT */}
      <div className="flex items-end w-full h-full">
        <Button className="w-full bg-red-300">
          <SignOut size={32} />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
