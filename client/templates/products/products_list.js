import Products from '../../../lib/products'

Template.productsList.helpers({
  products:function(){
    return Products.find();
  }
});
