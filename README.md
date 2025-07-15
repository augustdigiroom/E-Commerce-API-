# Capstone 2 E-Commerce API Overview:
## Application Name: E-Commerce API

**Team Members:**  
- Augustine Grepo  
- Grace Pontanar

**User Credentials**  
- Admin User  
   - Email: admin@mail.com  
   - Password: admin123

- Regular User  
   - Email: jamesDoe@mail.com  
   - Password: sample123

### Features by Augustine Grepo  

- Initial Folder Architecture Setup
- Package Installation and Database Configuration
- Data Model Encoding Requirements

**User Resources:**
- Set up the following:
   - User Authentication Verification via JWT
   - User Registration
   - User Login

**Product Resources:**
- Set up the following (Admin only):
   - Update Product Information
   - Archive Product
   - Activate Product

**Cart Resources:**
- Set up the following:
   - Add to Cart
   - Update Cart
   - Integrate User from JWT Token for Cart Association   
   - Remove Item from a Cart   
   - Clear a Cart   

**Order Resources:**
- Set up the following:   
   - Checkout an Order


### Features by Grace Pontanar   

- Tested the whole Resources to confirm if all deliverables are functioning as expected.
- Tested the user access with Admin and just authenticated user if all works as expected.
   
**User Resources:**
- Setup the following:   
   - Retrieve User Details 
   - Update User as Admin 
      - Configure to update only if the user has the Admin access.
   - Update Password   
   - Set middleware for ErrorHandler   

**Product Resources:**   
- Setup the following:  
   - Create Product (Admin only)
	- Retrieve all products
	- Retrieve all active products
	- Retrieve single product
   - Modified ErrorHandler and Error Status code.

**Cart Resources** 
- Setup the following:   
   - Retrieve user's cart   
   - Modified ErrorHandler
   - Added Search for products by their names   
   - Added search for products by Min and Max price range

**Order Resources:**
- Setup the following:   
   - Retrieve logged in user's orders
   - Retrieve all user's orders
   - Modified middleware decodedToken. 



