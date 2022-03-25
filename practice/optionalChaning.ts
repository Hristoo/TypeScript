interface User {
  id: number;
  name: string;
  job?: Job;
}

interface Job {
  title: string;
  description: string;
}

const userDate: User = {
  id: 1,
  name: "Ivan",
  // job: { title: "Employee", description: "Work hard"}
};

const title = userDate?.job?.title;

console.log(title);
