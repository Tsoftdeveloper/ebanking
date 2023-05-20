"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[605],{605:(T,u,i)=>{i.r(u),i.d(u,{StatementPageModule:()=>p});var m=i(6895),r=i(9796),n=i(6548),d=i(5339),g=i(5861),t=i(4583),Z=i(5911);const h=[{path:"",component:(()=>{class a{constructor(e){this.userdata=e,this.email="",this.fullname="",this.iban="",this.bankName="",this.balance=0,this.profiledp="",this.activeUser="",this.start="",this.end=""}ngOnInit(){this.fetchData()}generate(){this.startdate=new Date(this.start),this.enddate=new Date(this.end),this.today=new Date((new Date).toISOString().split("T")[0]),this.enddate<=this.today&&this.startdate<this.enddate&&alert("Generating results.."),this.startdate>this.enddate&&alert("Start Date should be less than End Date."),this.enddate>this.today&&alert("End Date should be less or equal to Current Date.")}displayAll(){var e=this;return(0,g.Z)(function*(){e.transList=yield e.userdata.viewPayment("trans"+e.iban),console.log(e.transList)})()}fetchData(){var e=this;return(0,g.Z)(function*(){var o;e.activeUser=null===(o=sessionStorage.getItem("email"))||void 0===o?void 0:o.toString(),e.user=yield e.userdata.getUserDataByEmail(e.activeUser),null!=e.user?(console.log(e.user),e.email=e.user.email,e.fullname=e.user.fullname,e.iban=e.user.account,e.bankName=e.user.bankName,e.balance=e.user.balance,e.profiledp=e.user.image):console.log(JSON.stringify(e.user))})()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(Z.K))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-statement"]],decls:73,vars:4,consts:[[1,"ion-no-border"],["slot","start"],["default-href","home"],["size","large"],[1,"account-info"],[1,"card"],[3,"submit"],["position","stacked"],["fill","solid","type","date","name","start",3,"ngModel","ngModelChange"],["fill","solid","type","date","name","end",3,"ngModel","ngModelChange"],["expand","block","color","tertiary","type","submit",2,"margin","20px"],[2,"color","red"],[2,"color","green"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA()(),t.TgZ(4,"strong")(5,"ion-title",3),t._uU(6,"Account Statement"),t.qZA()()(),t.TgZ(7,"ion-content")(8,"ion-card",4)(9,"ion-card-header")(10,"ion-card-title"),t._uU(11),t.qZA(),t.TgZ(12,"ion-card-subtitle"),t._uU(13,"Your Account"),t.qZA()(),t.TgZ(14,"ion-card-content")(15,"strong"),t._uU(16),t.qZA()()(),t.TgZ(17,"div",5)(18,"form",6),t.NdJ("submit",function(){return o.generate()}),t.TgZ(19,"ion-card")(20,"ion-item")(21,"ion-label",7),t._uU(22,"From Date "),t.qZA(),t.TgZ(23,"ion-input",8),t.NdJ("ngModelChange",function(l){return o.start=l}),t.qZA()()(),t.TgZ(24,"ion-card")(25,"ion-item")(26,"ion-label",7),t._uU(27,"To Date "),t.qZA(),t.TgZ(28,"ion-input",9),t.NdJ("ngModelChange",function(l){return o.end=l}),t.qZA()()(),t.TgZ(29,"ion-button",10),t._uU(30,"Generate"),t.qZA()(),t.TgZ(31,"ion-card")(32,"ion-list")(33,"ion-item")(34,"ion-label"),t._uU(35,"ATM-CashWithdrawal"),t.qZA(),t.TgZ(36,"p",11),t._uU(37,"-30,000"),t.qZA()(),t.TgZ(38,"ion-item")(39,"ion-label"),t._uU(40,"Funds Transfer"),t.qZA(),t.TgZ(41,"p",11),t._uU(42,"-5,000"),t.qZA()(),t.TgZ(43,"ion-item")(44,"ion-label"),t._uU(45,"Funds Transfer"),t.qZA(),t.TgZ(46,"p",12),t._uU(47,"+15,000"),t.qZA()(),t.TgZ(48,"ion-item")(49,"ion-label"),t._uU(50,"Transaction "),t.qZA(),t.TgZ(51,"p",11),t._uU(52,"-5,000"),t.qZA()(),t.TgZ(53,"ion-item")(54,"ion-label"),t._uU(55,"ATM-CashWithdrawal"),t.qZA(),t.TgZ(56,"p",11),t._uU(57,"-30,000"),t.qZA()(),t.TgZ(58,"ion-item")(59,"ion-label"),t._uU(60,"Funds Transfer"),t.qZA(),t.TgZ(61,"p",11),t._uU(62,"-5,000"),t.qZA()(),t.TgZ(63,"ion-item")(64,"ion-label"),t._uU(65,"Funds Transfer"),t.qZA(),t.TgZ(66,"p",12),t._uU(67,"+15,000"),t.qZA()(),t.TgZ(68,"ion-item")(69,"ion-label"),t._uU(70,"Transaction "),t.qZA(),t.TgZ(71,"p",11),t._uU(72,"-5,000"),t.qZA()()()()()()),2&e&&(t.xp6(11),t.Oqu(o.fullname),t.xp6(5),t.hij(" ",o.iban,""),t.xp6(7),t.Q6J("ngModel",o.start),t.xp6(5),t.Q6J("ngModel",o.end))},dependencies:[r._Y,r.JJ,r.JL,r.On,r.F,n.oU,n.YG,n.Sm,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.W2,n.Gu,n.pK,n.Ie,n.Q$,n.q_,n.wd,n.sr,n.j9,n.cs],styles:["ion-content[_ngcontent-%COMP%]{--background: white}.account-info[_ngcontent-%COMP%]{background-color:#f8f8ff}.card[_ngcontent-%COMP%]{height:100%;background-color:#5260ff;border-radius:50px 50px 0 0}ion-card[_ngcontent-%COMP%]{border-radius:20px;padding:10px}ion-input[_ngcontent-%COMP%]{color:#000}ion-label[_ngcontent-%COMP%]{color:#000}.modeldiv[_ngcontent-%COMP%]{background:#5260ff}"]}),a})()}];let f=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.Bz.forChild(h),d.Bz]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.ez,r.u5,n.Pc,f]}),a})()}}]);