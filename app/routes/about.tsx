export default function about() {
  const person = {
    name: "Carl",
    age: "420",
    hobbies: [
      { beschreibung: "Reisen", bezeichnung: "Reisen" },
      { beschreibung: "Musik hören", bezeichnung: "Musik hören" },
      { beschreibung: "Fahrrad fahren", bezeichnung: "Fahrrad fahren" },
      { beschreibung: "Wandern.", bezeichnung: "Wandern" },
    ],
  };

  return (
    <div>
      <ul>
        {person.hobbies.map((hobby: any, index: any) => (
          <li key={index}>{hobby.beschreibung}</li>
        ))}
      </ul>
    </div>
  );
}
