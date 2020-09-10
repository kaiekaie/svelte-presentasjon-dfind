import Example1 from "../tabs/example1.svelte";
import Example2 from "../tabs/example2.svelte";
import Example3 from "../tabs/example3.svelte";
import Example4 from "../tabs/example4.svelte";
import Example5 from "../tabs/example5.svelte";
import Example6 from "../tabs/example6.svelte";

let tabs: Array<Tabs> = [
  {
    component: Example1,
    name: "Eksempel 1",
    description: "Enkel dom manipulasjon",
    active: true,
  },
  {
    component: Example2,

    name: "Eksempel 2",
    description: "Dom manipulasjon med objekt",
    active: false,
  },
  {
    component: Example3,
    name: "Eksempel 3",
    description: "Dom manipulasjon med liste av objekter",
    active: false,
  },
  {
    component: Example4,
    name: "Eksempel 4",
    description: "svelte Store",
    active: false,
  },
  {
    component: Example5,
    name: "Eksempel 5",
    description: "inline async await funksjon",
    active: false,
  },
  {
    component: Example6,
    name: "Eksempel 6",
    description: "store med recursive funksjon",
    active: false,
  },
];

tabs = tabs.map((e) => {
  let tagname = e.name.replace(" ", "");
  if (location.pathname !== "/") {
    e.active = location.pathname.includes(tagname);
  }

  return e;
});
export default tabs;
