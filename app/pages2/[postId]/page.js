export default async function postI({ params }) {
    const postId = params.postId
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },2000);
    });
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: {
            revalidate: 120
        }
    })
    const post = await response.json()
    console.log(params.postId + "2222222222");
    return (
        <div  style={{
            backgroundColor: "#fff",
            padding: 10,
            margin: 11,
            borderRadius: 12
        }}>
            <h1  style={{
                        color: "#000",
                      
                    }}>
                 {post.title} 
            </h1>
            <hr/>
            <p style={{
                        color: "#000",
                      
                    }}>
                 {post.body} 
            </p>
        </div>
    )
}