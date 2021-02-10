var MusicGenre;
(function (MusicGenre) {
    MusicGenre[MusicGenre["Rock"] = 0] = "Rock";
    MusicGenre[MusicGenre["Pop"] = 1] = "Pop";
    MusicGenre[MusicGenre["Electronic"] = 2] = "Electronic";
    MusicGenre[MusicGenre["Metal"] = 3] = "Metal";
    MusicGenre[MusicGenre["Classic"] = 4] = "Classic";
})(MusicGenre || (MusicGenre = {}));
var bands = [
    {
        name: "Iron Mainden",
        members: ["Dickinson", "Guitar guy", "Drums guy", "Another"],
        activeSince: 1970,
        labels: ["Amy", "Universal", "Epic", "Capital"],
        releasedAlbums: 10,
        genre: [MusicGenre.Metal]
    },
    {
        name: "Coldplay",
        members: ["Chris Martin", "Keyboard guy", "Guitar guy"],
        labels: ["Amy", "Sony", "Disney"],
        activeSince: 1990,
        releasedAlbums: 5,
        genre: [MusicGenre.Pop, MusicGenre.Electronic]
    },
    {
        name: "Foo Fighters",
        members: ["Dave Grohl"],
        labels: ["Foo", "Sony"],
        activeSince: 1991,
        releasedAlbums: 4,
        genre: [MusicGenre.Metal]
    },
    {
        name: "Imagine dragons",
        members: ["Vocal guy", "Guitar guy", "Keyboard guy"],
        labels: ["Kaya Records", "Records"],
        releasedAlbums: 3,
        genre: [MusicGenre.Pop, MusicGenre.Electronic, MusicGenre.Rock]
    },
    {
        name: "OneRepublic",
        members: ["Rayan Tedder", "Guitar guy", "Keyboard guy", "Drums guy"],
        labels: ["Amy", "Records"],
        activeSince: 2004,
        genre: [MusicGenre.Pop]
    },
];
function searchMusicansByGenre(bandsInput, genre) {
    var uniqueMusicans = [];
    for (var index = 0; index < bandsInput.length; index++) {
        for (var _i = 0, bands_1 = bands; _i < bands_1.length; _i++) {
            var band = bands_1[_i];
            if (band.name.includes(bandsInput[index])) {
                if (band.genre.includes(genre)) {
                    uniqueMusicans.push.apply(uniqueMusicans, band.members);
                }
            }
        }
    }
    uniqueMusicans = Array.from(new Set(uniqueMusicans));
    console.log(uniqueMusicans);
    return uniqueMusicans;
}
searchMusicansByGenre(["OneRepublic", "Coldplay"], MusicGenre.Pop);
var labels = [
    {
        name: "Capital",
        activeSince: 1980,
        releasedAlbums: 211,
        genre: [MusicGenre.Metal]
    },
    {
        name: "Amy",
        activeSince: 1972,
        releasedAlbums: 3121,
        genre: [MusicGenre.Pop, MusicGenre.Electronic, MusicGenre.Metal]
    },
    {
        name: "Universal",
        activeSince: 1973,
        releasedAlbums: 301,
        genre: [MusicGenre.Pop]
    },
    {
        name: "Epic",
        activeSince: 2010,
        releasedAlbums: 51,
        genre: [MusicGenre.Electronic]
    },
    {
        name: "Sony",
        activeSince: 2010,
        releasedAlbums: 51,
        genre: [
            MusicGenre.Pop,
            MusicGenre.Electronic,
            MusicGenre.Classic,
            MusicGenre.Rock,
        ]
    },
    {
        name: "Disney",
        activeSince: 2006,
        releasedAlbums: 231,
        genre: [MusicGenre.Pop]
    },
    {
        name: "Foo",
        activeSince: 2012,
        releasedAlbums: 21,
        genre: [MusicGenre.Metal]
    },
    {
        name: "Kaya Records",
        activeSince: 2008,
        releasedAlbums: 468,
        genre: [MusicGenre.Pop, MusicGenre.Electronic]
    },
    {
        name: "Records",
        activeSince: 2017,
        releasedAlbums: 22,
        genre: [MusicGenre.Pop]
    },
];
function searchNumberOfAlbums(input) {
    var result = [];
    var arrayToSearch = labels;
    recursionEngine(input);
    function recursionEngine(input) {
        for (var index = 0; index < input.length; index++) {
            var _loop_1 = function (band) {
                if (band.name.includes(input[index])) {
                    result.push({
                        name: band.name,
                        albums: band.releasedAlbums === undefined ? 0 : band.releasedAlbums,
                        genrs: getGenres()
                    });
                    function getGenres() {
                        var array = [];
                        for (var _i = 0, _a = band.genre; _i < _a.length; _i++) {
                            var gen = _a[_i];
                            array.push(MusicGenre[gen]);
                        }
                        return array;
                    }
                }
            };
            for (var _i = 0, arrayToSearch_1 = arrayToSearch; _i < arrayToSearch_1.length; _i++) {
                var band = arrayToSearch_1[_i];
                _loop_1(band);
            }
        }
    }
    if (result.length === 0) {
        arrayToSearch = [];
        arrayToSearch = bands;
        recursionEngine(input);
    }
    console.log(result);
    return result;
}
searchNumberOfAlbums(["Sony", "Foo", "Amy"]);
searchNumberOfAlbums(["Coldplay", "Foo Fighter", "OneRepublic"]);
