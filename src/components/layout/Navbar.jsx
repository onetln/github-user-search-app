import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiHome, HiInformationCircle, HiMail } from 'react-icons/hi';
import PropTypes from 'prop-types';
import ThemeChange from './ThemeChange';

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-base-300 text-primary-content">
      <div className="container mx-auto">
        <div className="flex-none px-1 mx-1 md:px-2 md: mx-2">
          <FaGithub className="inline pr-2 text-2xl md:text-3xl" />
          <Link
            to="/"
            className="text-sm md:text-lg font-bold align-middle hover:text-neutral-content"
          >
            {title}
          </Link>
        </div>

        <div className="flex-1 px-1 mx-1 md:px-2 md:mx-2">
          <div className="flex justify-end">
            {/* Medium and large screen  */}
            <div className="hidden md:block">
              <Link to="/" className="btn btn-ghost btn-sm mx-1">
                Home
              </Link>
              <Link to="/about" className="btn btn-ghost btn-sm">
                About
              </Link>
              <Link to="/contact" className="btn btn-ghost btn-sm">
                Contact
              </Link>
            </div>

            {/* Small screen */}
            <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
              <Link to="/" className="btn btn-ghost btn-sm btn-circle">
                <HiHome className="text-sm" />
              </Link>
              <Link to="/about" className="btn btn-ghost btn-sm btn-circle">
                <HiInformationCircle className="text-sm" />
              </Link>
              <Link to="/contact" className="btn btn-ghost btn-sm btn-circle">
                <HiMail className="text-sm" />
              </Link>
            </div>
            <ThemeChange />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.protoTypes = {
  title: PropTypes.string,
};

export default Navbar;
