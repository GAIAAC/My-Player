$(document).ready(function() {
    $.ajax({
        url: "data/audio.json",
        type: "GET",
        dataType: "json",
        success : function (data) {
            console.log(data);
$.each(data.audio, function(i, el) {
    var title_audio = el.title;
    var file_audio = el.file;
    console.log(title_audio);
    console.log(file_audio);
    $("#audioList").append('<li class="list-group-item"><a href=' + file_audio + '>' + title_audio + '</a></li>');

    $("#audioList a").click(function(e) {
        e.preventDefault();
        var audios = $(this).attr('href');
        var myAudio = $("#audio");
        myAudio.attr("src", audios);
        document.getElementById("audio").play();
    })
});
$(document).ready(function() {
    $.ajax({
        url: "data/video.json",
        type: "GET",
        dataType: "json",
        success : function (data) {

$.each(data.video, function(i, el) {
    var title_video = el.title;
    var file_video = el.file;
    console.log(el.title);
    console.log(file_video);
    $("#videoList").append('<li class="list-group-item"><a href=' + file_video + '>' + title_video + '</a></li>');

$("#videoList a").click(function(e) {
    e.preventDefault();
    var videos = $(this).attr('href');
    var myVideo = $("#video");
    myVideo.attr("src", videos);
    document.getElementById("video").play();
})
});
},
error: function (error) {
    console.log(error.status);
}