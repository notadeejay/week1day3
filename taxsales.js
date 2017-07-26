
//Access the sales data for each company
//Find the sum of company sales data
//Apply the appropriate sales tax to the total sales

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}
];



function calculateSalesTax(salesData, taxRates) {
 finalResult = {};

 for (var i = 0; i < salesData.length; i++) {
    var currentSalesData = salesData[i];
    var name = salesData[i]['name'];
    var salesSum = salesTotal(currentSalesData.sales);
    var province = currentSalesData.province;
    var provinceTax = salesTaxRates[currentSalesData.province];
    var taxTotal = salesSum * provinceTax;


    if (finalResult[name]) {
      finalResult[name].totalSales = finalResult[name].totalSales + salesSum;
      finalResult[name].totalTaxes = finalResult[name].totalTaxes + taxTotal;
    } else {
      finalResult[name] = {totalSales: salesSum, totalTaxes: taxTotal}
  }

}

console.log(finalResult);

}
calculateSalesTax(companySalesData);


function salesTotal (salesData){
//take in one object, loop through sales data and reduce to single number, sum
  var sum = 0;

  sum = salesData.reduce(function(a, b){return a+b;});
  return sum;

}

