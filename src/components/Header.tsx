import { Fragment } from "react";
import { nav } from "../data/site";

/** Former _includes/header.html */
export default function Header({ pageTitle }: { pageTitle: string }) {
  return (
    <nav className="menu">
      <ul className="menu_list linkList">
        {nav.map((item) => (
          <Fragment key={item.url}>
            {" "}
            <li>
              {" "}
              <a
                className={item.title === pageTitle ? "menu_list_link f_nav f_nav-active new2 link_transition" : "menu_list_link f_nav link_transition"}
                data-type="page-transition"
                href={item.url}
              >
                {item.title}
              </a>{" "}
            </li>{" "}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
