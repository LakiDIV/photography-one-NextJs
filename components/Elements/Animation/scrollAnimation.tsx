import Link from "next/link";
import "./scrollAnimation.css";

export default function ScrollAnimation() {
  return (
    <div className="  text-center flex flex-col items-center justify-center w-6 h-6">
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
      <Link
        href={"#home"}
        className="text block mt-64 text-sm opacity-25 tracking-widest uppercase"
      >
        Scroll down
      </Link>
    </div>
  );
}
