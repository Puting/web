import Products from '../../../api/products/products';
import { Template } from 'meteor/templating';
import './product_item.html';
import './product_list.html';

Template.productsList.helpers({
  products:function(){
    return Products.find();
  }
});
