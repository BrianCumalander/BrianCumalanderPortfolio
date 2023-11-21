

function PortfolioItem({ title, imgUrl, stack, link, git }) {
    return(
        <div className="border-2 border-stone-900 rounded-md ">
            <a href={link} target="_blank" rel="noreferrer">
                <img 
                    src={imgUrl}
                    alt="portfolio"
                    className="w-full h-36 md:h-48 object-cover cursor-pointer"
                />
            </a>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 fot-semibold"><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
                <span className="inline-block px-3 py-1 my-2 font-semibold border-2 border-stone-900 rounded-md text-black bg-yellow-500 hover:bg-cyan-600">  
                        <h6>{}</h6>
                        <h6><a href={git} target="_blank" rel="noreferrer">View Code </a></h6>
                </span>
                
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
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

