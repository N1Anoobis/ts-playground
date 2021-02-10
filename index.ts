enum MusicGenre {
  Rock,
  Pop,
  Electronic,
  Metal,
  Classic,
}

interface Bands {
  name: string;
  members: string[];
  activeSince?: number;
  labels: string[];
  releasedAlbums?: number;
  genre: MusicGenre[];
}

const bands: Bands[] = [
  {
    name: "Iron Mainden",
    members: ["Dickinson", "Guitar guy", "Drums guy", "Another"],
    activeSince: 1970,
    labels: ["Amy", "Universal", "Epic", "Capital"],
    releasedAlbums: 10,
    genre: [MusicGenre.Metal],
  },
  {
    name: "Coldplay",
    members: ["Chris Martin", "Keyboard guy", "Guitar guy"],
    labels: ["Amy", "Sony", "Disney"],
    activeSince: 1990,
    releasedAlbums: 5,
    genre: [MusicGenre.Pop, MusicGenre.Electronic],
  },
  {
    name: "Foo Fighters",
    members: ["Dave Grohl"],
    labels: ["Foo", "Sony"],
    activeSince: 1991,
    releasedAlbums: 4,
    genre: [MusicGenre.Metal],
  },
  {
    name: "Imagine dragons",
    members: ["Vocal guy", "Guitar guy", "Keyboard guy"],
    labels: ["Kaya Records", "Records"],
    releasedAlbums: 3,
    genre: [MusicGenre.Pop, MusicGenre.Electronic, MusicGenre.Rock],
  },
  {
    name: "OneRepublic",
    members: ["Rayan Tedder", "Guitar guy", "Keyboard guy", "Drums guy"],
    labels: ["Amy", "Records"],
    activeSince: 2004,
    genre: [MusicGenre.Pop],
  },
];

function searchMusicansByGenre(bandsInput: string[], genre: number): string[] {
  let uniqueMusicans = [];
  for (let index = 0; index < bandsInput.length; index++) {
    for (const band of bands) {
      if (band.name.includes(bandsInput[index])) {
        if (band.genre.includes(genre)) {
          uniqueMusicans.push(...band.members);
        }
      }
    }
  }
  uniqueMusicans = Array.from(new Set(uniqueMusicans));

  console.log(uniqueMusicans);
  return uniqueMusicans;
}

searchMusicansByGenre(["OneRepublic", "Coldplay"], MusicGenre.Pop);

interface Labels {
  name: string;
  activeSince?: number;
  releasedAlbums: number;
  genre: MusicGenre[];
}

const labels: Labels[] = [
  {
    name: "Capital",
    activeSince: 1980,
    releasedAlbums: 211,
    genre: [MusicGenre.Metal],
  },
  {
    name: "Amy",
    activeSince: 1972,
    releasedAlbums: 3121,
    genre: [MusicGenre.Pop, MusicGenre.Electronic, MusicGenre.Metal],
  },
  {
    name: "Universal",
    activeSince: 1973,
    releasedAlbums: 301,
    genre: [MusicGenre.Pop],
  },
  {
    name: "Epic",
    activeSince: 2010,
    releasedAlbums: 51,
    genre: [MusicGenre.Electronic],
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
    ],
  },
  {
    name: "Disney",
    activeSince: 2006,
    releasedAlbums: 231,
    genre: [MusicGenre.Pop],
  },
  {
    name: "Foo",
    activeSince: 2012,
    releasedAlbums: 21,
    genre: [MusicGenre.Metal],
  },
  {
    name: "Kaya Records",
    activeSince: 2008,
    releasedAlbums: 468,
    genre: [MusicGenre.Pop, MusicGenre.Electronic],
  },
  {
    name: "Records",
    activeSince: 2017,
    releasedAlbums: 22,
    genre: [MusicGenre.Pop],
  },
];

function searchNumberOfAlbums(input: string[]): object[] {
  const result: object[] = [];
  let arrayToSearch: Array<Labels | Bands> = labels;
  recursionEngine(input);

  function recursionEngine(input: string[]): void {
    for (let index = 0; index < input.length; index++) {
      for (const band of arrayToSearch) {
        if (band.name.includes(input[index])) {
          result.push({
            name: band.name,
            albums: band.releasedAlbums === undefined ? 0 : band.releasedAlbums,
            genrs: getGenres(),
          });

          function getGenres(): string[] {
            const array: string[] = [];
            for (const gen of band.genre) {
              array.push(MusicGenre[gen]);
            }
            return array;
          }
        }
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
