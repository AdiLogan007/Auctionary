
for(var i=1; i<=10; i++)
{
    var price = 625000;
    const increase = 5000;
    document.querySelector('#price').innerHTML = '₹ ' + price;

    document.querySelector('.bid-button').addEventListener("click", (event) => {
        var result = price + increase;
        document.querySelector('#price').innerHTML = '₹ ' + result;
    });
    price = result;
}
