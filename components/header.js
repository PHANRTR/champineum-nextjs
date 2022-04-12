import Link from 'next/link';

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'Ranking', id: 2, path: '/ranking' },
  { uid: 41, name: 'Rodada', id: 3, path: '/rodada' }
];

export default function Header() {
  return (
    <header>
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
    </header>
  );
}