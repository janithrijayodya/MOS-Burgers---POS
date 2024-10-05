let userName =  document.getElementById("userName");
let password = document.getElementById("password");
let cashierShow = document.getElementById("cashierUserNameBar");

let btnSign = document.getElementById("btnSign");

let name;
let pswrd;


function signin(){

    name= userName.value; 
    pswrd = password.value;
    
    if(name.charAt(0)=="C" || name.charAt(0)=="c"){
        // console.log("yes");
        userName.value="";
        password.value="";
        window.location.href ="cashier.html";
        cashierShow.value= name;
    }if(name.charAt(0)=="M" || name.charAt(0)=="m"){
        userName.value="";
        password.value="";
        window.location.href ="owner.html";
    }
}

//===========================add cashier======================================================

// let btnAddCashier = document.getElementById("btnAddCashier");



function addCashier(){
    window.location.href ="addCashier.html";
}

let currentIdNumber = 1; 

function generateId() {    
    let idNumber = currentIdNumber.toString().padStart(4, '0');
    let generatedId = 'C' + idNumber; 
    currentIdNumber++; 
    return generatedId;
}

window.onload = function() {
    let newId = generateId();  
    document.getElementById('txtId').value = newId;  

};


let cashiers = [];

function addCash(){
    const address = document.getElementById('txtAddress').value;
    const name = document.getElementById('txtName').value;
    const id = document.getElementById('txtId').value;
    const contact = document.getElementById('txtCon').value;
    const nic = document.getElementById('txtNic').value;

    // console.log(name);
    let newCashier = { id,name,address,contact,nic };
    cashiers.push(newCashier);

    // console.log(cashiers);


    // wena page ekakt yaddi array eke data lost wena nisa localstorage eke dagnnawa
    localStorage.setItem('cashiers', JSON.stringify(cashiers));

    document.getElementById('txtAddress').value = '';
    document.getElementById('txtName').value = '';
    document.getElementById('txtId').value = '';
    document.getElementById('txtCon').value = '';
    document.getElementById('txtNic').value = '';

    let newId = generateId();  
    document.getElementById('txtId').value = newId;  

}

// ============================view cashiers===========================================

function viewCashier(){
    window.location.href ="viewCashierDetails.html";

}

function load(){

let cashiers = JSON.parse(localStorage.getItem('cashiers')) || [];

console.log(cashiers);
const cashierDetails = document.getElementById('cahierViewtbl').getElementsByTagName('tbody')[0];

cashierDetails.innerHTML = '';

cashiers.forEach(item => {
    let row = cashierDetails.insertRow();
    row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.address} </td>
        <td>${item.contact} </td>
        <td>${item.nic} </td>
        
    `;
});
}


// ================================view customer============================================

function viewCustomer(){
    window.location.href ="viewCustomerDetails.html";
}

function loadCusDetails(){

    let customers = JSON.parse(localStorage.getItem('customers')) || [];


    const customerManageTable = document.getElementById('cahierViewtbl').getElementsByTagName('tbody')[0];
                
    customerManageTable.innerHTML = '';

    customers.forEach(item => {
        let row = customerManageTable.insertRow();
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.address}</td>
            <td>${item.nic} </td>
            <td>${item.contact} </td>
            
        `;
    });
    }



// ======================== cashier => make order =====================================

function makeOrder(){
    window.location.href ="makeOrder.html";
}

const foodItems = [
    { code: 'B1001', name: 'Classic Burger (Large)', price: 750 },
    { code: 'B1002', name: 'Classic Burger (Regular)', price: 1500, discount: 15 },
    { code: 'B1003', name: 'Turkey Burger', price: 1600 },
    { code: 'B1004', name: 'Chicken Burger (Large)', price: 1400 },
    { code: 'B1005', name: 'Chicken Burger (Regular)', price: 800, discount: 20 },
    { code: 'B1006', name: 'Cheese Burger (Large)', price: 1000 },
    { code: 'B1007', name: 'Cheese Burger (Regular)', price: 600 },
    { code: 'B1008', name: 'Bacon Burger', price: 650, discount: 15 },
    { code: 'B1009', name: 'Shawarma Burger', price: 800 },
    { code: 'B1010', name: 'Olive Burger', price: 1800 },
    { code: 'B1012', name: 'Double-Cheese Burger', price: 1250, discount: 20 },
    { code: 'B1013', name: 'Crispy Chicken Burger (Regular)', price: 1200 },
    { code: 'B1014', name: 'Crispy Chicken Burger (Large)', price: 1600, discount: 10 },
    { code: 'B1015', name: 'Paneer Burger', price: 900 },
    { code: 'B1016', name: 'Crispy Chicken Submarine (Large)', price: 2000 },
    { code: 'B1017', name: 'Crispy Chicken Submarine (Regular)', price: 1500 },
    { code: 'B1018', name: 'Chicken Submarine (Large)', price: 1800, discount: 3 },
    { code: 'B1019', name: 'Chicken Submarine (Regular)', price: 1400 },
    { code: 'B1020', name: 'Grinder Submarine', price: 2300 },
    { code: 'B1021', name: 'Cheese Submarine', price: 2200 },
    { code: 'B1022', name: 'Double Cheese n Chicken Submarine', price: 1900, discount: 16 },
    { code: 'B1023', name: 'Special Horgie Submarine', price: 2800 },
    { code: 'B1024', name: 'MOS Special Submarine', price: 3000 },
    { code: 'B1025', name: 'Steak Fries (Large)', price: 1200 },
    { code: 'B1026', name: 'Steak Fries (Medium)', price: 600 },
    { code: 'B1027', name: 'French Fries (Large)', price: 800 },
    { code: 'B1028', name: 'French Fries (Medium)', price: 650 },
    { code: 'B1029', name: 'French Fries (Small)', price: 450 },
    { code: 'B1030', name: 'Sweet Potato Fries (Large)', price: 600 },
    { code: 'B1031', name: 'Chicken n Cheese Pasta', price: 1600, discount: 15 },
    { code: 'B1032', name: 'Chicken Penne Pasta', price: 1700 },
    { code: 'B1033', name: 'Ground Turkey Pasta Bake', price: 2900, discount: 10 },
    { code: 'B1034', name: 'Creamy Shrimp Pasta', price: 2000 },
    { code: 'B1035', name: 'Lemon Butter Pasta', price: 1950 },
    { code: 'B1036', name: 'Tagliatelle Pasta', price: 2400, discount: 1 },
    { code: 'B1037', name: 'Baked Ravioli', price: 2000, discount: 1 },
    { code: 'B1038', name: 'Fried Chicken (Small)', price: 1200 },
    { code: 'B1039', name: 'Fried Chicken (Regular)', price: 2300, discount: 10 },
    { code: 'B1040', name: 'Fried Chicken (Large)', price: 3100, discount: 5 },
    { code: 'B1041', name: 'Hot Wings (Large)', price: 2400 },
    { code: 'B1042', name: 'Devilled Chicken (Large)', price: 900 },
    { code: 'B1043', name: 'BBQ Chicken (Regular)', price: 2100 },
    { code: 'B1044', name: 'Pepsi (330ml)', price: 990, discount: 5 },
    { code: 'B1045', name: 'Coca-Cola (330ml)', price: 1230 },
    { code: 'B1046', name: 'Sprite (330ml)', price: 1500, discount: 3 },
    { code: 'B1047', name: 'Mirinda (330ml)', price: 850, discount: 7 }
];


const foodItemsTable = document.getElementById('foodItems').getElementsByTagName('tbody')[0];

foodItems.forEach(item => {
    let row = foodItemsTable.insertRow();
    row.innerHTML = `
        <td>${item.code}</td>
        <td>${item.name}</td>
        <td>${item.price} LKR</td>
        <td><button onclick="addToOrder('${item.code}')">Add to Order</button></td>
    `;
});

function go(){
    
    let customers = JSON.parse(localStorage.getItem('customers')) || [];
    
    const id = document.getElementById('txtCustomerId').value;

    for(let i=0 ; i<customers.length ; i++){
        if(id == customers[i].id || name == customers[i].name){
            document.getElementById('txtCustomerId').value = '';
            return console.log("valid customer");
        }else{
            alert("Invalid Customer");
            document.getElementById('txtCustomerId').value = '';
        }
    }
    
}
//==============================place order=========================

function btnPlaceOrder(){
    const section = document.getElementById("orderSection");
  section.scrollIntoView({ behavior: "smooth" });
}

let order = [];
let totalPrice = 0;

function addToOrder(code) {
    const id = document.getElementById('txtCustomerId').value;

    let selectedItem = foodItems.find(item => item.code === code);
    order.push(selectedItem);
    order.push(id);
    console.log(order);
    
    // Update Order List
    const orderList = document.getElementById('orderList');
    let listItem = document.createElement('li');
    listItem.innerText = `${selectedItem.name} - ${selectedItem.price} LKR`;
    orderList.appendChild(listItem);
    
    // Update Total Price
    totalPrice += selectedItem.price;
    document.getElementById('totalPrice').innerText = totalPrice;
}

let ListOfOrders = [];

function proceed(){

    ListOfOrders.push(order);
    console.log(ListOfOrders);
    document.getElementById('orderList').innerHTML = '';
    document.getElementById('totalPrice').innerHTML = 0;
}



 //================================manage items==================================


    

 function manageItems(){
    window.location.href ="manageItems.html";
}




 //================================manage items==================================

 function manageCustomer(){
    window.location.href ="manageCustomer.html";
}
 