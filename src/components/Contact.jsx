

function Contact() {
    return(
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center">
                <form 
                    action="http://getform.io/slug"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                >
                    <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    >
                    
                    </input>
                    <button>submit</button>
                    </form>
            </div>
        </div>
    )
}

export default Contact