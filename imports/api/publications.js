import News from './news/news'
import Products from './products/products'
import { Meteor } from 'meteor/meteor';



Meteor.publish('products',function(){
  return Products.find({onMainPage:true});
});
