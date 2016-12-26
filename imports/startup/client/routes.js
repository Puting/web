import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/pages/main';
import '../../admin/pages/admin';
// FlowRouter.route('/',{
//   action:function(){
//     BlazeLayout.render("mainLayout",{content:"newsList"});
//   }
// });
FlowRouter.route('/main',{
  action:function(){
    BlazeLayout.render("mainLayout",{news:"newsList",products:"productsList"});
  }
});

FlowRouter.route('/login',{
  action:function(){
    BlazeLayout.render("login");
  }
});

FlowRouter.route('/admin',{
  action:function(){
    BlazeLayout.render("admin");
  }
});
