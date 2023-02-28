// controller and routing is done by routes only no need of this
module.exports.home = function(req,res){
    return res.render('home', {
        title: 'Kicrow',
        Movies: "Movies",
        Food: "Food",
        UPIPAYMENTS: "UPI PAYMENTS",
        Add: "ADD"
    });
}