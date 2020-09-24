import Example1 from '../tabs/example1.svelte';
import Example2 from '../tabs/example2.svelte';
import Example3 from '../tabs/example3.svelte';
import Example4 from '../tabs/example4.svelte';
import Example4s from '../tabs/example4s.svelte';
import Example5 from '../tabs/example5.svelte';
import Example6 from '../tabs/example6.svelte';
import Example7 from '../tabs/example7.svelte';
let tabs: Array<Tabs> = [
  {
    component: Example1,
    name: 'Eksempel 1',
    description: 'Enkel dom manipulasjon',
    active: true,
  },
  {
    component: Example2,

    name: 'Eksempel 2',
    description: 'Dom manipulasjon med objekt',
    active: false,
  },
  {
    component: Example3,
    name: 'Eksempel 3',
    description: 'Dom manipulasjon med liste av objekter',
    active: false,
  },
  {
    component: Example4s,
    name: 'Eksempel 4-1',
    description: 'svelte Store',
    active: false,
  },
  {
    component: Example4,
    name: 'Eksempel 4',
    description: 'svelte avansert Store',
    active: false,
  },

  {
    component: Example5,
    name: 'Eksempel 5',
    description: 'inline async await funksjon',
    active: false,
  },
  {
    component: Example6,
    name: 'Eksempel 6',
    description: 'store med reactive funksjon',
    active: false,
  },
  {
    component: Example7,
    name: 'Eksempel 7',
    description: 'Send data',
    active: false,
  },
];

tabs = tabs.map((e) => {
  let tagname = e.name.replace(' ', '');
  if (location.pathname !== '/') {
    e.active = location.pathname.includes(tagname);
  }

  return e;
});
export default tabs;
