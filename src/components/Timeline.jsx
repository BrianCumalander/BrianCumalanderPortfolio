import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'

function Timeline() {
    //The first div is for entire Timeline, the second div is for each section. 
    return(  
        <div className='flex flex-col md:flex-row items-center justify-center text-base md:text-xl my-16 mb-6 font-medium'>
                 
            <div className="w-full md:w-7/12">
            <h1 className="flex flex-col md:flex-row items-center justify-center text-base md:text-xl mb-6 font-medium">Earlier Work</h1>
                    {timeline.map(item => (
                        // eslint-disable-next-line react/jsx-key
                        <TimelineItem 
                            year={item.year}
                            title={item.title}
                            duration={item.duration}
                            details={item.details}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Timeline