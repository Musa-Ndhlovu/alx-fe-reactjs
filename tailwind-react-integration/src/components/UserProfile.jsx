function UserProfile() {
    return (
        <div class="md:p-8, sm:p-4, max-w-xs, md:max-w-sm ">
      <div bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg className="user-profile"> 
        <img rounded-full w-36 h-36 mx-auto  md:h-36 md:w-36 sm:h-24 sm:w-24 src="https://via.placeholder.com/150" alt="User" />
        <h1 text-xl text-blue-800 my-4 md:text-xl sm:text-lg >John Doe</h1>
        <p text-gray-600 text-base md:text-base sm:text-sm >Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
      </div>
    );
  }
  
  export default UserProfile;