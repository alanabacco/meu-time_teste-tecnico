export const mockTeams = [
  {
    team: {
      id: 1,
      name: "team1",
      code: "string",
      country: "string",
      funded: 2000,
      national: true,
      logo: "string",
    },
  },
  {
    team: {
      id: 2,
      name: "team2",
      code: "string",
      country: "string",
      funded: 2001,
      national: true,
      logo: "string",
    },
  },
];

export const mockLeagues = [
  {
    league: {
      id: 71,
      name: "Serie A",
      type: "League",
      logo: "logo",
    },
  },
  {
    league: {
      id: 72,
      name: "Serie B",
      type: "League",
      logo: "logo",
    },
  },
];

export const mockCountrys = [
  {
    name: "Brasil",
    code: "BR",
    flag: "flag",
  },
  {
    name: "Argentina",
    code: "AR",
    flag: "flag",
  },
];

export const mockSeasons = [2011, 2012, 2013];

export const mockPlayers = [
  {
    id: 1,
    name: "player 01",
    age: 20,
    number: 3,
    position: "Attacker",
    photo: "string",
  },
  {
    id: 2,
    name: "player 02020202",
    age: 21,
    number: 10,
    position: "Attacker",
    photo: "string",
  },
  {
    id: 3,
    name: "Player 03 03",
    age: 26,
    number: 3,
    position: "Midfielder",
    photo: "string",
  },
  {
    id: 4,
    name: "Really Big Name For Test",
    age: 19,
    number: 2,
    position: "Attacker",
    photo: "string",
  },
  {
    id: 5,
    name: "P. layer",
    age: 30,
    number: 9,
    position: "Defender",
    photo: "string",
  },
  {
    id: 6,
    name: "Player .P",
    age: 21,
    number: 15,
    position: "Goalkeeper",
    photo: "string",
  },
];

export const mockLineup = {
  formation: "4-2-3-1",
  played: 30,
};

export const mockResults = {
  league: {},
  team: {},
  fixtures: {
    played: { total: 30 },
    wins: { total: 15 },
    draws: { total: 13 },
    loses: { total: 2 },
  },
  goals: {
    for: {
      total: {
        home: 40,
        away: 26,
        total: 66,
      },
      minute: {
        "0-15": {
          total: 4,
          percentage: "6.06%",
        },
        "16-30": {
          total: 17,
          percentage: "25.76%",
        },
        "31-45": {
          total: 11,
          percentage: "16.67%",
        },
        "46-60": {
          total: 13,
          percentage: "19.70%",
        },
        "61-75": {
          total: 10,
          percentage: "15.15%",
        },
        "76-90": {
          total: 8,
          percentage: "12.12%",
        },
        "91-105": {
          total: 3,
          percentage: "4.55%",
        },
        "106-120": {
          total: null,
          percentage: null,
        },
      },
    },
  },
};
