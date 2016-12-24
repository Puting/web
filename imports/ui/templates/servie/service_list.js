import Products from '../../../api/products/products';
import { Template } from 'meteor/templating';
import './service_item.html';
import './service_list.html';

Template.serviceList.helpers({
    products:function(){
        return Service.find();
    }
});
