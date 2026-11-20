/** Former _includes/social.html */
export default function Social({ name, url }: { name: string; url: string }) {
  return (
    <li>
      {" "}
      <a target="_blank" className="footer_social_link f_nav" href={url}>
        {name}
      </a>{" "}
    </li>
  );
}
