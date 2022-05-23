import {
  faCloud,
  faPlug,
  faProjectDiagram,
  faBullhorn,
  faTools,
  faCode,
  faQuestion,
  faDatabase,
  IconDefinition,
  faBook,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

export const categories: category[] = [
  {
    name: "Cloud",
    value: "cloud",
    icon: faCloud,
    iconTitle: "cloud",
  },

  {
    name: "Support",
    value: "support",
    icon: faBullhorn,
    iconTitle: "cloud",
  },

  {
    name: "Training",
    value: "training",
    icon: faBook,
    iconTitle: "cloud",
  },

  {
    name: "Drivers & Frameworks",
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
    name: "Kubernetes",
    value: "kubernetes",
    icon: faCube,
    iconTitle: "kubernetes",
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
    value: "udf",
    icon: faDatabase,
    iconTitle: "UDF",
  },

  {
    name: "Plugins",
    value: "apis",
    icon: faCode,
    iconTitle: "code",
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
