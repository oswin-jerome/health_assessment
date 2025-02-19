import{j as e,a as i}from"./app-6Xp2ZTO-.js";import{B as t}from"./button-DpdcOkpx.js";import{T as x,a as j,b as l,c as a,d as m,e as r}from"./table-D1czWpuJ.js";import{A as p}from"./AuthenticatedLayout-DI_akTgS.js";import{c as n}from"./createLucideIcon-BoUNj2K5.js";import"./index-CAv4lZSM.js";import"./index-BMDA1gmd.js";import"./index-BqEZjMuw.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=n("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=n("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]),C=({questions:h})=>e.jsxs(p,{children:[e.jsxs("div",{className:"mb-8 flex justify-between items-center",children:[e.jsx("h3",{className:"font-bold text-2xl",children:"Questions"}),e.jsx(i,{href:route("admin.questions.create"),children:e.jsx(t,{children:"Add"})})]}),e.jsxs(x,{children:[e.jsx(j,{children:e.jsxs(l,{children:[e.jsx(a,{children:"Question"}),e.jsx(a,{children:"Pitta"}),e.jsx(a,{children:"Vata"}),e.jsx(a,{children:"Kapha"}),e.jsx(a,{children:"Actions"})]})}),e.jsx(m,{children:h.map(s=>e.jsxs(l,{children:[e.jsx(r,{children:s.question}),e.jsx(r,{children:s.pitta?e.jsx(d,{}):e.jsx("div",{})}),e.jsx(r,{children:s.vata?e.jsx(d,{}):e.jsx("div",{})}),e.jsx(r,{children:s.kapha?e.jsx(d,{}):e.jsx("div",{})}),e.jsxs(r,{children:[e.jsx(i,{href:route("admin.questions.edit",s.id),method:"get",children:e.jsx(t,{size:"icon",variant:"ghost",children:e.jsx(f,{})})}),e.jsx(i,{onClick:c=>{var o=confirm("Are you sure?");o||(c.preventDefault(),c.stopPropagation())},href:route("admin.questions.destroy",s.id),method:"delete",children:e.jsx(t,{size:"icon",variant:"ghost",children:e.jsx(u,{})})})]})]},s.id))})]})]});export{C as default};
