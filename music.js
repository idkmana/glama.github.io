document.addEventListener("DOMContentLoaded", function() {
    const songs = [
        document.getElementById("song"),
        document.getElementById("song2"),
        document.getElementById("song3"),
        document.getElementById("song4"),
        document.getElementById("song5"),
        document.getElementById("song6"),
        document.getElementById("song7"),
        document.getElementById("song8"),
    ];

    const progresses = [
        document.getElementById("progress"),
        document.getElementById("progress 2"),
        document.getElementById("progress 3"),
        document.getElementById("progress 4"),
        document.getElementById("progress 5"),
        document.getElementById("progress 6"),
        document.getElementById("progress 7"),
        document.getElementById("progress 8"),
    ];


    const controls = [
        document.getElementById("ctrl"),
        document.getElementById("ctrl2"),
        document.getElementById("ctrl3"),
        document.getElementById("ctrl4"),
        document.getElementById("ctrl5"),
        document.getElementById("ctrl6"),
        document.getElementById("ctrl7"),
        document.getElementById("ctrl8"),
    ];


    window.playPause = function(songIndex) {
        var song = songs[songIndex - 1];
        var control = controls[songIndex - 1];

        if (song.paused) {
            song.play();
            control.classList.remove("fa-play");
            control.classList.add("fa-pause");

            for (let i = 0; i < songs.length; i++) {
                if (i != songIndex - 1) {
                    songs[i].pause();
                    progresses[i].value = 0;
                    songs[i].currentTime = progresses[i].value;
                    controls[i].classList.add("fa-play");
                    controls[i].classList.remove("fa-pause");
                }
            }
        } else {
            song.pause();
            control.classList.add("fa-play");
            control.classList.remove("fa-pause");
        }
    };

    function updateProgress(songIndex) {
        const song = songs[songIndex];
        const progress = progresses[songIndex];
        progress.value = song.currentTime;
    }


    for (let i = 0; i < progresses.length; i++) {
        progresses[i].addEventListener("input", function() {
            const song = songs[i];
            song.currentTime = progresses[i].value;
        });
    }

    setInterval(() => {
        for (let i = 0; i < songs.length; i++) {
            updateProgress(i);
        }
    }, 500);
});
