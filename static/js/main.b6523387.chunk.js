(this["webpackJsonpreact_redux-list-of-posts"]=this["webpackJsonpreact_redux-list-of-posts"]||[]).push([[0],{28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(10),r=n.n(s),c=n(6),a=n(1),o=n.n(a),i=n(8),u=n(4),l=n(3),d=n(7),j=n(2),m=n.n(j),b=(n(28),n(0)),p=function(){return Object(b.jsx)("div",{className:"Loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},f=function(){return Object(c.b)()},O=c.c,h=n(19),x=n(5),v="https://mate.academy/students-api",P=function(){var e=Object(l.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("".concat(n.status,"| ").concat(n.text));case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t),{method:"POST",body:n,headers:{"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t),{method:"DELETE"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P("/posts"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P("/posts?userId=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P("/posts/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w("/posts/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P("/comments?postId=".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",y("/comments",JSON.stringify(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w("/comments/".concat(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=Object(x.b)("PostDetailsState/fetchUserPostsById",function(){var e=Object(l.a)(m.a.mark((function e(t,n){var s,r,c,a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=n.dispatch)(U(null)),e.next=4,Promise.all([C(t),I(t)]);case 4:r=e.sent,c=Object(d.a)(r,2),a=c[0],o=c[1],s(U(a)),s(A(o));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),L=Object(x.b)("PostDetailsState/removeCommentInSelectedPostById",function(){var e=Object(l.a)(m.a.mark((function e(t,n){var s,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.dispatch,r=n.getState(),c=r.postDetails.commentsForSelectedPost.filter((function(e){return e.id!==t})),s(Q(!0)),e.next=6,k(t);case 6:s(A(c)),s(Q(!1));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),F=Object(x.b)("PostDetailsState/addCommentInSelectedPost",function(){var e=Object(l.a)(m.a.mark((function e(t,n){var s,r,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.dispatch,r=n.getState(),c=r.postDetails.commentsForSelectedPost,a=[].concat(Object(h.a)(c),[Object(u.a)(Object(u.a)({},t),{},{id:c.length+1})]),s(Q(!0)),e.next=7,S(t);case 7:s(A(a)),s(Q(!1));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),B=Object(x.c)({name:"listOfPosts",initialState:{selectedPostDetails:null,commentsForSelectedPost:[],someCommentIsDeleting:!1,commentsIsShowing:!0},reducers:{setSelectedPostDetails:function(e,t){e.selectedPostDetails=t.payload},setCommentsForSelectedPost:function(e,t){e.commentsForSelectedPost=t.payload},setSomeCommentIsDeleting:function(e,t){e.someCommentIsDeleting=t.payload},setCommentsIsShowing:function(e,t){e.commentsIsShowing=t.payload}},extraReducers:function(e){e.addCase(D.fulfilled,(function(){}))}}),E=B.actions,U=E.setSelectedPostDetails,A=E.setCommentsForSelectedPost,Q=E.setSomeCommentIsDeleting,R=E.setCommentsIsShowing,T=function(e){return e.postDetails.selectedPostDetails},G=function(e){return e.postDetails.commentsForSelectedPost},J=function(e){return e.postDetails.someCommentIsDeleting},H=function(e){return e.postDetails.commentsIsShowing},Y=B.reducer,K=(n(30),function(e){var t=e.selectedPostId,n=f(),s=O(J),r={postId:t,name:"",email:"",body:""},c={name:"",email:"",body:""},o=Object(a.useState)(r),j=Object(d.a)(o,2),h=j[0],x=j[1],v=Object(a.useState)(c),P=Object(d.a)(v,2),y=P[0],w=P[1],_=Object(a.useCallback)(function(){var e=Object(l.a)(m.a.mark((function e(n){var s,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=n.target,r=s.value,c=s.name,x((function(e){var n;return Object(u.a)(Object(u.a)({},e),{},(n={},Object(i.a)(n,c,r),Object(i.a)(n,"postId",t),n))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,h]),g=Object(a.useCallback)(function(){var e=Object(l.a)(m.a.mark((function e(t){var s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),w(Object(u.a)({},c)),h.name.trim()||w((function(e){return Object(u.a)(Object(u.a)({},e),{},{name:"Enter title!"})})),h.body.trim()||w((function(e){return Object(u.a)(Object(u.a)({},e),{},{body:"Enter comment!"})})),h.email.trim()||w((function(e){return Object(u.a)(Object(u.a)({},e),{},{email:"Enter email!"})})),s=Object.values(h).every((function(e){return String(e).trim()})),a=Object.values(y).some((function(e){return e})),s&&!a&&(n(F(h)),x(r));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[h,y]);return Object(b.jsx)(b.Fragment,{children:s?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Updating data"}),Object(b.jsx)(p,{})]}):Object(b.jsxs)("form",{className:"NewCommentForm",onSubmit:g,children:[Object(b.jsxs)("div",{className:"form-field",children:[Object(b.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",onChange:_,value:h.name}),y.name&&Object(b.jsx)("p",{className:"error-message",children:y.name})]}),Object(b.jsxs)("div",{className:"form-field",children:[Object(b.jsx)("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",onChange:_,value:h.email}),y.email&&Object(b.jsx)("p",{className:"error-message",children:y.email})]}),Object(b.jsxs)("div",{className:"form-field",children:[Object(b.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",onChange:_,value:h.body}),y.body&&Object(b.jsx)("p",{className:"error-message",children:y.body})]}),Object(b.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})})}),M=(n(31),Object(a.memo)((function(e){var t=e.selectedPostId,n=f(),s=O(T),r=O(G),c=O(H),o=O(J);return Object(a.useEffect)((function(){n(D(t))}),[t]),Object(b.jsxs)(b.Fragment,{children:[s&&Object(b.jsxs)("div",{className:"PostDetails",children:[Object(b.jsx)("h2",{children:"Post details:"}),Object(b.jsx)("section",{className:"PostDetails__post",children:Object(b.jsx)("p",{children:null===s||void 0===s?void 0:s.body})}),Object(b.jsxs)("section",{className:"PostDetails__comments",children:[Object(b.jsx)("button",{type:"button",className:"button PostDetails__show-hide-button",onClick:function(){n(R(!c))},children:"".concat(c?"Hide":"Show"," ").concat(r.length," comments")}),c&&r.length>0&&Object(b.jsx)("ul",{className:"PostDetails__list",children:r.map((function(e){return Object(b.jsxs)("li",{className:"PostDetails__list-item",children:[Object(b.jsx)("button",{type:"button",className:"btn-close PostDetails__remove-button",onClick:function(){n(L(e.id))},"aria-label":"Close",disabled:o}),Object(b.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(b.jsx)("section",{children:Object(b.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(b.jsx)(K,{selectedPostId:t})})})]}),!s&&Object(b.jsx)(p,{})]})}))),V=n(18),W=n.n(V),q=Object(x.b)("listOfPosts/deleteUserPostById",function(){var e=Object(l.a)(m.a.mark((function e(t,n){var s,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n.dispatch,r=n.getState(),c=r.listOfPosts.posts.filter((function(e){return e.id!==t})),s(te(!0)),e.next=6,N(t);case 6:s(ne(c)),s(te(!1));case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),z=Object(x.b)("listOfPosts/fetchUserPostsById",function(){var e=Object(l.a)(m.a.mark((function e(t,n){var s,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((s=n.dispatch)(te(!0)),0!==t){e.next=8;break}return e.next=5,_();case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,g(t);case 10:r=e.sent;case 11:return s(te(!1)),e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),X=Object(x.c)({name:"listOfPosts",initialState:{selectedPostId:0,posts:[],isPostListLoading:!1,filterByUserId:0,currentQuery:""},reducers:{setPosts:function(e,t){e.posts=t.payload},setSelectedPostId:function(e,t){e.selectedPostId=t.payload},setFilterByUserId:function(e,t){e.filterByUserId=t.payload},setIsPostListLoading:function(e,t){e.isPostListLoading=t.payload},setCurrentQuery:function(e,t){e.currentQuery=t.payload}},extraReducers:function(e){e.addCase(z.fulfilled,(function(e,t){e.posts=t.payload}))}}),Z=X.actions,$=Z.setSelectedPostId,ee=Z.setFilterByUserId,te=Z.setIsPostListLoading,ne=Z.setPosts,se=Z.setCurrentQuery,re=function(e){var t=e.listOfPosts.currentQuery.toLowerCase(),n=e.listOfPosts.posts;return t?n.filter((function(e){return e.title.toLowerCase().includes(t)})):n},ce=function(e){return e.listOfPosts.selectedPostId},ae=function(e){return e.listOfPosts.isPostListLoading},oe=function(e){return e.listOfPosts.filterByUserId},ie=function(e){return e.listOfPosts.currentQuery},ue=X.reducer,le=(n(43),o.a.memo((function(){var e=f();Object(a.useEffect)((function(){e(z(0))}),[]);var t=Object(c.c)(ie),n=Object(a.useState)(t),s=Object(d.a)(n,2),r=s[0],o=s[1],i=Object(a.useCallback)(W()((function(t){e(se(t))}),500),[]),u=O(re),l=O(ae),j=O(oe),m=O(ce),h=Object(a.useCallback)((function(t){e($(m!==t?t:0))}),[m]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:"PostsList__filter-props-block",children:[Object(b.jsxs)("label",{children:["Select a user: \xa0",Object(b.jsxs)("select",{className:"PostsList__user-selector",value:j,onChange:function(t){var n=t.target;e(z(+n.value)),e(ee(+n.value))},children:[Object(b.jsx)("option",{value:"0",children:"All users"}),Object(b.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(b.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(b.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(b.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(b.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(b.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(b.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(b.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(b.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(b.jsx)("option",{value:"10",children:"Leanne Graham"})]})]}),Object(b.jsxs)("label",{children:["Filter:",Object(b.jsx)("input",{className:"PostsList__content-filter",type:"text",value:r,onChange:function(e){var t=e.target.value;o(t),i(t)}})]})]}),l?Object(b.jsx)("h2",{children:"Loading"}):Object(b.jsxs)("div",{className:"PostsList",children:[Object(b.jsx)("h2",{children:"Posts:"}),Object(b.jsx)("ul",{className:"PostsList__list",children:u.map((function(t){return Object(b.jsxs)("li",{className:"PostsList__item",children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("b",{children:["[User #",t.userId,"]:"]}),t.title]}),Object(b.jsxs)("div",{className:"PostsList__btns-container",children:[Object(b.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){h(t.id)},children:m===t.id?"Close":"Open"}),Object(b.jsx)("button",{type:"button",className:"btn-close",onClick:function(){e(q(t.id))},"aria-label":"Close"})]})]},t.id)}))})]}),l&&Object(b.jsx)(p,{})]})}))),de=(n(44),n(45),function(){var e=O(ce);return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("main",{className:"App__main",children:[Object(b.jsx)("div",{className:"App__sidebar",children:Object(b.jsx)(le,{})}),!!e&&Object(b.jsx)("div",{className:"App__content",children:Object(b.jsx)(M,{selectedPostId:e})})]})})}),je=Object(x.a)({reducer:{listOfPosts:ue,postDetails:Y}}),me=(n(46),function(){return Object(b.jsx)(c.a,{store:je,children:Object(b.jsx)(de,{})})});r.a.render(Object(b.jsx)(me,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.b6523387.chunk.js.map