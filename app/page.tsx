import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gray-300">
      <UserButton />
    </div>
  );
}
