import Html from "./Html";

export type GalleryItemData = { img?: string | null; src?: string | null; alt?: string | null; caption?: string | null };

/** Former _includes/gallery_item.html */
export default function GalleryItem({ item, slug }: { item: GalleryItemData; slug: string }) {
  return (
    <div className="gallery_item sectionList_item">
      {!item.src ? (
        <img src={`/assets/projects/${slug}/${item.img ?? ""}`} alt={item.alt ?? ""} className="gallery_item_img sectionList_item_img" />
      ) : (
        <div className="gallery_item_video sectionList_item_video">
          <img src="/assets/video_frame.png" alt={item.alt ?? ""} className="gallery_item_video_frame sectionList_item_img" />{" "}
          <iframe
            src={item.src}
            frameBorder="0"
            {...{ webkitallowfullscreen: "", mozallowfullscreen: "" }}
            allowFullScreen
          ></iframe>
        </div>
      )}{" "}
      <Html as="p" className="gallery_item_caption f_textSmall" html={item.caption} />
    </div>
  );
}
