interface MyData {
  variable1?: string;
  variable2?: string;
  variable3?: number;
  subVariables?: ObjectInData;
}

interface ObjectInData {
  subVariable1: String;
  subVariable2: boolean;
}

interface FormData {
  string1: string;
  string2: string;
  boolean: boolean;
  date: string;
  selection: string[];
  selected: string;
}

interface Tabs {
  component: SvelteComponentDev;
  name: string;
  description?: string;
  active: boolean;
}

interface Posts {
  userId: number;
  id?: number;
  title: string;
  body: string;
}
