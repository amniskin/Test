// Compiled by ClojureScript 1.7.48 {}
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




tailrecursion.javelin._STAR_tx_STAR_ = null;
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,(0));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
tailrecursion.javelin.bf_seq = (function tailrecursion$javelin$bf_seq(branch_QMARK_,children,root){
var walk = (function tailrecursion$javelin$bf_seq_$_walk(queue){
var temp__4425__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4425__auto__){
return (function (){
return cljs.core.cons.call(null,node,tailrecursion$javelin$bf_seq_$_walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
});})(node,temp__4425__auto__))
,null,null));
} else {
return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.propagate_STAR_ = (function tailrecursion$javelin$propagate_STAR_(pri_map){
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.peek.call(null,pri_map));
if(cljs.core.truth_(temp__4425__auto__)){
var next = temp__4425__auto__;
var popq = cljs.core.pop.call(null,pri_map);
var old = next.prev;
var new$ = (function (){var temp__4423__auto__ = next.thunk;
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null);
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.call(null,new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches.call(null,next,old,new$);
} else {
}

var G__7280 = ((!(diff_QMARK_))?popq:cljs.core.reduce.call(null,((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__){
return (function (p1__7278_SHARP_,p2__7279_SHARP_){
return cljs.core.assoc.call(null,p1__7278_SHARP_,p2__7279_SHARP_,p2__7279_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4425__auto__))
,popq,next.sinks));
pri_map = G__7280;
continue;
} else {
return null;
}
break;
}
});
tailrecursion.javelin.deref_STAR_ = (function tailrecursion$javelin$deref_STAR_(x){
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
tailrecursion.javelin.next_rank = (function tailrecursion$javelin$next_rank(){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.cell__GT_pm = (function tailrecursion$javelin$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.call(null,c,c.rank);
});
tailrecursion.javelin.add_sync_BANG_ = (function tailrecursion$javelin$add_sync_BANG_(c){
return cljs.core.swap_BANG_.call(null,tailrecursion.javelin._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
tailrecursion.javelin.safe_nth = (function tailrecursion$javelin$safe_nth(c,i){
try{return cljs.core.nth.call(null,c,i);
}catch (e7282){if((e7282 instanceof Error)){
var _ = e7282;
return null;
} else {
throw e7282;

}
}});
tailrecursion.javelin.propagate_BANG_ = (function tailrecursion$javelin$propagate_BANG_(c){
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
var G__7285 = c;
tailrecursion.javelin.add_sync_BANG_.call(null,G__7285);

return G__7285;
} else {
var G__7286 = c;
tailrecursion.javelin.propagate_STAR_.call(null,tailrecursion.javelin.cell__GT_pm.call(null,G__7286));

return G__7286;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function tailrecursion$javelin$destroy_cell_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7295 = arguments.length;
var i__6062__auto___7296 = (0);
while(true){
if((i__6062__auto___7296 < len__6061__auto___7295)){
args__6068__auto__.push((arguments[i__6062__auto___7296]));

var G__7297 = (i__6062__auto___7296 + (1));
i__6062__auto___7296 = G__7297;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7289){
var vec__7290 = p__7289;
var keep_watches_QMARK_ = cljs.core.nth.call(null,vec__7290,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__7291 = cljs.core.seq.call(null,srcs);
var chunk__7292 = null;
var count__7293 = (0);
var i__7294 = (0);
while(true){
if((i__7294 < count__7293)){
var src = cljs.core._nth.call(null,chunk__7292,i__7294);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7298 = seq__7291;
var G__7299 = chunk__7292;
var G__7300 = count__7293;
var G__7301 = (i__7294 + (1));
seq__7291 = G__7298;
chunk__7292 = G__7299;
count__7293 = G__7300;
i__7294 = G__7301;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7291);
if(temp__4425__auto__){
var seq__7291__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7291__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7291__$1);
var G__7302 = cljs.core.chunk_rest.call(null,seq__7291__$1);
var G__7303 = c__5806__auto__;
var G__7304 = cljs.core.count.call(null,c__5806__auto__);
var G__7305 = (0);
seq__7291 = G__7302;
chunk__7292 = G__7303;
count__7293 = G__7304;
i__7294 = G__7305;
continue;
} else {
var src = cljs.core.first.call(null,seq__7291__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,src))){
src.sinks = cljs.core.disj.call(null,src.sinks,this$);
} else {
}

var G__7306 = cljs.core.next.call(null,seq__7291__$1);
var G__7307 = null;
var G__7308 = (0);
var G__7309 = (0);
seq__7291 = G__7306;
chunk__7292 = G__7307;
count__7293 = G__7308;
i__7294 = G__7309;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq7287){
var G__7288 = cljs.core.first.call(null,seq7287);
var seq7287__$1 = cljs.core.next.call(null,seq7287);
return tailrecursion.javelin.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7288,seq7287__$1);
});
tailrecursion.javelin.set_formula_BANG_ = (function tailrecursion$javelin$set_formula_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7328 = arguments.length;
var i__6062__auto___7329 = (0);
while(true){
if((i__6062__auto___7329 < len__6061__auto___7328)){
args__6068__auto__.push((arguments[i__6062__auto___7329]));

var G__7330 = (i__6062__auto___7329 + (1));
i__6062__auto___7329 = G__7330;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((1) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((1)),(0))):null);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6069__auto__);
});

tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__7314){
var vec__7315 = p__7314;
var f = cljs.core.nth.call(null,vec__7315,(0),null);
var sources = cljs.core.nth.call(null,vec__7315,(1),null);
tailrecursion.javelin.destroy_cell_BANG_.call(null,this$,true);

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f);

var seq__7316_7331 = cljs.core.seq.call(null,this$.sources);
var chunk__7317_7332 = null;
var count__7318_7333 = (0);
var i__7319_7334 = (0);
while(true){
if((i__7319_7334 < count__7318_7333)){
var source_7335 = cljs.core._nth.call(null,chunk__7317_7332,i__7319_7334);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7335))){
source_7335.sinks = cljs.core.conj.call(null,source_7335.sinks,this$);

if((source_7335.rank > this$.rank)){
var seq__7320_7336 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7316_7331,chunk__7317_7332,count__7318_7333,i__7319_7334,source_7335,vec__7315,f,sources){
return (function (p1__7310_SHARP_){
return p1__7310_SHARP_.sinks;
});})(seq__7316_7331,chunk__7317_7332,count__7318_7333,i__7319_7334,source_7335,vec__7315,f,sources))
,source_7335));
var chunk__7321_7337 = null;
var count__7322_7338 = (0);
var i__7323_7339 = (0);
while(true){
if((i__7323_7339 < count__7322_7338)){
var dep_7340 = cljs.core._nth.call(null,chunk__7321_7337,i__7323_7339);
dep_7340.rank = tailrecursion.javelin.next_rank.call(null);

var G__7341 = seq__7320_7336;
var G__7342 = chunk__7321_7337;
var G__7343 = count__7322_7338;
var G__7344 = (i__7323_7339 + (1));
seq__7320_7336 = G__7341;
chunk__7321_7337 = G__7342;
count__7322_7338 = G__7343;
i__7323_7339 = G__7344;
continue;
} else {
var temp__4425__auto___7345 = cljs.core.seq.call(null,seq__7320_7336);
if(temp__4425__auto___7345){
var seq__7320_7346__$1 = temp__4425__auto___7345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7320_7346__$1)){
var c__5806__auto___7347 = cljs.core.chunk_first.call(null,seq__7320_7346__$1);
var G__7348 = cljs.core.chunk_rest.call(null,seq__7320_7346__$1);
var G__7349 = c__5806__auto___7347;
var G__7350 = cljs.core.count.call(null,c__5806__auto___7347);
var G__7351 = (0);
seq__7320_7336 = G__7348;
chunk__7321_7337 = G__7349;
count__7322_7338 = G__7350;
i__7323_7339 = G__7351;
continue;
} else {
var dep_7352 = cljs.core.first.call(null,seq__7320_7346__$1);
dep_7352.rank = tailrecursion.javelin.next_rank.call(null);

var G__7353 = cljs.core.next.call(null,seq__7320_7346__$1);
var G__7354 = null;
var G__7355 = (0);
var G__7356 = (0);
seq__7320_7336 = G__7353;
chunk__7321_7337 = G__7354;
count__7322_7338 = G__7355;
i__7323_7339 = G__7356;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__7357 = seq__7316_7331;
var G__7358 = chunk__7317_7332;
var G__7359 = count__7318_7333;
var G__7360 = (i__7319_7334 + (1));
seq__7316_7331 = G__7357;
chunk__7317_7332 = G__7358;
count__7318_7333 = G__7359;
i__7319_7334 = G__7360;
continue;
} else {
var temp__4425__auto___7361 = cljs.core.seq.call(null,seq__7316_7331);
if(temp__4425__auto___7361){
var seq__7316_7362__$1 = temp__4425__auto___7361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7316_7362__$1)){
var c__5806__auto___7363 = cljs.core.chunk_first.call(null,seq__7316_7362__$1);
var G__7364 = cljs.core.chunk_rest.call(null,seq__7316_7362__$1);
var G__7365 = c__5806__auto___7363;
var G__7366 = cljs.core.count.call(null,c__5806__auto___7363);
var G__7367 = (0);
seq__7316_7331 = G__7364;
chunk__7317_7332 = G__7365;
count__7318_7333 = G__7366;
i__7319_7334 = G__7367;
continue;
} else {
var source_7368 = cljs.core.first.call(null,seq__7316_7362__$1);
if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,source_7368))){
source_7368.sinks = cljs.core.conj.call(null,source_7368.sinks,this$);

if((source_7368.rank > this$.rank)){
var seq__7324_7369 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7316_7331,chunk__7317_7332,count__7318_7333,i__7319_7334,source_7368,seq__7316_7362__$1,temp__4425__auto___7361,vec__7315,f,sources){
return (function (p1__7310_SHARP_){
return p1__7310_SHARP_.sinks;
});})(seq__7316_7331,chunk__7317_7332,count__7318_7333,i__7319_7334,source_7368,seq__7316_7362__$1,temp__4425__auto___7361,vec__7315,f,sources))
,source_7368));
var chunk__7325_7370 = null;
var count__7326_7371 = (0);
var i__7327_7372 = (0);
while(true){
if((i__7327_7372 < count__7326_7371)){
var dep_7373 = cljs.core._nth.call(null,chunk__7325_7370,i__7327_7372);
dep_7373.rank = tailrecursion.javelin.next_rank.call(null);

var G__7374 = seq__7324_7369;
var G__7375 = chunk__7325_7370;
var G__7376 = count__7326_7371;
var G__7377 = (i__7327_7372 + (1));
seq__7324_7369 = G__7374;
chunk__7325_7370 = G__7375;
count__7326_7371 = G__7376;
i__7327_7372 = G__7377;
continue;
} else {
var temp__4425__auto___7378__$1 = cljs.core.seq.call(null,seq__7324_7369);
if(temp__4425__auto___7378__$1){
var seq__7324_7379__$1 = temp__4425__auto___7378__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7324_7379__$1)){
var c__5806__auto___7380 = cljs.core.chunk_first.call(null,seq__7324_7379__$1);
var G__7381 = cljs.core.chunk_rest.call(null,seq__7324_7379__$1);
var G__7382 = c__5806__auto___7380;
var G__7383 = cljs.core.count.call(null,c__5806__auto___7380);
var G__7384 = (0);
seq__7324_7369 = G__7381;
chunk__7325_7370 = G__7382;
count__7326_7371 = G__7383;
i__7327_7372 = G__7384;
continue;
} else {
var dep_7385 = cljs.core.first.call(null,seq__7324_7379__$1);
dep_7385.rank = tailrecursion.javelin.next_rank.call(null);

var G__7386 = cljs.core.next.call(null,seq__7324_7379__$1);
var G__7387 = null;
var G__7388 = (0);
var G__7389 = (0);
seq__7324_7369 = G__7386;
chunk__7325_7370 = G__7387;
count__7326_7371 = G__7388;
i__7327_7372 = G__7389;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__7390 = cljs.core.next.call(null,seq__7316_7362__$1);
var G__7391 = null;
var G__7392 = (0);
var G__7393 = (0);
seq__7316_7331 = G__7390;
chunk__7317_7332 = G__7391;
count__7318_7333 = G__7392;
i__7319_7334 = G__7393;
continue;
}
} else {
}
}
break;
}

var compute_7394 = ((function (vec__7315,f,sources){
return (function (p1__7311_SHARP_){
return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7311_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7311_SHARP_)));
});})(vec__7315,f,sources))
;
this$.thunk = ((function (compute_7394,vec__7315,f,sources){
return (function (){
return this$.state = compute_7394.call(null,this$.sources);
});})(compute_7394,vec__7315,f,sources))
;
} else {
}

return tailrecursion.javelin.propagate_BANG_.call(null,this$);
});

tailrecursion.javelin.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

tailrecursion.javelin.set_formula_BANG_.cljs$lang$applyTo = (function (seq7312){
var G__7313 = cljs.core.first.call(null,seq7312);
var seq7312__$1 = cljs.core.next.call(null,seq7312);
return tailrecursion.javelin.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7313,seq7312__$1);
});

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.call(null,w,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});

tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(tailrecursion.javelin.lens_QMARK_.call(null,this$__$1))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_(tailrecursion.javelin.input_QMARK_.call(null,this$__$1))){
this$__$1.state = x;

tailrecursion.javelin.propagate_BANG_.call(null,this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,f.call(null,this$__$1.state,a,b));
});

tailrecursion.javelin.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,this$__$1.state,a,b,xs));
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__7395 = cljs.core.seq.call(null,self__.watches);
var chunk__7396 = null;
var count__7397 = (0);
var i__7398 = (0);
while(true){
if((i__7398 < count__7397)){
var vec__7399 = cljs.core._nth.call(null,chunk__7396,i__7398);
var key = cljs.core.nth.call(null,vec__7399,(0),null);
var f = cljs.core.nth.call(null,vec__7399,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7401 = seq__7395;
var G__7402 = chunk__7396;
var G__7403 = count__7397;
var G__7404 = (i__7398 + (1));
seq__7395 = G__7401;
chunk__7396 = G__7402;
count__7397 = G__7403;
i__7398 = G__7404;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7395);
if(temp__4425__auto__){
var seq__7395__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7395__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7395__$1);
var G__7405 = cljs.core.chunk_rest.call(null,seq__7395__$1);
var G__7406 = c__5806__auto__;
var G__7407 = cljs.core.count.call(null,c__5806__auto__);
var G__7408 = (0);
seq__7395 = G__7405;
chunk__7396 = G__7406;
count__7397 = G__7407;
i__7398 = G__7408;
continue;
} else {
var vec__7400 = cljs.core.first.call(null,seq__7395__$1);
var key = cljs.core.nth.call(null,vec__7400,(0),null);
var f = cljs.core.nth.call(null,vec__7400,(1),null);
f.call(null,key,this$__$1,o,n);

var G__7409 = cljs.core.next.call(null,seq__7395__$1);
var G__7410 = null;
var G__7411 = (0);
var G__7412 = (0);
seq__7395 = G__7409;
chunk__7396 = G__7410;
count__7397 = G__7411;
i__7398 = G__7412;
continue;
}
} else {
return null;
}
}
break;
}
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,k,f);
});

tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,k);
});

tailrecursion.javelin.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"rank","rank",-66196975,null),new cljs.core.Symbol(null,"prev","prev",43462301,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"sinks","sinks",-1243609492,null),new cljs.core.Symbol(null,"thunk","thunk",74255732,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"update","update",-1608859373,null)], null);
});

tailrecursion.javelin.Cell.cljs$lang$type = true;

tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";

tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__5601__auto__,writer__5602__auto__,opt__5603__auto__){
return cljs.core._write.call(null,writer__5602__auto__,"tailrecursion.javelin/Cell");
});

tailrecursion.javelin.__GT_Cell = (function tailrecursion$javelin$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

tailrecursion.javelin.cell_QMARK_ = (function tailrecursion$javelin$cell_QMARK_(c){
if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell)){
return c;
} else {
return null;
}
});
tailrecursion.javelin.formula_QMARK_ = (function tailrecursion$javelin$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5010__auto__)){
return c.thunk;
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.lens_QMARK_ = (function tailrecursion$javelin$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5010__auto__)){
return c.update;
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function tailrecursion$javelin$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__5010__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);
if(cljs.core.truth_(and__5010__auto__)){
return cljs.core.not.call(null,tailrecursion.javelin.formula_QMARK_.call(null,c));
} else {
return and__5010__auto__;
}
})())){
return c;
} else {
return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function tailrecursion$javelin$set_cell_BANG_(c,x){
c.state = x;

return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
tailrecursion.javelin.formula = (function tailrecursion$javelin$formula(f){
return (function() { 
var G__7413__delegate = function (sources){
return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)),f,sources);
};
var G__7413 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__7414__i = 0, G__7414__a = new Array(arguments.length -  0);
while (G__7414__i < G__7414__a.length) {G__7414__a[G__7414__i] = arguments[G__7414__i + 0]; ++G__7414__i;}
  sources = new cljs.core.IndexedSeq(G__7414__a,0);
} 
return G__7413__delegate.call(this,sources);};
G__7413.cljs$lang$maxFixedArity = 0;
G__7413.cljs$lang$applyTo = (function (arglist__7415){
var sources = cljs.core.seq(arglist__7415);
return G__7413__delegate(sources);
});
G__7413.cljs$core$IFn$_invoke$arity$variadic = G__7413__delegate;
return G__7413;
})()
;
});
tailrecursion.javelin.lens = (function tailrecursion$javelin$lens(c,f){
var c__$1 = tailrecursion.javelin.formula.call(null,cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
tailrecursion.javelin.cell = (function tailrecursion$javelin$cell(x){
return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.lift = tailrecursion.javelin.formula;
tailrecursion.javelin.dosync_STAR_ = (function tailrecursion$javelin$dosync_STAR_(thunk){
var bind = (function (p1__7416_SHARP_){
var _STAR_tx_STAR_7419 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = cljs.core.atom.call(null,tailrecursion.priority_map.priority_map.call(null));

try{return p1__7416_SHARP_.call(null);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7419;
}});
var prop = ((function (bind){
return (function (){
var tx = cljs.core.deref.call(null,tailrecursion.javelin._STAR_tx_STAR_);
var _STAR_tx_STAR_7420 = tailrecursion.javelin._STAR_tx_STAR_;
tailrecursion.javelin._STAR_tx_STAR_ = null;

try{return tailrecursion.javelin.propagate_STAR_.call(null,tx);
}finally {tailrecursion.javelin._STAR_tx_STAR_ = _STAR_tx_STAR_7420;
}});})(bind))
;
if(cljs.core.truth_(tailrecursion.javelin._STAR_tx_STAR_)){
return thunk.call(null);
} else {
return bind.call(null,((function (bind,prop){
return (function (){
thunk.call(null);

return prop.call(null);
});})(bind,prop))
);
}
});
tailrecursion.javelin.alts_BANG_ = (function tailrecursion$javelin$alts_BANG_(){
var args__6068__auto__ = [];
var len__6061__auto___7427 = arguments.length;
var i__6062__auto___7428 = (0);
while(true){
if((i__6062__auto___7428 < len__6061__auto___7427)){
args__6068__auto__.push((arguments[i__6062__auto___7428]));

var G__7429 = (i__6062__auto___7428 + (1));
i__6062__auto___7428 = G__7429;
continue;
} else {
}
break;
}

var argseq__6069__auto__ = ((((0) < args__6068__auto__.length))?(new cljs.core.IndexedSeq(args__6068__auto__.slice((0)),(0))):null);
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__6069__auto__);
});

tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",273761139)));
var tag_neq = ((function (olds){
return (function (p1__7421_SHARP_,p2__7422_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__7421_SHARP_,p2__7422_SHARP_),p2__7422_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__7424_SHARP_,p2__7423_SHARP_){
return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__7424_SHARP_,p2__7423_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__7430__delegate = function (rest__7425_SHARP_){
var news = diff.call(null,cljs.core.deref.call(null,olds),rest__7425_SHARP_);
cljs.core.reset_BANG_.call(null,olds,rest__7425_SHARP_);

return news;
};
var G__7430 = function (var_args){
var rest__7425_SHARP_ = null;
if (arguments.length > 0) {
var G__7431__i = 0, G__7431__a = new Array(arguments.length -  0);
while (G__7431__i < G__7431__a.length) {G__7431__a[G__7431__i] = arguments[G__7431__i + 0]; ++G__7431__i;}
  rest__7425_SHARP_ = new cljs.core.IndexedSeq(G__7431__a,0);
} 
return G__7430__delegate.call(this,rest__7425_SHARP_);};
G__7430.cljs$lang$maxFixedArity = 0;
G__7430.cljs$lang$applyTo = (function (arglist__7432){
var rest__7425_SHARP_ = cljs.core.seq(arglist__7432);
return G__7430__delegate(rest__7425_SHARP_);
});
G__7430.cljs$core$IFn$_invoke$arity$variadic = G__7430__delegate;
return G__7430;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.call(null,tailrecursion.javelin.formula.call(null,proc),cells);
});

tailrecursion.javelin.alts_BANG_.cljs$lang$maxFixedArity = (0);

tailrecursion.javelin.alts_BANG_.cljs$lang$applyTo = (function (seq7426){
return tailrecursion.javelin.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7426));
});
tailrecursion.javelin.cell_map = (function tailrecursion$javelin$cell_map(f,c){
var cseq = tailrecursion.javelin.formula.call(null,cljs.core.seq).call(null,c);
return cljs.core.map.call(null,((function (cseq){
return (function (p1__7433_SHARP_){
return tailrecursion.javelin.formula.call(null,cljs.core.comp.call(null,f,tailrecursion.javelin.safe_nth)).call(null,cseq,p1__7433_SHARP_);
});})(cseq))
,cljs.core.range.call(null,(0),cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});
tailrecursion.javelin.cell_doseq_STAR_ = (function tailrecursion$javelin$cell_doseq_STAR_(items_seq,f){
var pool_size = tailrecursion.javelin.cell.call(null,(0));
var cur_count = tailrecursion.javelin.formula.call(null,cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__7434_SHARP_){
return tailrecursion.javelin.formula.call(null,tailrecursion.javelin.safe_nth).call(null,items_seq,p1__7434_SHARP_);
});})(pool_size,cur_count))
;
return tailrecursion.javelin.formula.call(null,((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__7439_7443 = cljs.core.seq.call(null,cljs.core.range.call(null,pool_size__$1,cur_count__$1));
var chunk__7440_7444 = null;
var count__7441_7445 = (0);
var i__7442_7446 = (0);
while(true){
if((i__7442_7446 < count__7441_7445)){
var i_7447 = cljs.core._nth.call(null,chunk__7440_7444,i__7442_7446);
f__$1.call(null,ith_item__$1.call(null,i_7447));

var G__7448 = seq__7439_7443;
var G__7449 = chunk__7440_7444;
var G__7450 = count__7441_7445;
var G__7451 = (i__7442_7446 + (1));
seq__7439_7443 = G__7448;
chunk__7440_7444 = G__7449;
count__7441_7445 = G__7450;
i__7442_7446 = G__7451;
continue;
} else {
var temp__4425__auto___7452 = cljs.core.seq.call(null,seq__7439_7443);
if(temp__4425__auto___7452){
var seq__7439_7453__$1 = temp__4425__auto___7452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7439_7453__$1)){
var c__5806__auto___7454 = cljs.core.chunk_first.call(null,seq__7439_7453__$1);
var G__7455 = cljs.core.chunk_rest.call(null,seq__7439_7453__$1);
var G__7456 = c__5806__auto___7454;
var G__7457 = cljs.core.count.call(null,c__5806__auto___7454);
var G__7458 = (0);
seq__7439_7443 = G__7455;
chunk__7440_7444 = G__7456;
count__7441_7445 = G__7457;
i__7442_7446 = G__7458;
continue;
} else {
var i_7459 = cljs.core.first.call(null,seq__7439_7453__$1);
f__$1.call(null,ith_item__$1.call(null,i_7459));

var G__7460 = cljs.core.next.call(null,seq__7439_7453__$1);
var G__7461 = null;
var G__7462 = (0);
var G__7463 = (0);
seq__7439_7443 = G__7460;
chunk__7440_7444 = G__7461;
count__7441_7445 = G__7462;
i__7442_7446 = G__7463;
continue;
}
} else {
}
}
break;
}

return reset_pool_size_BANG_.call(null,cur_count__$1);
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.call(null,cljs.core.reset_BANG_,pool_size));
});

//# sourceMappingURL=javelin.js.map