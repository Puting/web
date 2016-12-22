import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/main.js';
import '../../ui/pages/aboutus.js';
// FlowRouter.route('/',{
//   action:function(){
//     BlazeLayout.render("mainLayout",{content:"newsList"});
//   }
// });
FlowRouter.route('/',{
    action:function(){
        BlazeLayout.render("mainLayout",{news:"newsList",products:"productsList"});
    }
});
FlowRouter.route('/aboutus',{
    action:function(){
        BlazeLayout.render("aboutUsLayout",{news:"newsList",products:"productsList"});
    }
});