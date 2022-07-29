/*
 * Pre-populate Posts
*/

export function starter() {
    [
        text = "First blog post!",
        textDate = "1/1/2001",
        textSummary = "Hello world!"
    ]
}

/*
 * Functionality of the blog post
*/

export function createForm() {
    let blogPost = document.getElementById("blogPost");
    blogPost.getElementsByTagName('form')[0].innerText;
    blogPost.showModal();
}

export function addPost(listEl, text, textDate, textSummary) {
    const listItemEl = document.createElement(`li`);
    listItemEl.textContent = "Post: " + text + "\n" +  "Date: " + textDate + "Summary: "+ textSummary;

    const deletePostButtonEl = document.createElement('button');
        deletePostButtonEl.className += "addStyleDelete";
        deletePostButtonEl.textContent = "Delete Post";
        deletePostButtonEl.addEventListener("click", (ev) => {
            deletePost(listEl, listItemEl);
            listEl.removeChild(deletePostButtonEl);
            listEl.removeChild(editPostButtonEl);
        });
    
    const editPostButtonEl = document.createElement('button');
        editPostButtonEl.className += "addStyleEdit";
        editPostButtonEl.textContent = "Edit Post";
        editPostButtonEl.addEventListener("click", (ev) => {
            editPost(listEl);
        });


    listEl.appendChild(deletePostButtonEl);
    listEl.appendChild(editPostButtonEl);
    listEl.appendChild(listItemEl);
}

export function init(listEl, formEl) {
    formEl.addEventListener("submit", ev => {
        ev.preventDefault();

        const formData = new FormData(formEl);
        const text = formData.get(`text`); //Post Title

        const textDate = formData.get(`textDate`); //Post Date

        const textSummary = formData.get(`textSummary`); //Post Summary

       addPost(listEl, text, textDate, textSummary);
        
    });
}

export function deletePost(listEl, listItemEl) {
    listEl.removeChild(listItemEl);
}

export function editPost(listEl) {
        createForm();

        const formData = FormData(formEl);

        const newtext = formData.get(`text`); //Post Title
        const newtextDate = formData.get(`textDate`); //Post Date
        const newtextSummary = formData.get(`textSummary`); //Post Summary

        addPost(listEl, newtext, newtextDate, newtextSummary);

}

export function counter() {
    let num = 0;
    for (let i=0; i < listItems.length; i++) {
        num[i]++;
    }
}

/*
 * Storage 
*/

export function loadItems() {
    return JSON.parse(localStorage.getItem("mylistitems")) || [];
}

export function storeItems(listItems) {
    localStorage.setItem("mylistitems", JSON.stringify(listItems))
}