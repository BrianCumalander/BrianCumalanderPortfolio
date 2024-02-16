

function Contact() {
   return (
      <div className="flex flex-col mt-10 mb-10 mx-auto">
         <div className="flex justify-center items-center">
            
            <form
               action="https://getform.io/f/e1276ff9-2210-4448-93eb-5426d2067fb0"
               method="POST"
               className="flex flex-col w-full md:w-7/12">
               <h1 className="flex flex-col md:flex-row items-center justify-center text-base md:text-xl mb-6 font-medium">Contact</h1>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
              <button 
                 type="button" 
                 className="px-8 py-3 w-max text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 mb-2">
                  Work With Me
              </button>
            </form>
         </div>
      </div>
   )
}

export default Contact