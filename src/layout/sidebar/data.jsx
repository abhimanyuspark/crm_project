import {
  FaDashcube,
  FaGear,
  FaUserFriends,
  FaUsers,
} from "../../components/icons";

export const admin = [
  {
    id: 1,
    icon: <FaDashcube />,
    value: "Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Private",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    icon: <FaUserFriends />,
    value: "Clients",
    link: "/clients",
  },
  {
    id: 3,
    icon: <FaUsers />,
    value: "Employees",
    link: "/employees",
  },
  {
    id: 4,
    icon: <FaGear />,
    value: "Settings",
    link: "/settings",
  },
];

export const client = [
  {
    id: 1,
    icon: <FaDashcube />,
    value: "Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Private",
        link: "/",
      },
    ],
  },
];

export const employee = [
  {
    id: 1,
    icon: <FaDashcube />,
    value: "Dashboard",
    subMenu: [
      {
        id: 1,
        value: "Private",
        link: "/",
      },
    ],
  },
];
