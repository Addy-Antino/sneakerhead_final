
Our project was divided into two branches(for frontend), one headed by Harsh and the other by Masum. Each of us worked independently on our respective branches until 5th February. After that, we collaborated and worked together to complete the remaining tasks.



The project includes several key features, such as:



### Login page:
The frontend page includes email and password regex validation, API integration(Using Axios) and redirects to the dashboard on successful login. In case of incorrect login details, an error toast is displayed.



### Registration page: 
The frontend includes name, email, and password regex validation, API integration(Using Axios), and redirects to the login page on successful registration. Before that, an email verification process is carried out,will redirect to email verification successfull page and then after 5 seconds to login page only if your email verification is done and your email is a genuine mail.



### Forgot password: 
The feature prompts the user for their registered ID. If the user provides an incorrect email, an error is shown. If the email is valid, a reset password link is sent to the registered email address,which can be access by reading the url and based  on the url i provided a route and redirect to a component on successfull verification , which can be used to reset the password . API integration done(Using Axios).



### Reset password (via email link):
Another API is used to reset the password using a PUT request with Axios.



### Email verification (via email): 
This feature is a part of the registration process. It reads the URL using window.location.href and redirects the user to the login page after a 5-second delay, based on the defined route.



### Product rendering on dashboard: 
The mapping feature is used along with the GET API to render products via a card component. Each product has two options, "Buy" or "Rent," and clicking on either button adds the product to the cart with the corresponding price. API integration done(Using Axios).



### Add to cart functionality: 
If the user clicks on "Buy," the price is 100% of what is listed on the dashboard. If they click on "Rent," a 50% discount is applied. API integration done(Using Axios).



### Help section:
This feature is provided for users to submit queries and requests for support. API integration done(Using Axios).



### Private routes for dashboard section: 
To prevent unauthorized access to the dashboard section, a private route is implemented, which requires the user to log in before accessing the dashboard.



### Sell page
A sell page where users can add their shoes, you can start by creating a form that allows users to input the relevant information, such as the name, email, quantity, price, description, and title of their shoes. Additionally, you can add a file upload input so that users can upload a picture of their shoes.



To let users know that their product has been successfully added, we displayed a success toast message. This message can be triggered after the user has uploaded their shoes and the information has been successfully processed.
 
