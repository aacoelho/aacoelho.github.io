import Html from "./Html";

export type InfoGroupData = {
  tag: string;
  title?: string | null;
  item: { subtitle?: string | null; text: { line: string }[]; link?: string | null }[];
};

/** Former _includes/info_group.html */
export default function InfoGroup({ group }: { group?: InfoGroupData | null }) {
  // Jekyll rendered the wrapper even when the group was missing (class ends in "-").
  return (
    <div className={`moreInfo_group moreInfo_group-${group?.tag ?? ""}`}>
      {group?.title ? <h3 className="moreInfo_group_title f_displayGroup">{group.title}</h3> : null}
      {group?.item.map((item, i) => (
        <div className="moreInfo_item" key={i}>
          {item.subtitle ? <h4 className="moreInfo_item_subtitle f_displayItem">{item.subtitle}</h4> : null}
          <ul className="moreInfo_item_list">
            {item.text.map((t, j) => (
              <Html as="li" className="f_textNormal" html={` ${t.line} `} key={j} />
            ))}
          </ul>
          {item.link ? (
            <a target="_blank" className="moreInfo_item_link f_textNormal f_textNormal-link" href={item.link}>
              Open
            </a>
          ) : null}
        </div>
      ))}
    </div>
  );
}
