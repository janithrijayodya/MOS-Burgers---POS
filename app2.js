       
    //   console.log(window.foodItems); 
       
       //================================manage items==================================



function loadItems(){

const foodItemsManageTable = document.getElementById('cahierViewtbl').getElementsByTagName('tbody')[0];

foodItemsManageTable.innerHTML = '';

foodItems.forEach(item => {
    let row = foodItemsManageTable.insertRow();
    row.innerHTML = `
        <td>${item.code}</td>
        <td>${item.name}</td>
        <td>${item.price} </td>
        <td>${item.quantity} </td>
        <td>${item.discount} </td>
        
    `;
});
} 
          
                  
          
          //    ====================add item=============


          

           function addItem(){
               const code = document.getElementById('txtCode').value;
               const itemName = document.getElementById('txtItemName').value;
               const price = document.getElementById('txtPrice').value;
               const qty = document.getElementById('txtQty').value;
               const discount = document.getElementById('txtDis').value;
           
               console.log(code);
               let newItem = { code,itemName,price,qty,discount };
               foodItems.push(newItem);
           
               console.log(foodItems);
           
           
               // wena page ekakt yaddi array eke data lost wena nisa localstorage eke dagnnawa
               localStorage.setItem('foodItems', JSON.stringify(foodItems));
           
               document.getElementById('txtCode').value = '';
               document.getElementById('txtItemName').value = '';
               document.getElementById('txtPrice').value = '';
               document.getElementById('txtQty').value = '';
               document.getElementById('txtDis').value = '';
           }

        //    ====================search item=============

        function searchItem(){

            let ItemsArray = JSON.parse(localStorage.getItem('foodItems')) || [];

            const code = document.getElementById('txtCode').value;
            const itemName = document.getElementById('txtItemName').value;

            // console.log(code);

            for(let i=0 ; i<foodItems.length ; i++){
                if(code == foodItems[i].code || itemName == foodItems[i].itemName){
                    // console.log(ItemsArray[i].code);
                    document.getElementById('txtCode').value = foodItems[i].code;
                    document.getElementById('txtItemName').value = foodItems[i].itemName;
                    document.getElementById('txtPrice').value = foodItems[i].price;
                    document.getElementById('txtQty').value = foodItems[i].qty;
                    document.getElementById('txtDis').value = foodItems[i].discount;  
                    break;
                }
            }
            
        }

        //    ====================update item=============

        function updateItem(){

            const code = document.getElementById('txtCode').value;
            const itemName = document.getElementById('txtItemName').value;

            // console.log(code);

            for(let i=0 ; i<foodItems.length ; i++){
                if(code == foodItems[i].code || itemName == foodItems[i].itemName){
                    // console.log(ItemsArray[i].code);
                    // ItemsArray[i].code = document.getElementById('txtCode').value;
                    foodItems[i].itemName = document.getElementById('txtItemName').value;
                    foodItems[i].price = document.getElementById('txtPrice').value;
                    foodItems[i].qty = document.getElementById('txtQty').value;
                    foodItems[i].discount = document.getElementById('txtDis').value;  
                    break;
                }
            }            

               document.getElementById('txtCode').value = '';
               document.getElementById('txtItemName').value = '';
               document.getElementById('txtPrice').value = '';
               document.getElementById('txtQty').value = '';
               document.getElementById('txtDis').value = '';
            
            // console.log(ItemsArray);
        }



        //===================delete item=================

        function deleteItem(){
            
            const code = document.getElementById('txtCode').value;
            const itemName = document.getElementById('txtItemName').value;

            // console.log(code);

            for(let i=0 ; i<foodItems.length ; i++){
                if(code == foodItems[i].code || itemName == foodItems[i].itemName){

                    // array.splice(startIndex, deleteCount);
                    foodItems.splice(i, 1); 
                    break;
                }
            } 

               document.getElementById('txtCode').value = '';
               document.getElementById('txtItemName').value = '';
               document.getElementById('txtPrice').value = '';
               document.getElementById('txtQty').value = '';
               document.getElementById('txtDis').value = '';
        }