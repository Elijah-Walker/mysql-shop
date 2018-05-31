var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  questions();
});

function questions() {
connection.query("SELECT * FROM products", function(err, results) {
  if (err) throw err;
  inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: "What would you like to buy?",
      choices: function() {
        var choiceArray = [];
        for (var i = 0; i < results.length; i++) {
          choiceArray.push(results[i].product_name);
        }
        return choiceArray;
        console.log(choice.stock_quantity);
      }
    },
    {
        name: "amount",
        type: "input",
        message: "How many would you like to buy?"
    }
  ])
  .then(function(answer) {
    var chosenItem
    for (var i = 0; i < results.length; i++) {
      if (results[i].product_name === answer.choice) {
        chosenItem = results[i];
      }
    }
    if (chosenItem.stock_quantity >= (0 + answer.amount)) {
      connection.query(
        "UPDATE products SET ? WHERE ?",
        [
          {
            stock_quantity: (chosenItem.stock_quantity - answer.amount)
          },
          {
            product_name: chosenItem.product_name
          }
        ],
        function(error) {
          if (error) throw err;
          var totalPrice = (chosenItem.price * answer.amount)
          console.log("Your total is " + totalPrice);
          questions();
        }
      );
    }
    else {
      console.log("Sorry, there is not enough stock to fill your order");
      questions();
    }
  });   
})


};