function checkamount() {
    let amount = document.getElementById("total").value;
    let disc, final;
    if (amount >= 5000) {
        disc = amount * 30 / 100;
        document.write("You will get 30% discount which is Rs." + disc);
        final = amount - disc;
        document.write("<br>Final amount is Rs." + final);
    } else if (amount >= 3000 && amount < 5000) {
        disc = amount * 25 / 100;
        document.write("You will get 25% discount which is Rs." + disc);
        final = amount - disc;
        document.write("<br>Final amount is Rs." + final);
    } else if (amount >= 1000 && amount < 3000) {
        disc = amount * 20 / 100;
        document.write("You will get 20% discount which is Rs." + disc);
        final = amount - disc;
        document.write("<br>Final amount is Rs." + final);
    } else {
        document.write("Sorry, No discount");
        document.write("<br>Total payable amount is Rs." + amount);
    }
}