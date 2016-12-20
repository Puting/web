import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/product.js';
// FlowRouter.route('/',{
//   action:function(){
//     BlazeLayout.render("mainLayout",{content:"newsList"});
//   }
// });
FlowRouter.route('/product',{
    action:function(){
        BlazeLayout.render("productlayout",);
    }
});
