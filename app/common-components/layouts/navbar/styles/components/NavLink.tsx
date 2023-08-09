import { motion } from "framer-motion";
interface INavLinkProps {
  linkText: String;
}

const NavLink = ({ linkText }: INavLinkProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      href=""
      className="nav-element px-14 "
    >
      {linkText}
    </motion.a>
  );
};

export default NavLink;
