(function(t){function e(e){for(var i,r,l=e[0],o=e[1],u=e[2],m=0,d=[];m<l.length;m++)r=l[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,l=1;l<a.length;l++){var o=a[l];0!==s[o]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/corona/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b6f":function(t,e,a){"use strict";var i=a("88a4"),s=a.n(i);s.a},2604:function(t,e,a){},2758:function(t,e,a){"use strict";var i=a("92c9"),s=a.n(i);s.a},"29c0":function(t,e,a){"use strict";var i=a("2604"),s=a.n(i);s.a},"2aa4":function(t,e,a){t.exports=a.p+"img/virus.03211638.png"},3050:function(t,e,a){},"4ba4":function(t,e,a){"use strict";var i=a("cbc2"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"node_modules/@fortawesome/fontawesome-free/css/all.css"}}),a("router-view")],1)},n=[],r=a("2877"),l={},o=Object(r["a"])(l,s,n,!1,null,null,null),u=o.exports,c=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("AppNavbar"),t._m(0),a("section",{staticClass:"content"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h1",[t._v("SEARCH")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Enter Country Name"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._l(t.filteredCountries,(function(e){return a("div",{key:e.key,staticClass:"itemWrapper col-xl-3 col-lg-3 col-md-4 col-sm-6"},[a("div",{staticClass:"item"},[a("table",[a("tr",[a("th",{attrs:{colspan:"3"}},[t._v(t._s(e.country))])]),a("tr",[a("td",[t._v("Confirmed")]),a("td",{staticStyle:{"background-color":"#1241E5",color:"#fff","text-align":"center"}},[t._v(" "+t._s(e.confirmed)+" ")])]),a("tr",[a("td",[t._v("Recovered")]),a("td",{staticStyle:{"background-color":"#90EC2C",color:"#000","text-align":"center"}},[t._v(" "+t._s(e.recovered)+" ")])]),a("tr",[a("td",[t._v("Deaths")]),a("td",{staticStyle:{"background-color":"#FF3232",color:"#fff","text-align":"center"}},[t._v(" "+t._s(e.deaths)+" ")])]),a("tr",[a("td",[t._v("Critical")]),a("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.critical))])])])])])}))],2)])]),a("AppFooter")],1)},d=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"header"},[i("div",{staticClass:"banner"},[i("div",{staticClass:"overlay"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"header-text"},[i("h1",[t._v("Coronavirus Covid-19 Informations")]),i("p",[t._v("Reported Cases and Deaths by Country, Territory, or Conveyance")])]),i("div",{staticClass:"corona"},[i("img",{attrs:{src:a("2aa4"),alt:""}})])])])])])])])}],p=(a("4de4"),a("ac1f"),a("466d"),a("841c"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[i("router-link",{staticClass:"navbar-brand",attrs:{to:"/",tag:"a",href:"#"}},[i("img",{staticClass:"logo",attrs:{src:a("a4ef"),alt:""}})]),t._m(0),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[i("ul",{staticClass:"navbar-nav  ml-auto"},[i("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li"}},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),i("span",{staticClass:"sr-only"},[t._v("(current)")])])]),i("router-link",{staticClass:"nav-item",attrs:{to:"/blog",tag:"li"}},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Blog")])]),i("router-link",{staticClass:"nav-item",attrs:{to:"/login",tag:"li"}},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Login")])]),i("router-link",{staticClass:"nav-item",attrs:{to:"/signup",tag:"li"}},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Signup")])])],1)])],1)])}),f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],v={name:"AppNavbar"},g=v,b=(a("e6e1"),Object(r["a"])(g,p,f,!1,null,"24f1e409",null)),h=b.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",[t._v("Developed by Ahmed IBrahim. Copyright © 2020 ")])])])])])}],y={name:"AppFooter"},_=y,q=(a("5f34"),Object(r["a"])(_,C,x,!1,null,"67684fd3",null)),j=q.exports,w=a("bc3a"),k=a.n(w),S={name:"Home",components:{AppNavbar:h,AppFooter:j},data:function(){return{posts:[],item:null,search:""}},computed:{filteredCountries:function(){var t=this;return this.posts.filter((function(e){return e.country.toLowerCase().match(t.search.toLowerCase())}))}},mounted:function(){var t=this;k()({method:"GET",url:"https://covid-19-data.p.rapidapi.com/country/all",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"covid-19-data.p.rapidapi.com","x-rapidapi-key":"0ddd2b3dc0msh3b6ae067984cf94p119361jsn62fd1d057593"},params:{format:"json"}}).then((function(e){t.posts=e.data})).catch((function(t){console.log(t)}))}},A=S,E=(a("1b6f"),Object(r["a"])(A,m,d,!1,null,"2f313500",null)),M=E.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Blog"},[a("AppNavbar"),a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.posts,(function(e){return a("div",{key:e.id,staticClass:"col-xl-3 col-lg-4 col-md-4 col-sm-12"},[a("div",{staticClass:"item"},[a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:e.pic,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.text)+" ")]),t._m(0,!0)])])])])})),0)])])],1)},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"card-text"},[a("small",{staticClass:"text-muted"},[t._v("Last updated 3 mins ago")])])}],I=a("7357"),P={data:function(){return{posts:I}},name:"Blog",components:{AppNavbar:h}},O=P,$=(a("29c0"),Object(r["a"])(O,N,D,!1,null,"29d4dac8",null)),F=$.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signUp"},[a("AppNavbar"),t._m(0),a("AppFooter")],1)},H=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"signup"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12"},[i("form",[i("div",{staticClass:"form-group"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"},[i("i",{staticClass:"fas fa-user",staticStyle:{"font-size":"25px","margin-top":"5px"}})]),i("div",{staticClass:"col-11"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"Enter username"}})])])]),i("div",{staticClass:"form-group"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"},[i("i",{staticClass:"fas fa-envelope",staticStyle:{"font-size":"25px","margin-top":"5px"}})]),i("div",{staticClass:"col-11"},[i("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}})])])]),i("div",{staticClass:"form-group"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"},[i("i",{staticClass:"fas fa-unlock-alt",staticStyle:{"font-size":"25px","margin-top":"5px"}})]),i("div",{staticClass:"col-11"},[i("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"}})])])]),i("div",{staticClass:"form-group"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-1"}),i("div",{staticClass:"col-11"},[i("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Repeat your password"}})])])]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),i("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Check me out")])]),i("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Register")])])]),i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12",staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:a("91a2"),alt:""}})])])])])}],L={name:"SignUp",components:{AppNavbar:h,AppFooter:j}},T=L,z=(a("4ba4"),Object(r["a"])(T,B,H,!1,null,"2bc3a92b",null)),V=z.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("AppNavbar"),t._m(0),a("AppFooter")],1)},R=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12"},[i("form",[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email address")]),i("input",{staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"}})]),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),i("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"}})]),i("div",{staticClass:"form-check"},[i("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),i("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Check me out")])]),i("button",{staticClass:"btn btn-primary",staticStyle:{"margin-top":"30px"},attrs:{type:"submit"}},[t._v("Submit")])])]),i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-12",staticStyle:{"text-align":"center"}},[i("img",{attrs:{src:a("ada6"),alt:""}})])])])])}],J={name:"Login",components:{AppNavbar:h,AppFooter:j}},Q=J,U=(a("2758"),Object(r["a"])(Q,G,R,!1,null,"980b652a",null)),K=U.exports;i["a"].use(c["a"]);var W=[{path:"/",name:"Home",component:M},{path:"/blog",name:"Blog",component:F},{path:"/signup",name:"SignUp",component:V},{path:"/login",name:"Login",component:K}],Y=new c["a"]({mode:"history",base:"/corona/",routes:W}),X=Y,Z=a("2f62");i["a"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}});a("1157"),a("f5df1"),a("4989"),a("dc44"),a("7051");i["a"].config.productionTip=!1,new i["a"]({router:X,store:tt,render:function(t){return t(u)}}).$mount("#app")},"5f34":function(t,e,a){"use strict";var i=a("3050"),s=a.n(i);s.a},"632d":function(t,e,a){},7357:function(t){t.exports=JSON.parse('[{"id":1,"pic":"http://dummyimage.com/170x154.png/cc0000/ffffff","title":"Linnell Dzenisenka","text":"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","date":"10/25/2019"},{"id":2,"pic":"http://dummyimage.com/103x195.jpg/dddddd/000000","title":"Harley Tebbit","text":"Fusce consequat. Nulla nisl. Nunc nisl. Maecenas rhoncus aliquam. in porttitor pede justo eu massa faucibus. sdfdsa.","date":"2/21/2020"},{"id":3,"pic":"http://dummyimage.com/249x231.bmp/cc0000/ffffff","title":"Sigrid Hartigan","text":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","date":"12/7/2019"},{"id":4,"pic":"http://dummyimage.com/128x152.bmp/cc0000/ffffff","title":"Carita Brisson","text":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","date":"10/25/2019"},{"id":5,"pic":"http://dummyimage.com/164x236.png/ff4444/ffffff","title":"Berton Kaas","text":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","date":"2/6/2020"},{"id":6,"pic":"http://dummyimage.com/180x162.jpg/ff4444/ffffff","title":"Neila Skerm","text":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","date":"8/5/2019"},{"id":7,"pic":"http://dummyimage.com/240x247.jpg/dddddd/000000","title":"Hadleigh Boichat","text":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\\n\\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","date":"3/30/2020"},{"id":8,"pic":"http://dummyimage.com/102x109.bmp/ff4444/ffffff","title":"Collin Yezafovich","text":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","date":"1/15/2020"},{"id":9,"pic":"http://dummyimage.com/184x182.bmp/cc0000/ffffff","title":"Dylan Ameer-Beg","text":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","date":"9/14/2019"},{"id":10,"pic":"http://dummyimage.com/133x199.bmp/ff4444/ffffff","title":"Norma Alltimes","text":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","date":"8/17/2019"},{"id":11,"pic":"http://dummyimage.com/167x153.jpg/5fa2dd/ffffff","title":"Mort Toe","text":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\\n\\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","date":"1/31/2020"},{"id":12,"pic":"http://dummyimage.com/155x177.png/dddddd/000000","title":"Ulberto Saffe","text":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\\n\\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.","date":"7/15/2019"},{"id":13,"pic":"http://dummyimage.com/135x233.jpg/dddddd/000000","title":"Haven Glancy","text":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\\n\\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\\n\\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","date":"6/21/2019"},{"id":14,"pic":"http://dummyimage.com/202x182.jpg/cc0000/ffffff","title":"Jerald Lacheze","text":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","date":"1/31/2020"},{"id":15,"pic":"http://dummyimage.com/241x206.bmp/5fa2dd/ffffff","title":"Brandon Gross","text":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\\n\\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\\n\\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.","date":"7/6/2019"},{"id":16,"pic":"http://dummyimage.com/239x196.png/cc0000/ffffff","title":"Chad Gonnet","text":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\\n\\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\\n\\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","date":"10/17/2019"},{"id":17,"pic":"http://dummyimage.com/151x177.jpg/dddddd/000000","title":"Dasi Magee","text":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","date":"9/19/2019"},{"id":18,"pic":"http://dummyimage.com/172x198.jpg/cc0000/ffffff","title":"Nada Fosher","text":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\\n\\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","date":"2/17/2020"},{"id":19,"pic":"http://dummyimage.com/146x115.jpg/dddddd/000000","title":"Eliza Dryburgh","text":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\\n\\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","date":"1/24/2020"},{"id":20,"pic":"http://dummyimage.com/212x163.bmp/dddddd/000000","title":"Benjamin Stapleton","text":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","date":"3/24/2020"}]')},"88a4":function(t,e,a){},"91a2":function(t,e,a){t.exports=a.p+"img/signup-image.75eb7c4e.jpg"},"92c9":function(t,e,a){},a4ef:function(t,e,a){t.exports=a.p+"img/logo.8b9eb234.png"},ada6:function(t,e,a){t.exports=a.p+"img/signin-image.d586706c.jpg"},cbc2:function(t,e,a){},dc44:function(t,e,a){},e6e1:function(t,e,a){"use strict";var i=a("632d"),s=a.n(i);s.a}});
//# sourceMappingURL=app.060c8608.js.map