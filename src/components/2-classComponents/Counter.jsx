//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================

import React, { Component } from "react";

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: props.count || 0,
    }

    //*handleInc metodunun Counter classına bağlanması
    this.handleInc = this.handleInc.bind(this)

  }

handleInc() {
  this.setState({
    count:this.state.count + 1
  });
};


//*Arrow function kullanırken "bind" kullanmıyoruz..
handleDec = ()=>{
  this.setState({
    count: this.state.count - 1
  });
};



  render() {
    return (
      <h1 className="container text-center mt-4">
        <h1 className="display-4 text-danger m-4">COUNT:{this.state.count}</h1>

        <button onClick={this.handleInc} className="btn btn-success">
          INCREASE
        </button>

        <button onClick={this.handleDec}  className="btn btn-warning">
          DECREASE
        </button>
      </h1>
    );
  }
}

export default Counter;

//*=====================================================================

//! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
//! Ancak, React built-in fonksiyonlari baglidir.

//* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.
