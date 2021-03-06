define(function(){

  var Enviroment = function(){

    this.host = window.location.host;

    this.setup = false;

    this.state = {
      dev : false,
      test: false,
      live: false
    }

    if( this.host == "www.js.superdt.cl:8080"){
      this.state.live = true;
      this.setup = true;
    }

    if( !this.setup ) this.state.dev = true;

  }

  Enviroment.prototype.is_dev = function(){
    return this.state.dev == true;
  }

  Enviroment.prototype.is_live = function(){
    return this.state.live == true;
  }

  return Enviroment;
})
