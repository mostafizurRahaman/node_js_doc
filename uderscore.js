const _ = require("underscore");

const friendsList = _.map(
   [
      { id: 1, name: "mostafizur rahaman" },
      { id: 2, name: "Ratul hossain" },
      { id: 3, name: "Fahim" },
   ],
   function (i) {
      return i.name;
   }
);

module.exports = { friendsList };
