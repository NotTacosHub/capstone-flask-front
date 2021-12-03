// import React from 'react';
// import axios from 'axios';

// export default class App extends React.Component {

//     state = {
//         id: '',
//         slug: '',
//         title: '',
//         author: '',
//         published_date: '',
//         content: '',
//         data: []
//     }

//     changeId = e => {
//         let id = e.target.value;
//         this.setState({
//             id: id
//         })
//     }

//     changeSlug = e => {
//         let slug = e.target.value;
//         this.setState({
//             slug: slug
//         })
//     }

//     changeTitle = e => {
//         let title = e.target.value;
//         this.setState({
//             title: title
//         })
//     }

//     changeAuthor = e => {
//         let author = e.target.value;
//         this.setState({
//             author: author
//         })
//     }

//     changePublishedDate = e => {
//         let published_date = e.target.value;
//         this.setState({
//             published_date: published_date
//         })
//     }

//     changeContent = e => {
//         let content = e.target.value;
//         this.setState({
//             content: content
//         })
//     }

//     editPost = (postIndex, title, content) => {
//         this.setState({
//             id: postIndex + 1,
//             title: title,
//             content: content
//         })

//     }

//     addOrUpdatePost = e => {
//         e.preventDefault();
//         if (this.state.title === '' || this.state.content === '' || this.state.id === '') {
//             alert('No field should be empty');
//             return;
//         } else if (this.state.id > this.state.data.length + 1) {
//             alert('Please use the next id');
//         } else {
//             if (this.state.data[this.state.id - 1] !== undefined) {
//                 axios.put(`/api/blog/update/${this.state.id}`, {
//                     id: this.state.id,
//                     title: this.state.title,
//                     content: this.state.content
//                 }).then(res => {
//                     let updatedData = [...this.state.data];
//                     updatedData[this.state.id - 1] = res.data;
//                     this.setState({
//                         id: updatedData.length + 1,
//                         title: '',
//                         body: '',
//                         data: updatedData
//                     })
//                     console.log(res)
//                 })
//                     .catch(err => console.log(err));
//             } else {
//                 axios.post("/api/blog/create", {
//                     id: this.state.id + 1,
//                     title: this.state.title,
//                     content: this.state.content
//                 })
//                     .then(res => {
//                         console.log(res);
//                         let newPost = res.data;
//                         let newData = [...this.state.data, newPost];
//                         this.setState({
//                             id: this.state.id + 1,
//                             title: '',
//                             content: '',
//                             data: newData
//                         });
//                     })
//                     .catch(err => console.log(err));
//             }
//         }
//     }

//     deletePost = postIndex => {
//         axios.delete(`/api/blog/delete/${postIndex}`)
//             .then(res => {
//                 let newData = [...this.state.data];
//                 newData.splice(postIndex, 1);
//                 this.setState({
//                     id: newData.length + 1,
//                     title: '',
//                     content: '',
//                     data: newData
//                 })
//                 console.log(res)
//             })
//             .catch(err => console.log(err));
//     }

//     componentDidMount() {
//         axios.get('/api/blog/update')
//             .then(res => {
//                 let newData = res.data.slice(0, 5);
//                 this.setState({
//                     id: newData[newData.length - 1].id + 1,
//                     data: newData
//                 }, () => console.log(this.state.id))
//                 console.log(newData)
//             })
//             .catch(err => console.log("Couldn't fetch data. Error: " + err))
//     }

//     render() {
//         return (
//             <div className='PostContainer'>
//                 <h1>Simple blog with React</h1>
//                 <div className='AddPost'>
//                     <b>id of post: </b>
//                     <input type='number' onChange={this.changeId} value={this.state.id} />
//                     <form>
//                         <input onChange={this.changeTitle} type='text' placeholder='Title' value={this.state.title} />
//                         <textarea onChange={this.changeContent} placeholder='Enter Body' value={this.state.content}>
//                         </textarea>
//                         <input onClick={this.addOrUpdatePost} type='submit' value='Add/Update Post' />
//                     </form>
//                 </div>
//                 {
//                     this.state.data.length === 0 ?
//                         <p>Loading Posts...</p>
//                         :
//                         this.state.data.map((post, index) => (
//                             <article key={index}>
//                                 <h2>{index + 1}. {post.title}</h2>
//                                 <p>{post.content.substr(0, 100)}...</p>
//                                 <button onClick={() => this.deletePost(index)} className='delete'>Delete</button>
//                                 <button onClick={() => this.editPost(index, post.title, post.content)} className='edit'>Edit</button>
//                             </article>
//                         ))
//                 }
//             </div>
//         )
//     }

// }




//     constructor(props) {
//         // super(props);
//         this.post = {
//             slug: "",
//             title: "",
//             author: "",
//             published_date: "",
//             content: "",
//         };
//         this.createBlogPost = this.createBlogPost.bind(this);
//         this.readBlogPost = this.readBlogPost.bind(this);
//         this.updateBlogPost = this.updateBlogPost.bind(this);
//         this.deleteBlogPost = this.deleteBlogPost.bind(this);
//     }
// }

// this.slug = slug
// this.title = title
// this.author = author
// this.published_date = published_date
// this.content = content

// createBlogPost() {
//     axios.post(

//     )

//     axios({
//         method: "POST",
//         url: "/api/blog/create/",
//         data: {
//             slug: 'slug',
//             title: 'title',
//             author: 'author',
//             published_date: 'published_date',
//             content: 'content'
//         },
//     });
// };
// readBlogPost()
// axios({
//     method: "GET",
//     url: "/api/blog",
//     data: {
//         slug: 'slug'
//     }
// });

// updateBlogPost()
// axios({
//     method: "PUT",
//     url: "/api/blog/update",
//     data: {
//         slug: 'slug',
//         title: 'title',
//         author: 'author',
//         published_date: 'published_date',
//         content: 'content'
//     }
// });

// deleteBlogPost()
// axios({
//     method: "DELETE",
//     url: "/api/blog/delete",
//     data: {
//         slug: 'slug',
//         title: 'title',
//         author: 'author',
//         published_date: 'published_date',
//         content: 'content'
//     }
// });

// const domain = "http://127.0.0.1";
const domain = "https://clayton-smith-capstone-project.herokuapp.com";
//const port = 8082;

//const hostUrl = `${domain}:${port}/`
const hostUrl = `${domain}/`

function sendAjax(method, url, obj, callBack) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = callBack;
    xhttp.open(method, `${hostUrl}${url}`, true);
    //xhttp.setRequestHeader("Access-Control-Allow-Origin", 'http://127.0.0.1:8082');
    // xhttp.setRequestHeader('Access-Control-Allow-Credentials: true');
    // xhttp.setRequestHeader('Access-Control-Allow-Methods: POST');
    // xhttp.setRequestHeader('Access-Control-Allow-Headers: Content-Type');
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(obj));
}

function createBlogPost(slug, title, author, published_date, content) {
    const newPost = {
        slug: slug,
        title: title,
        author: author,
        published_date: published_date,
        content: content,
    };

    sendAjax("POST", "/api/blog/create", newPost, function () {
        console.log("created post " + this.responseText);
    });
}

function readBlogPost(slug, callBack) {
    const readPost = {
        slug: slug,
    };

    sendAjax("POST", "/api/blog/read", readPost, callBack);
}

function updateBlogPost(id, slug, title, author, published_date, content) {
    const updatePost = {
        id: id,
        slug: slug,
        title: title,
        author: author,
        published_date: published_date,
        content: content,
    }
    sendAjax("POST", "/api/blog/update", updatePost, function () {
        console.log("updated post " + this.responseText);
    });
}

function deleteBlogPost(slug, callBack) {
    const deletePost = {
        slug: slug
    };
    sendAjax("DELETE", "/api/blog/delete", deletePost, callBack);
}

function readAllBlogPosts(callBack) {
    sendAjax("GET", "/api/blog/list", {}, callBack);
}