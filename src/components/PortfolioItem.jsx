

// Templating page / format of the individual project card. This file does not populate the data, that is done in Portfolio.jsx. Margins are also defined in Portfolio.jsx

function PortfolioItem({ title, imgUrl, stack, link, git }) {

    // all projects have code on GitHub but not all projects have "live versions" to view.
    // this code checks for the existance of the live version link. If there is "none", it hides the span that contains the link and button.



    return (

        <div className="border-2 border-stone-900 rounded-md overflow-hidden">

            {/* ### Image of live project ### */}
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover"
            />

            <div className="w-full p-4">
                {/* ### Project title ### */}
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 fot-semibold">{title}</h3>



                {/* ### 

    Buttons, need to be around 42-72px for standard.

### */}

                {/* ### GitHub Link Button ### */}
                <a href={git} target="_blank" rel="noreferrer">
                    <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">
                        View Code</button>
                </a>


                {/* ### Live Link Button, IF EXISTS ### */}
                {link !== 'none' && (
                    <a href={link} target="_blank" rel="noreferrer">
                        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">
                            View Project</button>
                    </a>

                )}




                {/* ### Technology-Used 'Tech Stack' List ### */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {/* ### tech stack used such as HTML, CSS, JavaScript, loops through the array defined in portfolio.js ### */}
                    {stack?.map(item => (
                        // eslint-disable-next-line react/jsx-key
                        <span className="inline-block px-2 py-1 font-light border border-stone-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>

            </div>
        </div>


    )
}

export default PortfolioItem

