import mongoose from 'mongoose';
import dbString from './dbString.mjs';
import User from './modals/User.mjs'

const mongoConnect = () => {
    return mongoose.connect(dbString);
}

// function connectionStatus() {
//     const db = mongoose.connection;
//     mongoConnect();
//     return true;
// }

// async function saveMember(){
//     try{    
//         let member = new Member({
            // emailID: "manisingh893@gmail.com",
            // fName: "Manpreet",
            // lName: "Singh",
            // jobTitle: "DevOps"
//         })
//         await member.save();
//         console.log(member);
//         return true;
//     }
//     catch(e){
//         return false;
//     }
// }

export {mongoConnect}