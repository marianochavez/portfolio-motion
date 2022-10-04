import {Center, CenterProps, Icon} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {BsChevronDoubleDown} from "react-icons/bs";
import {Link} from "react-scroll";

const CenterMotion = motion(Center);

type ChevronNavProps = {
  toElement: string;
  offset?: number;
  props?: CenterProps;
};

const ChevronNav = ({toElement, offset = -70, props}: ChevronNavProps) => {
  return (
    <CenterMotion
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      p={10}
      transition={{repeat: Infinity, repeatType: "reverse", duration: 1}}
      {...props}
    >
      <Link smooth offset={offset} to={toElement}>
        <Icon as={BsChevronDoubleDown} fontSize="6xl" />
      </Link>
    </CenterMotion>
  );
};

export default ChevronNav;
