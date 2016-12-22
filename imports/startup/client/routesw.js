import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/product.js';
import '../../ui/pages/newinformation.js';
import '../../ui/pages/cooperativePartner.js';
import '../../ui/pages/customerService.js';
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
FlowRouter.route('/newinformation',{
    action:function(){
        BlazeLayout.render("newInformationLayout",);
    }
});

FlowRouter.route('/cooperativePartner',{
        action:function(){
        BlazeLayout.render("cooperativePartnerLayout",);
        }
        });
FlowRouter.route('/customerService',{
        action:function(){
        BlazeLayout.render("customerServiceLayout",);
        }
        });