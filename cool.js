const avenger = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Live more worry less🥳",
};

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionaire", "playboy", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Live more worry less🥳",
};

console.log(networth, power, skill);

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "Live more worry less🥳",
};
console.log(avg);
const avg1 = { ...avg, nation: "US", power: "💿" };
console.log(avg1);

// {
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰",
//     power: "💿",
//     phrase: "Live more worry less🥳",
//     nation: "US"
//   };

const avg2 = { nation: "US", power: "💿", ...avg };
console.log(avg2);
// {
// nation: "US",

// name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: "🤖",
//   phrase: "Live more worry less🥳",
// }
