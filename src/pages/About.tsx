const About = () => {
    return (
        <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-[#fdf8f4] dark:bg-gray-700 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#1b1b1d] dark:text-gray-100 transition-colors duration-300">About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* Text Section */}
                    <div className="bg-white dark:bg-gray-600 p-4 sm:p-6 md:p-8 rounded-lg shadow-md dark:shadow-gray-700/50 transition-colors duration-300 space-y-4 sm:space-y-6">
                        <p className="text-sm sm:text-base md:text-lg text-[#1b1b1d] dark:text-gray-200 leading-relaxed transition-colors duration-300">
                            My name is Cade Rousseau and I'm a incoming junior at MSOE, studying Software Engineering. 
                            Additionally, I'm pursuing a minor in Data Science. I am currently looking for full-time
                            roles starting May 2027, or part-time during the school year, as I am set to graduate.
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-[#1b1b1d] dark:text-gray-200 leading-relaxed transition-colors duration-300">
                            I'm from Waukesha, WI. Some of my hobbies are going to the gym, cars, skiing, sports and 
                            videogames. I also enjoy listening to music, and reading.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full h-auto rounded-lg overflow-hidden">
                        <img
                            src={'/assets/images/Car2.jpg'}
                            alt="Image of Cade"
                            className="w-full max-w-[500px] h-auto object-cover border border-gray-300 dark:border-gray-600 shadow-lg dark:shadow-gray-700/50 transition-colors duration-300"
                        />
                    </div>
                </div>

                {/* Career Goals Section */}
                <div className="bg-white dark:bg-gray-600 p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16 rounded-lg shadow-md dark:shadow-gray-700/50 transition-colors duration-300">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b1b1d] dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">Career Goals & Aspirations</h2>
                    <p className="text-sm sm:text-base md:text-lg text-[#1b1b1d] dark:text-gray-200 leading-relaxed transition-colors duration-300">
                        I am interested in working with AI at companies that are expanding and developing new
                        products in that space. I am also drawn to utilizing machine learning or data science
                        within the field in some way. Overall, my goal is to construct meaningful software that
                        contributes to cool and impactful projects in the real world.
                    </p>
                </div>

                {/* Key Strengths Section */}
                <div className="bg-white dark:bg-gray-600 p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16 rounded-lg shadow-md dark:shadow-gray-700/50 transition-colors duration-300">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1b1b1d] dark:text-gray-100 mb-4 sm:mb-6 transition-colors duration-300">Key Strengths</h2>
                    <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg text-[#1b1b1d] dark:text-gray-200 transition-colors duration-300">
                        <li>Strong work ethic and drive to succeed</li>
                        <li>Excellent communication and teamwork abilities</li>
                        <li>Strong analytical and problem-solving skills</li>
                        <li>Adaptability and willingness to learn new technologies</li>
                        <li>Passion for technology and innovation</li>
                    </ul>    
                </div>
            </div>
        </div>
    );
};

export default About;
