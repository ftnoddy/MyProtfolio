import { DataBase, MigrationBase } from "@cppay/mvc-db";
import { allMigration } from "../migration/Migrations";
import * as fs from 'fs';
import * as path from 'path';
export const db = new DataBase({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port:  Number(process.env.DB_PORT),
    sslEnabled:true,

    
    ssl:{
        ca: fs.readFileSync(path.join(__dirname,'ca-certificate.cer')).toString(),
    }
});

export function migrate(){
    allMigration.forEach((val:any,i)=>{
        try{
            (new MigrationBase(val.tableName,db)).migrate(val.columns);
        }catch(e){
            console.log("Something Bad Happened");
        }
    })
}
export function drop(){
    allMigration.forEach((val:any,i)=>{
        try{
            (new MigrationBase(val.tableName,db)).drop();
            // (new MigrationBase(val.tableName,db)).migrate(val.columns);
        }catch(e){
            console.log("Something Bad Happened");
        }
    })
}