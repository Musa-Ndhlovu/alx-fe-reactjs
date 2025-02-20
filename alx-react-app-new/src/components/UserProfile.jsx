const UserProfile = (props) => {
    return (
        <div style = {{ border: '2px solid blue', padding: '10px', margin: '10px'}}>
        <h2 style = {{color: 'pink'}}>{props.name}</h2>
        <p>Age: <span style ={{ fontWeight: 'bold'}}>{props.age}</span></p>
        <p>Bio: <span style= {{}}>{props.bio}</span></p>
        </div>
    );
};

export default UserProfile;