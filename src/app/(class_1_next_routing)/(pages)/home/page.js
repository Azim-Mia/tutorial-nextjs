import React from 'react';
import Link from 'next/link';
export default function Home() {
  return (<div>
  <ul className="flex flex-col items-center justify-center gap-12">
  <li><Link href="/class_3_immutability">
  immutability_class_3
  <p>click this link..</p>
  </Link></li>
  </ul>
  </div>);
}
