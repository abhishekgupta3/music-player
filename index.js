        let play = document.getElementById('play');
        let prev = document.getElementById('prev');
        let next = document.getElementById('next');
        let audio = document.querySelector('audio');
        let artistDisplay = document.querySelector('h3');
        let trackDisplay = document.querySelector('h2');
        let img = document.querySelector('img');
        let isPlaying = false;

        let array = [
            {
                track: "Harry Potter",
                artist: "HP-Ringtone",
                name: "audio/track-1.mp3",
                image: "images/img-1.jpg"
            },
            {
                track: "Jack Sparrow",
                artist: "Pirates of Carribean",
                name: "audio/track-2.mp3",
                image: "images/img-2.jpg"
            },
            {
                track: "Avengers",
                artist: "Marvel",
                name: "audio/track-3.mp3",
                image: "images/img-3.jpg"
            }
        ];
        let arrayIndex = 0;

        let playSong = (arrayIndex) => {
            trackDisplay.textContent = array[arrayIndex].track;
            artistDisplay.textContent = array[arrayIndex].artist;
            audio.src = array[arrayIndex].name;
            img.src = array[arrayIndex].image;
            if (isPlaying) {
                audio.play();
            }
        }
        play.addEventListener("click", function () {
            if (isPlaying == false) {
                audio.play();
                isPlaying = true;
                play.classList.replace("fa-play", "fa-pause");
            }
            else {
                audio.pause();
                play.classList.replace("fa-pause", "fa-play");
                isPlaying = false;
            }
        });

        setInterval(function () {
            if (audio.ended) {
                nextSong();
            }
        }, 50);

        function nextSong() {
            arrayIndex = (arrayIndex + 1) % array.length;
            playSong(arrayIndex);
        }
        function prevSong() {
            arrayIndex = (arrayIndex - 1 + array.length) % array.length;
            playSong(arrayIndex);
        }

        next.addEventListener('click', nextSong);
        prev.addEventListener('click', prevSong);