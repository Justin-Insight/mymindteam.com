const blogPost = document.querySelector('.parent-page-blog')


function updateBlogPostImagePaths() {
    if (document.body.contains(blogPost)) {
        console.log("blog post images")
        const postImages = Array.from(blogPost.querySelectorAll('.site-main .post-content img'))
      
        postImages.forEach((image) => {
          const imageSrc = image.src
        //   const imageBaseURL = "http://localhost:1313/"
          const imageBaseURL = "https://www.mymindteam.com/"
          const newImageSrc = "/uploads/" + imageSrc.replace(imageBaseURL, "")
        
          image.src = newImageSrc
        })
    }
}


export default updateBlogPostImagePaths