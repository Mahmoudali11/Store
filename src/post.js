export class  Posts{

    constructor(count,name){


        this.count=count;
        this.name=name;
       
}


static fromjson(obj){
    return new Posts(obj.count,obj.name||"null")





}
}