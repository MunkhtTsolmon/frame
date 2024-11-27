"use client";

import styles from "./page.module.css";
import USERS from "./users.json";
import { Card } from "./card.js";

export default function Home() {
  let userCard = USERS.map((user) => <Card key={user.id} user={user} />);
  return <div className="container">{userCard}</div>;
}
