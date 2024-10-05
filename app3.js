



const customers = [];
                  
              
              //    ====================add customer=============
               
    
               function addCus(){
                   const id = document.getElementById('txtCusId').value;
                   const name = document.getElementById('txtCusName').value;
                   const address = document.getElementById('txtCusAddress').value;
                   const nic = document.getElementById('txtCusNic').value;
                   const contact = document.getElementById('txtCusCon').value;
               
                   let newCus = { id,name,address,nic,contact };
                   customers.push(newCus);
               
                   console.log(customers);
               
               
                   // wena page ekakt yaddi array eke data lost wena nisa localstorage eke dagnnawa
                   localStorage.setItem('customers', JSON.stringify(customers));
               
                   document.getElementById('txtCusId').value = '';
                   document.getElementById('txtCusName').value = '';
                   document.getElementById('txtCusAddress').value = '';
                   document.getElementById('txtCusNic').value = '';
                   document.getElementById('txtCusCon').value = '';
               }
    
            //    ====================search item=============
    
            function searchCus(){
    
                let customers = JSON.parse(localStorage.getItem('customers')) || [];
    
                const id = document.getElementById('txtCusId').value;
                const name = document.getElementById('txtCusName').value;
    
                // console.log(code);
    
                for(let i=0 ; i<customers.length ; i++){
                    if(id == customers[i].id || name == customers[i].name){
                        // console.log(ItemsArray[i].code);
                        document.getElementById('txtCusId').value = customers[i].id;
                        document.getElementById('txtCusName').value = customers[i].name;
                        document.getElementById('txtCusAddress').value = customers[i].address;
                        document.getElementById('txtCusNic').value = customers[i].nic;
                        document.getElementById('txtCusCon').value = customers[i].contact;  
                        break;
                    }
                }
                
            }
    
            //    ====================update item=============
    
            function updateCus(){
    
                const id = document.getElementById('txtCusId').value;
                const name = document.getElementById('txtCusName').value;
    
                
    
                for(let i=0 ; i<customers.length ; i++){
                    if(id == customers[i].id || name == customers[i].name){
                        
                        customers[i].name = document.getElementById('txtCusName').value;
                        customers[i].address = document.getElementById('txtCusAddress').value;
                        customers[i].nic = document.getElementById('txtCusNic').value;
                        customers[i].contact = document.getElementById('txtCusCon').value;  
                        break;
                    }
                }            
    
                document.getElementById('txtCusId').value = '';
                document.getElementById('txtCusName').value = '';
                document.getElementById('txtCusAddress').value = '';
                document.getElementById('txtCusNic').value = '';
                document.getElementById('txtCusCon').value = '';
                
                
            }
    
    
    
            //===================delete item=================
    
            function deleteCus(){
                
                const id = document.getElementById('txtCusId').value;
                const name = document.getElementById('txtCusName').value;
    
                
    
                for(let i=0 ; i<customers.length ; i++){
                    if(id == customers[i].id || name == customers[i].name){
    
                        // array.splice(startIndex, deleteCount);
                        customers.splice(i, 1); 
                        break;
                    }
                } 
    
    
                document.getElementById('txtCusId').value = '';
                document.getElementById('txtCusName').value = '';
                document.getElementById('txtCusAddress').value = '';
                document.getElementById('txtCusNic').value = '';
                document.getElementById('txtCusCon').value = '';
            }




            //====================load table===========================


            function loadCus(){

                const customerManageTable2 = document.getElementById('cahierViewtbl').getElementsByTagName('tbody')[0];
                
                customerManageTable2.innerHTML = '';

                customers.forEach(item => {
                    let row = customerManageTable2.insertRow();
                    row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.address}</td>
                        <td>${item.nic} </td>
                        <td>${item.contact} </td>
                        
                    `;
                });
                } 