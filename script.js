var userList = [
    "ESL_SC2",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
]; //list of users

function check(user) {

    user.forEach(function(entry) {
        var url =
            "https://api.twitch.tv/kraken/streams/" +
            entry +
            "?client_id=9kg7zqk934lffsjorkjnnnbvhkrb82";

        var channels = "https://api.twitch.tv/kraken/channels/" +
            entry +
            "?client_id=9kg7zqk934lffsjorkjnnnbvhkrb82";
        $.getJSON(channels, function(data) {
            $("#all").append(
                "<a href=" + data.url + "><div class='cntContain'><img src=" + data.logo + ">" + "<h6>" + data.display_name + "</h6>" + "<div class= 'fuck' id=" + data.display_name + ">" + "</div>" + "</div><div id='status" + data.display_name + "' class='status'></div></a>");
        })

        $.getJSON(url, function(data) {
            if (data.stream == null) {
                $.getJSON(channels, function(chanOff) {
                    $("#" + chanOff.display_name).prepend("<i class='icon fas fa-eye-slash'></i>");
                    $('#offline').append("<a href=" + chanOff.url + "><div class='cntContain'><img src=" + chanOff.logo + ">" + "<h6>" + chanOff.display_name + "</h6>" + "<div class= 'fuck' id=" + chanOff.display_name + ">" + "</div>" + "</div></a>");
                    $('#status' + chanOff.display_name).hide();
                    //<a href="+chanOff.url+"><div class='cntContain'><img src="+chanOff.logo+">"+"<h6>"+chanOff.display_name+"<h6>"+"</div></a>
                });
            } else {
                $.getJSON(channels, function(chanOn) {
                    $("#" + chanOn.display_name).append("<i id='onlineIcon' class='icon fas fa-eye'></i>");
                    $('#status' + chanOn.display_name).append(chanOn.status);
                    $('#online').append("<a href=" + chanOn.url + "><div class='cntContain'><img src=" + chanOn.logo + ">" + "<h6>" + chanOn.display_name + "</h6>" + "<div class= 'fuck' id=" + chanOn.display_name + ">" + "</div>" + "</div></a>");
                })
            };
        });
    });
}
check(userList);


$(document).ready(function() {
    $('#span').delay(1000).fadeIn(900);
    $('#head').delay(1000).fadeIn(900);
    $('#userCnt').fadeIn(2500);
    $('#allButton').on('click', function() {
        $('#offline').hide();
        $('#online').hide();
        $('#all').fadeIn(900);
    })
    $('#offButton').on('click', function() {
        $('#all').hide();
        $('#online').hide();
        $('#offline').fadeIn(900);
    })
    $('#onButton').on('click', function() {
        $('#offline').hide();
        $('#all').hide();
        $('#online').fadeIn(900);
    })
});