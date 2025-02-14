import{j as e,a as d}from"./app-D_n1EQfr.js";import{B as c}from"./button-BucukNTh.js";import{T as x,a as j,b as n,c as r,d as m,e as a}from"./table-FFtUQ_oI.js";import{A as p}from"./AuthenticatedLayout-BIk62GQs.js";import{c as l}from"./createLucideIcon-DbYwB-Bs.js";import"./index-DKcvcda1.js";import"./index-CDzzs_8d.js";import"./index-WMLFSnmw.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=l("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=l("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),M=({questions:h})=>e.jsxs(p,{children:[e.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[e.jsx("h3",{className:"font-bold text-2xl",children:"Questions"}),e.jsx(d,{href:route("admin.questions.create"),children:e.jsx(c,{children:"Add"})})]}),e.jsxs(x,{children:[e.jsx(j,{children:e.jsxs(n,{children:[e.jsx(r,{children:"Question"}),e.jsx(r,{children:"Pitta"}),e.jsx(r,{children:"Vata"}),e.jsx(r,{children:"Kapha"}),e.jsx(r,{children:"Actions"})]})}),e.jsx(m,{children:h.map(s=>e.jsxs(n,{children:[e.jsx(a,{children:s.question}),e.jsx(a,{children:s.pitta?e.jsx(i,{}):e.jsx("div",{})}),e.jsx(a,{children:s.vata?e.jsx(i,{}):e.jsx("div",{})}),e.jsx(a,{children:s.kapha?e.jsx(i,{}):e.jsx("div",{})}),e.jsx(a,{children:e.jsx(d,{onClick:t=>{var o=confirm("Are you sure?");o||(t.preventDefault(),t.stopPropagation())},href:route("admin.questions.destroy",s.id),method:"delete",children:e.jsx(c,{size:"icon",variant:"ghost",children:e.jsx(f,{})})})})]},s.id))})]})]});export{M as default};
