const newEmployees = (callback) => {
  const employees = {
    id1: callback("Pedro Guerra"),
    id2: callback("Luiza Drummond"),
    id3: callback("Carla Paiva"),
  };
  return employees;
};

console.table(
  newEmployees((fullname) => {
    const email = fullname.split(" ").join("_").toLowerCase();
    return { fullname, email: `${email}@trybe.com` };
  })
);
