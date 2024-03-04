import { FaDashcube, FaGear, FaList, FaUsers } from "../../components/icons";

export const admin = [
  {
    id: 1,
    icon: <FaDashcube />,
    value: "Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Dashboard",
        link: "/",
      },
      {
        id: 2,
        value: "Select",
        link: "/select",
      },
      {
        id: 3,
        value: "Buttons",
        link: "/allbuttons",
      },
    ],
  },
  {
    id: 2,
    icon: <FaList />,
    value: "Accordians",
    link: "/accordians",
  },
  {
    id: 3,
    icon: <FaUsers />,
    value: "Users",
    link: "/users",
  },
  {
    id: 4,
    icon: <FaGear />,
    value: "Setting",
    subMenu: [
      {
        id: 1,
        value: "Settings",
        link: "/setting",
      },
    ],
  },
];

export const client = [];

export const employee = [];
