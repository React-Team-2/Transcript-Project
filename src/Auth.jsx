
// import store from "./store/reducers/user"

class Auth  {
     static authenticated;
     constructor(){
         this.authenticated = false;
     }

    action(){
         return{
             type:'USERSTATE'
         }
    }

    login(cb) {
        const userId = localStorage.getItem("token")

        if (!userId) {
            Auth.authenticated = false;
        } else {
            // let {auth} = store(null,this.action());
            Auth.authenticated = true;
            cb();
        }

     }
   logOut(cb) {
        this.authenticated = false;
      const userId = localStorage.getItem("token")
        if (userId) {
             localStorage.removeItem("token")
             cb();
         }
   }
     isAuthenticated() {         
         return Auth.authenticated;
     }
}

export default new Auth();


// class Auth{
//     constructor(){
//         this.authenticated = false
//     }
//     login(cb){
//         this.authenticated = true
//         cb()
//     }
//     logout(cb){
//         this.authenticated = false
//         cb()
//     }
//     isAuthenticated(){
//         return this.authenticated;
//     }
// }

// export default new Auth();