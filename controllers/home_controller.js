module.exports.home = function(req,res){
    return res.render('home', {
        title: 'Kicrow',
        Movies: "Movies",
        Food: "Food",
        UPIPAYMENTS: "UPI PAYMENTS",
        Add: "ADD"
    });
}