import { PrismaClient } from "@prisma/client";
const path=require("path")
const fs=require("fs")
const bodyparser=require('body-parser');


const prisma =new PrismaClient();
const readFileAsync = () => {
  var dosyanames=["products.json","users.json","kampanya.json","siparis.json"]
  var x;
  for(x in dosyanames){
    const FILE_NAME=dosyanames[x]
    fs.readFile(FILE_NAME, (error, data) => {
      console.log('İşlem başladı..');
      if (error) {
        console.log('Başarısız!');
        console.log(error);
      } else {
        try {
          async function main(){
              const dataJson = JSON.parse(data);
              if(FILE_NAME=="products.json"){
                if(prisma.products){
                  await prisma.products.deleteMany()
                }
                for (let i=0; i < dataJson.length; i++){
                    await prisma.products.create({
                        data:{
                            product_id:dataJson[i].product_id,
                            title:dataJson[i].title,
                            category_id:dataJson[i].category_id,
                            category_title:dataJson[i].category_title,
                            author:dataJson[i].author,
                            list_price:dataJson[i].list_price,
                            stock_quantity:dataJson[i].stock_quantity
                        }
                    })       
                }      
              }if(FILE_NAME=="kampanya.json"){
                const dataJson = JSON.parse(data);
                if(prisma.kampanya){
                  await prisma.kampanya.deleteMany()
                }
                for (let i=0; i < dataJson.length; i++){
                    await prisma.kampanya.create({
                        data:{
                            id:dataJson[i].id,
                            text:dataJson[i].text   
                        }
                    })       
                }
              }if(FILE_NAME=="siparis.json"){
                const dataJson = JSON.parse(data);
                if(prisma.siparis){
                  await prisma.siparis.deleteMany()
                }
                for (let i=0; i < dataJson.length; i++){
                    await prisma.siparis.create({
                        data:{    
                            id:dataJson[i].id,
                            siparis_title:dataJson[i].siparis_title,
                            siparistoplamfiyat:dataJson[i].siparistoplamfiyat,
                            urun_id:dataJson[i].urun_id,
                            userId:dataJson[i].userId    
                        }
                    })       
                } 
              }if(FILE_NAME=="users.json"){
                const dataJson = JSON.parse(data);
                if(prisma.users){
                  await prisma.users.deleteMany()
                }
                for (let i=0; i < dataJson.length; i++){
                    await prisma.users.create({
                        data:{
     
                            id:dataJson[i].id,
                            username:dataJson[i].username,
                            lastname:dataJson[i].lastname,
                            address:dataJson[i].address,   
                        }
                    })       
                }    
              }                 
          }
          main().catch((e)=>{
              console.log(e);
              process.exit(1);
          }).finally(async()=>{
              await prisma.$disconnect();
          
          })
        } catch (error) {
          console.log(error);
        }
      }
    });

  }
  
};


readFileAsync()




