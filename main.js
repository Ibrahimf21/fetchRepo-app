// main varibales

let theInput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".get-button")
let reposData = document.querySelector(".show-data")

getButton.onclick = function () {

    getRepos();
};

//get repos function
function getRepos() {

    if (theInput.value == "") {//if value is empty
        
        reposData.innerHTML = "<span>Please Write Github Username.</span>";

    }else {

        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => response.json())
        .then((repositories) => { 

            // empty the container
            reposData.innerHTML = '';

            // loop on repositoris
            repositories.forEach(repo => {
               
                // creat the main div elemnt

                let mainDiv = document.createElement("div");
                
                // creat repo name text
                
                let repoName = document.createTextNode(repo.name);

                // appent the txt to main div

                mainDiv.appendChild(repoName);


                // creat repo url anchor
                let theUrl =document.createElement('a')

                //creat repo url text
                let theUrlText = document.createTextNode("visit")

                //apend the repo url text to anchor tag

                theUrl.appendChild(theUrlText);

                // add the hypertext refernse "href"
                theUrl.href = `https://github.com/ElzeroWebSchool/${repo.name}`;

                // set attrinute blank
                theUrl.setAttribute('target', '_blank');

                //append url anchor to main div
                mainDiv.appendChild(theUrl);



                //creat stars count span
                let starSpan = document.createElement("span");


                //creat the stars count text
                let starsText = document.createTextNode(`stars${repo.stargazers_count}`);

                //add stars count text to stars span
                starSpan.appendChild(starsText);

                //append stars count to main div
                mainDiv.appendChild(starSpan);

                //add class on main div
                mainDiv.className = 'repo-box'





                // append the main div to container
                reposData.appendChild(mainDiv);

            });
            
        });

    }
}