export const Peoples = [
  {
    name: "Alex",
    lastname: "Jonson",
    id: 1,
    avatar: require("../../assets/peoples/yongMan.jpg"),
    fans: 100467,
    state: false,
  },
  {
    name: "July",
    lastname: "Albrus",
    id: 2,
    avatar: require("../../assets/peoples/gerl1.jpeg"),
    fans: 86790,
  },
  {
    name: "Kate",
    lastname: "Pirson",
    id: 3,
    avatar: require("../../assets/peoples/gerl2.jpg"),
    fans: 55388,
  },
  {
    name: "Elizabet",
    lastname: "Ford",
    id: 4,
    avatar: require("../../assets/peoples/gerl3.jpeg"),
    fans: 38903,
  },
  {
    name: "Penny",
    lastname: "Scott",
    id: 5,
    avatar: require("../../assets/peoples/gerl4.jpeg"),
    fans: 31400,
  },
  {
    name: "Will",
    lastname: "Persy",
    id: 9,
    avatar: require("../../assets/peoples/man4.jpg"),
    fans: 30688,
  },
  {
    name: "Melissa",
    lastname: "Weit",
    id: 6,
    avatar: require("../../assets/peoples/gerl5.jpg"),
    fans: 24690,
  },
  {
    name: "Cris",
    lastname: "Solder",
    id: 7,
    avatar: require("../../assets/peoples/man2.jpeg"),
    fans: 16900,
  },
  {
    name: "John",
    lastname: "O'lenny",
    id: 8,
    avatar: require("../../assets/peoples/man3.jpg"),
    fans: 15500,
  },
].sort((a, b) => (a.fans > b.fans ? -1 : 1));
