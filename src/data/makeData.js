import { faker } from "@faker-js/faker";

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  return {
    id: faker.string.uuid(),
    role: faker.helpers.arrayElement(["employee", "client"]),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password({ length: 8 }),
    date: faker.date.between({ from: "2022-01-01", to: "2024-12-01" }),
    profile: faker.image.avatar(),
    age: faker.number.int({ min: 25, max: 50 }),
    visits: faker.number.int(1000),
    jobType: faker.person.jobType(),
    progress: faker.number.int({ min: 40, max: 90 }),
    status: faker.helpers.arrayElement([
      { name: "Pending", color: "yellow", id: faker.string.uuid() },
      { name: "Inprocess", color: "#159afb", id: faker.string.uuid() },
      { name: "Complete", color: "#0cf90c", id: faker.string.uuid() },
    ]),
    statusMenu: [
      { name: "Pending", color: "yellow", id: faker.string.uuid() },
      { name: "Inprocess", color: "#159afb", id: faker.string.uuid() },
      { name: "Complete", color: "#0cf90c", id: faker.string.uuid() },
    ],
    gender: faker.person.sex(),
    tasks: [
      {
        title: faker.lorem.lines(1),
        description: faker.lorem.sentence(),
        dueDate: faker.date.soon(),
      },
    ],
    projects: [
      {
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
      },
    ],
    events: [
      {
        name: faker.lorem.word({ min: 1, max: 3 }),
        description: faker.lorem.words(),
        date: faker.date.between({ from: "2022-01-01", to: "2024-12-01" }),
      },
    ],
    allowFollowUp: faker.helpers.arrayElement([
      { type: "Yes" },
      { type: "No" },
    ]),
  };
};

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
      };
    });
  };

  return makeDataLevel();
}
