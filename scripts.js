function openNav() {
    document.querySelector('#overlay-parent').insertAdjacentHTML(
        'afterbegin',
        `<div id="overlay-id" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">

            <div style="padding:0 0 0 0;position:relative;">
                <iframe
                    src="https://player.vimeo.com/video/462956848?color=ffffff&title=0&byline=0&portrait=0"
                    style="position: relative;top:0;left:0;width:140vh;height:80vh; border-radius: 18px;"
                    frameborder="0" allow="autoplay; fullscreen" allowfullscreen id="video">
                </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
    </div>`
    )
    document.getElementById("overlay-id").style.display = "block";
    // document.getElementById("myNav").style.height = "100%";
    // playPause();
}
function closeNav() {
    // document.getElementById("myNav").style.height = "0%";
    document.getElementById("overlay-id").style.display = "none";
    $("#overlay-id").remove();
    // playPause();
}


$(window).scroll(function () {
    var scrt = $(window).scrollTop()
    if (scrt > 10) {
        $(".graphic-design").addClass("effect")
    } else {
        $(".graphic-design").removeClass("effect")
    }
});




//----------------------------- Smooth scrolling when clicking an anchor link -------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


