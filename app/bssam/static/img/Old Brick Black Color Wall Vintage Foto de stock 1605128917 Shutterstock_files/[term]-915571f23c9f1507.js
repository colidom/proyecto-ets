(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8566],{36053:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_shutterstock/search/[term]",function(){return t(22007)}])},22007:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return k}});var r=t(70865),i=t(96670),o=t(52322),a=t(32213),s=t(82238),c=t(16885),l=t(66358),u=t(39232),f=t(18505),d=t(29510),p=t(19211),h=t(34611),m=t(61140),b=t(79883),g=t(776),y=t(58370),v=t(35776),S=t(12847),_=t(59877),P=t(2784),w=(0,a.$)(function(e){var n=e.assets,t=e.schemas,a=e.imageType,l=e.isBot,b=e.isIdSearch,w=e.meta,k=e.query,x=(void 0===k?{}:k).term,F=e.searchIds,A=e.seoServiceData,O=e.breadcrumbs,N=w||{},C=N.isAiSearch,j=void 0!==C&&C,L=N.pagination,D=void 0===L?{}:L,E=D.totalPages,I=D.totalRecords,T=N.relatedKeywords,Z=N.seoNoIndex,B=(0,_.$G)(v.w7u).t,R=(0,d.PE)(),G=R.fullLocale,H=R.locale,M=(0,m.a)().autocorrection,$=(null==n?void 0:n.length)===0,W=Z||$,Y=M||x,z=(0,P.useMemo)(function(){return(0,p.A)({count:I&&I.toLocaleString(G),imageType:u.Wr[a]||u.k4,isAiSearch:j,isIdSearch:b,searchIds:F,searchTerm:(0,S.iZ)({str:Y,locale:H}),searchTermMeta:(0,S.iZ)({str:Y,locale:H}),t:B,locale:H})},[I,G,a,j,b,F,Y,H,B]),K=a===u.k4?f.fA:a;return(0,h.n)({assets:n,meta:w,searchTerm:x,searchType:K}),(0,o.jsx)(g.Mp,{value:"searchResults",children:(0,o.jsx)(c.Z,(0,i.Z)((0,r.Z)({},e),{withSsr:!0,withLoadingSkeletons:!0,hideGridUntilReady:f.HN&&!l,assetType:u.k4,getRoutePathProps:y.J1,keywords:T,labels:z,noIndex:W,schemas:t&&!W?t:null,totalPageCount:E,translationNameSpace:v.w7u,seoServiceData:void 0===A?{isSeoServiceActive:!1}:A,FilterComponent:s.zY,breadcrumbs:O}))})});w.analyticsData={pageType:l._Y7},w.layout={type:b.t};var k=!0;n.default=w},32213:function(e,n,t){"use strict";t.d(n,{$:function(){return l}});var r=t(70865),i=t(26297),o=t(52322),a=t(97599),s=function(e){var n=e.error,t=e.pageHandledStatusCode,s=e.statusCode,c=e.Component,l=(0,i.Z)(e,["error","pageHandledStatusCode","statusCode","Component"]);return s&&!t?(0,o.jsx)(a.F,{error:n,statusCode:parseInt(s,10),withSearchBar:!0}):(0,o.jsx)(c,(0,r.Z)({},l))},c=Error("Return the error in the getServerSideProps to get root cause in lower environments.");s.defaultProps={error:c,statusCode:null};var l=function(e){return function(n){return(0,o.jsx)(s,(0,r.Z)({Component:e},n))}}},82238:function(e,n,t){"use strict";t.d(n,{zY:function(){return D}});var r=t(70865),i=t(52322),o=t(52358),a=t(59503),s=t(14944),c=t(40384),l=t(58435),u=t(18505),f=t(69297),d=t(36894),p=t(66358),h=function(e){var n=e.with3DObjects;return{label:"image:filters_image_type",analyticsLabel:p.MnL,items:[[{component:d.bF,filter:function(){return Promise.resolve().then(t.bind(t,91407)).then(function(e){return n?e.imageTypeWith3d:e.imageType})}}]]}},m=t(30193),b=t(69907),g=t(65458),y=t(14123),v=t(56877),S={analyticsLabel:"offset",label:"site-header:offset_images",Icon:t(26544).N,items:[[{component:(0,v.E)(d.bF),filter:function(){return t.e(38832).then(t.bind(t,38832)).then(function(e){return e.imageChannelPillDesktop})}}]]},_={label:"common:filters_image_type_ai_generated",Icon:t(57613).C,analyticsLabel:p.woh,items:[[{component:d.bF,filter:function(){return t.e(74407).then(t.bind(t,74407)).then(function(e){return e.aiGenerated})}}]]},P=t(676),w=t(60664),k={label:"ent:offset",analyticsLabel:"offset",items:[[{component:(0,v.E)(d.bF),filter:function(){return t.e(38832).then(t.bind(t,38832)).then(function(e){return e.imageChannelDropdown})}}]]},x=t(3704),F=t(79400),A=t(92405),O=t(35776),N=t(59877),C=t(2784),j=function(e){var n=e.aiSearchOverrideOpts,t=void 0===n?{}:n,i=e.isBrandEnterprise,a=e.with3DObjects;return[[(0,r.Z)({component:c.AP,filter:h({with3DObjects:a})},t),{component:c.AP,filter:m.N},{component:c.AP,filter:b.N},{component:c.AP,filter:g.C},{component:c.AP,filter:y.P},{disabled:!1,component:c.AP,filter:S},(0,r.Z)({component:c.AP,filter:_},t),{component:c.AP,filter:(0,P.y)(i)}],[(0,r.Z)({component:o.DropdownFilter,filter:(0,x.p0)(u.hh.IMAGE_SEARCH,f.sortBy)},t)]]},L=function(e){var n=e.aiSearchOverrideOpts,t=e.isBrandEnterprise,i=e.with3DObjects;return[(0,r.Z)({component:c.AP,filter:(0,w.f)({filterType:u.hh.IMAGE_SEARCH}),expandedOnLoad:!0},n),{disabled:!1,component:c.AP,filter:k,expandedOnLoad:!0},(0,r.Z)({component:c.AP,filter:h({with3DObjects:i,isBrandEnterprise:t}),expandedOnLoad:!0},n),{component:c.AP,filter:m.N,expandedOnLoad:!0},{component:c.AP,filter:b.N,expandedOnLoad:!0},{component:c.AP,filter:g.C},{component:c.AP,filter:y.P},(0,r.Z)({component:c.AP,filter:_},n),{component:c.AP,filter:(0,P.y)(t)}]},D=(0,C.forwardRef)(function(e,n){var t=e.assetType,r=e.displayFilterSkeletons,o=e.isBrandEnterprise,c=e.isMobile,f=e.renderDrawerStyle,d=e.loadSearchFiltersRow,p=e.setDisplayFilterSkeletons,h=(0,F.l)(),m=(0,N.$G)(O.WBN),b=m.t,g=m.ready,y=o?l.pO:l.Y$,v=(0,A.p)(y,!1,!1,!0),S=h?{disabled:!0,disabledReason:g?b("ent:unavailable"):""}:{};return c||void 0!==f&&f?(0,i.jsx)(a.F,{assetType:t,filterDefinitions:L({aiSearchOverrideOpts:S,isBrandEnterprise:o,with3DObjects:v}),setDisplayFilterSkeletons:p}):(0,i.jsx)(s.I,{ref:n,assetType:t,displayFilterSkeletons:r,filterDefinitions:j({aiSearchOverrideOpts:S,isBrandEnterprise:o,with3DObjects:v}),loadSearchFiltersRow:d,stickyTopOffset:u.ie,setDisplayFilterSkeletons:p})});D.defaultProps={isBrandEnterprise:!1,displayFilterSkeletons:!0,isMobile:!1,loadSearchFiltersRow:!1,setDisplayFilterSkeletons:function(){}}},26544:function(e,n,t){"use strict";t.d(n,{N:function(){return m}});var r=t(52322),i=t(47746),o=t(91609),a=t(45837),s=t(24865),c=t(35776),l=t(59877),u=t(8740),f="35px",d="32px",p=(0,u.ZL)()(function(e){var n=e.tokens,t=n.lineHeight,r=n.spacing;return{channelIcon:{height:f,width:f},overlayIcon:{backgroundImage:"url(".concat("/assets/images/offset_logo_black_background.png",")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",height:d,width:d},root:{alignItems:"center",display:"inline-flex",justifyContent:"flex-start",lineHeight:t.l},channel:{marginLeft:0,marginRight:r.s},overlay:{height:d,margin:0,minHeight:d,minWidth:d,padding:0}}}),h=function(){var e=p().classes,n=(0,i.Z)().palette.mode;return(0,r.jsx)(r.Fragment,{children:n===o.oc.DARK?(0,r.jsx)(a.G,{className:e.channelIcon}):(0,r.jsx)(s.y,{className:e.channelIcon})})},m=function(e){var n=e.className,t=e.isChannelBannerLogo,i=void 0!==t&&t,o=p(),a=o.classes,s=o.cx,u=(0,l.$G)(c.hgN).t,f=i?a.channel:a.overlay;return(0,r.jsx)("span",{className:s(a.root,f,void 0===n?"":n),"aria-label":u("ent:offset_by_shutterstock"),children:i?(0,r.jsx)(h,{}):(0,r.jsx)("span",{className:a.overlayIcon})})}},69907:function(e,n,t){"use strict";t.d(n,{N:function(){return o}});var r=t(36894),i=t(11501),o={label:"common:filters_color",analyticsLabel:t(66358).fZ8,items:[[{component:r.r_,filter:function(){return Promise.resolve().then(t.bind(t,11021)).then(function(e){return e.color})}},{component:i.dB,filter:function(){return Promise.resolve().then(t.bind(t,77)).then(function(e){return e.showSolidBackgrounds})}}]]}},676:function(e,n,t){"use strict";t.d(n,{y:function(){return c}});var r=t(50930),i=t(36894),o=t(56877),a=t(11501),s=t(66358),c=function(e){return{label:"search:actions-dropdown-more-text",analyticsLabel:s.pH6,items:[[{component:(0,o.E)(i.bF),filter:function(){return t.e(59501).then(t.bind(t,59501)).then(function(e){return e.usage})}},{component:i.bF,filter:function(){return t.e(7373).then(t.bind(t,7373)).then(function(e){return e.safeSearch})}},{component:a.yN,filter:{primaryText:"image:filters_image_size"}}],[{component:i.bF,filter:function(){return t.e(77875).then(t.bind(t,77875)).then(function(e){return e.authentic})}},{component:i.Yi,filter:function(){return t.e(24787).then(t.bind(t,68878)).then(function(e){return e.imageCategories})}},{component:i.jt,filter:function(){return t.e(25445).then(t.bind(t,25445)).then(function(e){return e.excludeKeywords})}}].concat((0,r.Z)(e?[{component:i.Qe,filter:function(){return t.e(55982).then(t.bind(t,55982)).then(function(e){return e.exclusive})}}]:[]))]}}},30193:function(e,n,t){"use strict";t.d(n,{N:function(){return i}});var r=t(36894),i={label:"common:filters_orientation",analyticsLabel:t(66358).gP_,items:[[{component:r.bF,filter:function(){return t.e(99749).then(t.bind(t,99749)).then(function(e){return e.orientation})}}]]}},65458:function(e,n,t){"use strict";t.d(n,{C:function(){return i}});var r=t(36894),i={label:"common:filters_people",analyticsLabel:t(66358).t9p,items:[[{component:r.bF,filter:function(){return t.e(30662).then(t.bind(t,30662)).then(function(e){return e.people})}},{component:r.bF,filter:function(){return t.e(70427).then(t.bind(t,70427)).then(function(e){return e.age})}},{component:r.bF,filter:function(){return t.e(14299).then(t.bind(t,14299)).then(function(e){return e.gender})}},{component:r.bF,filter:function(){return t.e(22773).then(t.bind(t,22773)).then(function(e){return e.numberOfPeople})}}],[{component:r.bF,filter:function(){return t.e(19238).then(t.bind(t,19238)).then(function(e){return e.ethnicity})}}]]}},24865:function(e,n,t){"use strict";t.d(n,{y:function(){return i}});var r=t(25237),i=t.n(r)()(function(){return t.e(5653).then(t.bind(t,5653)).then(function(e){return e.OffsetBlackLogo})},{loadableGenerated:{webpack:function(){return[5653]}},ssr:!1})},45837:function(e,n,t){"use strict";t.d(n,{G:function(){return i}});var r=t(25237),i=t.n(r)()(function(){return t.e(74078).then(t.bind(t,74078)).then(function(e){return e.OffsetWhiteLogo})},{loadableGenerated:{webpack:function(){return[74078]}},ssr:!1})}},function(e){e.O(0,[31373,27310,81503,41075,39097,79303,4690,20932,92309,2909,88629,24394,28903,66208,66198,55199,33315,22653,77311,99021,97361,71098,97803,78742,81740,44297,37546,22305,64699,85153,79883,12437,81432,10185,23747,49427,16639,40238,35957,67985,46751,49774,92888,40179],function(){return e(e.s=36053)}),_N_E=e.O()}]);
//# sourceMappingURL=[term]-915571f23c9f1507.js.map