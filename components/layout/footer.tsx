import Link from "next/link";

export const Footer = () => {
  const today = new Date();
  return (
    <footer className=" w-full flex justify-center bg-[linear-gradient(_var(--tw-gradient-stops))] to-[#13191f] via-[#13191f] from-[#13191f] border-t-2 border-[#1e2730] p-1 m-0">
      <div className="row flex justify-around py-3">
        <ul>
          <li>&copy; Keith Jasper {today.getFullYear()}</li>
          <li></li>
          <li></li>
        </ul>
        <ul>
          <li>Socials</li>
          <li>LinkedIn</li>
          <li>YouTube</li>
          <li>Twitter</li>
        </ul>
        <ul>
          <li>
            <Link href="/downloads/">Downloads</Link>
          </li>
          <li>
            <Link href="https://github.com/keithjasper83/">GitHub</Link>
          </li>
          <li>Footer Content 3</li>
        </ul>
      </div>
    </footer>
  );
};
