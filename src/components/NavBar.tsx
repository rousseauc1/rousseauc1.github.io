import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center sm:justify-end px-4 sm:px-6 md:px-8 pb-3 sm:pb-4 bg-white dark:bg-gray-900 transition-colors duration-300">
            <Link to="/Home" className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">Home</Link>
            <Link to="/Projects" className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">Projects</Link>
            <Link to="/Experience" className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">Experience</Link>
            <Link to="/Resume" className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">Resume</Link>
            <Link to="/About" className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300">About</Link>
        </nav>
    )
}

export default NavBar;
