(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{116:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=b(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},s=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=b(t),s=n,u=m["".concat(i,".").concat(s)]||m[s]||d[s]||c;return t?r.a.createElement(u,o(o({ref:a},p),{},{components:t})):r.a.createElement(u,o({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=s;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<c;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},79:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return b}));var n=t(3),r=t(7),c=(t(0),t(116)),i={id:"cameracodec",title:"Module: CameraCodec",sidebar_label:"CameraCodec",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/modules/cameracodec",id:"api/modules/cameracodec",isDocsHomePage:!1,title:"Module: CameraCodec",description:"Module: CameraCodec",source:"@site/docs/api/modules/cameracodec.md",slug:"/api/modules/cameracodec",permalink:"/react-native-vision-camera/docs/api/modules/cameracodec",editUrl:null,version:"current",sidebar_label:"CameraCodec",sidebar:"someSidebar",previous:{title:"Module: Camera",permalink:"/react-native-vision-camera/docs/api/modules/camera"},next:{title:"Module: CameraDevice",permalink:"/react-native-vision-camera/docs/api/modules/cameradevice"}},l=[{value:"Type aliases",id:"type-aliases",children:[{value:"CameraPhotoCodec",id:"cameraphotocodec",children:[]},{value:"CameraVideoCodec",id:"cameravideocodec",children:[]}]}],p={toc:l};function b(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"module-cameracodec"},"Module: CameraCodec"),Object(c.b)("h2",{id:"type-aliases"},"Type aliases"),Object(c.b)("h3",{id:"cameraphotocodec"},"CameraPhotoCodec"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"CameraPhotoCodec"),": ",Object(c.b)("em",{parentName:"p"},"hevc")," ","|"," ",Object(c.b)("em",{parentName:"p"},"jpeg")," ","|"," ",Object(c.b)("em",{parentName:"p"},"hevc-alpha")),Object(c.b)("p",null,"Available Photo Codec types used for taking a photo."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"hevc"'),": The HEVC video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 11.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"jpeg"'),": The JPEG (",Object(c.b)("inlineCode",{parentName:"li"},"jpeg"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 11.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"hevc-alpha"'),": The HEVC (",Object(c.b)("inlineCode",{parentName:"li"},"muxa"),") video codec that supports an alpha channel. This constant is used to select the appropriate encoder, but is NOT used on the encoded content, which is backwards compatible and hence uses ",Object(c.b)("inlineCode",{parentName:"li"},'"hvc1"')," as its codec type. ",Object(c.b)("em",{parentName:"li"},"(iOS 13.0+)"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/1f96aaa/src/CameraCodec.ts#L33"},"CameraCodec.ts:33")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"cameravideocodec"},"CameraVideoCodec"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"CameraVideoCodec"),": ",Object(c.b)("em",{parentName:"p"},"h264")," ","|"," ",Object(c.b)("em",{parentName:"p"},"hevc")," ","|"," ",Object(c.b)("em",{parentName:"p"},"hevc-alpha")," ","|"," ",Object(c.b)("em",{parentName:"p"},"jpeg")," ","|"," ",Object(c.b)("em",{parentName:"p"},"pro-res-4444")," ","|"," ",Object(c.b)("em",{parentName:"p"},"pro-res-422")," ","|"," ",Object(c.b)("em",{parentName:"p"},"pro-res-422-hq")," ","|"," ",Object(c.b)("em",{parentName:"p"},"pro-res-422-lt")," ","|"," ",Object(c.b)("em",{parentName:"p"},"pro-res-422-proxy")),Object(c.b)("p",null,"Available Video Codec types used for recording a video."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"hevc"'),": The HEVC video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 11.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"h264"'),": The H.264 (",Object(c.b)("inlineCode",{parentName:"li"},"avc1"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 11.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"jpeg"'),": The JPEG (",Object(c.b)("inlineCode",{parentName:"li"},"jpeg"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 11.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"pro-res-4444"'),": The Apple ProRes 4444 (",Object(c.b)("inlineCode",{parentName:"li"},"ap4h"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 11.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"pro-res-422"'),": The Apple ProRes 422 (",Object(c.b)("inlineCode",{parentName:"li"},"apcn"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 11.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"pro-res-422-hq"'),": The Apple ProRes 422 HQ (",Object(c.b)("inlineCode",{parentName:"li"},"apch"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 13.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"pro-res-422-lt"'),": The Apple ProRes 422 LT (",Object(c.b)("inlineCode",{parentName:"li"},"apcs"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 13.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"pro-res-422-proxy"'),": The Apple ProRes 422 Proxy (",Object(c.b)("inlineCode",{parentName:"li"},"apco"),") video codec. ",Object(c.b)("em",{parentName:"li"},"(iOS 13.0+)")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},'"hevc-alpha"'),": The HEVC (",Object(c.b)("inlineCode",{parentName:"li"},"muxa"),") video codec that supports an alpha channel. This constant is used to select the appropriate encoder, but is NOT used on the encoded content, which is backwards compatible and hence uses ",Object(c.b)("inlineCode",{parentName:"li"},'"hvc1"')," as its codec type. ",Object(c.b)("em",{parentName:"li"},"(iOS 13.0+)"))),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/1f96aaa/src/CameraCodec.ts#L14"},"CameraCodec.ts:14")))}b.isMDXComponent=!0}}]);