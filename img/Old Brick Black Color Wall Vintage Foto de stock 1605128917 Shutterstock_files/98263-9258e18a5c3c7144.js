(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98263],{97005:function(e,t,n){"use strict";n.d(t,{E:function(){return y}});var s=n(47842),a=n(70865),i=n(96670),r=n(26297),o=n(52322),c=n(67550),l=n(72841),u=n(47999),d=n(59481),p=n(66358),f=n(11164),m=n(9823),h=n(776),x=n(36888),b=(0,n(8740).ZL)()(function(e){var t,n=e.breakpoints,a=e.palette,i=e.tokens,r=i.spacing,o=i.fontSize;return{root:(t={color:a.info.main,display:"flex",marginTop:r.s},(0,s.Z)(t,n.up("sm"),{marginTop:r.base}),(0,s.Z)(t,"& > *:not(:first-of-type)",(0,s.Z)({marginLeft:r.s},n.up("md"),{marginLeft:r.base})),t),buttonWrapper:{display:"flex"},buttonProgress:{position:"absolute"},actionLabel:(0,s.Z)({},n.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,s.Z)({},n.down("md"),{fontSize:o.icon})},startIcon:(0,s.Z)({},n.down("md"),{margin:0})}}),g=function(e){var t=e.hasIcon,n=e.withActionLabel;return t&&n?"contained":n?"text":void 0},v=function(e){var t=e.Icon,n=e.withActionLabel,s=!!t;return{color:s?"primary":"inherit",variant:g({hasIcon:s,withActionLabel:n}),startIcon:n?t:void 0,size:n?"medium":"small"}},y=function(e){var t=e.classesProps,n=e.buttons,g=e.withActionLabel,y=e.isTemplateAsset,j=(0,x.bo)().classes,Z=b(),k=Z.classes,_=Z.cx,w=g?u.z:d.h,L=(0,m.D)(),C=L.isBrandSstk,N=L.isBrandEnterprise,P=(0,f.m)().insightType;return(0,o.jsx)(h.Mp,{value:p.Bh8,children:(0,o.jsx)(c.Z,{className:_(k.root,t.rootContainer),children:n.map(function(e){var n,u=e.label,d=e.href,p=e.onClick,f=e.isLoading,m=e.disabled,h=e.show,x=e.Icon,b=e.clickAnalyticsLabel,Z=(0,r.Z)(e,["label","href","onClick","isLoading","disabled","show","Icon","clickAnalyticsLabel"]),L=y&&!N&&"Edit"===u?j.buttonEditTemplate:j.buttonFilter;return(void 0===h||h)&&(0,o.jsx)(c.Z,{className:k.buttonWrapper,children:(0,o.jsx)(w,(0,i.Z)((0,a.Z)({classes:{root:t.buttonRoot,iconSizeMedium:k.iconSizeMedium,startIcon:k.startIcon},className:_((n={},(0,s.Z)(n,j.buttonAnchor,!x),(0,s.Z)(n,L,!!x),n)),onClick:p,href:d,disabled:f||m,"aria-label":u,labelTrack:C?b:u},P&&{clickTrackOptions:{insightType:P}},v({Icon:x,withActionLabel:g}),Z),{children:g?(0,o.jsxs)(o.Fragment,{children:[f&&(0,o.jsx)(l.Z,{color:"inherit",size:18,className:k.buttonProgress}),(0,o.jsx)("span",{className:k.actionLabel,children:u})]}):x}))},u)})})})};y.defaultProps={classesProps:{},withActionLabel:!0}},79866:function(e,t,n){"use strict";n.d(t,{e:function(){return f}});var s=n(47842),a=n(70865),i=n(52322),r=n(97005),o=n(58487),c=n(49644),l=n(46792),u=n(44297),d=n(98779),p=(0,n(8740).ZL)()(function(e,t){var n,i,r=e.breakpoints,o=e.tokens,c=o.size,l=o.spacing,u=t.centerBanner,d=t.flexBreakpoint,p=t.isCentered;return{root:(0,a.Z)((0,s.Z)({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",marginTop:l.base,minHeight:c.density.high},r.down("md"),{alignItems:"normal",flexWrap:"wrap"}),"md"===d?(0,s.Z)({},r.up("md"),{marginTop:0,flexDirection:"row"}):(n={},(0,s.Z)(n,r.up("md"),{marginTop:0,marginBottom:l.base,alignItems:"flex-start"}),(0,s.Z)(n,r.up(d),{flexDirection:"row"}),n)),container:(0,a.Z)({width:"100%"},p&&(0,s.Z)({},r.up("md"),{width:"auto",maxWidth:"100%"})),ctas:(0,a.Z)({alignItems:"center"},"md"===d?(0,s.Z)({},r.up("md"),{marginLeft:l.base,display:"flex",justifyContent:"flex-end"}):(i={},(0,s.Z)(i,r.up(d),{marginLeft:l.s,display:"flex",justifyContent:"flex-end"}),(0,s.Z)(i,r.up("md"),{marginLeft:l.base}),i)),channelBanner:{marginRight:l.s},actionButtonRoot:(0,s.Z)({padding:l.s,marginBottom:0},r.up("md"),{padding:l.base}),actionIcons:{display:"flex",width:"auto"},actionRootContainer:{marginTop:0,alignItems:"center",display:"flex"},shareButtonContainer:(0,s.Z)({display:"flex",alignItems:"center"},r.down("md"),{marginLeft:l.s}),banner:{width:"100%",display:"flex",justifyContent:u?"center":"space-around",marginBottom:l.s}}}),f=function(e){var t=e.asset,n=e.flexBreakpoint,s=e.clickAnalyticsLabels,f=e.CtaComponent,m=e.actionButtons,h=e.showShareButton,x=e.hideCtaComponent,b=e.isTemplateAsset,g=e.ctaComponentProps,v=e.isCentered,y=e.title,j=p({flexBreakpoint:n,isCentered:v,centerBanner:b}),Z=j.classes,k=j.cx,_=(0,u.f8)(t),w=!(0,d.d)({breakpoint:"sm"}),L=(0,u.fn)(t),C=(0,u.ML)(t),N=(0,u.PD)({channels:null==t?void 0:t.channels}),P=(null==m?void 0:m.length)>0&&!_;return(0,i.jsxs)("div",{className:k(Z.root,Z.container),children:[(0,i.jsxs)("div",{className:Z.banner,children:[y,!N&&(0,i.jsx)(o.h,{classes:{root:Z.channelBanner},asset:t,withLabel:!1}),(m||h)&&(0,i.jsxs)("div",{className:Z.actionIcons,children:[P&&(0,i.jsx)(r.E,{classesProps:{buttonRoot:Z.actionButtonRoot,rootContainer:Z.actionRootContainer},buttons:m,withActionLabel:w,isTemplateAsset:b}),h&&(0,i.jsx)(c.V,{asset:t,ButtonComponent:w?l.G_:l.D3,clickAnalyticsLabel:s.shareButton,iconContainerClassName:Z.shareButtonContainer,shouldTrackAnalytics:!0,size:"medium"})]})]}),f&&!L&&!b&&!C&&!x&&(0,i.jsx)("div",{className:Z.ctas,children:(0,i.jsx)(f,(0,a.Z)({asset:t},g))})]})};f.defaultProps={flexBreakpoint:"sm",actionButtons:null,CtaComponent:null,ctaComponentProps:{},isCentered:!1,clickAnalyticsLabels:{},hideCtaComponent:!1,isTemplateAsset:!1,title:null}},39906:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});var s=n(47842),a=n(52322),i=(0,n(8740).ZL)()(function(e){var t=e.tokens.spacing;return{centeredContent:{display:"flex",alignItems:"center",marginTop:"".concat(t.base)}}}),r=function(e){var t=e.byline,n=e.children,r=e.isCentered,o=i(),c=o.classes,l=o.cx;return t?(0,a.jsx)("div",{className:l((0,s.Z)({},c.centeredContent,r)),children:n}):null};r.defaultProps={isCentered:!0,byline:null}},44098:function(e,t,n){"use strict";n.d(t,{r:function(){return ea}});var s=n(47842),a=n(52322),i=n(41075),r=n(67550),o=n(62197),c=n(53980),l=n(6096),u=n(787),d=n(39232),p=n(29510),f=n(26051),m=n(44297),h=n(54112),x=n(35776),b=n(56219),g=n(8740),v=(0,g.ZL)()(function(e){var t=e.spacing,n=e.typography,s=e.tokens,a=s.fontSize,i=s.spacing;return{description:{fontSize:a.s},bold:{fontWeight:n.fontWeightBold,marginBottom:i.xs},title:{marginBottom:0,fontSize:a.m},titleRow:{display:"flex",alignItems:"center",marginBottom:i.s},trackLogo:{display:"flex",alignItems:"center",marginRight:t(3)}}}),y=function(e){var t=e.id;return{itemId:["item_id_with_id",{ID:t}],itemIdWithAssetType:["item_id_with_id_and_asset_type",{ASSET_TYPE:e.assetTypeLabel,ID:t}],tooltip:"ent:copy_id_to_clipboard",successMessage:"ent:copy_item_id_success",errorMessage:"ent:snackbar_failed_to_copy_to_clipboard"}},j=function(e){var t=e.asset,n=e.title,s=e.description,i=e.assetTypeLabel,g=(0,m.Tp)(t),j=(0,m.w5)(t),Z=t.isRexEditorial,k=t.id,_=(0,h.D)({namespace:x.yMP,translationKeys:y({id:k,assetTypeLabel:i})}).labels,w=v(),L=w.classes,C=w.cx,N=(0,p.PE)().locale,P=(0,f.G)({asset:t,language:N}),S=(0,b.Lj)(t),T=(0,b.GI)(t),I=g===d.xF,B=g===d.bz,A=(0,m.O)({track:t,useContentTier:!0}),z=[d.k4,d.pX,d.bz].includes(g)||j,D=n||(Z||S||T||B?t.title:P),M=s||(Z||S||B?P:"");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Z,{display:"flex",alignItems:"center",my:2,children:[(0,a.jsx)(o.Z,{color:"textSecondary",noWrap:!0,variant:"body2","data-automation":"AssetDescription_assetId",children:z?_.itemIdWithAssetType:_.itemId}),(0,a.jsx)(l.b,{text:k,tooltip:_.tooltip,successMessage:_.successMessage,errorMessage:_.errorMessage})]}),D&&(0,a.jsxs)("div",{className:L.titleRow,children:[I&&(0,a.jsx)("div",{className:L.trackLogo,children:(0,a.jsx)(u.IC,{isPremiumBeat:A})}),(0,a.jsx)(o.Z,{component:"h1",className:C(L.bold,L.title),"data-automation":"asset-title",children:D})]}),M&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{component:"span",className:C(L.description),children:M}),(0,a.jsx)(c.B,{description:M})]})]})};j.defaultProps={asset:{},title:"",description:"",assetTypeLabel:""};var Z=n(21647),k=n(13011),_=n(37546),w=n(30816),L=function(e){var t=e.fps,n=(0,w.e)().classes;return(0,a.jsx)("li",{children:(0,a.jsx)(o.Z,{variant:"body2",className:n.listItem,children:t||(0,a.jsx)(Z.Z,{variant:"text",width:k.G})})})},C=function(e){var t=e.asset,n=(0,w.s)().classes,s=t.sizes&&Object.values(t.sizes),i=((0,_.FG)(s)||{}).fps,r=(0,h.D)({namespace:x.G0e,translationKeys:{frameRate:"frame_rate",fps:["fps",{FPS:i}]}}),c=r.t,l=r.ready,u=r.labels;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{className:n.labelTitle,children:l?u.frameRate:(0,a.jsx)(Z.Z,{variant:"text",width:k.pP})}),(0,a.jsx)("ul",{className:n.list,children:i?(0,a.jsx)(L,{t:c,fps:u.fps}):(0,a.jsx)(L,{})})]})},N=n(4171),P=(0,g.ZL)()(function(e){var t=e.typography,n=e.tokens.spacing;return{title:{fontWeight:t.fontWeightBold,marginBottom:n.s}}}),S=function(e){var t=e.asset,n=P().classes,s=(0,h.D)({namespace:x.jp2,translationKeys:{importantInformation:"common:important_information"}}).labels;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{className:n.title,children:s.importantInformation}),(0,a.jsx)(N.v,{asset:t,isSmallFont:!0})]})},T=n(39906),I=n(47330),B=n(51216),A=n(66358),z=n(5304),D="".concat(A.Q_D,".contributorLink"),M=(0,g.ZL)()(function(e){var t=e.palette,n=e.typography,s=e.tokens.spacing;return{bold:{fontWeight:n.fontWeightBold},contributorLabel:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},avatarLabel:{marginLeft:s.s},byLine:{marginTop:s.s},linkContainer:{color:t.info.main}}}),E=function(e){var t=e.creatorName,n=void 0===t?{}:t,s=e.contributorAvatar,a=(void 0===s?{}:s).name;if(!a)return null;var i=n.agency,r=n.photographer;return i&&r?"".concat(r," / ").concat(a):"".concat(a)},R=function(e){var t,n=e.asset,s=e.isLoading,i=e.assetTypeLabel,r=(0,m.Tp)(n),c=(0,m.w5)(n),l=M(),u=l.classes,p=l.cx,f=(0,h.D)({namespace:x.Chv,translationKeys:{contributorLabel:"common:filters_contributor",contributorLabelWithAssetType:["common:filters_contributor_with_asset_type",{ASSET_TYPE:i}]}}),b=f.ready,g=f.labels,v=n||{},y=v.byline,j=v.creatorName,_=(0,m.jW)({asset:n}).contributor,w=(0,z.J5)({contributor:_}),L=(0,m.zz)(n),C=L?null==n?void 0:null===(t=n.artist)||void 0===t?void 0:t.name:E({creatorName:j,contributorAvatar:w}),N=[d.k4,d.pX,d.bz].includes(r)||c?g.contributorLabelWithAssetType:g.contributorLabel;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{className:u.bold,children:b?N:(0,a.jsx)(Z.Z,{variant:"text",width:k.G})}),y&&(0,a.jsx)(T.x,{byline:y,isCentered:!1,children:(0,a.jsx)(o.Z,{classes:{root:p(u.contributorLabel,u.byLine)},children:y})}),(0,a.jsx)(I.B,{asset:n,isLoading:s,children:(0,a.jsx)(o.Z,{classes:{root:p(u.contributorLabel,u.avatarLabel)},children:C?function(){if(L)return C;var e=(0,m.Cs)({asset:n}),t=e.contributorHref,s=e.contributorAsPath;return(0,a.jsx)(B.r,{clickAnalyticsLabel:D,href:t,underline:!0,className:u.linkContainer,linkAs:s,children:C})}():(0,a.jsx)(Z.Z,{variant:"text",width:k.pP})})})]})};R.defaultProps={assetTypeLabel:""};var W=n(87394),F=n(41033),G=n(83249),O=n(65615),H=n(36888),U=n(58287),K=n(2784),$=(0,g.ZL)()(function(e,t){var n=e.spacing,s=t.collapsedHeight;return{collapseWrapper:{maskImage:"linear-gradient(to bottom, rgba(0, 0, 0, 1) 0px ".concat(s/2,"px, rgba(0, 0, 0, 0.4) ").concat(s+(0,U.C)(n(4)),"px 100%)")},inlineButton:{display:"flex",flexDirection:"column-reverse"},title:{fontWeight:"bold",paddingRight:n(3)},wrapper:{display:"flex"}}}),J=function(e){var t=e.children,n=e.labels,s=e.collapsedHeight,i=e.showMoreClickAnalyticsData,r=e.expandedByDefault,o=(0,W.Z)((0,K.useState)(r),2),c=o[0],l=o[1],u=(0,W.Z)((0,K.useState)(!1),2),d=u[0],p=u[1],f=$({collapsedHeight:s}).classes,m=(0,H.bo)().classes,h=c||d?{}:{wrapper:f.collapseWrapper},x=(0,O.t)(),b=(0,K.useCallback)(function(){c||x(i),l(!c),p(!0)},[x,c,i]);return(0,a.jsxs)("div",{className:f.root,children:[(0,a.jsx)(F.Z,{in:c,collapsedSize:s,addEndListener:function(){return p(!1)},classes:h,children:t}),(0,a.jsx)("div",{className:f.container,children:(0,a.jsx)(G.Z,{className:m.buttonAnchor,color:"inherit",onClick:b,children:c?n.showLess:n.showMore})})]})};J.defaultProps={showMoreClickAnalyticsData:{},expandedByDefault:!1};var Q=n(18174),V=n(98779),X=n(25237),Y=n.n(X),q=Y()(function(){return n.e(95259).then(n.bind(n,95259)).then(function(e){return e.TrackDetails})},{loadableGenerated:{webpack:function(){return[95259]}},ssr:!0}),ee=Y()(function(){return n.e(70893).then(n.bind(n,64155)).then(function(e){return e.AssetFormats})},{loadableGenerated:{webpack:function(){return[64155]}},ssr:!0}),et=Y()(function(){return n.e(22187).then(n.bind(n,22187)).then(function(e){return e.TrackCharacteristics})},{loadableGenerated:{webpack:function(){return[22187]}},ssr:!0}),en={pageSection:A.Q_D,eventLabel:"descriptionSeeMore"},es=(0,g.ZL)()(function(e){var t=e.breakpoints,n=e.tokens.spacing;return{descriptionContainer:(0,s.Z)({paddingBottom:"".concat(n.base)},t.up("md"),{padding:"".concat(n.xs," ").concat(n.l," ").concat(n.xs," 0")}),formatsContainer:{padding:"".concat(n.xs," 0")},contributorContainer:(0,s.Z)({paddingTop:"".concat(n.base)},t.up("md"),{padding:"".concat(n.xs," 0  ").concat(n.xs," ").concat(n.l)})}}),ea=function(e){var t=e.asset,n=e.labels,s=e.collapsedHeightMobile,o=e.collapsedHeightDesktop,c=(0,Q.WB)(t)||(0,m.yw)({asset:t}),l=es().classes,u=(0,V.d)({breakpoint:"lg",defaultMatches:!0}),d=(0,m.Tp)(t),p=(0,m.w5)(t),f=(0,m.Am)(t),b=(0,m.zz)(t),g=!p&&!b,v=(0,h.D)({namespace:x.y2Q,translationKeys:{assetTypeLabel:"common:".concat((0,m.zs)({asset:t}),"_asset_type")}}).labels.assetTypeLabel;return(0,a.jsxs)(i.ZP,{container:!0,children:[(0,a.jsx)(i.ZP,{item:!0,xs:12,md:8,children:(0,a.jsx)(J,{collapsedHeight:u?void 0===s?175:s:void 0===o?140:o,labels:n,showMoreClickAnalyticsData:en,expandedByDefault:b,children:(0,a.jsxs)(i.ZP,{container:!0,children:[(0,a.jsx)(i.ZP,{item:!0,xs:12,md:6,className:l.descriptionContainer,children:(0,a.jsx)(j,{asset:t,title:n.descriptionTitle,assetTypeLabel:v})}),(0,a.jsxs)(i.ZP,{item:!0,xs:12,md:6,className:l.formatsContainer,children:[c&&(0,a.jsx)(r.Z,{mb:4,children:(0,a.jsx)(S,{asset:t})}),g?(0,a.jsx)(ee,{asset:t,assetTypeLabel:v}):(0,a.jsx)(q,{assetType:d,asset:t}),f&&(0,a.jsx)(r.Z,{mt:4,children:(0,a.jsx)(C,{asset:t})})]})]})})}),(0,a.jsx)(i.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(i.ZP,{container:!0,children:(0,a.jsxs)(i.ZP,{item:!0,xs:12,className:l.contributorContainer,children:[(0,a.jsx)(R,{asset:t,isLoading:!1,assetTypeLabel:v}),!g&&(0,a.jsx)(r.Z,{mt:4,children:(0,a.jsx)(et,{track:t})})]})})})]})}},47330:function(e,t,n){"use strict";n.d(t,{B:function(){return m}});var s=n(52322),a=n(21647),i=n(81714),r=n(13011),o=n(29510),c=n(44297),l=n(5304),u=n(35776),d=n(59877),p=(0,n(8740).ZL)()(function(e){var t=e.tokens.spacing;return{centeredContent:{display:"flex",alignItems:"center",marginTop:"".concat(t.s)},avatarContainer:{height:40}}}),f=function(e){var t=e.name,n=e.url,c=(0,d.$G)(u.EPM).t,l=(0,o.PE)().locale;if(!t)return(0,s.jsx)(a.Z,{variant:"circular",width:r.NJ,height:r.NJ});var p=c("ent:contributor-avatar");return n?(0,s.jsx)(i.Z,{"aria-label":p,alt:t,src:n,imgProps:{loading:"lazy"}}):(0,s.jsx)(i.Z,{"aria-label":p,children:t[0].toLocaleUpperCase(l)})},m=function(e){var t=e.asset,n=e.children,a=e.isLoading,i=p(),r=i.classes,o=i.cx,u=(0,c.jW)({asset:t}).contributor,d=(0,l.J5)({contributor:u}),m=d.url,h=d.name;return h||a?(0,s.jsxs)("div",{className:o(r.centeredContent,r.avatarContainer),children:[(0,s.jsx)(f,{name:h,url:m}),n]}):null};m.defaultProps={asset:{},children:null,isLoading:!1}},30816:function(e,t,n){"use strict";n.d(t,{e:function(){return r},s:function(){return i}});var s=n(70865),a=n(8740),i=(0,a.ZL)()(function(e){var t=e.typography,n=e.tokens.spacing,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.layout,r=void 0===i?"row":i;return{labelTitle:{fontWeight:t.fontWeightBold},list:(0,s.Z)({display:"flex",flexDirection:r,flexWrap:"wrap",margin:"".concat(n.s," 0"),padding:0,listStyle:"none"},"column"===r?{"&& :not(:first-of-type)":{marginTop:n.s}}:{})}}),r=(0,a.ZL)()(function(e){var t=e.palette,n=e.tokens,s=n.border,a=n.spacing,i=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).layout;return{listItem:{padding:a.s,margin:"column"===i?"0":a.xs,borderRadius:a.xs,border:"solid ".concat(s.width.s," ").concat(t.border1Color),display:"inline-block"}}})},9877:function(e,t,n){"use strict";n.d(t,{Er:function(){return i},Iu:function(){return a},f0:function(){return s}});var s=240,a=24,i=16},4171:function(e,t,n){"use strict";n.d(t,{v:function(){return x}});var s=n(47842),a=n(52322),i=n(62197),r=n(67550),o=n(28597),c=n(64916),l=n(39232),u=n(25949),d=n(44297),p=n(18174),f=n(35776),m=n(59877),h=(0,n(8740).ZL)()(function(e){return{paragraph:{fontSize:e.tokens.fontSize.s}}}),x=function(e){var t=e.asset,n=e.isSmallFont,x=h(),b=x.classes,g=x.cx,v=(0,m.$G)(f.jp2).t,y=(0,p.z6)(t),j=g((0,s.Z)({},b.paragraph,n));return(0,d.yw)({asset:t})?(0,a.jsx)(c.b,{isSmallFont:n}):[u.Fi,u.YC,u.Nd].includes(y)?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(i.Z,{className:j,children:[(0,a.jsx)("b",{children:v("ent:release_information")}),"\xa0",v("image:signed_".concat(y,"_release_on_file"))]})}):[l.gP,l.ow,l.Od].includes(y)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.u,{asset:t,isSmallFont:!!n}),!!t.specialInstructions&&(0,a.jsx)(r.Z,{mt:4,children:(0,a.jsx)(i.Z,{className:j,children:(0,a.jsx)(m.cC,{ns:f.jp2,values:{INSTRUCTIONS:t.specialInstructions},i18nKey:"ent:special_instructions",components:{b:(0,a.jsx)("b",{})},t:v})})})]}):null};x.defaultProps={asset:{}}},58487:function(e,t,n){"use strict";n.d(t,{h:function(){return h}});var s=n(47842),a=n(52322),i=n(62197),r=n(67550),o=n(80536),c=n(26544),l=n(38237),u=n(44297),d=n(35776),p=n(59877),f=n(2784),m=(0,n(8740).ZL)()({root:{display:"flex",flexDirection:"row",alignItems:"center"},logo:{marginTop:0,marginBottom:0,marginLeft:0,lineHeight:"inherit"},hidden:{display:"none"},offsetRibbon:{display:"flex",alignItems:"center"}}),h=function(e){var t=e.classes,n=e.asset,h=e.withLabel,x=e.withRibbonBackground,b=(0,p.$G)(d._7o).t,g=m(),v=g.classes,y=g.cx,j=n.isFootageSelect,Z=n.isPremium,k=n.isCallForPrice,_=(0,u.PD)(n),w=(0,f.useMemo)(function(){return k?"ent:exclusive_content_by_shutterstock":Z?"ent:premium_editorial_content_by_shutterstock":"ent:premium_content_by_shutterstock"},[k,Z]);return(0,a.jsxs)("div",{className:y(v.root,t.root,(0,s.Z)({},v.hidden,!(j||Z||_||h))),children:[(0,a.jsxs)(i.Z,{variant:"subtitle2",children:[(j||Z)&&(0,a.jsx)(o.S,{type:j?l.S7:l.Rf,isExpanded:!0,className:v.logo}),_&&(0,a.jsx)(c.N,{className:y(v.logo,(0,s.Z)({},v.offsetRibbon,x)),isChannelBannerLogo:!x})]}),h&&(0,a.jsx)(i.Z,{variant:"subtitle2",children:(0,a.jsx)(r.Z,{fontWeight:"fontWeightBold",children:b(w)})})]})};h.defaultProps={classes:{},withLabel:!0,withRibbonBackground:!1}},53980:function(e,t,n){"use strict";n.d(t,{B:function(){return c}});var s=n(52322),a=n(6096),i=n(35776),r=n(59877),o=function(e){var t=e.t;return{copyDescriptionSuccess:t("ent:copy_item_description_success"),copyDescriptionTooltip:t("ent:copy_description_top_clipboard"),copyError:t("ent:snackbar_failed_to_copy_to_clipboard")}},c=function(e){var t=e.classesProps,n=e.clickAnalyticsLabel,c=e.description,l=o({t:(0,r.$G)(i._7o).t});return(0,s.jsx)(a.b,{classesProps:void 0===t?{}:t,clickAnalyticsLabel:void 0===n?"":n,errorMessage:l.copyError,successMessage:l.copyDescriptionSuccess,text:void 0===c?"":c,tooltip:l.copyDescriptionTooltip})}},28597:function(e,t,n){"use strict";n.d(t,{u:function(){return k}});var s=n(47842),a=n(70865),i=n(87394),r=n(52322),o=n(62197),c=n(21647),l=n(47999),u=n(66358),d=n(44297),p=n(9823),f=n(99189),m=n(92067),h=n(36888),x=n(35776),b=n(59877),g=n(2784),v=n(8740),y=n(84705),j=(0,v.ZL)()(function(e){var t=e.palette,n=e.tokens,s=n.color,a=n.spacing,i=n.fontSize;return{link:{color:t.info.main,textDecoration:"none","&:hover":{textDecoration:"underline"}},superscriptTradeMarkLabel:{fontSize:"10px"},paragraph:{marginBottom:a.s},redText:{color:s.red.basic},smallFont:{fontSize:i.s}}}),Z=function(e){var t=e.isBrandSstk,n=e.isRexEditorial,s=e.repInfo;return n?t?"editorial_rex_use_message_ecomm":null===s?"ent:editorial_rex_use_message_no_rep":"ent:editorial_rex_use_message":t?"editorial_use_message_ecomm":null===s?"ent:editorial_use_message_no_rep":"ent:editorial_use_message"},k=function(e){var t=e.asset,n=e.isSmallFont,v=j(),k=v.classes,_=v.cx,w=(0,b.$G)(x.lHH),L=w.t,C=w.ready,N=(0,f.x)(),P=(0,m.z)({fetchTrigger:!0}),S=(0,p.D)().isBrandSstk,T=(0,h.bo)().classes,I=P||{},B=I.name,A=I.email,z=I.phone||N,D=(0,d.EK)(t),M=Z({isBrandSstk:S,isRexEditorial:D,repInfo:P}),E={},R={};P&&(E={email:(0,r.jsx)("a",{className:k.link,href:"mailto:".concat(A)}),phone:(0,r.jsx)("a",{className:k.link,href:"tel:".concat(z)})},R={ACCOUNT_MANAGER_NAME:B,ACCOUNT_MANAGER_EMAIL:A,ACCOUNT_MANAGER_PHONE:z});var W=(0,i.Z)((0,g.useState)(!1),2),F=W[0],G=W[1],O=function(){G(function(e){return!e})};return(0,r.jsx)(r.Fragment,{children:C&&(P||null===P)&&z?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.cC,{ns:x.lHH,i18nKey:M,components:(0,a.Z)({bold:(0,r.jsx)("strong",{className:_((0,s.Z)({},k.redText,!D))}),a:(0,r.jsx)("a",{rel:"nofollow noreferrer",className:k.link,href:"https://www.shutterstock.com/blog/asset-assurance-editorial",target:"_blank","aria-label":"Asset Assurance"}),editorialUseOnlyLink:(0,r.jsx)(l.z,{"aria-label":"editorial_license_link",className:_(T.buttonAnchor),labelTrack:u.xPn,color:"inherit",onClick:O}),sup:(0,r.jsx)("sup",{className:k.superscriptTradeMarkLabel}),p:(0,r.jsx)(o.Z,{className:_(k.paragraph,(0,s.Z)({},k.smallFont,n))})},E),values:R,t:L}),(0,r.jsx)(y.f,{isOpen:F,onClose:O})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{width:"100%"}),(0,r.jsx)(c.Z,{width:"100%"}),(0,r.jsx)(c.Z,{width:"100%"})]})})};k.defaultProps={asset:{}}},64916:function(e,t,n){"use strict";n.d(t,{b:function(){return c}});var s=n(70865),a=n(52322),i=n(62197),r=n(35776),o=n(59877),c=function(e){var t=e.isSmallFont,n=(0,o.$G)(r.pcd).t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{sx:function(e){var t=e.tokens;return{fontWeight:t.fontWeight.bold,color:t.color.red.basic}},paragraph:!0,children:n("generate-disclaimer-title")}),(0,a.jsx)(i.Z,{sx:function(e){var n=e.tokens;return(0,s.Z)({},t?{fontSize:n.fontSize.s}:{})},children:n("generate-disclaimer-body")})]})}},11265:function(e,t,n){"use strict";n.d(t,{D:function(){return a}});var s=n(25237),a=n.n(s)()(function(){return Promise.all([n.e(41075),n.e(79637),n.e(37218),n.e(18625)]).then(n.bind(n,94400)).then(function(e){return e.DownloadTrackPreviewModal})},{loadableGenerated:{webpack:function(){return[94400]}},ssr:!1})},787:function(e,t,n){"use strict";n.d(t,{IC:function(){return f}});var s=n(52322),a=n(21647),i=n(9877),r=n(25237),o=n.n(r),c=n(8740),l=function(e){var t=e.size,n=void 0===t?i.Er:t;return(0,s.jsx)(a.Z,{width:n,height:n,sx:{transform:"none"}})},u=o()(function(){return n.e(22604).then(n.bind(n,22604)).then(function(e){return e.PbLogo})},{loadableGenerated:{webpack:function(){return[22604]}},loading:l,ssr:!0}),d=o()(function(){return n.e(25488).then(n.bind(n,25488)).then(function(e){return e.Brackets})},{loadableGenerated:{webpack:function(){return[25488]}},loading:l,ssr:!0}),p=(0,c.ZL)()(function(e,t){var n=t.size;return{icon:{width:n,height:n}}}),f=function(e){var t=e.isPremiumBeat,n=e.className,a=e.size,i=p({size:a}),r=i.classes,o=i.cx;return void 0===t?(0,s.jsx)(l,{size:a}):(0,s.jsx)(t?u:d,{className:o(n,r.icon)})};f.defaultProps={className:null,isPremiumBeat:void 0,size:i.Er}},80536:function(e,t,n){"use strict";n.d(t,{S:function(){return m}});var s,a=n(47842),i=n(52322),r=n(38237),o=n(29510),c=n(35776),l=n(59877),u=n(8740),d=(s={},(0,a.Z)(s,r.Rf,"ent:premium_content_logo"),(0,a.Z)(s,r.S7,"footage:select_full"),s),p="20px",f=(0,u.ZL)()(function(e){var t=e.palette.common.white,n=e.tokens,s=n.border.radius,a=n.color,i=n.fontSize,r=n.lineHeight,o=n.spacing,c=e.transitions,l=e.typography;return{collapsed:{display:"inline"},expanded:{display:"inline",maxWidth:0,overflow:"hidden",transition:c.create("max-width",{duration:c.duration.standard})},isExpanded:{maxWidth:"50px"},root:{alignItems:"center",backgroundColor:t,borderRadius:"".concat(s.m," 0"),color:a.gray["onyx-87"],display:"inline-flex",fontSize:i.xs,fontWeight:l.fontWeightBold,height:p,justifyContent:"flex-start",lineHeight:r.l,margin:"10px ".concat(o.s),minHeight:p,minWidth:p,padding:"1px 6px 0 7px"}}}),m=function(e){var t,n=e.isExpanded,s=e.className,a=e.type,r=f(),u=r.classes,p=r.cx,m=(0,l.$G)(c.wXt),h=m.t,x=m.ready,b=(0,o.PE)().locale,g=(t=h(d[a]),["zh-Hant","zh"].includes(b)?{firstCharacter:t,remainingCharacters:""}:{firstCharacter:t.substring(0,1),remainingCharacters:t.substring(1)}),v=g.firstCharacter,y=g.remainingCharacters;return(0,i.jsxs)("span",{className:p(u.root,s),"data-automation":"SelectLogo_root_span",children:[(0,i.jsx)("span",{className:u.collapsed,children:x?v:" "}),x&&y&&(0,i.jsx)("span",{className:p(u.expanded,n&&u.isExpanded),children:y})]})};m.defaultProps={isExpanded:!1}},84705:function(e,t,n){"use strict";n.d(t,{f:function(){return a}});var s=n(25237),a=n.n(s)()(function(){return n.e(31692).then(n.bind(n,31692)).then(function(e){return e.EditorialUseOnlyModal})},{loadableGenerated:{webpack:function(){return[31692]}},ssr:!1})},46792:function(e,t,n){"use strict";n.d(t,{D3:function(){return f},G_:function(){return p},xw:function(){return m}});var s=n(47842),a=n(70865),i=n(96670),r=n(52322),o=n(83249),c=n(85801),l=n(53007),u=n(36888),d=(0,n(8740).ZL)()(function(e){var t=e.breakpoints,n=e.tokens,a=n.spacing,i=n.fontSize;return{actionRoot:(0,s.Z)({padding:a.s},t.up("md"),{padding:a.base,marginLeft:a.base}),actionLabel:(0,s.Z)({},t.down("md"),{display:"none"}),iconSizeMedium:{"& > *:first-of-type":(0,s.Z)({},t.down("md"),{fontSize:i.icon})},startIcon:(0,s.Z)({},t.down("md"),{margin:0})}}),p=function(e){var t=e.buttonProps,n=e.labels,s=(0,u.bo)().classes,c=d(),p=c.classes,f=c.cx;return(0,r.jsx)(o.Z,(0,i.Z)((0,a.Z)({},t),{classes:{root:p.actionRoot,iconSizeMedium:p.iconSizeMedium,startIcon:p.startIcon},className:f(s.buttonFilter,t.className),color:"primary",variant:"contained",startIcon:(0,r.jsx)(l.Share,{}),children:(0,r.jsx)("span",{className:p.actionLabel,children:n.share})}))},f=function(e){var t=e.buttonProps,n=(0,u.bo)().classes,s=d(),o=s.classes,p=s.cx;return(0,r.jsx)(c.Z,(0,i.Z)((0,a.Z)({},t),{classes:{root:p(o.actionRoot,t.className)},className:n.buttonFilter,color:"primary",size:"small",children:(0,r.jsx)(l.Share,{})}))},m=function(e){var t=e.buttonProps,n=e.labels;return(0,r.jsx)(o.Z,(0,i.Z)((0,a.Z)({},t),{variant:"outlined",children:n.share}))}},38237:function(e,t,n){"use strict";n.d(t,{Rf:function(){return s},S7:function(){return a},sK:function(){return i}});var s="premium",a="select",i="call_for_price"},36616:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});var s=n(2784),a=n(82008),i=function(){return(0,s.useContext)(a.D)}},449:function(e,t,n){"use strict";n.d(t,{i:function(){return g}});var s=n(98788),a=n(70865),i=n(96670),r=n(87394),o=n(5163),c=n(44297),l=n(30337),u=n(65615),d=n(56579),p=n(43110),f=n(72075),m=n(2784),h=n(59979),x=n(19819),b=function(e){var t=e.asset,n=e.clickAnalyticsLabels,s=(0,l.U)(),a=(0,u.t)(),i=(0,m.useCallback)(function(){s({assets:[t],isComp:!1,isPaid:!1,isQuickDownload:!1,isRedownload:!1})},[t,s]);return{analyticsInlineClick:(0,m.useCallback)(function(){return a(n.tryButton)},[a,n]),analyticsProductDownloaded:i}},g=function(e){var t=e.asset,n=e.clickAnalyticsLabels,l=e.shouldSetLocalStorage,u=void 0!==l&&l,g=(0,r.Z)((0,m.useState)(!1),2),v=g[0],y=g[1],j=(0,p.B)(),Z=(0,h.cM)(),k=(0,d.N)(),_=k.triggerDownloadPreview,w=k.isDownloading,L=b({asset:t,clickAnalyticsLabels:void 0===n?{}:n}),C=L.analyticsInlineClick,N=L.analyticsProductDownloaded;return{isActionInProgress:w,tryButtonClickHandler:(0,m.useCallback)((0,s.Z)(function(){var e,n;return(0,o.__generator)(this,function(s){switch(s.label){case 0:if(j)return[3,1];return C(),f.j&&(u&&(0,x.oe)(t),null===(e=window.NREUM)||void 0===e||null===(n=e.addPageAction)||void 0===n||n.call(e,"UP3-1623 assign useTryButton signUpPath to href",(0,i.Z)((0,a.Z)({},window.location||{}),{shouldSetLocalStorage:u,signUpPath:Z})),window.location.href=Z),[3,4];case 1:if(!(0,c.w5)(t))return[3,2];return y(!0),[3,4];case 2:return N(),[4,_({asset:t})];case 3:s.sent(),s.label=4;case 4:return[2]}})}),[C,N,t,j,u,Z,_]),isMusicPreviewModalOpen:v,setIsMusicPreviewModalOpen:y}}},65615:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var s=n(776),a=n(2784),i=function(){var e=(0,s.yh)().analytics;return(0,a.useCallback)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.pageSection,s=t.eventLabel;return n&&s&&e.inlineClick("".concat(n,".").concat(s))},[e])}},99189:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var s=n(98788),a=n(87394),i=n(5163),r=n(29510),o=n(2784),c=["de","en","es","fr","ja","ko","pt"],l=function(){var e=(0,r.PE)(),t=e.locale,l=e.region,u=(0,a.Z)((0,o.useState)(""),2),d=u[0],p=u[1],f="und";return c.includes(t)&&(f=t),(0,o.useEffect)(function(){(0,s.Z)(function(){var e;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return[4,n(50229)("./".concat(f,"/index"))];case 1:return p(((e=t.sent().data)[l]||e.ZZ).local_shutterstock_phone),[2]}})})()},[f,l]),d}},5304:function(e,t,n){"use strict";n.d(t,{J5:function(){return x},_u:function(){return b},yn:function(){return g}});var s=n(70865),a=n(87394),i=n(81740),r=n(63767),o=n(85220),c=n(35896),l=n(9009),u=n(56443),d=n(70314),p=n.n(d),f=n(2784),m=n(3255),h=p()().publicRuntimeConfig.assets.picdnHostUrl,x=function(e){var t=e.contributor,n=Math.floor(((0,r.Ld)().serverTimestamp||(0,u.Ov)())/300),s=(0,f.useMemo)(function(){return(0,o.lK)(t,h,n)},[t,n]),i=s.avatarImgUrl,c=s.name,l=(0,a.Z)((0,f.useState)(i),2),d=l[0],p=l[1];return(0,f.useEffect)(function(){p(i)},[i]),{url:d,name:c}},b=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=(null===(e=t[0])||void 0===e?void 0:e.meta)||{},s=n.totalCurrent,a=n.page,i=void 0===a?{}:a,r=i.size,o=i.number;return{totalImage:n.totalImage,totalVideo:n.totalVideo,currentPage:o,totalPageCount:s&&r?Math.max(Math.ceil(s/r),1):1,totalRecords:s}},g=function(e){var t=e.queryParams,n=e.contributorId,a=e.shouldFetch;return(0,m.ZP)(void 0===a||a?(0,i.cu)({queryParams:(0,s.Z)({contributorId:n},void 0===t?{}:t)}).formattedUrl:null,function(e){return c.uS.get(e).then(function(e){return(0,l.O)(e.data)})}).data}},73377:function(e,t,n){"use strict";n.d(t,{OK:function(){return o},U_:function(){return c},gR:function(){return i},wE:function(){return r}});var s=n(26297),a=n(87394),i=function(e){e.sort,e.page;var t=(0,s.Z)(e,["sort","page"]);return 0===Object.keys(t).length?{}:{filters:Object.entries(t).map(function(e){var t=(0,a.Z)(e,2),n=t[0],s=t[1];return{type:n,value:s.join?s.join(","):"".concat(s)}})}},r=function(e){var t=e.sort,n=void 0===t?"":t;if(!n)return{};var s=n.charAt(0),a="asc",i=n.slice(1);return"-"===s?a="desc":"+"!==s&&(i=n),{sort:[{type:i,value:a}]}},o=function(e){var t=e.page;return{pagination:{page:Number(void 0===t?1:t)}}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.pageSection,n=e.eventLabel;return t&&n?"".concat(t,".").concat(n):""}},50229:function(e,t,n){var s={"./de/index":[12713,12713],"./en/index":[153,153],"./es/index":[63773,63773],"./fr/index":[95282,95282],"./ja/index":[52447,52447],"./ko/index":[33782,33782],"./pt/index":[92604,92604],"./und/index":[82037,82037]};function a(e){if(!n.o(s,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=s[e],a=t[0];return n.e(t[1]).then(function(){return n(a)})}a.keys=function(){return Object.keys(s)},a.id=50229,e.exports=a}}]);
//# sourceMappingURL=98263-9258e18a5c3c7144.js.map