import React from 'react';
import './App.css';

export class App extends React.Component{
  render(){
    return (
      <body>

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
    <div className="row">
  <div className="column">
    <div className="card">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt="machine learning" width="100%" height="176px"/>
      <div className="text-section">
      <h1>Introduction To A Machine Learning...</h1>
      <div className="author">
      <a href="value">EdYoda&nbsp;<span>|&nbsp;23 Aug 2019</span></a>
      </div>
      <p>We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this...</p>\
      </div>
      </div>
  </div>

<div class="column">
    <div class="card">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt="machine learning" width="100%" height="176px"/>
      <div class="text-section">
      <h1>Practical Machine Learning with Python...</h1>
      <div class="author">
          <a href="value">Daniel Pyrathon&nbsp;<span>|&nbsp;16 Oct 2019</span></a>
          </div>
      <p>Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively...</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt="Big data" width="100%" height="176px"/>
      <div class="text-section">
          <h1>Challenges of Machine Learning in Big Data...</h1>
          <div class="author">
              <a href="value">EdYoda&nbsp;<span>|&nbsp;24 Aug 2019</span></a>
              </div>
          <p>Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the...</p>
          </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt="Cyber Security" width="100%" height="176px"/>
      <div class="text-section">
      <h1>Breaking the Myths around Cybersecurity</h1>
      <div class="author">
          <a href="value">EdYoda&nbsp;<span>|&nbsp;26 Aug 2019</span></a>
          </div>
      <p>Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in...</p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt="Data Backup" width="100%" height="176px"/>
      <div class="text-section">
          <h1>Importance of Data Backup and Recovery...</h1>
          <div class="author">
              <a href="value">EdYoda&nbsp;<span>|&nbsp;24 Aug 2019</span></a>
              </div>
          <p>A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions</p>
          </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt="Cloud Computing" width="100%" height="176px"/>
      <div class="text-section">
      <h1>Impact of Cloud Computing in various...</h1>
      <div class="author">
          <a href="value">EdYoda&nbsp;<span>|&nbsp;24 Aug 2019</span></a>
          </div>
      <p>Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud and other forms of ...</p>
      </div>
    </div>
  </div>

  </div>


  



</body>
    
    
      )

  }
}

export default App;
