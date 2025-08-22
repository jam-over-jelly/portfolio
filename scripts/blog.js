import { postArray } from "./postInfo.js";



//make post object through a factory function
//each post object will have properties: date, post name, and tag array
function convertDate(string) {
    const day = string.slice(0, 2);
    let month = '';
    switch (string.slice(3, 5)) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
    }
    const year = string.slice(6,10);
    const dateString = `${month} ${day}, ${year}`;
    return dateString;
}


function createPost(file) {
    //postDate string from cutting the first 9 letters and feeding it into date converter
    const postUrl = `blog_pages/${file[0]}.html`;
    const postDate = convertDate(file[0]);
    const postName = file[1];
    const postTags = file[2];
    const postSubtitle = file[3];
    return { postUrl, postDate, postName, postTags, postSubtitle };
}

// console.log(createPost(postArray[0]));
const docBody = document.querySelector('body');

if (docBody.id == 'blog-index' || docBody.id == 'index') {
    displayBlogCatalog();
} else {
    displayArticle();
}


//DOM FUNCTIONS
//function to display dom content from the object in the article itself (heading, date, tagss)
function displayArticle() {
    const articleTitle = document.getElementById('post-title');
    const postSubtitle = document.getElementById('post-subtitle');
    const postDate = document.getElementById('post-date');
    const tagList = document.getElementById('post-tags');
    const currentUrl = window.location.href;
    //fix the sliced url situation
    const slicedUrl = currentUrl.slice(currentUrl.indexOf('blog_pages/'), currentUrl.indexOf('.html'));
    
    for (const post of postArray) {
        console.log(post);
        console.log(slicedUrl);
        if (slicedUrl.includes(post[0])) {
            const postObj = createPost(post);
            console.log(articleTitle.textContent);
            console.log(postObj);
            articleTitle.textContent = postObj.postName;
            postSubtitle.textContent = postObj.postSubtitle;
            postDate.textContent = "Published " + postObj.postDate;
            document.title = postObj.postName;
            for (const tag of postObj.postTags) {
                const tagIndiv = document.createElement('div');
                tagIndiv.textContent = tag;
                tagIndiv.classList.add("tag-button");
                tagList.appendChild(tagIndiv);
            }
            break;
        }
    }
}



//function to list objects for the catalog
function displayBlogCatalog() {
    const catalogList = document.getElementById('catalog-list');
    for (const post of postArray) {
        const postObj = createPost(post);
        const blogBlock = document.createElement('div');
        const articleTitle = document.createElement('a');
        const postDateText = document.createElement('p');
        const articleSubtitle = document.createElement('p');
        const tagDiv = document.createElement('div');
        const infoDiv = document.createElement('div');
        const titlesDiv = document.createElement('div');
        
        for (const tag of postObj.postTags) {
            // console.log(tag);
            //make separate function for tag generation
            const tagIndiv = document.createElement('div');
            tagIndiv.classList.add("tag-button");
            tagIndiv.textContent = tag;
            tagDiv.appendChild(tagIndiv);
        }

        articleSubtitle.textContent = postObj.postSubtitle;
        articleTitle.textContent = postObj.postName;
        if (docBody.id == 'index') {
            articleTitle.href += '/pages/';
        }
        articleTitle.href += postObj.postUrl;
        console.log(articleTitle.href);
        
        postDateText.textContent = postObj.postDate;
        
        infoDiv.appendChild(tagDiv);
        
        titlesDiv.appendChild(articleTitle);
        titlesDiv.appendChild(articleSubtitle);
        titlesDiv.appendChild(postDateText);

        postDateText.classList.add('articleDate')
        titlesDiv.classList.add('titleDiv');
        infoDiv.classList.add('infoDiv');
        blogBlock.classList.add('blogBlock');
        tagDiv.classList.add('tagList');

        blogBlock.appendChild(titlesDiv);
        blogBlock.appendChild(infoDiv);
        

        //send the date and tags to the right
        
        catalogList.appendChild(blogBlock);
    }
}









