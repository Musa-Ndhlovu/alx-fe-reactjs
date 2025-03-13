function UserProfile() {
    return (
        <div class="sm: p-4">
      <div bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg className="user-profile"> 
        <img rounded-full w-36 h-36 mx-auto sm:w-24 h-24 md:w-36h-36 src="https://via.placeholder.com/150" alt="User" />
        <h1 text-xl text-blue-800 my-4  sm:text-lg md:text-xl>John Doe</h1>
        <p text-gray-600 text-base sm:text-sm md:text-base >Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
      </div>
    );
  }
  
  export default UserProfile;