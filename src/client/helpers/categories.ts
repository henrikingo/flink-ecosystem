import {
  faPlug,
  faTachometerAlt,
  faProjectDiagram,
  faTools,
  faCode,
  faQuestion,
  faDatabase,
  faServer,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

export const categories: category[] = [
  {
    name: "Plugins",
    value: "apis",
    icon: faCode,
    iconTitle: "code",
  },

  {
    name: "Connectors",
    value: "connectors",
    icon: faPlug,
    iconTitle: "plug",
  },

  {
    name: "GUI tools",
    value: "gui-tools",
    icon: faProjectDiagram,
    iconTitle: "diagram",
  },
  {
    name: "Tools",
    value: "tools",
    icon: faTools,
    iconTitle: "tools",
  },

  {
    name: "CQL",
    value: "cql",
    icon: faDatabase,
    iconTitle: "CQL",
  },

  {
    name: "User Defined Types",
    value: "udt",
    icon: faDatabase,
    iconTitle: "UDT",
  },

  {
    name: "User Defined Functions",
    value: "udt",
    icon: faDatabase,
    iconTitle: "UDT",
  },

  {
    name: "Examples",
    value: "examples",
    icon: faQuestion,
    iconTitle: "question",
  },

];

type category = {
  name: string;
  value: string;
  icon: IconDefinition;
  iconTitle: string;
};
