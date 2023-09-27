
function ListOf({ title, category, link }) {
    return(
        <>
        <h2>
            <a href={link} target="_blank" rel="noreferrer">{title}</a> - {category}
        </h2>
        </>
    )
}

export default ListOf

