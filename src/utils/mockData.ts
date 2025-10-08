import { PAGE_SIZE } from "./constants";
import { IPerson } from "./interfaces";

const developersData: IPerson[] =[
  {
    "id": "1",
    "firstName": "Alice",
    "lastName": "Anderson",
    "email": "alice.anderson@example.com",
    "language": "Javascript"
  },
  {
    "id": "2",
    "firstName": "Bob",
    "lastName": "Brown",
    "email": "bob.brown@example.com",
    "language": "Python"
  },
  {
    "id": "3",
    "firstName": "Charlie",
    "lastName": "Clark",
    "email": "charlie.clark@example.com",
    "language": "Golang"
  },
  {
    "id": "4",
    "firstName": "Diana",
    "lastName": "Davis",
    "email": "diana.davis@example.com",
    "language": "Javascript"
  },
  {
    "id": "5",
    "firstName": "Ethan",
    "lastName": "Evans",
    "email": "ethan.evans@example.com",
    "language": "Python"
  },
  {
    "id": "6",
    "firstName": "Fiona",
    "lastName": "Foster",
    "email": "fiona.foster@example.com",
    "language": "Golang"
  },
  {
    "id": "7",
    "firstName": "George",
    "lastName": "Garcia",
    "email": "george.garcia@example.com",
    "language": "Javascript"
  },
  {
    "id": "8",
    "firstName": "Hannah",
    "lastName": "Harris",
    "email": "hannah.harris@example.com",
    "language": "Python"
  },
  {
    "id": "9",
    "firstName": "Ivan",
    "lastName": "Ivanov",
    "email": "ivan.ivanov@example.com",
    "language": "Golang"
  },
  {
    "id": "10",
    "firstName": "Julia",
    "lastName": "Johnson",
    "email": "julia.johnson@example.com",
    "language": "Javascript"
  },
  {
    "id": "11",
    "firstName": "Kevin",
    "lastName": "King",
    "email": "kevin.king@example.com",
    "language": "Python"
  },
  {
    "id": "12",
    "firstName": "Laura",
    "lastName": "Lopez",
    "email": "laura.lopez@example.com",
    "language": "Golang"
  },
  {
    "id": "13",
    "firstName": "Michael",
    "lastName": "Miller",
    "email": "michael.miller@example.com",
    "language": "Javascript"
  },
  {
    "id": "14",
    "firstName": "Nina",
    "lastName": "Nguyen",
    "email": "nina.nguyen@example.com",
    "language": "Python"
  },
  {
    "id": "15",
    "firstName": "Oliver",
    "lastName": "O'Neill",
    "email": "oliver.oneill@example.com",
    "language": "Golang"
  },
  {
    "id": "16",
    "firstName": "Paula",
    "lastName": "Patel",
    "email": "paula.patel@example.com",
    "language": "Javascript"
  },
  {
    "id": "17",
    "firstName": "Quentin",
    "lastName": "Quinn",
    "email": "quentin.quinn@example.com",
    "language": "Python"
  },
  {
    "id": "18",
    "firstName": "Rachel",
    "lastName": "Roberts",
    "email": "rachel.roberts@example.com",
    "language": "Golang"
  },
  {
    "id": "19",
    "firstName": "Sam",
    "lastName": "Smith",
    "email": "sam.smith@example.com",
    "language": "Javascript"
  },
  {
    "id": "20",
    "firstName": "Tina",
    "lastName": "Taylor",
    "email": "tina.taylor@example.com",
    "language": "Python"
  },
  {
    "id": "21",
    "firstName": "Umar",
    "lastName": "Usman",
    "email": "umar.usman@example.com",
    "language": "Golang"
  },
  {
    "id": "22",
    "firstName": "Vera",
    "lastName": "Valdez",
    "email": "vera.valdez@example.com",
    "language": "Javascript"
  },
  {
    "id": "23",
    "firstName": "William",
    "lastName": "Walker",
    "email": "william.walker@example.com",
    "language": "Python"
  },
  {
    "id": "24",
    "firstName": "Xena",
    "lastName": "Xu",
    "email": "xena.xu@example.com",
    "language": "Golang"
  },
  {
    "id": "25",
    "firstName": "Yara",
    "lastName": "Young",
    "email": "yara.young@example.com",
    "language": "Javascript"
  },
  {
    "id": "26",
    "firstName": "Zane",
    "lastName": "Zimmerman",
    "email": "zane.zimmerman@example.com",
    "language": "Python"
  },
  {
    "id": "27",
    "firstName": "Alice",
    "lastName": "Brown",
    "email": "alice.brown2@example.com",
    "language": "Golang"
  },
  {
    "id": "28",
    "firstName": "Bob",
    "lastName": "Clark",
    "email": "bob.clark2@example.com",
    "language": "Javascript"
  },
  {
    "id": "29",
    "firstName": "Charlie",
    "lastName": "Davis",
    "email": "charlie.davis2@example.com",
    "language": "Python"
  },
  {
    "id": "30",
    "firstName": "Diana",
    "lastName": "Evans",
    "email": "diana.evans2@example.com",
    "language": "Golang"
  },
  {
    "id": "31",
    "firstName": "Ethan",
    "lastName": "Foster",
    "email": "ethan.foster2@example.com",
    "language": "Javascript"
  },
  {
    "id": "32",
    "firstName": "Fiona",
    "lastName": "Garcia",
    "email": "fiona.garcia2@example.com",
    "language": "Python"
  },
  {
    "id": "33",
    "firstName": "George",
    "lastName": "Harris",
    "email": "george.harris2@example.com",
    "language": "Golang"
  },
  {
    "id": "34",
    "firstName": "Hannah",
    "lastName": "Ivanov",
    "email": "hannah.ivanov2@example.com",
    "language": "Javascript"
  },
  {
    "id": "35",
    "firstName": "Ivan",
    "lastName": "Johnson",
    "email": "ivan.johnson2@example.com",
    "language": "Python"
  },
  {
    "id": "36",
    "firstName": "Julia",
    "lastName": "King",
    "email": "julia.king2@example.com",
    "language": "Golang"
  },
  {
    "id": "37",
    "firstName": "Kevin",
    "lastName": "Lopez",
    "email": "kevin.lopez2@example.com",
    "language": "Javascript"
  },
  {
    "id": "38",
    "firstName": "Laura",
    "lastName": "Miller",
    "email": "laura.miller2@example.com",
    "language": "Python"
  },
  {
    "id": "39",
    "firstName": "Michael",
    "lastName": "Nguyen",
    "email": "michael.nguyen2@example.com",
    "language": "Golang"
  },
  {
    "id": "40",
    "firstName": "Nina",
    "lastName": "O'Neill",
    "email": "nina.oneill2@example.com",
    "language": "Javascript"
  },
  {
    "id": "41",
    "firstName": "Oliver",
    "lastName": "Patel",
    "email": "oliver.patel2@example.com",
    "language": "Python"
  },
  {
    "id": "42",
    "firstName": "Paula",
    "lastName": "Quinn",
    "email": "paula.quinn2@example.com",
    "language": "Golang"
  },
  {
    "id": "43",
    "firstName": "Quentin",
    "lastName": "Roberts",
    "email": "quentin.roberts2@example.com",
    "language": "Javascript"
  },
  {
    "id": "44",
    "firstName": "Rachel",
    "lastName": "Smith",
    "email": "rachel.smith2@example.com",
    "language": "Python"
  },
  {
    "id": "45",
    "firstName": "Sam",
    "lastName": "Taylor",
    "email": "sam.taylor2@example.com",
    "language": "Golang"
  },
  {
    "id": "46",
    "firstName": "Tina",
    "lastName": "Usman",
    "email": "tina.usman2@example.com",
    "language": "Javascript"
  },
  {
    "id": "47",
    "firstName": "Umar",
    "lastName": "Valdez",
    "email": "umar.valdez2@example.com",
    "language": "Python"
  },
  {
    "id": "48",
    "firstName": "Vera",
    "lastName": "Walker",
    "email": "vera.walker2@example.com",
    "language": "Golang"
  },
  {
    "id": "49",
    "firstName": "William",
    "lastName": "Xu",
    "email": "william.xu2@example.com",
    "language": "Javascript"
  },
  {
    "id": "50",
    "firstName": "Xena",
    "lastName": "Young",
    "email": "xena.young2@example.com",
    "language": "Python"
  }
]


export async function fetchPeople({
page = 0,
  lastName,
  language,
}: {
  page?: number;
  lastName?: string;
  language?: string;
}): Promise<{ results: IPerson[]; next: number | null }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...developersData];

      if (lastName) {
        filtered = filtered.filter((p) =>
          p.lastName.toLowerCase().includes(lastName.toLowerCase())
        );
      }

      if (language) {
        filtered = filtered.filter((p) => p.language === language);
      }

      filtered.sort((a, b) => a.lastName.localeCompare(b.lastName));

      const start = page * PAGE_SIZE;
      const end = start + PAGE_SIZE;

      const results = filtered.slice(start, end);
      const next = end < filtered.length ? page + 1 : null;

      resolve({ results, next });
    }, 1000); 
  });
}

