//Solution Of Problem 1
function seerToMon(seer) {
    if (seer == 0) {
        return String = "Try again";
    }
    var mon = seer / 40;
    return mon;
}
var seer = 40;
var mon = seerToMon(seer);
//console.log(mon);

//Solution Of Problem 2
function totalSales(shirt, pant, shoe) {
    if (Number(shirt) == shirt && shirt % 1 != 0) {
        return String = "Invalid Value.Try again";
    }
    if (Number(pant) == pant && pant % 1 != 0) {
        return String = "Invalid Value.Try again";
    }
    if (Number(shoe) == shoe && shoe % 1 != 0) {
        return String = "Invalid Value.Try again";
    }

    var per_shirt_price = 100;
    var per_pant_price = 200;
    var per_shoe_price = 500;
    total = (per_shirt_price * shirt + per_pant_price * pant + per_shoe_price * shoe);
    return total;
}
var quantity_of_shirt = 1;
var quantity_of_pant = 1;
var quantity_of_shoe = 2;

var Total = totalSales(quantity_of_shirt, quantity_of_pant, quantity_of_shoe);
//console.log(Total);

//Solution Of Problem 3
function deliveryCost(number_of_t_shirt) {
    if (Number(number_of_t_shirt) == number_of_t_shirt && number_of_t_shirt % 1 != 0) {
        return String = "Invalid Number.Try again";
    }
    else if (number_of_t_shirt == 0) {
        return String = "Invalid Number,Try again";
    }
    else if (number_of_t_shirt <= 100) {
        var total = number_of_t_shirt * 100;
        return total;
    }
    else if (number_of_t_shirt >= 101 && number_of_t_shirt <= 200) {
        var remaining_t_shirt = number_of_t_shirt - 100;
        var total_amount_of_100_t_shirt = 10000;
        var total = (remaining_t_shirt * 80) + total_amount_of_100_t_shirt;
        return total;
    }
    else {
        var remaining_t_shirt = number_of_t_shirt - 200;
        var total_amount_of_200_t_shirt = 18000;
        var total = (remaining_t_shirt * 50) + total_amount_of_200_t_shirt;
        return total;
    }

}
var quantity_of_tshirt = 0;
var total_delivery_cost = deliveryCost(quantity_of_tshirt);
console.log(total_delivery_cost);

//Solution Of Problem 4

function perfectFriend()
