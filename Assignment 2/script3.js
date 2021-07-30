function hello(name){
    console.log("Thank You For Your Purchase, " + name);
}

hello("Cameron");
const taxes=.09;

function sum(purchasePrice, taxesTotal){
    console.log(`Total Price=${sum(purchasePrice,taxesTotal)}`
    );
}
// sum(5,4,3);


function login(){

    var userName=prompt("Enter Your Name");
    var userPass=prompt("Enter Your Password");

    if(userName && userPass){
        document.write(`
        
        <h2><b><u><center>Welcome to Shops-A-Lot, ${userName}! Where it pays to Shop a Lot!</center></u></b></h2>
        <p><canter><button onclick=purchasePrice()>Click to Shop</button></center></p>
        `);
        }else{        
            alert("Incorrect Username or Password");
    };
};

function purchasePrice(){

    let result=Number(purchasePrice);
    var itemName=prompt("Enter the Name of the Product you wish to Order");    
    var item1="monitor";
    var item2="desktop";
    var item3="keyboard";
    var item4="mouse";
    var itemPrice1=Number(25.00);
    var itemPrice2=Number(100.00);
    var itemPrice3=Number(5.00);
    var itemPrice4=Number(5.00);
    var shippingCharge=Number(2.50);

    if(itemName=item1){
        document.write(`
            <p>Listed Price: ${itemPrice1}</p>
            <p><b>With Taxes: </b> ${Number(itemPrice1)*Number(taxes)==Number(taxesTotal)}
            <p>Total Price = ${Number(itemPrice1)+Number(taxesTotal)==Number(result)}</p>
            `);
        }else{
        alert("Item Not Found");
    };

    if(itemName=item2){
        document.write(`
            <p>Listed Price: ${Number(itemPrice2)}</p>
            <p><b>With Taxes: </b> ${itemPrice2**Number(taxes)==Number(taxesTotal)}
            <p>Total Price = ${itemPrice2+Number(taxesTotal)==Number(result)}</p>
            `);
        }else{
        alert("Item Not Found");
    };
};