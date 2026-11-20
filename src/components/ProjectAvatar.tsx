import Html from "./Html";

type Props = { url: string; title: string; img: string; type: string };

/** Former _includes/project_avatar.html */
export default function ProjectAvatar({ url, title, img, type }: Props) {
  return (
    <div className="workItem sectionList_item">
      <a href={url} className="workItem_link link_transition">
        <h3 className="workItem_title f_displayGroup">{title}</h3>{" "}
        <img src={`/assets/${img}`} alt="image avatar" className="workItem_img sectionList_item_img" />{" "}
        <Html as="p" className="workItem_type f_textExtra" html={type} />
      </a>
    </div>
  );
}
