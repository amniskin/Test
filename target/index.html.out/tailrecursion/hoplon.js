// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljsjs.jquery');
goog.require('clojure.set');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 * the prerender task)?
 */
tailrecursion.hoplon.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
tailrecursion.hoplon.static_elements = cljs.core.reduce.call(null,(function (p1__7513_SHARP_,p2__7514_SHARP_){
return cljs.core.assoc.call(null,p1__7513_SHARP_,p2__7514_SHARP_.getAttribute("static-id"),p2__7514_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
tailrecursion.hoplon.do_watch = (function tailrecursion$hoplon$do_watch(){
var args7515 = [];
var len__6061__auto___7518 = arguments.length;
var i__6062__auto___7519 = (0);
while(true){
if((i__6062__auto___7519 < len__6061__auto___7518)){
args7515.push((arguments[i__6062__auto___7519]));

var G__7520 = (i__6062__auto___7519 + (1));
i__6062__auto___7519 = G__7520;
continue;
} else {
}
break;
}

var G__7517 = args7515.length;
switch (G__7517) {
case 2:
return tailrecursion.hoplon.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7515.length)].join('')));

}
});

tailrecursion.hoplon.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
return tailrecursion.hoplon.do_watch.call(null,atom,null,f);
});

tailrecursion.hoplon.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (atom,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,atom));

cljs.core.add_watch.call(null,atom,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

tailrecursion.hoplon.do_watch.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.bust_cache = (function tailrecursion$hoplon$bust_cache(path){
var vec__7524 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var f = cljs.core.nth.call(null,vec__7524,(0),null);
var more = cljs.core.nthnext.call(null,vec__7524,(1));
var vec__7525 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__7525,(0),null);
var f2 = cljs.core.nth.call(null,vec__7525,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("999c3a8c8ee44e138168c5eabf065e15")].join(''),f2], null)))));
});
tailrecursion.hoplon.child_vec = (function tailrecursion$hoplon$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__5022__auto__ = (function (){var and__5010__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__5010__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
var G__7526 = (i + (1));
var G__7527 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__7526;
ret = G__7527;
continue;
}
break;
}
});
tailrecursion.hoplon.__GT_node = (function tailrecursion$hoplon$__GT_node(x){
if(typeof x === 'string'){
return tailrecursion.hoplon.$text.call(null,x);
} else {
if(typeof x === 'number'){
return tailrecursion.hoplon.$text.call(null,[cljs.core.str(x)].join(''));
} else {
return x;

}
}
});
tailrecursion.hoplon.removeChild = Element.prototype.removeChild;
tailrecursion.hoplon.appendChild = Element.prototype.appendChild;
tailrecursion.hoplon.insertBefore = Element.prototype.insertBefore;
tailrecursion.hoplon.replaceChild = Element.prototype.replaceChild;
tailrecursion.hoplon.setAttribute = Element.prototype.setAttribute;
tailrecursion.hoplon.merge_kids = (function tailrecursion$hoplon$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__7538 = new$__$1;
var vec__7540 = G__7538;
var x = cljs.core.nth.call(null,vec__7540,(0),null);
var xs = cljs.core.nthnext.call(null,vec__7540,(1));
var G__7539 = tailrecursion.hoplon.child_vec.call(null,this$);
var vec__7541 = G__7539;
var k = cljs.core.nth.call(null,vec__7541,(0),null);
var ks = cljs.core.nthnext.call(null,vec__7541,(1));
var kids = vec__7541;
var G__7538__$1 = G__7538;
var G__7539__$1 = G__7539;
while(true){
var vec__7542 = G__7538__$1;
var x__$1 = cljs.core.nth.call(null,vec__7542,(0),null);
var xs__$1 = cljs.core.nthnext.call(null,vec__7542,(1));
var vec__7543 = G__7539__$1;
var k__$1 = cljs.core.nth.call(null,vec__7543,(0),null);
var ks__$1 = cljs.core.nthnext.call(null,vec__7543,(1));
var kids__$1 = vec__7543;
if(cljs.core.truth_((function (){var or__5022__auto__ = x__$1;
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return k__$1;
}
})())){
var G__7544 = xs__$1;
var G__7545 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
tailrecursion.hoplon.appendChild.call(this$,tailrecursion.hoplon.__GT_node.call(null,x__$1));

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
tailrecursion.hoplon.removeChild.call(this$,tailrecursion.hoplon.__GT_node.call(null,k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
tailrecursion.hoplon.insertBefore.call(this$,tailrecursion.hoplon.__GT_node.call(null,x__$1),tailrecursion.hoplon.__GT_node.call(null,k__$1));

return kids__$2;
})()
)));
G__7538__$1 = G__7544;
G__7539__$1 = G__7545;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.hoplon.ensure_kids_BANG_ = (function tailrecursion$hoplon$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_7546 = cljs.core.atom.call(null,tailrecursion.hoplon.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_7546;

tailrecursion.hoplon.do_watch.call(null,kids_7546,cljs.core.partial.call(null,tailrecursion.hoplon.merge_kids,this$__$1));
}

return this$__$1;
});
tailrecursion.hoplon.set_appendChild_BANG_ = (function tailrecursion$hoplon$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
tailrecursion.hoplon.ensure_kids_BANG_.call(null,this$__$1);

var kids_7549 = kidfn.call(null,this$__$1);
var i_7550 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_7549));
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x__$1))){
tailrecursion.hoplon.do_watch.call(null,x__$1,((function (kids_7549,i_7550,x__$1,this$__$1){
return (function (p1__7548_SHARP_,p2__7547_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_7549,cljs.core.assoc,i_7550,p2__7547_SHARP_);
});})(kids_7549,i_7550,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_7549,cljs.core.assoc,i_7550,x__$1);
}

return x__$1;
});
});
tailrecursion.hoplon.set_removeChild_BANG_ = (function tailrecursion$hoplon$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
tailrecursion.hoplon.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__7551_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__7551_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
tailrecursion.hoplon.set_insertBefore_BANG_ = (function tailrecursion$hoplon$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
tailrecursion.hoplon.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__7552_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__7552_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
tailrecursion.hoplon.set_replaceChild_BANG_ = (function tailrecursion$hoplon$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
tailrecursion.hoplon.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__7553_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__7553_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
tailrecursion.hoplon.set_setAttribute_BANG_ = (function tailrecursion$hoplon$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_7554 = cljs.core.keyword.call(null,k);
var attr_7555 = attrfn.call(null,this$__$1);
var has_QMARK__7556 = (function (){var and__5010__auto__ = attr_7555;
if(cljs.core.truth_(and__5010__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_7555),kk_7554);
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__7556)){
cljs.core.swap_BANG_.call(null,attr_7555,cljs.core.assoc,kk_7554,v);
} else {
tailrecursion.hoplon.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
tailrecursion.hoplon.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__7557_SHARP_){
return p1__7557_SHARP_.hoplonKids;
}));
tailrecursion.hoplon.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__7558_SHARP_){
return p1__7558_SHARP_.hoplonKids;
}));
tailrecursion.hoplon.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__7559_SHARP_){
return p1__7559_SHARP_.hoplonKids;
}));
tailrecursion.hoplon.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__7560_SHARP_){
return p1__7560_SHARP_.hoplonKids;
}));

tailrecursion.hoplon.ICustomElement = {};

tailrecursion.hoplon._set_attribute_BANG_ = (function tailrecursion$hoplon$_set_attribute_BANG_(this$,k,v){
if((!((this$ == null))) && (!((this$.tailrecursion$hoplon$ICustomElement$_set_attribute_BANG_$arity$3 == null)))){
return this$.tailrecursion$hoplon$ICustomElement$_set_attribute_BANG_$arity$3(this$,k,v);
} else {
var x__5658__auto__ = (((this$ == null))?null:this$);
var m__5659__auto__ = (tailrecursion.hoplon._set_attribute_BANG_[goog.typeOf(x__5658__auto__)]);
if(!((m__5659__auto__ == null))){
return m__5659__auto__.call(null,this$,k,v);
} else {
var m__5659__auto____$1 = (tailrecursion.hoplon._set_attribute_BANG_["_"]);
if(!((m__5659__auto____$1 == null))){
return m__5659__auto____$1.call(null,this$,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attribute!",this$);
}
}
}
});

tailrecursion.hoplon._append_child_BANG_ = (function tailrecursion$hoplon$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.tailrecursion$hoplon$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.tailrecursion$hoplon$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__5658__auto__ = (((this$ == null))?null:this$);
var m__5659__auto__ = (tailrecursion.hoplon._append_child_BANG_[goog.typeOf(x__5658__auto__)]);
if(!((m__5659__auto__ == null))){
return m__5659__auto__.call(null,this$,child);
} else {
var m__5659__auto____$1 = (tailrecursion.hoplon._append_child_BANG_["_"]);
if(!((m__5659__auto____$1 == null))){
return m__5659__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

tailrecursion.hoplon._remove_child_BANG_ = (function tailrecursion$hoplon$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.tailrecursion$hoplon$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.tailrecursion$hoplon$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__5658__auto__ = (((this$ == null))?null:this$);
var m__5659__auto__ = (tailrecursion.hoplon._remove_child_BANG_[goog.typeOf(x__5658__auto__)]);
if(!((m__5659__auto__ == null))){
return m__5659__auto__.call(null,this$,child);
} else {
var m__5659__auto____$1 = (tailrecursion.hoplon._remove_child_BANG_["_"]);
if(!((m__5659__auto____$1 == null))){
return m__5659__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

tailrecursion.hoplon._replace_child_BANG_ = (function tailrecursion$hoplon$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.tailrecursion$hoplon$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.tailrecursion$hoplon$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__5658__auto__ = (((this$ == null))?null:this$);
var m__5659__auto__ = (tailrecursion.hoplon._replace_child_BANG_[goog.typeOf(x__5658__auto__)]);
if(!((m__5659__auto__ == null))){
return m__5659__auto__.call(null,this$,new$,existing);
} else {
var m__5659__auto____$1 = (tailrecursion.hoplon._replace_child_BANG_["_"]);
if(!((m__5659__auto____$1 == null))){
return m__5659__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

tailrecursion.hoplon._insert_before_BANG_ = (function tailrecursion$hoplon$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.tailrecursion$hoplon$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.tailrecursion$hoplon$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__5658__auto__ = (((this$ == null))?null:this$);
var m__5659__auto__ = (tailrecursion.hoplon._insert_before_BANG_[goog.typeOf(x__5658__auto__)]);
if(!((m__5659__auto__ == null))){
return m__5659__auto__.call(null,this$,new$,existing);
} else {
var m__5659__auto____$1 = (tailrecursion.hoplon._insert_before_BANG_["_"]);
if(!((m__5659__auto____$1 == null))){
return m__5659__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

tailrecursion.hoplon.append_child_BANG_ = (function tailrecursion$hoplon$append_child_BANG_(this$,child){
return tailrecursion.hoplon._append_child_BANG_.call(null,this$,child);
});
tailrecursion.hoplon.set_attribute_BANG_ = (function tailrecursion$hoplon$set_attribute_BANG_(this$,k,v){
return tailrecursion.hoplon._set_attribute_BANG_.call(null,this$,k,v);
});
tailrecursion.hoplon.remove_child_BANG_ = (function tailrecursion$hoplon$remove_child_BANG_(this$,child){
return tailrecursion.hoplon._remove_child_BANG_.call(null,this$,child);
});
tailrecursion.hoplon.replace_child_BANG_ = (function tailrecursion$hoplon$replace_child_BANG_(this$,new$,existing){
return tailrecursion.hoplon._replace_child_BANG_.call(null,this$,new$,existing);
});
tailrecursion.hoplon.insert_before_BANG_ = (function tailrecursion$hoplon$insert_before_BANG_(this$,new$,existing){
return tailrecursion.hoplon._insert_before_BANG_.call(null,this$,new$,existing);
});
tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__7563_SHARP_){
return (p1__7563_SHARP_ instanceof Node);
}):(function (p1__7564_SHARP_){
try{return p1__7564_SHARP_.nodeType;
}catch (e7565){if((e7565 instanceof Error)){
var _ = e7565;
return null;
} else {
throw e7565;

}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__7566_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__7566_SHARP_);
}catch (e7567){if((e7567 instanceof Error)){
var _ = e7567;
return null;
} else {
throw e7567;

}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__7568_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__7568_SHARP_);
}catch (e7569){if((e7569 instanceof Error)){
var _ = e7569;
return null;
} else {
throw e7569;

}
}}));
tailrecursion.hoplon.safe_nth = (function tailrecursion$hoplon$safe_nth(){
var args7570 = [];
var len__6061__auto___7574 = arguments.length;
var i__6062__auto___7575 = (0);
while(true){
if((i__6062__auto___7575 < len__6061__auto___7574)){
args7570.push((arguments[i__6062__auto___7575]));

var G__7576 = (i__6062__auto___7575 + (1));
i__6062__auto___7575 = G__7576;
continue;
} else {
}
break;
}

var G__7572 = args7570.length;
switch (G__7572) {
case 2:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7570.length)].join('')));

}
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return tailrecursion.hoplon.safe_nth.call(null,coll,index,null);
});

tailrecursion.hoplon.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e7573){if((e7573 instanceof Error)){
var _ = e7573;
return not_found;
} else {
throw e7573;

}
}});

tailrecursion.hoplon.safe_nth.cljs$lang$maxFixedArity = 3;
tailrecursion.hoplon.timeout = (function tailrecursion$hoplon$timeout(){
var args7578 = [];
var len__6061__auto___7581 = arguments.length;
var i__6062__auto___7582 = (0);
while(true){
if((i__6062__auto___7582 < len__6061__auto___7581)){
args7578.push((arguments[i__6062__auto___7582]));

var G__7583 = (i__6062__auto___7582 + (1));
i__6062__auto___7582 = G__7583;
continue;
} else {
}
break;
}

var G__7580 = args7578.length;
switch (G__7580) {
case 1:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7578.length)].join('')));

}
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return tailrecursion.hoplon.timeout.call(null,f,(0));
});

tailrecursion.hoplon.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

tailrecursion.hoplon.timeout.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.when_dom = (function tailrecursion$hoplon$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,(function tailrecursion$hoplon$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return tailrecursion.hoplon.timeout.call(null,tailrecursion$hoplon$when_dom_$_doit,(20));
}
}));
}
});
tailrecursion.hoplon.parse_args = (function tailrecursion$hoplon$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__7593 = args;
var vec__7594 = G__7593;
var arg = cljs.core.nth.call(null,vec__7594,(0),null);
var args__$1 = cljs.core.nthnext.call(null,vec__7594,(1));
var attr__$1 = attr;
var kids__$1 = kids;
var G__7593__$1 = G__7593;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__7595 = G__7593__$1;
var arg__$1 = cljs.core.nth.call(null,vec__7595,(0),null);
var args__$2 = cljs.core.nthnext.call(null,vec__7595,(1));
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__7596 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__7593__$1,attr__$2,kids__$2,vec__7595,arg__$1,args__$2,attr,kids,G__7593,vec__7594,arg,args__$1){
return (function (p1__7585_SHARP_,p2__7586_SHARP_,p3__7587_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__7585_SHARP_,p2__7586_SHARP_,p3__7587_SHARP_);
});})(attr__$1,kids__$1,G__7593__$1,attr__$2,kids__$2,vec__7595,arg__$1,args__$2,attr,kids,G__7593,vec__7594,arg,args__$1))
,attr__$2,arg__$1);
var G__7597 = kids__$2;
var G__7598 = args__$2;
attr__$1 = G__7596;
kids__$1 = G__7597;
G__7593__$1 = G__7598;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__7599 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__7600 = kids__$2;
var G__7601 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__7599;
kids__$1 = G__7600;
G__7593__$1 = G__7601;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.seq_QMARK__STAR_.call(null,arg__$1))){
var G__7602 = attr__$2;
var G__7603 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__7604 = args__$2;
attr__$1 = G__7602;
kids__$1 = G__7603;
G__7593__$1 = G__7604;
continue;
} else {
if(cljs.core.truth_(tailrecursion.hoplon.vector_QMARK__STAR_.call(null,arg__$1))){
var G__7605 = attr__$2;
var G__7606 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__7607 = args__$2;
attr__$1 = G__7605;
kids__$1 = G__7606;
G__7593__$1 = G__7607;
continue;
} else {
var G__7608 = attr__$2;
var G__7609 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__7610 = args__$2;
attr__$1 = G__7608;
kids__$1 = G__7609;
G__7593__$1 = G__7610;
continue;

}
}
}
}
}
break;
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function tailrecursion$hoplon$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v))){
tailrecursion.hoplon.do_watch.call(null,v,((function (this$__$3,this$__$1){
return (function (p1__7612_SHARP_,p2__7611_SHARP_){
return tailrecursion.hoplon.do_BANG_.call(null,this$__$3,k,p2__7611_SHARP_);
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,v)){
tailrecursion.hoplon.on_BANG_.call(null,this$__$3,k,v);
} else {
tailrecursion.hoplon.do_BANG_.call(null,this$__$3,k,v);

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
tailrecursion.hoplon.add_children_BANG_ = (function tailrecursion$hoplon$add_children_BANG_(this$,p__7614){
var vec__7620 = p__7614;
var child_cell = cljs.core.nth.call(null,vec__7620,(0),null);
var _ = cljs.core.nthnext.call(null,vec__7620,(1));
var kids = vec__7620;
var this$__$1 = this$;
var node_7625 = ((function (this$__$1,vec__7620,child_cell,_,kids){
return (function (p1__7613_SHARP_){
if(typeof p1__7613_SHARP_ === 'string'){
return tailrecursion.hoplon.$text.call(null,p1__7613_SHARP_);
} else {
if(typeof p1__7613_SHARP_ === 'number'){
return tailrecursion.hoplon.$text.call(null,[cljs.core.str(p1__7613_SHARP_)].join(''));
} else {
return p1__7613_SHARP_;

}
}
});})(this$__$1,vec__7620,child_cell,_,kids))
;
var seq__7621_7626 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__7622_7627 = null;
var count__7623_7628 = (0);
var i__7624_7629 = (0);
while(true){
if((i__7624_7629 < count__7623_7628)){
var x_7630 = cljs.core._nth.call(null,chunk__7622_7627,i__7624_7629);
var temp__4425__auto___7631 = node_7625.call(null,x_7630);
if(cljs.core.truth_(temp__4425__auto___7631)){
var x_7632__$1 = temp__4425__auto___7631;
tailrecursion.hoplon.append_child_BANG_.call(null,this$__$1,x_7632__$1);
} else {
}

var G__7633 = seq__7621_7626;
var G__7634 = chunk__7622_7627;
var G__7635 = count__7623_7628;
var G__7636 = (i__7624_7629 + (1));
seq__7621_7626 = G__7633;
chunk__7622_7627 = G__7634;
count__7623_7628 = G__7635;
i__7624_7629 = G__7636;
continue;
} else {
var temp__4425__auto___7637 = cljs.core.seq.call(null,seq__7621_7626);
if(temp__4425__auto___7637){
var seq__7621_7638__$1 = temp__4425__auto___7637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7621_7638__$1)){
var c__5806__auto___7639 = cljs.core.chunk_first.call(null,seq__7621_7638__$1);
var G__7640 = cljs.core.chunk_rest.call(null,seq__7621_7638__$1);
var G__7641 = c__5806__auto___7639;
var G__7642 = cljs.core.count.call(null,c__5806__auto___7639);
var G__7643 = (0);
seq__7621_7626 = G__7640;
chunk__7622_7627 = G__7641;
count__7623_7628 = G__7642;
i__7624_7629 = G__7643;
continue;
} else {
var x_7644 = cljs.core.first.call(null,seq__7621_7638__$1);
var temp__4425__auto___7645__$1 = node_7625.call(null,x_7644);
if(cljs.core.truth_(temp__4425__auto___7645__$1)){
var x_7646__$1 = temp__4425__auto___7645__$1;
tailrecursion.hoplon.append_child_BANG_.call(null,this$__$1,x_7646__$1);
} else {
}

var G__7647 = cljs.core.next.call(null,seq__7621_7638__$1);
var G__7648 = null;
var G__7649 = (0);
var G__7650 = (0);
seq__7621_7626 = G__7647;
chunk__7622_7627 = G__7648;
count__7623_7628 = G__7649;
i__7624_7629 = G__7650;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__7657__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__7652 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7652,(0),null);
var kids = cljs.core.nth.call(null,vec__7652,(1),null);
var G__7653 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7653,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7653,kids);

return G__7653;
};
var G__7657 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__7658__i = 0, G__7658__a = new Array(arguments.length -  1);
while (G__7658__i < G__7658__a.length) {G__7658__a[G__7658__i] = arguments[G__7658__i + 1]; ++G__7658__i;}
  args = new cljs.core.IndexedSeq(G__7658__a,0);
} 
return G__7657__delegate.call(this,self__,args);};
G__7657.cljs$lang$maxFixedArity = 1;
G__7657.cljs$lang$applyTo = (function (arglist__7659){
var self__ = cljs.core.first(arglist__7659);
var args = cljs.core.rest(arglist__7659);
return G__7657__delegate(self__,args);
});
G__7657.cljs$core$IFn$_invoke$arity$variadic = G__7657__delegate;
return G__7657;
})()
;

Element.prototype.apply = (function (self__,args7651){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args7651)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__7660__delegate = function (args){
var this$ = this;
var vec__7654 = tailrecursion.hoplon.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__7654,(0),null);
var kids = cljs.core.nth.call(null,vec__7654,(1),null);
var G__7655 = this$;
tailrecursion.hoplon.add_attributes_BANG_.call(null,G__7655,attr);

tailrecursion.hoplon.add_children_BANG_.call(null,G__7655,kids);

return G__7655;
};
var G__7660 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7661__i = 0, G__7661__a = new Array(arguments.length -  0);
while (G__7661__i < G__7661__a.length) {G__7661__a[G__7661__i] = arguments[G__7661__i + 0]; ++G__7661__i;}
  args = new cljs.core.IndexedSeq(G__7661__a,0);
} 
return G__7660__delegate.call(this,args);};
G__7660.cljs$lang$maxFixedArity = 0;
G__7660.cljs$lang$applyTo = (function (arglist__7662){
var args = cljs.core.seq(arglist__7662);
return G__7660__delegate(args);
});
G__7660.cljs$core$IFn$_invoke$arity$variadic = G__7660__delegate;
return G__7660;
})()
;

Element.prototype.tailrecursion$hoplon$ICustomElement$ = true;

Element.prototype.tailrecursion$hoplon$ICustomElement$_set_attribute_BANG_$arity$3 = (function (this$,k,v){
var this$__$1 = this;
var _ = null;
var k_7663__$1 = cljs.core.name.call(null,k);
var e_7664 = jQuery(this$__$1);
if(cljs.core._EQ_.call(null,false,v)){
e_7664.removeAttr(k_7663__$1);
} else {
e_7664.attr(k_7663__$1,((cljs.core._EQ_.call(null,true,v))?k_7663__$1:v));
}

return _;
});

Element.prototype.tailrecursion$hoplon$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,tailrecursion.hoplon.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e7656){if((e7656 instanceof Error)){
var _ = e7656;
return null;
} else {
throw e7656;

}
}}
});

Element.prototype.tailrecursion$hoplon$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.tailrecursion$hoplon$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.tailrecursion$hoplon$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
tailrecursion.hoplon.make_singleton_ctor = (function tailrecursion$hoplon$make_singleton_ctor(tag){
return (function() { 
var G__7667__delegate = function (args){
var vec__7666 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7666,(0),null);
var kids = cljs.core.nth.call(null,vec__7666,(1),null);
var elem = tailrecursion.hoplon.ensure_kids_BANG_.call(null,(document.getElementsByTagName(tag)[(0)]));
tailrecursion.hoplon.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.reset_BANG_.call(null,elem.hoplonKids,cljs.core.vec.call(null,kids));
} else {
return null;
}
};
var G__7667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7668__i = 0, G__7668__a = new Array(arguments.length -  0);
while (G__7668__i < G__7668__a.length) {G__7668__a[G__7668__i] = arguments[G__7668__i + 0]; ++G__7668__i;}
  args = new cljs.core.IndexedSeq(G__7668__a,0);
} 
return G__7667__delegate.call(this,args);};
G__7667.cljs$lang$maxFixedArity = 0;
G__7667.cljs$lang$applyTo = (function (arglist__7669){
var args = cljs.core.seq(arglist__7669);
return G__7667__delegate(args);
});
G__7667.cljs$core$IFn$_invoke$arity$variadic = G__7667__delegate;
return G__7667;
})()
;
});
tailrecursion.hoplon.make_elem_ctor = (function tailrecursion$hoplon$make_elem_ctor(tag){
return (function() { 
var G__7670__delegate = function (args){
return cljs.core.apply.call(null,tailrecursion.hoplon.ensure_kids_BANG_.call(null,document.createElement(tag)),args);
};
var G__7670 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7671__i = 0, G__7671__a = new Array(arguments.length -  0);
while (G__7671__i < G__7671__a.length) {G__7671__a[G__7671__i] = arguments[G__7671__i + 0]; ++G__7671__i;}
  args = new cljs.core.IndexedSeq(G__7671__a,0);
} 
return G__7670__delegate.call(this,args);};
G__7670.cljs$lang$maxFixedArity = 0;
G__7670.cljs$lang$applyTo = (function (arglist__7672){
var args = cljs.core.seq(arglist__7672);
return G__7670__delegate(args);
});
G__7670.cljs$core$IFn$_invoke$arity$variadic = G__7670__delegate;
return G__7670;
})()
;
});
tailrecursion.hoplon.html = (function tailrecursion$hoplon$html(){
var args__6068__auto__ = [];
var len__6061__auto___7675 = arguments.length;
var i__6062__auto___7676 = (0);
while(true){
if((i__6062__auto___7676 < len__6061__auto___7675)){
args__6068__auto__.push((arguments[i__6062__auto___7676]));

var G__7677 = (i__6062__auto___7676 + (1));
i__6062__auto___7676 = G__7677;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__7674 = tailrecursion.hoplon.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__7674,(0),null);
var _ = cljs.core.nth.call(null,vec__7674,(1),null);
return tailrecursion.hoplon.add_attributes_BANG_.call(null,(document.getElementsByTagName("html")[(0)]),attrs);
});

tailrecursion.hoplon.html.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.html.cljs$lang$applyTo = (function (seq7673){
return tailrecursion.hoplon.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7673));
});
tailrecursion.hoplon.body = tailrecursion.hoplon.make_singleton_ctor.call(null,"body");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_singleton_ctor.call(null,"head");
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.main = tailrecursion.hoplon.make_elem_ctor.call(null,"main");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function tailrecursion$hoplon$$text(p1__7678_SHARP_){
return document.createTextNode(p1__7678_SHARP_);
});
tailrecursion.hoplon.$comment = (function tailrecursion$hoplon$$comment(p1__7679_SHARP_){
return document.createComment(p1__7679_SHARP_);
});
tailrecursion.hoplon._LT__BANG___ = tailrecursion.hoplon.$comment;
tailrecursion.hoplon.___GT_ = new cljs.core.Keyword("tailrecursion.hoplon","-->","tailrecursion.hoplon/-->",-492295756);
tailrecursion.hoplon.add_initfn_BANG_ = (function tailrecursion$hoplon$add_initfn_BANG_(f){
return jQuery(f);
});
tailrecursion.hoplon.page_load = (function tailrecursion$hoplon$page_load(){
return jQuery(document).trigger("page-load");
});
tailrecursion.hoplon.on_page_load = (function tailrecursion$hoplon$on_page_load(f){
return jQuery(document).on("page-load",f);
});
tailrecursion.hoplon.add_initfn_BANG_.call(null,(function (){
return jQuery("body").on("submit",(function (p1__7680_SHARP_){
var e = jQuery(p1__7680_SHARP_.target);
if(cljs.core.truth_((function (){var or__5022__auto__ = e.attr("action");
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__7680_SHARP_.preventDefault();
}
}));
}));
tailrecursion.hoplon.text_val_BANG_ = (function tailrecursion$hoplon$text_val_BANG_(){
var args7681 = [];
var len__6061__auto___7684 = arguments.length;
var i__6062__auto___7685 = (0);
while(true){
if((i__6062__auto___7685 < len__6061__auto___7684)){
args7681.push((arguments[i__6062__auto___7685]));

var G__7686 = (i__6062__auto___7685 + (1));
i__6062__auto___7685 = G__7686;
continue;
} else {
}
break;
}

var G__7683 = args7681.length;
switch (G__7683) {
case 1:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7681.length)].join('')));

}
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

tailrecursion.hoplon.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,tailrecursion.hoplon.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

tailrecursion.hoplon.text_val_BANG_.cljs$lang$maxFixedArity = 2;
tailrecursion.hoplon.check_val_BANG_ = (function tailrecursion$hoplon$check_val_BANG_(){
var args7688 = [];
var len__6061__auto___7691 = arguments.length;
var i__6062__auto___7692 = (0);
while(true){
if((i__6062__auto___7692 < len__6061__auto___7691)){
args7688.push((arguments[i__6062__auto___7692]));

var G__7693 = (i__6062__auto___7692 + (1));
i__6062__auto___7692 = G__7693;
continue;
} else {
}
break;
}

var G__7690 = args7688.length;
switch (G__7690) {
case 1:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7688.length)].join('')));

}
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

tailrecursion.hoplon.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

tailrecursion.hoplon.check_val_BANG_.cljs$lang$maxFixedArity = 2;
if(typeof tailrecursion.hoplon.do_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","do!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,key,val){
return key;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,key,val){
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__7695__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__7695 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__7696__i = 0, G__7696__a = new Array(arguments.length -  2);
while (G__7696__i < G__7696__a.length) {G__7696__a[G__7696__i] = arguments[G__7696__i + 2]; ++G__7696__i;}
  args = new cljs.core.IndexedSeq(G__7696__a,0);
} 
return G__7695__delegate.call(this,elem,_,args);};
G__7695.cljs$lang$maxFixedArity = 2;
G__7695.cljs$lang$applyTo = (function (arglist__7697){
var elem = cljs.core.first(arglist__7697);
arglist__7697 = cljs.core.next(arglist__7697);
var _ = cljs.core.first(arglist__7697);
var args = cljs.core.rest(arglist__7697);
return G__7695__delegate(elem,_,args);
});
G__7695.cljs$core$IFn$_invoke$arity$variadic = G__7695__delegate;
return G__7695;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__7698 = cljs.core.seq.call(null,kvs);
var chunk__7699 = null;
var count__7700 = (0);
var i__7701 = (0);
while(true){
if((i__7701 < count__7700)){
var vec__7702 = cljs.core._nth.call(null,chunk__7699,i__7701);
var k = cljs.core.nth.call(null,vec__7702,(0),null);
var v = cljs.core.nth.call(null,vec__7702,(1),null);
var k_7704__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7704__$1);
} else {
e.attr(k_7704__$1,((cljs.core._EQ_.call(null,true,v))?k_7704__$1:v));
}

var G__7705 = seq__7698;
var G__7706 = chunk__7699;
var G__7707 = count__7700;
var G__7708 = (i__7701 + (1));
seq__7698 = G__7705;
chunk__7699 = G__7706;
count__7700 = G__7707;
i__7701 = G__7708;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7698);
if(temp__4425__auto__){
var seq__7698__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7698__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7698__$1);
var G__7709 = cljs.core.chunk_rest.call(null,seq__7698__$1);
var G__7710 = c__5806__auto__;
var G__7711 = cljs.core.count.call(null,c__5806__auto__);
var G__7712 = (0);
seq__7698 = G__7709;
chunk__7699 = G__7710;
count__7700 = G__7711;
i__7701 = G__7712;
continue;
} else {
var vec__7703 = cljs.core.first.call(null,seq__7698__$1);
var k = cljs.core.nth.call(null,vec__7703,(0),null);
var v = cljs.core.nth.call(null,vec__7703,(1),null);
var k_7713__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_7713__$1);
} else {
e.attr(k_7713__$1,((cljs.core._EQ_.call(null,true,v))?k_7713__$1:v));
}

var G__7714 = cljs.core.next.call(null,seq__7698__$1);
var G__7715 = null;
var G__7716 = (0);
var G__7717 = (0);
seq__7698 = G__7714;
chunk__7699 = G__7715;
count__7700 = G__7716;
i__7701 = G__7717;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__7718_SHARP_){
return cljs.core.zipmap.call(null,p1__7718_SHARP_,cljs.core.repeat.call(null,true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_.call(null,kvs))?kvs:__GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs))));
var seq__7719 = cljs.core.seq.call(null,clmap);
var chunk__7720 = null;
var count__7721 = (0);
var i__7722 = (0);
while(true){
if((i__7722 < count__7721)){
var vec__7723 = cljs.core._nth.call(null,chunk__7720,i__7722);
var c = cljs.core.nth.call(null,vec__7723,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7723,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7725 = seq__7719;
var G__7726 = chunk__7720;
var G__7727 = count__7721;
var G__7728 = (i__7722 + (1));
seq__7719 = G__7725;
chunk__7720 = G__7726;
count__7721 = G__7727;
i__7722 = G__7728;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7719);
if(temp__4425__auto__){
var seq__7719__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7719__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7719__$1);
var G__7729 = cljs.core.chunk_rest.call(null,seq__7719__$1);
var G__7730 = c__5806__auto__;
var G__7731 = cljs.core.count.call(null,c__5806__auto__);
var G__7732 = (0);
seq__7719 = G__7729;
chunk__7720 = G__7730;
count__7721 = G__7731;
i__7722 = G__7732;
continue;
} else {
var vec__7724 = cljs.core.first.call(null,seq__7719__$1);
var c = cljs.core.nth.call(null,vec__7724,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__7724,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__7733 = cljs.core.next.call(null,seq__7719__$1);
var G__7734 = null;
var G__7735 = (0);
var G__7736 = (0);
seq__7719 = G__7733;
chunk__7720 = G__7734;
count__7721 = G__7735;
i__7722 = G__7736;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
var e = jQuery(elem);
var seq__7737 = cljs.core.seq.call(null,kvs);
var chunk__7738 = null;
var count__7739 = (0);
var i__7740 = (0);
while(true){
if((i__7740 < count__7739)){
var vec__7741 = cljs.core._nth.call(null,chunk__7738,i__7740);
var k = cljs.core.nth.call(null,vec__7741,(0),null);
var v = cljs.core.nth.call(null,vec__7741,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7743 = seq__7737;
var G__7744 = chunk__7738;
var G__7745 = count__7739;
var G__7746 = (i__7740 + (1));
seq__7737 = G__7743;
chunk__7738 = G__7744;
count__7739 = G__7745;
i__7740 = G__7746;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7737);
if(temp__4425__auto__){
var seq__7737__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7737__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7737__$1);
var G__7747 = cljs.core.chunk_rest.call(null,seq__7737__$1);
var G__7748 = c__5806__auto__;
var G__7749 = cljs.core.count.call(null,c__5806__auto__);
var G__7750 = (0);
seq__7737 = G__7747;
chunk__7738 = G__7748;
count__7739 = G__7749;
i__7740 = G__7750;
continue;
} else {
var vec__7742 = cljs.core.first.call(null,seq__7737__$1);
var k = cljs.core.nth.call(null,vec__7742,(0),null);
var v = cljs.core.nth.call(null,vec__7742,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__7751 = cljs.core.next.call(null,seq__7737__$1);
var G__7752 = null;
var G__7753 = (0);
var G__7754 = (0);
seq__7737 = G__7751;
chunk__7738 = G__7752;
count__7739 = G__7753;
i__7740 = G__7754;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof tailrecursion.hoplon.on_BANG_ !== 'undefined'){
} else {
tailrecursion.hoplon.on_BANG_ = (function (){var method_table__5916__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5917__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5920__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"tailrecursion.hoplon","on!"),((function (method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__){
return (function (elem,event,callback){
return event;
});})(method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__,hierarchy__5920__auto__))
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),hierarchy__5920__auto__,method_table__5916__auto__,prefer_table__5917__auto__,method_cache__5918__auto__,cached_hierarchy__5919__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,tailrecursion.hoplon.on_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",44030534),(function (elem,event,callback){
return tailrecursion.hoplon.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
tailrecursion.hoplon.loop_tpl_STAR_ = (function tailrecursion$hoplon$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = tailrecursion.javelin.formula.call(null,((function (on_deck){
return (function (G__7766,G__7767){
return G__7766.call(null,G__7767);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__7755_SHARP_){
return tailrecursion.javelin.formula.call(null,((function (on_deck,items_seq){
return (function (G__7769,G__7770,G__7768){
return G__7768.call(null,G__7769,G__7770);
});})(on_deck,items_seq))
).call(null,items_seq,p1__7755_SHARP_,tailrecursion.hoplon.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__7756_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__7756_SHARP_));
cljs.core.swap_BANG_.call(null,p1__7756_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = tailrecursion.javelin.cell.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__7771 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__7772 = null;
var count__7773 = (0);
var i__7774 = (0);
while(true){
if((i__7774 < count__7773)){
var i = cljs.core._nth.call(null,chunk__7772,i__7774);
var e_7775 = (function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_7775);

var G__7776 = seq__7771;
var G__7777 = chunk__7772;
var G__7778 = count__7773;
var G__7779 = (i__7774 + (1));
seq__7771 = G__7776;
chunk__7772 = G__7777;
count__7773 = G__7778;
i__7774 = G__7779;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7771);
if(temp__4425__auto__){
var seq__7771__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7771__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7771__$1);
var G__7780 = cljs.core.chunk_rest.call(null,seq__7771__$1);
var G__7781 = c__5806__auto__;
var G__7782 = cljs.core.count.call(null,c__5806__auto__);
var G__7783 = (0);
seq__7771 = G__7780;
chunk__7772 = G__7781;
count__7773 = G__7782;
i__7774 = G__7783;
continue;
} else {
var i = cljs.core.first.call(null,seq__7771__$1);
var e_7784 = (function (){var or__5022__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_7784);

var G__7785 = cljs.core.next.call(null,seq__7771__$1);
var G__7786 = null;
var G__7787 = (0);
var G__7788 = (0);
seq__7771 = G__7785;
chunk__7772 = G__7786;
count__7773 = G__7787;
i__7774 = G__7788;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__5906__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__5906__auto__)){
var e_7789 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_7789);

var G__7790 = (_ + (1));
_ = G__7790;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
tailrecursion.hoplon.route_cell = (function tailrecursion$hoplon$route_cell(){
var args__6068__auto__ = [];
var len__6061__auto___7797 = arguments.length;
var i__6062__auto___7798 = (0);
while(true){
if((i__6062__auto___7798 < len__6061__auto___7797)){
args__6068__auto__.push((arguments[i__6062__auto___7798]));

var G__7799 = (i__6062__auto___7798 + (1));
i__6062__auto___7798 = G__7799;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__7792){
var vec__7793 = p__7792;
var default$ = cljs.core.nth.call(null,vec__7793,(0),null);
var c = tailrecursion.javelin.cell.call(null,window.location.hash);
var _ = tailrecursion.javelin.formula.call(null,((function (c,vec__7793,default$){
return (function (G__7794,G__7796,G__7795){
var or__5022__auto__ = (function (){var and__5010__auto__ = G__7794.call(null,G__7795);
if(cljs.core.truth_(and__5010__auto__)){
return G__7795;
} else {
return and__5010__auto__;
}
})();
if(cljs.core.truth_(or__5022__auto__)){
return or__5022__auto__;
} else {
return G__7796;
}
});})(c,vec__7793,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__7793,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__7793,default$))
);

return _;
});

tailrecursion.hoplon.route_cell.cljs$lang$maxFixedArity = (0);

tailrecursion.hoplon.route_cell.cljs$lang$applyTo = (function (seq7791){
return tailrecursion.hoplon.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7791));
});

//# sourceMappingURL=hoplon.js.map