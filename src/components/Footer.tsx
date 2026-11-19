import { Fragment } from "react";
import Arrow from "./Arrow";
import Social from "./Social";
import { site, social } from "../data/site";

type Props = {
  /** Set on project pages: the "See next project" target */
  nextProject?: { title: string; url: string };
};

/** Former _includes/footer.html (the stylesheet/script tags live in Base.astro) */
export default function Footer({ nextProject }: Props) {
  return (
    <footer className="footer section-skew">
      <div className="footer_action">
        <h2 className="footer_action_title f_displaySection">{nextProject ? "See next project:" : "Contact me:"}</h2>{" "}
        {nextProject ? (
          <a href={nextProject.url} className="footer_action_link link_transition f_displaySection f_displaySection-link">
            {nextProject.title}
          </a>
        ) : (
          <>
            <a href={`mailto:${site.email}?subject=feedback`} className="footer_action_link f_displaySection f_displaySection-link">
              {site.email}
            </a>{" "}
            <ul className="footer_action_social linkList">
              {social.map((s) => (
                <Fragment key={s.url}>
                  {" "}
                  <Social name={s.name} url={s.url} />{" "}
                </Fragment>
              ))}
            </ul>
          </>
        )}
      </div>{" "}
      <div className="footer_arrow">
        <Arrow />
      </div>
    </footer>
  );
}
