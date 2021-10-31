import { FC } from 'react';
import Svg from '../ui/Svg';

interface NavProfileProps {
  showEllipse?: boolean;
  showCheck?: boolean;
}

const NavProfile: FC<NavProfileProps> = (props) => (
  <div
    className="
      grid grid-flow-col gap-4 items-center
      rounded-full w-full p-3 cursor-pointer"
    style={{
      gridTemplateColumns:
        'grid-template-columns: max-content auto max-content',
    }}
  >
    <div className="rounded-full bg-basic-200 h-7 w-7"></div>
    <div className="grid text-sm w-max">
      <span className="font-extrabold">Christian</span>
      <span>@penrodlol</span>
    </div>
    {props.showEllipse && <Svg name="ellipse" alt="More" height={20} />}
    {props.showCheck && <Svg name="check" alt="Selected" height={20} />}
  </div>
);

export default NavProfile;
