import react from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    if (! response.ok) {
        throw new Error ("isError")
    }
    return response.json();
};

const PostsComponent = () => {
    const {data, error, isLoading} = useQuery ({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        cacheTime: 1000 * 60 * 5, 
        staleTime: 1000 * 30,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error: {error.message}</p>;
   
return (
    <div>
        <h2>Post_Components</h2>

        <ul>
            {data.map((post) => (
                <li key = {post.id}>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                </li>
            )
        )}
        </ul>
         <button type = "button" onClick = {handleSubmit}> Submit</button>
    </div>
)
};

export default PostsComponent;