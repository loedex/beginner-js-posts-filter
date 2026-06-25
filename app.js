const p_container = document.getElementById('posts-container');
const s_box = document.getElementById('search-box');

let masterPosts = [];

async function fetchPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    const response = await fetch(url);
    masterPosts = await response.json();

    
    


    displayAllPosts(masterPosts);
}
function displayAllPosts(p) {
    p_container.innerHTML = ``;
    if(p.length === 0){
        p_container.innerHTML = `
            <div class = "w-100 text-center">
                <h4>No Posts match your search query</h4>
            </div>
        `
    }

    p.forEach(i=>{
        const cardCol = document.createElement('div');
        cardCol.className = 'col-md-6 col-lg-12 col-12';
        cardCol.innerHTML = `
            <div class = "card">
                <div class = "card-body">
                <h3>Title : ${i.title}</h3>
                <p>${i.body}</p>

                </div>
            </div>
        `;
        p_container.appendChild(cardCol);
    });
    
    
}
 
s_box.addEventListener('input', (e)=>{

    const typed_text = e.target.value.toLowerCase();
    const filteredPosts = masterPosts.filter((p)=>{
        const lowerTitle = p.title.toLowerCase();

        return lowerTitle.includes(typed_text);
    });
    displayAllPosts(filteredPosts);
});


fetchPosts();