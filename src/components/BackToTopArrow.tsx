import { useState, useEffect } from 'react';

const BackToTopArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                    rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-600 
                    hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 
                    focus:outline-hidden focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 
                    dark:shadow-gray-800/50 hover:scale-110"
                    aria-label="Back to top"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default BackToTopArrow;