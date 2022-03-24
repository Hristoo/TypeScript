type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const ee: ElevatedEmployee = {
  name: "Ivan",
  privileges: ["edit"],
  startDate: new Date(),
};
