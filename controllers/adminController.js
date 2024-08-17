import UserModel from "../models/User.js"

class AdminController {
  
  
  static AllUserList = async (req, res) => {
  
    const { email, country } = req.query;
  
    try {
      // Building the query object
      const query = { roles: "user" };
      
      // If email is provided, add a case-insensitive regex match to the query
      if (email && email.trim() !== "") {
        query.email = { $regex: email.split(" ").join(""), $options: "i" }; 
      }
      
      // If country is provided and not equal to "All" or empty, add a case-insensitive regex match to the query
      if (country && country.trim() !== "" && country !== "All") {
        query.country = { $regex: country, $options: "i" }; 
      }
  
      console.log(query);
  
      const users = await UserModel.find(query).select(
        "name roles email planId searchApiHitCount profilePicture is_verified createdAt"
      );
      console.log(users);
  
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  

  
  
  
   
}
  
  
  export default AdminController