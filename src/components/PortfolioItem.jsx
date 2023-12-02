
// Template / format of the individual project card. This file does not populate the data, that is done in Portfolio.jsx. Margins are also defined in Portfolio.jsx

function PortfolioItem({ title, imgUrl, stack, link, git }) {
    return(
        <div className="border-2 border-stone-900 rounded-md ">

    {/* ### Link to live project ### */}
            <a href={link} target="_blank" rel="noreferrer">

    {/* ### Image of live project ### */}
                <img 
                    src={imgUrl}
                    alt="portfolio"
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            </a>

            <div className="w-full p-4">
    {/* ### Project title which also takes you to the live project (link) ### */}
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 fot-semibold"><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
                <span className="inline-block px-3 py-1 my-2 font-semibold border-2 border-stone-900 rounded-md text-black bg-yellow-500 hover:bg-cyan-600">  

 
                        <h6><a href={git} target="_blank" rel="noreferrer">View Code </a></h6>
                </span>
                
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

