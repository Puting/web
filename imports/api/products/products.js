import { Mongo } from 'meteor/mongo';

const Products = new Mongo.Collection('products');

export default Products;

if(Meteor.isServer){
  Meteor.publish('products',function(){
    return Products.find({onMainPage:true});
  });
}
