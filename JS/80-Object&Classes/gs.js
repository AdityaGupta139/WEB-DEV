class User{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length <4){
            console.log("the name is too short")
            return;
        }
        this._name=value;
    }


}
let user=new User("john");
console.log(user.name);
user=new user("");