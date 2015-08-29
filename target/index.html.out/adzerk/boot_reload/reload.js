// Compiled by ClojureScript 1.7.48 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var uri = (new goog.Uri(href_or_uri));
var path = adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (uri,path){
return (function (p1__7144_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7144_SHARP_,path);
});})(uri,path))
,changed)))){
return uri;
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7149 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7150 = null;
var count__7151 = (0);
var i__7152 = (0);
while(true){
if((i__7152 < count__7151)){
var s = cljs.core._nth.call(null,chunk__7150,i__7152);
var temp__4425__auto___7153 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7153)){
var sheet_7154 = temp__4425__auto___7153;
var temp__4425__auto___7155__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7154.href,changed);
if(cljs.core.truth_(temp__4425__auto___7155__$1)){
var href_uri_7156 = temp__4425__auto___7155__$1;
sheet_7154.ownerNode.href = href_uri_7156.makeUnique().toString();
} else {
}
} else {
}

var G__7157 = seq__7149;
var G__7158 = chunk__7150;
var G__7159 = count__7151;
var G__7160 = (i__7152 + (1));
seq__7149 = G__7157;
chunk__7150 = G__7158;
count__7151 = G__7159;
i__7152 = G__7160;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7149);
if(temp__4425__auto__){
var seq__7149__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7149__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7149__$1);
var G__7161 = cljs.core.chunk_rest.call(null,seq__7149__$1);
var G__7162 = c__5806__auto__;
var G__7163 = cljs.core.count.call(null,c__5806__auto__);
var G__7164 = (0);
seq__7149 = G__7161;
chunk__7150 = G__7162;
count__7151 = G__7163;
i__7152 = G__7164;
continue;
} else {
var s = cljs.core.first.call(null,seq__7149__$1);
var temp__4425__auto___7165__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7165__$1)){
var sheet_7166 = temp__4425__auto___7165__$1;
var temp__4425__auto___7167__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_7166.href,changed);
if(cljs.core.truth_(temp__4425__auto___7167__$2)){
var href_uri_7168 = temp__4425__auto___7167__$2;
sheet_7166.ownerNode.href = href_uri_7168.makeUnique().toString();
} else {
}
} else {
}

var G__7169 = cljs.core.next.call(null,seq__7149__$1);
var G__7170 = null;
var G__7171 = (0);
var G__7172 = (0);
seq__7149 = G__7169;
chunk__7150 = G__7170;
count__7151 = G__7171;
i__7152 = G__7172;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7177 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7178 = null;
var count__7179 = (0);
var i__7180 = (0);
while(true){
if((i__7180 < count__7179)){
var s = cljs.core._nth.call(null,chunk__7178,i__7180);
var temp__4425__auto___7181 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7181)){
var image_7182 = temp__4425__auto___7181;
var temp__4425__auto___7183__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7182.src,changed);
if(cljs.core.truth_(temp__4425__auto___7183__$1)){
var href_uri_7184 = temp__4425__auto___7183__$1;
image_7182.src = href_uri_7184.makeUnique().toString();
} else {
}
} else {
}

var G__7185 = seq__7177;
var G__7186 = chunk__7178;
var G__7187 = count__7179;
var G__7188 = (i__7180 + (1));
seq__7177 = G__7185;
chunk__7178 = G__7186;
count__7179 = G__7187;
i__7180 = G__7188;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7177);
if(temp__4425__auto__){
var seq__7177__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7177__$1)){
var c__5806__auto__ = cljs.core.chunk_first.call(null,seq__7177__$1);
var G__7189 = cljs.core.chunk_rest.call(null,seq__7177__$1);
var G__7190 = c__5806__auto__;
var G__7191 = cljs.core.count.call(null,c__5806__auto__);
var G__7192 = (0);
seq__7177 = G__7189;
chunk__7178 = G__7190;
count__7179 = G__7191;
i__7180 = G__7192;
continue;
} else {
var s = cljs.core.first.call(null,seq__7177__$1);
var temp__4425__auto___7193__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7193__$1)){
var image_7194 = temp__4425__auto___7193__$1;
var temp__4425__auto___7195__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_7194.src,changed);
if(cljs.core.truth_(temp__4425__auto___7195__$2)){
var href_uri_7196 = temp__4425__auto___7195__$2;
image_7194.src = href_uri_7196.makeUnique().toString();
} else {
}
} else {
}

var G__7197 = cljs.core.next.call(null,seq__7177__$1);
var G__7198 = null;
var G__7199 = (0);
var G__7200 = (0);
seq__7177 = G__7197;
chunk__7178 = G__7198;
count__7179 = G__7199;
i__7180 = G__7200;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7203){
var map__7206 = p__7203;
var map__7206__$1 = ((((!((map__7206 == null)))?((((map__7206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7206):map__7206);
var on_jsload = cljs.core.get.call(null,map__7206__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7206,map__7206__$1,on_jsload){
return (function (p1__7201_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7201_SHARP_,".js");
});})(map__7206,map__7206__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7206,map__7206__$1,on_jsload){
return (function (p1__7202_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__7202_SHARP_).makeUnique());
});})(js_files,map__7206,map__7206__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7206,map__7206__$1,on_jsload){
return (function() { 
var G__7208__delegate = function (_){
return on_jsload.call(null);
};
var G__7208 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7209__i = 0, G__7209__a = new Array(arguments.length -  0);
while (G__7209__i < G__7209__a.length) {G__7209__a[G__7209__i] = arguments[G__7209__i + 0]; ++G__7209__i;}
  _ = new cljs.core.IndexedSeq(G__7209__a,0);
} 
return G__7208__delegate.call(this,_);};
G__7208.cljs$lang$maxFixedArity = 0;
G__7208.cljs$lang$applyTo = (function (arglist__7210){
var _ = cljs.core.seq(arglist__7210);
return G__7208__delegate(_);
});
G__7208.cljs$core$IFn$_invoke$arity$variadic = G__7208__delegate;
return G__7208;
})()
;})(js_files,map__7206,map__7206__$1,on_jsload))
,((function (js_files,map__7206,map__7206__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7206,map__7206__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7215_7219 = cljs.core.seq.call(null,things_to_log);
var chunk__7216_7220 = null;
var count__7217_7221 = (0);
var i__7218_7222 = (0);
while(true){
if((i__7218_7222 < count__7217_7221)){
var t_7223 = cljs.core._nth.call(null,chunk__7216_7220,i__7218_7222);
console.log(t_7223);

var G__7224 = seq__7215_7219;
var G__7225 = chunk__7216_7220;
var G__7226 = count__7217_7221;
var G__7227 = (i__7218_7222 + (1));
seq__7215_7219 = G__7224;
chunk__7216_7220 = G__7225;
count__7217_7221 = G__7226;
i__7218_7222 = G__7227;
continue;
} else {
var temp__4425__auto___7228 = cljs.core.seq.call(null,seq__7215_7219);
if(temp__4425__auto___7228){
var seq__7215_7229__$1 = temp__4425__auto___7228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7215_7229__$1)){
var c__5806__auto___7230 = cljs.core.chunk_first.call(null,seq__7215_7229__$1);
var G__7231 = cljs.core.chunk_rest.call(null,seq__7215_7229__$1);
var G__7232 = c__5806__auto___7230;
var G__7233 = cljs.core.count.call(null,c__5806__auto___7230);
var G__7234 = (0);
seq__7215_7219 = G__7231;
chunk__7216_7220 = G__7232;
count__7217_7221 = G__7233;
i__7218_7222 = G__7234;
continue;
} else {
var t_7235 = cljs.core.first.call(null,seq__7215_7229__$1);
console.log(t_7235);

var G__7236 = cljs.core.next.call(null,seq__7215_7229__$1);
var G__7237 = null;
var G__7238 = (0);
var G__7239 = (0);
seq__7215_7219 = G__7236;
chunk__7216_7220 = G__7237;
count__7217_7221 = G__7238;
i__7218_7222 = G__7239;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__7241 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__7241,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__7241);

adzerk.boot_reload.reload.reload_css.call(null,G__7241);

adzerk.boot_reload.reload.reload_img.call(null,G__7241);

return G__7241;
});

//# sourceMappingURL=reload.js.map