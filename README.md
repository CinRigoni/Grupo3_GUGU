# Grupo3_GUGU
Rigoni, Murgana, Sarmiento

Código basado en el proyecto -> https://github.com/sosajuani/grupo6_GUGU

----------------- SENTENCIAS GENERATE -----------------

sequelize model:generate --name Brand --attributes name:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Visibility --attributes name:string

sequelize model:generate --name Discount --attributes name:string,percent:decimal

sequelize model:generate --name Product --attributes name:string,price:decimal,stock:integer,stockMin:integer,stockMax:integer,description:string,weight:decimal,dimensions:string,brandsId:integer,categoriesId:integer,visibilitiesId:integer,discountsId:integer

sequelize model:generate --name Image --attributes name:string,productsId:integer

sequelize model:generate --name Rol --attributes name:string

sequelize model:generate --name User --attributes firstName:string,lastName:string,username:string,email:string,password:string,avatar:string,phoneNumber:integer,rolesId:integer

sequelize model:generate --name Address --attributes street:string,number:integer,floor:integer,apartment:string,zipCode:string,city:string,province:string,country:string,usersId:integer

sequelize model:generate --name Status --attributes name:string

sequelize model:generate --name Payment --attributes name:string,monthlyFees:integer

sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,usersId:integer,statussesId:integer,paymentsId:integer

sequelize model:generate --name Shipping --attributes price:decimal,street:string,number:integer,floor:integer,apartment:string,zipCode:string,city:string,province:string,country:string,phoneNumber:integer,ordersId:integer

sequelize model:generate --name OrderDetail --attributes quantity:decimal,subtotal:decimal,ordersId:integer,productsId:integer
