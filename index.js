// Write your classes here
class Tree{
    constructor(species){
        this.species=species
    }
    static definition(){
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

const tree = new Tree( 'Maple' )

class Deciduous extends Tree{
    constructor(species,name){
        super(species);
        this.name=name;
    }
    static definition() {
        return (
          super.definition() + " Deciduous trees shed their leaves annually."
        );
      }
}

let oak = new Deciduous( 'Oak', 'Professor' )

class Evergreen extends Tree{
    constructor(species,name){
        super(species);
        this.name=name;
    }  
    static definition() {
        return (
          super.definition() + " Evergreens keep their leaves all year round."
        );
      } 
}

let fir = new Evergreen( 'Fir', 'Douglas' )