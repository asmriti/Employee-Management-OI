import logoimg from "../images/Logo.png";
import myimg from "../images/smriti.jpg";
import { BellIcon } from "@heroicons/react/24/solid";

function NavBar() {
  return (
    <nav className="bg-white rounded-3xl p-2">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={logoimg}
            alt="logo"
            className=" inset-y-0 inset-x-0 box-border p-0 max-h-full pointer w-4/6"
          />
        </div>
        <div className="flex justify-around items-center">
          <BellIcon className=" w-8 mr-4" />
          <p className="mr-4 text-xl">Smriti Aryal</p>
          <img
            src={myimg}
            alt="Smriti"
            className="rounded-full max-h-12 border-4"
          />
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
