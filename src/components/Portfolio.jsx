import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

{ /* Loops through portfolio.js to display each project, also passing data fields.
      Display formatting of the cards including margins is done here as well.
*/ }

function Portfolio() {
    return(
    <div id="portfolio">
        <h1 className='flex flex-col md:flex-row items-center justify-center text-base md:text-xl mb-6 font-medium'>Portfolio</h1>
            <div className='flex flex-col md:flex-row md:m-3 items-center justify-center m-3'> 
            
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {portfolio.map(project => (
                        // eslint-disable-next-line react/jsx-key
                        <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        git={project.git}
                        link={project.link}
                        stack={project.stack}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
 
export default Portfolio