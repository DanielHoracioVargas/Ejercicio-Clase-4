let myDom = document; //document es un objeto global

let name = "Firlais";

const myDog = {
    name: "Firulais"
};

const myCat = {
    "name": "Kity"
};

console.log(myDog.name);
console.log(myCat.name);

/*
class Mouse {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}*/


function Mouse(name, age) {
    this.name = name;
    this.age = age;
}

const myMouse = new Mouse("Perez", 4);

class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
        // completa this.text
    }

    //metodo creado diseño del profe
    render(){
        let myApp = document.getElementById(this.parentID);

        // const myButtonHTML = "<button>PLACEHOLDER</button>";
        //const myButtonHTML = "<button>"+ this.text + "</button>";

        const myButtonHTML = myApp.innerHTML + "<button>"+ this.text + "</button>";        

        myApp.innerHTML = myButtonHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
    }
}

// Construir el objeto boton
// y llamar al metodo render de ese objeto.
let myButon = new Button("app", "Login Magico..");
myButon.render();

let myButon2 = new Button("app", "Signup..");
myButon2.render();

// myButon.metodoQueSea()

class Input{
    constructor(parentID, type){
        this.parentID = this.parentID;
       // if type != opciones validas ....entonces poner un valor 
       this.type = type;
    }
    render(){
        let myApp = document.getElementById(this.parentID);

        //const myInputHTML = myApp.innerHTML + "<input type= "+ this.text + ">";        
        const myInputHTML = myApp.innerHTML + "<input type= "+ this.text + ">";        
        myApp.innerHTML = myInputHTML; // VAmos a escribir el html para que se 
        // dibuje un boton con el texto de this.text
       
    }
}

let myInput = new Input("app", "checkbox");
myInput.render();

let myInput2 = new Input("app", "date");
myInput2.render();

let myInput3 = new Input("app", "clave");
myInput3.render();

