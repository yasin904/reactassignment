import "./App.css"

function midSection(){

    return(
<body>
<div className="content">
<p className="main"> Latest Posts </p>

<div>
    <span className="filter"> <i class="fa-solid fa-filter"></i>  Filter by Category</span>
    <span></span>
</div>
<div className="categoryContainer1">
    <button className="category1"> All </button>
    <button className="category2"> Artificial Intelligence </button>
    <button className="category3"> Cloud Computing </button>
    <button className="category4"> DevOps </button>
    <button className="category5"> Programming Languages </button>
    <button className="category6"> Mobile Application Development </button>
    <button className="category7"> Technology and Tools </button>
<div className="categoryContainer2">
    <button className="category8"> Get a Job in a Tech Company </button>
    <button className="category9"> Others </button>
</div>
</div>



</div>
</body>
    )
}


export default midSection
