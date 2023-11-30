import Image from "next/image";
import Link from "next/link";
import Logo from "./Pix.jpeg";

export default function Nav() {
  return (
    <>
      <nav>
        {/* <Image
          src={Logo}
          alt="Pixel picture"
          width={60}
          quality={100}
          placeholder="blur"
        /> */}
        <Link href="/boots" className="text-blue-600">
          Boots
        </Link>
      </nav>
    </>
  );
}
