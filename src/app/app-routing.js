"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var feedback_component_1 = require("./feedback/feedback.component");
exports.AppRouters = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'feedback',
        component: feedback_component_1.FeedbackComponent
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
exports.AppRouting = router_1.RouterModule.forRoot(exports.AppRouters);
//# sourceMappingURL=app-routing.js.map