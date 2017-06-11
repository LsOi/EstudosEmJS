window.onload = function(){


var recursos = {
  food: 300,
  wood: 300,
  stone: 300
};


var campones = {
  funct: null,
  atk: 0,
  def:0,
  speedColect: 2,
  transpCap: 10
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
        document.getElementById('food').innerHTML = recursos.food;
      };
  }

  // Coleta Woods
  woodColect(){
    document.getElementById("bnt-woodColect").onclick = function(){
      recursos.wood += campones.transpCap;
      document.getElementById('wood').innerHTML = recursos.wood;
    };
  }

  // Coleta pedras
  stoneColect(){
    document.getElementById("bnt-stoneColect").onclick = function(){
      recursos.stone += campones.transpCap;
      document.getElementById('stone').innerHTML = recursos.stone;
    };
  }
}


var coletar = new colect();

coletar.woodColect();
coletar.stoneColect();
coletar.foodColect();

document.getElementById('food').innerHTML = recursos.food;
document.getElementById('wood').innerHTML = recursos.wood;
document.getElementById('stone').innerHTML = recursos.stone;

};
