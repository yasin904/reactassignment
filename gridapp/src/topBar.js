import "./App.css"

function topBar(){
    return(

    <nav id="navbar">
        <div id="heading">
            <span id="logo"> EDYODA </span>
            <span className="name"> Explore Categories </span>
                 
                <select className="categories">
                    <option value="option 1"> Artificial Intelligence</option>
                    <option value="option 2"> Cloud Computing </option>
                    <option value="option 3"> DevOps </option>
                    <option value="option 4"> Programming Languages </option>
                    <option value="option 5"> Mobile Application Development </option>
                    <option value="option 6"> Technology and Tools </option>
                    <option value="option 7"> Get a Job in a Tech Company </option>
                    <option value="option 8"> Others </option>
                </select>
            
        </div>
        <span id="text"> Stories </span>
       
    </nav>
    )
}

export default topBar