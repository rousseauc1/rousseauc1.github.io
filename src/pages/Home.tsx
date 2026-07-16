import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 transition-colors duration-300">
            <main className="grow">
                {/* Hero Section */}
                <section className="flex justify-center items-center min-h-[70vh] bg-[#f5f0e6] dark:bg-gray-700 px-4 py-24 md:py-32 relative overflow-hidden transition-colors duration-300">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0">
                        {/* Triangle Pattern */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(60deg, #5c4d3f 0px, #5c4d3f 2px, transparent 2px, transparent 20px)'
                            }}></div>
                        </div>
                        {/* Vertical Lines */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(90deg, #4a3e32 0px, #4a3e32 1px, transparent 1px, transparent 30px)'
                            }}></div>
                        </div>
                        {/* Diamond Grid */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-15">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'repeating-linear-gradient(45deg, #5c4d3f 0px, #5c4d3f 1px, transparent 1px, transparent 25px), repeating-linear-gradient(-45deg, #5c4d3f 0px, #5c4d3f 1px, transparent 1px, transparent 25px)'
                            }}></div>
                        </div>
                    </div>
                    
                    <div className="max-w-4xl text-center relative z-10">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#5c4d3f] dark:text-gray-100 mb-6 transition-colors duration-300">
                            Cade Rousseau
                        </h1>
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4a3e32] dark:text-gray-200 mb-8 transition-colors duration-300">
                            Software Engineer
                        </h2>
                    </div>
                </section>
                
                {/* About Section */}
                <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                                    Hello!
                                </h2>
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-200 leading-relaxed transition-colors duration-300">
                                    My name is Cade Rousseau and I am a Software Engineering major with a Data Science minor.
                                    I am set to graduate in May 2027 from Milwaukee School of Engineering.
                                </p>
                                <Link 
                                    to="/About" 
                                    className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg bg-[#5c4d3f] dark:bg-gray-600 text-white rounded-lg 
                                    hover:bg-[#4a3e32] dark:hover:bg-gray-500 transition-colors duration-300 
                                    shadow-md hover:shadow-lg transform hover:-translate-y-1"
                                >
                                    Read More
                                </Link>
                            </div>
                            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl dark:shadow-gray-700/50">
                                <img 
                                    src="/assets/images/canada2.jpg" 
                                    alt="About Cade" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-12 sm:py-16 md:py-18 px-4 sm:px-6 md:px-10 bg-[#1b1b1d] dark:bg-gray-700 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl dark:shadow-gray-700/50">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img 
                                        src="/assets/images/innovation.gif" 
                                        alt="About Cade" 
                                        className="w-[90%] h-[90%] object-contain"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 sm:space-y-6">
                                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed">
                                    "The best way to predict the future is to create it."
                                </blockquote>
                                <p className="text-lg sm:text-xl text-gray-200">
                                    - Peter Drucker
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-white dark:bg-gray-800 transition-colors duration-300">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8 sm:mb-12 md:mb-16 text-center transition-colors duration-300">
                            Timeline
                        </h2>
                        <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg dark:shadow-gray-700/50 p-4 sm:p-6 md:p-8 transition-colors duration-300">
                            <div className="text-center text-gray-500 dark:text-gray-200 text-base sm:text-lg md:text-xl transition-colors duration-300">
                                My journey in software engineering has been a blend of learning, growth, and exploration.
                                I have delved into various technologies, honed my skills, and embraced challenges that have shaped me into the developer I am today.
                                I am excited to continue this journey, pushing boundaries and creating innovative solutions.
                            </div>
                            <img 
                                src="/assets/images/Git-Commit-Chart.png" 
                                alt="Timeline" 
                                className="w-full h-full object-cover my-6 sm:my-8 md:my-10"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;