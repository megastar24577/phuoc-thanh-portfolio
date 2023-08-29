import { motion } from "framer-motion";
interface INavLinkProps {
  linkText: String;
  url?: string;
}

const NavLink = ({ linkText, url = "" }: INavLinkProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href={url}
      className="nav-element px-14 "
    >
      {linkText}
    </motion.a>
  );
};

export default NavLink;
