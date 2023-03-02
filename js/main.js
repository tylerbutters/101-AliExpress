console.log("main linked");

let signuppage = document.querySelector("#signuparea")
let loginpage = document.querySelector("#loginarea")
let cartpage = document.querySelector("#cart-container")
signuppage.style.display="none";
loginpage.style.display="none";
cartpage.style.display="none";
let showLogin = false;
let showSign = false;
let showCart = false;

let quantity = document.querySelector("#quantity");
let totalCost = document.querySelector("#totalCost");
let cartCounter = document.querySelector("#cartCounter");
let itemCount = 0;
let itemTotal = 0; 
let cartCount = 0;

let submitbutton=document.querySelector("#submitbutton");
let usernamesignup=document.querySelector("#usernamesignup");
let passwordsignup=document.querySelector("#passwordsignup");
let loginbutton=document.querySelector("#loginbutton");
let usernamelogin=document.querySelector("#usernamelogin");
let passwordlogin=document.querySelector("#passwordlogin");
let userNames=[""];
let passwords=[""];

submitbutton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("clicked");
    
    if(usernamesignup.value==""|| passwordsignup.value==""){ 
        alert("Please enter username and passowrd");
    }
    else{
        userNames.push(usernamesignup.value);
        passwords.push(passwordsignup.value);
        console.log(userNames);
        console.log(passwords);
        alert("Account created")
        toggleLogin();
    }
    
    passwordsignup.value="";
    usernamesignup.value="";   
});

let correctUsername=false;
let correctPassword=false;

loginbutton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(passwordlogin.value)
    console.log(usernamelogin.value)
    if(usernamelogin.value==""|| passwordlogin.value==""){ 
        alert("Please enter username and passowrd");
    }
    else{
        for(let i=0;i<userNames.length;i++){
            if(userNames[i]==usernamelogin.value){
                console.log("username found");
                correctUsername=true;
            }
        } 
        for(let i=0;i<passwords.length;i++){
            if(userNames[i]==passwordlogin.value){
                console.log("password found");
                correctPassword=true;
            }
        } 
        checkLoginDetails();
    }
    
    passwordlogin.value="";
    usernamelogin.value="";
    
});

function checkLoginDetails(){
    console.log(correctPassword);
    console.log(correctUsername);
    if(correctUsername==true&&correctPassword==true){
        alert("Logged in");
        toggleSign();
    }
    if (correctUsername==false||correctPassword==false){
        alert("PLease enter correct username and password");
    }
}

function toggleCart() {
    if (showCart==false){
        cartpage.style.display="flex";
        showCart=true;
    }
    else{
        cartpage.style.display="none";
        showCart=false;
    }
 }

function toggleSign() {
    console.log("clicked")
    if (showSign==false){
        signuppage.style.display="flex";
        loginpage.style.display="none";
        showSign=true;
        showLogin=false;
    }
    else if (showLogin==true){
        loginpage.style.display="none";
        showLogin=false;
    }
    else if (showSign==true){
        signuppage.style.display="none";
        showSign=false;
    }
    else{
        signuppage.style.display="none";
        loginpage.style.display="none";
        showSign=false;
        showLogin=false;
    }
 }

function toggleLogin() {
    if (showLogin==false&&showSign==true){
        signuppage.style.display="none";
        loginpage.style.display="flex";
        showLogin=true;
    }
    else{
        loginpage.style.display="none";
        signuppage.style.display="flex";
        showLogin=false;
    }
}
    
$(".product").click(function(){
    // alert("hello");
    console.log(this.id);

    for(let i =0; i<productList.length; i++){
            if(parseInt(this.id) === productList[i].id){
            itemCount++;
            cartCount++;
            itemTotal = itemTotal + productList[i].price;
            $("#cart-items").append(
                `
                <div class="cart-product">
                    <div class="cart-product-preview">
                        <img alt="cart-product-image" src="${productList[i].img}">
                    </div>
                    <div    class="cart-product-info">
                        <p class="cart-product-name">${productList[i].name}</p>
                        <p class="cart-product-seller">${productList[i].store}</p>
                        <p class="cart-product-price">NZD $${productList[i].price}.${productList[i].cents}</p>
                    </div>
                    
                </div>
                `
            )
            quantity.innerHTML = itemCount;
            totalCost.innerHTML = itemTotal;
            cartCounter.innerHTML = cartCount;
        }
    }
})
