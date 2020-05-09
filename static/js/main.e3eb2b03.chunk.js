(this["webpackJsonpcheat-sheet"]=this["webpackJsonpcheat-sheet"]||[]).push([[0],{81:function(e,t,a){e.exports=a(93)},86:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(86),a(42)),o=a(29),m=a(123),p=a(126),s=a(127),u=function(e){e.title,e.icon;return r.a.createElement(n.Fragment,null,r.a.createElement(m.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(s.a,{component:l.b,to:"/"},"Home"),r.a.createElement(s.a,{component:l.b,to:"/character"},"Characters"),r.a.createElement(s.a,{component:l.b,to:"/cheatSheet"},"Cheat Sheet"))))};u.defaultProps={title:"Cheat Sheet",icon:"fas fa-digital-tachograph"};var f=u,d=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"))},x=a(20),h=a(71),E=Object(n.createContext)(),b=a(141),g=a(128),v=function(e){var t=e.character,a=t.id,i=t.name,c=t.race,l=t.subrace,o=t.level,m=t.skills,p=t.role,u=Object(n.useContext)(E),f=u.deleteCharacter,d=u.setCurrent,x=u.clearCurrent;Object(n.useEffect)((function(){d(t)}),[]);return r.a.createElement(n.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{container:!0,spacing:0,justify:"space-between"},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement("strong",null,i)),r.a.createElement(g.a,{item:!0,xs:2},"Race: ",l||c),r.a.createElement(g.a,{item:!0,xs:2},"Class: ",p),r.a.createElement(g.a,{item:!0,xs:2},"Level: ",o),r.a.createElement(g.a,{item:!0,xs:2},m.map((function(e){return e.proficient?e.name+", ":null}))),r.a.createElement(g.a,{item:!0},r.a.createElement(s.a,{color:"secondary",variant:"contained",onClick:function(){f(a),x()}},"Delete")))))};v.defaultProps={character:{id:1,name:"",level:0,role:null,skills:[],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10}};var C=v,y=a(136),A=a(134),j=a(142),O=a(137),k=a(53),S=a(22),R=a(135),P=a(129),I=a(143),w=a(145),D=a(140),H=a(133),N=["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard","Artificer"],T={Human:["Human","Variant human"],Dragonborn:["Black","Blue","Brass","Bronze","Copper","Gold","Green","Red","Silver","White"],Dwarf:["Hill dwarf","Mountain dwarf"],Elf:["High elf","Wood elf","Dark elf (Drow)"],Gnome:["Forest gnome","Rock gnome"],"Half-elf":[],"Half-orc":[],Halfling:["Lightfoot","Stout"]},B=a(98),L=function(e){var t=e.handleChange,a=e.character,i=e.levels,c=e.classes,l=a.strength,o=a.dexterity,m=a.constitution,p=a.intelligence,s=a.wisdom,u=a.charisma;return r.a.createElement(n.Fragment,null,["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"].map((function(e,a){return r.a.createElement(P.a,{className:c.formControl,key:a},r.a.createElement(w.a,{id:"".concat(e.toLowerCase(),"-select-label")},e),r.a.createElement(D.a,{required:!0,labelId:"".concat(e.toLowerCase(),"-select-label"),id:"".concat(e.toLowerCase(),"-select"),name:"".concat(e.toLowerCase()),value:"Strength"===e?l:"Dexterity"===e?o:"Constitution"===e?m:"Intelligence"===e?p:"Wisdom"===e?s:u,onChange:t},i.map((function(e,t){return r.a.createElement(H.a,{required:!0,key:t,value:e},e)}))))})))};L.defaultProps={handleChange:function(){},character:{id:1,name:"",level:0,role:null,skills:[],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10},levels:[],classes:{}};var _=L,F=a(97),M=Object(A.a)({listItem:{borderBottom:"1px solid black"},proficient:{backgroundColor:"#4dd0e1"},expert:{backgroundColor:"#ffeb3b"}}),W=function(e){var t=e.skill,a=e.handleButtonPress,n=M();return r.a.createElement(F.a,{button:!0,onClick:a,className:n.listItem+" "+(t.proficient?n.proficient:t.expert?n.expert:null),name:"skill"},t.name)},q=a(132),U=function(e){var t=e.character,a=e.handleButtonPress,n=t.skills;return r.a.createElement(b.a,null,r.a.createElement(b.a,{p:2},r.a.createElement(q.a,{"aria-label":"main skills list"},n.map((function(e,t){return r.a.createElement(W,{key:t,skill:e,handleButtonPress:a,name:"skills"})})))))},z=Object(B.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),G=function(){var e=Array.from(new Array(20),(function(e,t){return t+1})),t=Object.getOwnPropertyNames(T),a=Object(n.useState)([]),i=Object(x.a)(a,2),c=i[0],l=i[1],o=z(),m=Object(n.useContext)(E),p=m.addCharacter,u=m.current,f=m.updateCharacter;Object(n.useEffect)((function(){X(null!==u?u:{name:"",race:"",subrace:"",level:"",role:"",skills:[{name:"Acrobatics",proficient:!1,expert:!1},{name:"Animal handling",proficient:!1,expert:!1},{name:"Arcana",proficient:!1,expert:!1},{name:"Athletics",proficient:!1,expert:!1},{name:"Deception",proficient:!1,expert:!1},{name:"History",proficient:!1,expert:!1},{name:"Insight",proficient:!1,expert:!1},{name:"Intimidation",proficient:!1,expert:!1},{name:"Investigation",proficient:!1,expert:!1},{name:"Medicine",proficient:!1,expert:!1},{name:"Nature",proficient:!1,expert:!1},{name:"Perception",proficient:!1,expert:!1},{name:"Performance",proficient:!1,expert:!1},{name:"Persuasion",proficient:!1,expert:!1},{name:"Religion",proficient:!1,expert:!1},{name:"Sleight of hand",proficient:!1,expert:!1},{name:"Stealth",proficient:!1,expert:!1},{name:"Survival",proficient:!1,expert:!1}],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10})}),[m,u]);var d=Object(n.useState)(!1),h=Object(x.a)(d,2),v=h[0],C=h[1],y=Object(n.useState)(!1),A=Object(x.a)(y,2),j=A[0],O=A[1],B=Object(n.useState)(!1),L=Object(x.a)(B,2),F=L[0],M=L[1],W=Object(n.useState)(!1),q=Object(x.a)(W,2),G=q[0],J=q[1],V=Object(n.useState)({name:"",race:"",subrace:"",level:"",role:"",skills:[{name:"Acrobatics",proficient:!1,expert:!1},{name:"Animal handling",proficient:!1,expert:!1},{name:"Arcana",proficient:!1,expert:!1},{name:"Athletics",proficient:!1,expert:!1},{name:"Deception",proficient:!1,expert:!1},{name:"History",proficient:!1,expert:!1},{name:"Insight",proficient:!1,expert:!1},{name:"Intimidation",proficient:!1,expert:!1},{name:"Investigation",proficient:!1,expert:!1},{name:"Medicine",proficient:!1,expert:!1},{name:"Nature",proficient:!1,expert:!1},{name:"Perception",proficient:!1,expert:!1},{name:"Performance",proficient:!1,expert:!1},{name:"Persuasion",proficient:!1,expert:!1},{name:"Religion",proficient:!1,expert:!1},{name:"Sleight of hand",proficient:!1,expert:!1},{name:"Stealth",proficient:!1,expert:!1},{name:"Survival",proficient:!1,expert:!1}],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10}),K=Object(x.a)(V,2),Q=K[0],X=K[1],Y=Q.name,Z=Q.race,$=Q.subrace,ee=Q.level,te=Q.role,ae=Q.skills,ne=function(e){X(Object(S.a)({},Q,Object(k.a)({},e.target.name,e.target.value))),console.log(Q)},re=function(e){var t,a=ae,n=a.filter((function(a,n){return a.name===e&&(t=n),a.name===e}))[0];n.proficient||n.expert?n.proficient?(a[t].expert=!0,a[t].proficient=!1):a[t].expert=!1:a[t].proficient=!0,X(Object(S.a)({},Q,{skills:a})),console.log(Q)};return r.a.createElement(b.a,{p:2},r.a.createElement(g.a,{container:!0,spacing:1},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(R.a,null,r.a.createElement(P.a,{className:o.formControl},r.a.createElement(I.a,{required:!0,error:v,id:"name",name:"name",label:"Name",onChange:ne,value:Y})),r.a.createElement(P.a,{className:o.formControl,error:j},r.a.createElement(w.a,{id:"race-select-label"},"Race"),r.a.createElement(D.a,{required:!0,labelId:"race-select-label",id:"race-select",name:"race",value:Z,onChange:function(e){l(T[e.target.value]),X(Object(S.a)({},Q,{race:e.target.value,subrace:""}))}},t.map((function(e,t){return r.a.createElement(H.a,{key:t,value:e},e)})))),c.length>0&&r.a.createElement(P.a,{className:o.formControl},r.a.createElement(w.a,{id:"subrace-select-label"},"Subrace"),r.a.createElement(D.a,{required:!0,labelId:"subrace-select-label",id:"subrace-select",name:"subrace",value:$,onChange:ne},c.map((function(e,t){return r.a.createElement(H.a,{key:t,value:e},e)})))),r.a.createElement(P.a,{className:o.formControl,error:F},r.a.createElement(w.a,{id:"level-select-label"},"Level"),r.a.createElement(D.a,{required:!0,labelId:"level-select-label",id:"level-select",name:"level",value:ee,onChange:ne},e.map((function(e,t){return r.a.createElement(H.a,{key:t,value:e},e)})))),r.a.createElement(P.a,{className:o.formControl,error:G},r.a.createElement(w.a,{id:"role-select-label"},"Class"),r.a.createElement(D.a,{required:!0,labelId:"role-select-label",id:"role-select",name:"role",value:te,onChange:ne},N.map((function(e,t){return r.a.createElement(H.a,{key:t,value:e},e)})))),r.a.createElement(s.a,{variant:"contained",onClick:function(e){e.preventDefault(),C(""===Y),O(""===Z),M(""===ee),J(""===te),""!==Y&&""!==ee&&""!==te&&""!==Z&&(null===u?p(Q):f(Q)),X({name:"",race:"",subrace:"",level:"",role:"",skills:[{name:"Acrobatics",proficient:!1,expert:!1},{name:"Animal handling",proficient:!1,expert:!1},{name:"Arcana",proficient:!1,expert:!1},{name:"Athletics",proficient:!1,expert:!1},{name:"Deception",proficient:!1,expert:!1},{name:"History",proficient:!1,expert:!1},{name:"Insight",proficient:!1,expert:!1},{name:"Intimidation",proficient:!1,expert:!1},{name:"Investigation",proficient:!1,expert:!1},{name:"Medicine",proficient:!1,expert:!1},{name:"Nature",proficient:!1,expert:!1},{name:"Perception",proficient:!1,expert:!1},{name:"Performance",proficient:!1,expert:!1},{name:"Persuasion",proficient:!1,expert:!1},{name:"Religion",proficient:!1,expert:!1},{name:"Sleight of hand",proficient:!1,expert:!1},{name:"Stealth",proficient:!1,expert:!1},{name:"Survival",proficient:!1,expert:!1}],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10})}},u?"Save Edits":"Create New"))),r.a.createElement(g.a,{item:!0,xs:1},r.a.createElement(_,{handleChange:ne,character:Q,levels:e,classes:o})),r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement(U,{character:Q,handleButtonPress:function(e){var t=e.target.innerText;re(t)}}))))};function J(e){var t=e.children,a=e.value,n=e.index,i=Object(h.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},i),a===n&&r.a.createElement(b.a,{p:3},r.a.createElement(y.a,{component:"span"},t)))}var V=Object(A.a)({root:{backgroundColor:"#b0bec5"}}),K=function(){var e=V(),t=Object(n.useContext)(E),a=Object(n.useState)(1),i=Object(x.a)(a,2),c=i[0],l=i[1],o=t.characters,p=t.clearCurrent,s=t.current,u=Object.entries(o).length;return r.a.createElement(n.Fragment,null,r.a.createElement(m.a,{position:"static",color:"inherit",className:e.root},r.a.createElement(j.a,{onChange:function(e,t){t>u&&p(),l(t)},"aria-label":"character names",value:c,variant:"scrollable",scrollButtons:"auto"},o.map((function(e,t){return r.a.createElement(O.a,Object.assign({key:e.id,value:t+1,label:e.name},function(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}(t)))})),r.a.createElement(O.a,{value:u+1,label:"Add Character"}))),o.map((function(e,t){return r.a.createElement(J,{value:c,index:t+1,key:e.id},r.a.createElement(C,{character:e,key:e.id}),r.a.createElement(G,null))})),null===s?r.a.createElement(J,{index:u+1,value:c},r.a.createElement(b.a,{fontSize:"h5.fontSize"},"Add Character"),r.a.createElement(G,null)):null)},Q=function(){return r.a.createElement("div",null,r.a.createElement(K,null))},X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Cheat Sheet"))},Y=a(69),Z=a(139),$=a(138),ee=a(55),te=a(70),ae=function(e,t){switch(t.type){case"ADD_CHARACTER":return Object(S.a)({},e,{characters:[].concat(Object(te.a)(e.characters),[t.payload])});case"UPDATE_CHARACTER":return Object(S.a)({},e,{characters:e.characters.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"DELETE_CHARACTER":return Object(S.a)({},e,{characters:e.characters.filter((function(e){return e.id!==t.payload}))});case"SET_CURRENT":return Object(S.a)({},e,{current:t.payload});case"CLEAR_CURRENT":return Object(S.a)({},e,{current:null});default:return e}},ne=a(68),re=function(e){var t=Object(n.useReducer)(ae,{characters:[{id:1,name:"Player 1",race:"Dwarf",subrace:"Hill dwarf",level:2,role:"Fighter",skills:[{name:"Acrobatics",proficient:!0,expert:!1},{name:"Animal handling",proficient:!1,expert:!1},{name:"Arcana",proficient:!1,expert:!1},{name:"Athletics",proficient:!0,expert:!1},{name:"Deception",proficient:!1,expert:!1},{name:"History",proficient:!1,expert:!1},{name:"Insight",proficient:!1,expert:!1},{name:"Intimidation",proficient:!1,expert:!1},{name:"Investigation",proficient:!1,expert:!1},{name:"Medicine",proficient:!1,expert:!1},{name:"Nature",proficient:!1,expert:!1},{name:"Perception",proficient:!1,expert:!1},{name:"Performance",proficient:!1,expert:!1},{name:"Persuasion",proficient:!1,expert:!1},{name:"Religion",proficient:!1,expert:!1},{name:"Sleight of hand",proficient:!1,expert:!1},{name:"Stealth",proficient:!1,expert:!1},{name:"Survival",proficient:!1,expert:!1}],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10},{id:2,name:"Player 2",race:"Gnome",subrace:"Rock gnome",level:3,role:"Ranger",skills:[{name:"Acrobatics",proficient:!1,expert:!1},{name:"Animal handling",proficient:!0,expert:!1},{name:"Arcana",proficient:!1,expert:!1},{name:"Athletics",proficient:!1,expert:!1},{name:"Deception",proficient:!1,expert:!1},{name:"History",proficient:!1,expert:!1},{name:"Insight",proficient:!1,expert:!1},{name:"Intimidation",proficient:!1,expert:!1},{name:"Investigation",proficient:!1,expert:!1},{name:"Medicine",proficient:!1,expert:!1},{name:"Nature",proficient:!1,expert:!1},{name:"Perception",proficient:!0,expert:!1},{name:"Performance",proficient:!1,expert:!1},{name:"Persuasion",proficient:!1,expert:!1},{name:"Religion",proficient:!1,expert:!1},{name:"Sleight of hand",proficient:!1,expert:!1},{name:"Stealth",proficient:!1,expert:!1},{name:"Survival",proficient:!1,expert:!1}],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10},{id:3,name:"Player 3",race:"Elf",subrace:"Wood elf",level:2,role:"Druid",skills:[{name:"Acrobatics",proficient:!1,expert:!1},{name:"Animal handling",proficient:!1,expert:!1},{name:"Arcana",proficient:!0,expert:!1},{name:"Athletics",proficient:!1,expert:!1},{name:"Deception",proficient:!1,expert:!1},{name:"History",proficient:!1,expert:!1},{name:"Insight",proficient:!1,expert:!1},{name:"Intimidation",proficient:!1,expert:!1},{name:"Investigation",proficient:!1,expert:!1},{name:"Medicine",proficient:!0,expert:!1},{name:"Nature",proficient:!1,expert:!1},{name:"Perception",proficient:!1,expert:!1},{name:"Performance",proficient:!1,expert:!1},{name:"Persuasion",proficient:!1,expert:!1},{name:"Religion",proficient:!1,expert:!1},{name:"Sleight of hand",proficient:!1,expert:!1},{name:"Stealth",proficient:!1,expert:!1},{name:"Survival",proficient:!1,expert:!1}],strength:10,dexterity:10,constitution:10,intelligence:10,wisdom:10,charisma:10}],current:null}),a=Object(x.a)(t,2),i=a[0],c=a[1];return r.a.createElement(E.Provider,{value:{characters:i.characters,current:i.current,addCharacter:function(e){e.id=Object(ne.uuid)(),c({type:"ADD_CHARACTER",payload:e})},updateCharacter:function(e){c({type:"UPDATE_CHARACTER",payload:e})},deleteCharacter:function(e){c({type:"DELETE_CHARACTER",payload:e})},setCurrent:function(e){c({type:"SET_CURRENT",payload:e})},clearCurrent:function(){c({type:"CLEAR_CURRENT"})}}},e.children)},ie=(a(92),Object(Y.a)({palette:{primary:$.a,secondary:ee.a}})),ce=function(){return Object(n.useEffect)((function(){})),r.a.createElement(Z.a,{theme:ie},r.a.createElement(re,null,r.a.createElement(l.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(f,null),r.a.createElement("div",{className:"row"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:d}),r.a.createElement(o.a,{exact:!0,path:"/character",component:Q}),r.a.createElement(o.a,{exact:!0,path:"/cheatSheet",component:X})))))))};c.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.e3eb2b03.chunk.js.map