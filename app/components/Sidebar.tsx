import { Link } from "@remix-run/react";

export default function Sidebar({ children }: any) {
  return (
    <div className="bg-slate-900 w-64 shadow-2xl flex flex-col">
      <Link to="/Blog">
        <img
          className="scale-100"
          src="https://cdn-icons-png.flaticon.com/512/4830/4830734.png"
        ></img>
      </Link>
      <Link className="text" to="/Blog">
        Blog
      </Link>

      <Link className="text" to="/Countries">
        Countries
      </Link>
    </div>
  );
}
