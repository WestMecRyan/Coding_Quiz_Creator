# Q1 A

You write the following javascript to handle operations on a user profile:

```js
class UserProfile {
  constructor (userName, userEmail, userAge) {
    this.userName = userName;
    this.userEmail = userEmail;
    this.userAge = userAge;
  }
  get isUserAllowed() {
    if (this.checkUserAge(this.userAge)){
      return true;
    } else {
      return false;
    }    
  }
  checkUserAge() {
    if (this.userAge < 18) {
      return false;
    } else {
      return true;
    }
  }
}
```

What code should you use to initialize the class object properly and call the isUserAllowed() method?

- A:
`const userProfile = new UserProfile ('ethen', 'ehtnhun@fs.cu', 29); console.log(userProfile.isUserAllowed);`
- B:
`const userProfile = new UserProfile(29, 'ethen', 'ehtnhun@fs.cu'); console.log(userProfile.isUserAllowed)`
- C:
`const userProfile = new UserProfile('ethen', 'ehtnhun@fs.cu'); console.log(userProfile.isUserAllowed);`
- D:
`console.log(userProfile.isUserAllowed);`

## Q1 A Explanation 

- You should use the following code to call the isUserAllowed() method:
`const userProfile = new UserProfile ('ethen', 'ehtnhun@fs. cu', 29);`
`console.log(userProfile.isUserAllowed);`
>- This is the correct way to create an object of a class with the proper arguments and then call the method of the class from the object.
- You should not use the following code because the arrangement of arguments is incorrect
`const userProfile = new UserProfile(29, 'ethen', 'ehtnhun@fs.cu');`
`console.log(userProfile.isUserAllowed);`
 >- The age parameter will not be fetched and an exception will occur in the output.

- You should not use the following code because the age argument is missing, and this will cause an exception:
`const userProfile = new UserProfile ('ethen', ehtnhun@fs.cu');`
`console.log(userProfile.isUserAllowed);`

- You should not use the following code because this is the incorrect way to initialize a class and call a method inside a class:
`console.log(userProfile.isUserAllowed);`

# Q2 B

You make an asynchronous request to the server using the XMLHttpRequest object. The response from the server is the following text: `{'confirmationNumber': 'X10094C'}`

You want to process this data using a Javascript object.

What should you use?

- A:
var obj = JSON.parse(responseText);
- B:
var obj = JSON.stringify(responseText);
- C:
var obj = JSON.String(responseText);
- D:
var obj = eval(responseText);

## Q2 B Exlanation 

- You should use the parse method of the JSON object. This method accepts a string of comma-delimited key/value pairs contained within curly braces. The return value of the parse method is a JavaScript object.

- You should not use the global eval function. This function can be used with slight modifications of the response string but includes certain security problems that are solved in Hypertext Markup Language (HTML) 5 when using the parse method of the JSON object as used here.

- You should not use the stringify method of the JSON object. This method accepts a JavaScript object and returns a string that contains the correct JavaScript Object Notation for the given object.

- You should not use the String global function. This function converts objects into a printable character format. Unlike JSON, which is intended to be processed by JavaScript code, the String function result is intended to be displayed to the user in the browser.

# Q3 C 

You need to make an asynchronous Ajax request to the server to fetch a product description contained in the file 'product-c.txt'. 

You have already completed the following code:
```js
var xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && readystate.status == 200) {
       document.getElementById('productDescription').innerHTML = xhr.responseText;
  }
}
```

What block of code should you write next?

- A:
`xhr.open('GET', 'product-c.jpg', true); xhr.send();`

- B:
`xhr.send('GET', 'product-c.jpg', true);xhr.open();`

- C:
`xhr.open('GET', 'product-c.jpg', false);xhr.send();`
- D:
`xhr.send('GET', 'product-c.jpg;, false);xhr.open();`

## Q3 C Explanation 

"You should use the following block of code:
xhr open (""GET"", ""product-c.jpg"", true) ;
xhr.send ( ) ;
The open method of the XMLHttpRequest (XHR) object initializes the XHR object with the http method
(usually ""GET"" or ""POST""), the Uniform Resource Locator (URL) of the resource to be retrieved, and a
boolean flag for asynchronous versus synchronous operation.
We know we want to perform an asynchronous request, and in the given code, we have an event handler for
the readystatechange event. Then we should ensure the third argument is set to ""true"" This will prevent the
request from blocking the execution of other scripts while waiting for the server to process this request.
You should follow the open method with a call to the send method The send method is responsible for
connecting to the server, sending your request, and tracking the progress of the request through the
readystatechange event.
You should not use the code blocks that call the send method before the open method
You should not use the code block that passes false as the third argument"

# Q4 D
You create an HTML web application to get the latest articles from different knowledge-based websites. You
create a backend API using the Express JS framework and you want to consume the API using native
JavaScript XMLHttpRequest object.
Your API endpoint looks like this:
http://yourdomain.io/api/v1/getLatestArticles
You need to construct the Get Request using the XMLHttpRequest object to get all the latest articles using
the given API endpoint.
How should you construct the request? To answer, select the appropriate options.

- A:
```js
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://yourdomain.io/api/v1/getLatestArticles', true);
xhr.send();
```
- B:
```js
xhr.open('GET', 'http://yourdomain.io/api/v1/getLatestArticles', true);
let xhr = new XMLHttpRequest();
xhr.send();
```
- C:
```js
xhr.open(true, 'http://yourdomain.io/api/v1/getLatestArticles', 'GET');
let xhr = new XMLHttpRequest();
xhr.send();
```
- D:
```js
let xhr = new XMLHttpRequest();
xhr.open('http://yourdomain.io/api/v1/getLatestArticles', 'GET', true);
xhr.send();
```

## Q4 Explanation 

"The correct way to establish an XMLHttpRequest is as follows:
First, create the XMLHttpRequest:
let xhr = new XmLHttpRequest ()
XMLHttpRequest is a JavaScript API that provides you the functionality to consume endpoint requests In
order to use API endpoints, you have to first create an XMLHttpRequest object.
xhr open (method, URL, [async, user, password]
open method in XMLHttpRequest API provides you the functionality to provide URL and call back function.
When you open a request to an endpoint so it will open a request to that particular endpoint and later on
you can receive/pass the data from/to this endpoint.
Then send it out
whr.send([body])
send method in XMLHttpRequest API provides you the functionality to pass on extra parameters with your
request. Let's suppose you are passing parameters with GET or POST request then you should use send
method to pass on these parameters.
These steps need to be in order because you cannot directly send the data to endpoint without establishing
the connection or you cannot establish a connection prior to creating the API object, therefore You should
strictly follow these steps because if any of the step is missed in the sequence, your HttpRequest will not be
established to the endpoint."

# Q5 E

"You write the following JavaScript code to capture events:
```html
<!DOCTYPE html>
  <html>
  <head>
  <title>
     Hello World
  </title>
  </head>
  <body>
   <div id='parent'>
    <button>
    <h2>Parent</h2>
    </button>
    <button id='child'>
      <p>Child</p>
    </button>
    </div><br>
   </body>
```
```js
document.getElementById('child').addEventListener('click', function () {
  alert('You have clicked the Child element!');
}, false);
document.getElementById('parent').addEventListener('click', function () {
  alert('You have clicked the parent element!');
}, false);
```
What output will be displayed when the user clicks the child button?"

- A: 
You have clicked the child element!<br>You have clicked the parent element!

- B:
You have clicked the child element!

- C:
You have clicked the parent element!

- D:
You have clicked the parent element!<br>You have clicked the child element!<br>You have clicked the parent element!

# Q6 F

You create an HTML5 web application for inventory management You create a user form to register a new
user. You create a back-end web API to register a new user.
You need to stop the form from being submitted to the server by default when the submit button is clicked.
What should you insert in the javascript?

```html
<h2>User Registration</h2>
<form id='myform'>
  <label>First name:</label><br>
  <input type="text" id="firstName" name="firstName"><br>
  <label>Last name:</label><br>
  <input type="text" id="lastName" name="lastName"><br>
  <label>Password:</label><br>
  <input type="text" "id="password" name="password"><br>
  <input type="submit" id="submitForm" value="Register">
</form>
```
```js
document.getElementById("submitForm").addEventListener('click' function(e){
//your code to prevent form from submitting
alert ('validating form content');
});
```

- A:
`e.preventDefault();`
- B:
`e.composedPath();`
- C:
`e.stopImmediatePropagation();`
- D:
`e.stopPropagation();`

## Q6 F Explanation

"The correct way to prevent the form from submitting is using the following:
e.preventDefault () ;
The preventDefault() function prevents a user from doing the element's default action. This method takes no
parameters and may be used in two ways: it blocks a link from following the URL, preventing the browser
from proceeding to the next page. It also stops a form from being submitted when a submit button is
pressed
You should not use e.composedPath(). The event interface's composedPath() function returns the event's
path, which is an array of the objects on which listeners will be called. If the shadow root was built with its
ShadowRoot, it does not contain nodes in shadow trees.
You should not use e.stoplmmediatePropagation(). The event interface's stopImmediatePropagation()
function stops additional listeners of the same event from being invoked If several listeners for the same
event type are attached to the same element, they are called in the order in which they were added
You should not use e.stopPropagation(). In the capturing and bubbling stages, the event interface's
stopPropagation() function prohibits the current event from propagating further It does not, however,
prevent any default behavior from occurring, such as the processing of link clicks."

# Q7 G 

You are designing an HTML 5 application that needs to implement an online bookstore, allowing users to
have multiple shopping baskets, one per browser window. Baskets may be turned into orders individually,
potentially with separate shipping and payment information per order. The requests may be submitted in
parallel from different browsers on the same client PC.
You need to determine what data storage to use.
Which option should you choose?

- A:
SessionStorage

- B:
IndexedDB

- C:
LocalStorage

- D:
Cookies

# Q7 G Explanantion

To manage transactional type requests, you need to use a form of storage that is discrete for each session -
that can be provided by using the SessionStorage option. With the SessionStorage option, even connecting
to the same top-level browsing context provides a unique browsing experience. Connections from different
sessions to the same page do not affect each other, which makes this option ideal for transactional
requests.
Cookies and LocalStorage are more persistent across browser sessions and provide one storage option for
each origin, which makes them unusable for multiple sessions to the same location having transactional
integrity. Also, cookies may only carry 4 Kb of data, which will not be enough for a shopping basket.
IndexedDB cannot support secure transactional type requests to the website, even if it can support
transactional integrity. Personal information and monetary transactions should never be stored in a local
indexed database, as this is not a good security practice.

# Q8 H 

You are designing an HTML5 application that needs to support revisits to a web site where a user can work
with a Microsoft Office document or other downloaded file type.
Each file may be up to a couple of megabytes in size and needs to persist in a storage location SO that it is
accessible to all browser windows on the same client PC.
You need to determine what data storage to use.
Which option should you choose?

- A: 
LocalStorage

- B: 
Cookies

- C:
IndexedDB 

- D: 
SessionStorage

## Q8 H Explanation

"You should use LocalStorage to allow a user to revisit a web site and work with a Microsoft Office document
or other downloaded file type. LocalStorage is accessible to all browser windows on the same client PC
and, because it provides a persistent location per domain for up to 10 MB of user data, it makes it perfect as
a location for the storage of Office Documents whilst in edit.
Cookies and SessionStorage are not appropriate in this scenario because each supports only key/value
pairs within the storage and not actual files. In addition to these data storage type not being suitable for files,
they are also restricted to a maximum capacity of 4KB, which is clearly not enough to store office
documents.
IndexedDB is primarily used for storing key value pairs for a session and would not generally be used to
storage Binary large object (BLOB) data, such as a working file."

# Q9 I

You need to store a value of ""Hello World"" in a sessionStorage key called ""Greeting"" in your application.
There are a number of ways to accomplish this task.
Which line of code will NOT store the value correctly?

- A:
"sessionStorage.setItem('Greeting') = 'Hello World';", 

- B: "sessionStorage.Greeting= 'Hello World';", 

- C: 
"sessionStorage.setItem('Greeting', 'Hello World');", 

- D: 
"sessionStorage['Greeting'] = 'Hello World';"

## Q9 Explanation

"sessionStorage.setitem('Greeting'). = ""Hello World""; calls setItem, but does not provide a key-value pair.
Instead, it tries to assign a value to a key but is syntactically incorrect.
The following lines of code are syntactically equivalent and work correctly:
sessionStorage.setItem ('Greeting', 'Hello World') ;
sessionStorage[ ['Greeting'] = 'Hello World';
sessionStorage.Greeting= ''Hello World';
sessionStorage.setitem('Greeting', 'Hello World'); sets a key/value pair by calling setItem.
sessionStorage['Greeting' = 'Hello World'; uses array syntax to find the key in the collection.
sessionStorage.Greeting= ""Hello World""; uses property name syntax to set an expanded property."

# Q10

"You are creating an HTML web application to display an image gallery. You want to apply filters to your images using CSS.<br>", "<img src='./images/three_filters.png' />", 
"You need to complete the code in the answer area so that it renders the images shown above."

```html
<style>
  .filter1 {
    // SPACE A
  }
  .filter2 {
    // SPACE B
  }
  .filter3 {
    // SPACE C
  }
</style>
<body>
  <div>
    <img class="filter2" />
    <img class="filter3" />
    <img class="filter1" />
  </div>
</body>
```

Option 1: 
`filter: blur(5px);`
Option 2: 
`filter: sepia(100%);`
Option 3: 
`filter: grayscale(100%);`

- A:
A:3, B:1, C:2

- B:
A:2, B:1, C:3
- C:
A:1, B:2, C:3
- D:
A:3, B:2, C:1