//inheritance:
class Parent {
    house() {
        console.log("appartmnet")
    }
}
class Child extends Parent {
    bike(){
        console.log("Duke390")
    }
}

var prop = new Child()
prop.bike()
prop.house()

//Task: Grandparent has house and land, Parent has car and jewels, Child has a bike
//Output should be when I call parent it thould have land car and jewels, when I call child it whould have house , land, car and bike

