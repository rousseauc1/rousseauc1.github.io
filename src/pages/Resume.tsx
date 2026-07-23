const Resume = () => {
    const resumePdfPath = '/assets/images/resume/CadeRousseau_Resume_FullStack.pdf';

    const handleDownload = () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = resumePdfPath;
        link.download = 'CadeRousseau_Resume_FullStack.pdf'; // This will be the name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#5c4d3f] dark:bg-gray-700 relative overflow-hidden transition-colors duration-300">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
                {/* Triangle Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(60deg, #f5f0e6 0px, #f5f0e6 2px, transparent 2px, transparent 20px)'
                    }}></div>
                </div>
                {/* Vertical Lines */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, #f5f0e6 0px, #f5f0e6 1px, transparent 1px, transparent 30px)'
                    }}></div>
                </div>
                {/* Diamond Grid */}
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(45deg, #f5f0e6 0px, #f5f0e6 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, #f5f0e6 0px, #f5f0e6 1px, transparent 1px, transparent 25px)'
                    }}></div>
                </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-white dark:text-gray-100 relative z-10 transition-colors duration-300">My Resume</h1>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mt-4 sm:mt-6 md:mt-8">
                    <button
                        onClick={handleDownload}
                        className="mb-4 sm:mb-6 md:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-sm hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-300 text-sm sm:text-base md:text-lg"
                    >
                        Download Resume
                    </button>
                </div>
                {/* Front of Resume */}
                <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl dark:shadow-gray-700/50 mb-6 md:mb-8">
                    <img
                        src={'/assets/images/resume/resume-1.png'}
                        alt="Cade's Resume - Front"
                        className="w-full max-w-[600px] h-auto mx-auto object-contain border border-gray-300 dark:border-gray-600 shadow-lg dark:shadow-gray-700/50 transition-colors duration-300"
                    />
                </div>
                
                {/* Back of Resume */}
                <div className="w-full h-auto rounded-lg overflow-hidden shadow-xl dark:shadow-gray-700/50">
                    <img
                        src={'/assets/images/resume/resume-2.png'}
                        alt="Cade's Resume - Back"
                        className="w-full max-w-[600px] h-auto mx-auto object-contain border border-gray-300 dark:border-gray-600 shadow-lg dark:shadow-gray-700/50 transition-colors duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Resume;
