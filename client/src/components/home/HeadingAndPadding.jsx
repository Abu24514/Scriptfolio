
const HeadingAndPadding = () => {
    return (
        <section className="flex flex-col items-center text-center">
            {/* Headline */}
            <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-gray-900 max-w-4xl">
                Build a Job-Winning{" "}
                <span className="bg-linear-to-r from-indigo-700 to-indigo-500 bg-clip-text text-transparent">
                    Resume in Minutes
                </span>{" "}
                with AI.
            </h1>

            {/* Subheading */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-500 max-w-sm sm:max-w-md  leading-relaxed">
                Design clean, professional resumes with AI assistance,
                real-time preview, and one-click PDF export.
            </p>
        </section>
    )
}

export default HeadingAndPadding