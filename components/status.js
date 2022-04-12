import Link from "next/link";

const path = [
  {
    uid: 10,
    name: "By Paulo Henrique",
    path: "https://github.com/phanrtr"
  }
];

export default function Status() {
  return (
    <footer>
      <nav>
        <ul>
          {path.map((value) => {
            return (
              <li key={value.uid}>
                <Link href={value.path}>
                  <a> {value.name} </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
