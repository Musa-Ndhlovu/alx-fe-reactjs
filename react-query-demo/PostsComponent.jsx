import react from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
    if (! response.ok) {
        throw new Error ("WAS NOT FOUND!")
    }
    return response.json();
};

const PostsComponent = () => {
    const {data, error, isLoading} = useQuery ({
        queryKey: ["posts"],
        queryFn: fetchPosts,
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
    </div>
)
};

export default PostsComponent;