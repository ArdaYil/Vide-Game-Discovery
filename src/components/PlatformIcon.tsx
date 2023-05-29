import { Icon, Image } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatform";
import {
  BsWindows,
  BsXbox,
  BsNintendoSwitch,
  BsFillPhoneFill,
  BsGlobe,
} from "react-icons/bs";
import { FaPlaystation, FaLinux } from "react-icons/fa";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { IconType } from "react-icons/lib";
interface Props {
  id: number;
}

export default function PlatformIcon({ id }: Props) {
  const platformImages: { [key: number]: IconType } = {
    1: BsWindows,
    2: FaPlaystation,
    3: BsXbox,
    4: BsFillPhoneFill,
    5: AiFillApple,
    6: FaLinux,
    7: BsNintendoSwitch,
    8: AiFillAndroid,
    14: BsGlobe,
  };

  return <Icon color="gray.500" as={platformImages[id]} />;
}
