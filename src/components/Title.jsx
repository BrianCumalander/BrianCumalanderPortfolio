

function Title() {
    return (
        <div className="py-5 text-center">
           {/* social icons*/}
           <p className="text-sm mt-2 opacity-75">
            &copy; {/* &copy; is the copywright symbol */}{new Date().getFullYear() /* get current year */} Brian Cumalander. All rights reserved.</p> 
        </div>
    )
}

export default Title