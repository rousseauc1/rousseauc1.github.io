import { useState } from "react"

const Footer = () => {
    // Define possible states for form submission: idle (initial), success, or error
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    return (
        <div className="bg-[#faf3eb] dark:bg-gray-900 p-8 sm:p-12 md:p-16 flex flex-col gap-8 sm:gap-12 md:gap-16 md:flex-row md:justify-center md:items-start transition-colors duration-300">
            {/* Left Side - Contact Info */}
            <div className="flex-1 flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 dark:text-gray-100 transition-colors duration-300">Contact Me</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">rousseauc@msoe.edu</p>
                <a href="https://www.linkedin.com/in/caderousseau/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="/assets/images/linkedIn1.png"
                        alt="LinkedIn Logo"
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                    />
                </a>
                <img
                    src="/assets/images/contactpic.jpg"
                    alt="Profile"
                    className="w-56 sm:w-64 md:w-72 h-auto object-cover rounded-sm shadow-lg dark:shadow-gray-800/50"
                />
            </div>

            {/* Right Side - Contact Form */}
            <form
                action="https://formspree.io/f/movervry"
                method="POST"
                className="flex-2 flex flex-col gap-3 sm:gap-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const data = new FormData(form);

                    fetch(form.action, {
                        method: form.method,
                        body: data,
                        headers: { Accept: "application/json" },
                    })
                        .then((response) => {
                            if (response.ok) {
                                setStatus("success");
                                form.reset();
                            } else {
                                setStatus("error");
                            }
                        })
                        .catch(() => {
                            setStatus("error");
                        });
                }}
            >
                <div className="flex gap-3 sm:gap-4 flex-wrap">
                    <div className="flex flex-col flex-1 min-w-[200px]">
                        <label htmlFor="firstName" className="text-xs sm:text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">First Name</label>
                        <input
                            type="text"
                            id="firstName" 
                            name="firstName" 
                            maxLength={50}
                            className="border border-gray-400 dark:border-gray-600 p-2 text-sm sm:text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        />
                    </div>
                    <div className="flex flex-col flex-1 min-w-[200px]">
                        <label htmlFor="lastName" className="text-xs sm:text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">Last Name</label>
                        <input
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            maxLength={50}
                            className="border border-gray-400 dark:border-gray-600 p-2 text-sm sm:text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs sm:text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">Email *</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        maxLength={254}
                        className="border border-gray-400 dark:border-gray-600 p-2 text-sm sm:text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs sm:text-sm mb-1 text-gray-700 dark:text-gray-300 transition-colors duration-300">Message</label>
                    <textarea
                        id="message"
                        name="message" 
                        required 
                        maxLength={1000}
                        className="border border-gray-400 dark:border-gray-600 p-2 text-sm sm:text-base min-h-[120px] sm:min-h-[150px] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#5c4d3f] dark:bg-gray-700 text-white text-base sm:text-lg py-2 sm:py-3 px-3 sm:px-4 border-none cursor-pointer hover:bg-[#4a3e32] dark:hover:bg-gray-600 transition-colors duration-300 shadow-lg dark:shadow-gray-800/50"
                >
                    Send
                </button>

                {status === "success" && (
                    <div className="text-sm sm:text-base text-green-600 dark:text-green-400 font-medium transition-colors duration-300">Thank you! Your message has been sent successfully.</div>
                )}
                {status === "error" && (
                    <div className="text-sm sm:text-base text-red-600 dark:text-red-400 font-medium transition-colors duration-300">Oops! There was a problem sending your message. Please try again.</div>
                )}
            </form>
        </div>
    );
}

export default Footer;