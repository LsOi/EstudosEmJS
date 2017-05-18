window.onload = function(){


var recursos = {
  food: 300,
  wood: 300,
  stone: 300
};


var campones = {
  speedColect: 2,
  transpCap: 10 //capacidade de transporte
};



class upgrades{

  upgradeFoodTransp(oxCart, basckets){
    if(oxCart === true){
      return campones.transpCap + 4;
    }
    if(basckets === true){
      return campones.transpCap + 2;
    }
  }
}



// Upgrade basckets
document.getElementById("Upgrade-Baskets").onclick = function() {
    var upgrade = new upgrades();
    campones.transpCap = upgrade.upgradeFoodTransp(false, true);
    document.getElementById("Upgrade-Baskets").disabled = true;
};


// Upgrade Ox Cart
document.getElementById("Upgrade-oxCart").onclick = function() {
    var upgrade = new upgrades();
    campones.transpCap = upgrade.upgradeFoodTransp(true, false);
    document.getElementById("Upgrade-oxCart").disabled = true;
};





class colect{

  //Coleta Foods
  foodColect(){
    document.getElementById("bnt-foodColect").onclick = function() {
      recursos.food += campones.transpCap;
      document.getElementById('food').innerHTML = recursos.food + " Food";
    };
  }

  // Coleta Woods
  woodColect(){
    document.getElementById("bnt-woodColect").onclick = function(){
      recursos.wood += campones.transpCap;
      document.getElementById('wood').innerHTML = recursos.wood + " Wood";
    };
  }

  // Coleta pedras
  stoneColect(){
    document.getElementById("bnt-stoneColect").onclick = function(){
      recursos.stone += campones.transpCap;
      document.getElementById('stone').innerHTML = recursos.stone + " Stone";
    };
  }
}


var coletar = new colect();

coletar.woodColect();
coletar.stoneColect();
coletar.foodColect();

document.getElementById('food').innerHTML = recursos.food + " Food";
document.getElementById('wood').innerHTML = recursos.wood + " Wood";
document.getElementById('stone').innerHTML = recursos.stone + " Stone";

};
