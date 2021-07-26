class Collection {
    static all = [];
    
    constructor({name}){
    this.name = name
    Collection.all.push(this)
    }

}