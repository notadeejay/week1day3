var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


//Updating the object to include each persons followers

var addFollowerstoData = function() {
  for(var id in data) {
    data[id].followers = [];
  }

  for (var id in data) {
    for (var x of data[id].follows) {
        data[x].followers.push(id)
    }
  }
  console.log(data);
}

//Listing who follows who + name

var listAll = function() {
  for(key in data){
    console.log(data[key].name + " follows " + data[key].follows + " and " + data[key].followers + " are follwing him/her");
  }
}

//Who follows the most people

var whoFollowsMost = function () {
  var numFollowing = 0;
  var personFollowingMost = []

  for (var key in data) {
    if (numFollowing < data[key].follows.length) {
      numFollowing = data[key].follows.length;
    }
  }

  for (var key in data) {
    if (numFollowing === data[key].follows.length) {
      personFollowingMost.push(data[key].name)
    }
  }
  console.log(personFollowingMost + " is following the most people.");
  return personFollowingMost;
}


//Who has the most followers
var mostFollowers = function () {
  var numFollowers = 0;
  var personWithMostFollowers = [];

  for (var key in data) {
    if (numFollowers < data[key].followers.length) {
      numFollowers = data[key].follows.length
    }
  }

  for (var key in data) {
    if (numFollowers === data[key].followers.length) {
      personWithMostFollowers.push(data[key].name)
    }
  }
  console.log(personWithMostFollowers[0] + " " + personWithMostFollowers[1] + " and " + personWithMostFollowers[2] + " have the most followers.");
  return personWithMostFollowers;
}

var followersOverThirty = function () {
  var followersOverThirty = 0;
  for (var key in data) {
    data[key].followers = 0;

    for (var user in data) {
      if (data[user].follows.indexOf(key) !== -1 && data[user].age > 30) {
        data[key].followers ++;
      }
    }

    if (data[key].followers >= followersOverThirty) {
      followersOverThirty = data[key].followers;
    }
  }

  console.log("The user(s) with the most followers over 30 are: ");
  for (var key in data) {
    if (data[key].followers === followersOverThirty) {
      console.log(data[key].name);
    }
  }
}




addFollowerstoData();
listAll();
whoFollowsMost();
mostFollowers();
followersOverThirty();








