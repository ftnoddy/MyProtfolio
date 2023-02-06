import { ControllerBase, Middleware } from "@cppay/mvc-server";
import { User } from "../model/User";
import { AuthMiddleware } from "./middleware/AuthMiddleware";
import {compareSync, hashSync} from 'bcrypt';
import { SERVER_CONFIG } from "../config/config";

class UserControllerBase {
    protectAll: boolean = true;
    
    // SIGN UP LOGIC GOES HERE
    signup(req:any,res:any){
        let user = new User();
        
        user.create([
            'name','email','password','mail_confirm_slug','mail_confirmed'
        ],[
            req.body.name,req.body.email,this.hash(req.body.password),this.generateSlug(20),false
        ])
    }

    // LOGIN LOGIC GOES HERE
    async login(req:any,res:any){
        // if()
        let user:any = await (new User()).where('email',req.body.email).first();
        if(user){
            if(compareSync(req.body.password,user.password)){
                // TO-DO: You Custom Logic HERE do Passport or JWT auth;
                res.send("LOGIN");
            }else{
                res.status(401).send({
                    success:false,
                    message:"Password Doesn't Match!"
                })
            }
        }else{
            res.status(401).send({
                success:false,
                message:"Email Doesn't Exists!"
            })
        }
        // let usrData = 
    }
    generateSlug(length:number){
        let chars = '1234567890abcdefghijklmnopqrstuvwxyz';
        let charsArr = chars.split('');
        let str = 'cp';
        for(let i=0;i<length-2;i++){
            let rIndex = Math.floor(Math.random() * charsArr.length);
            str += charsArr[rIndex];
        }
        return str;
    }
    hash(password:string):string{
        return hashSync(password,SERVER_CONFIG.saltRound);
    }
    verifyHash(password:string,hash:string){
        return compareSync(password,hash);
    }
}
export const UserController = new UserControllerBase();