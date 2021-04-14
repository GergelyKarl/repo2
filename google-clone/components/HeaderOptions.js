import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

const HeaderOptions = () => {
  
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 pl-52 lg:border-b-[1px]" >
      <div className="flex space-x-6">
        <HeaderOption title="Összes" selected Icon={SearchIcon} />
        <HeaderOption title="Képek" Icon={PhotographIcon} />
        <HeaderOption title="Videók" Icon={PlayIcon} />
        <HeaderOption title="Hírek" Icon={NewspaperIcon} />
        <HeaderOption title="Térkép" Icon={MapIcon} />
        <HeaderOption title="Egyebek" Icon={DotsVerticalIcon} />
      </div>
      <div className="flex space-x-4 cursor-pointer">
        <p>Beállítások</p>
        <p>Eszközök</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
