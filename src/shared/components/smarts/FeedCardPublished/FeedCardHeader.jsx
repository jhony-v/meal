import React from "react";
import HoverElement from "shared/components/smarts/HoverElement";
import ThumbnailOfAvatarCompact from "shared/components/dumbs/ThumbnailOfAvatarCompact";
import SpectrumTooltip from "shared/components/smarts/SpectrumTooltip";

export default function FeedCardHeader({ image, title, detail }) {
  let elementHoverViewProps = {
    index: 100,
    position: "absolute",
    left: "-100px",
    bottom: 0,
  };

  return (
    <HoverElement
      elementHover={
        <ThumbnailOfAvatarCompact image={image} title={title} detail={detail} />
      }
      elementHoverView={<SpectrumTooltip image={image} titleImage={title} />}
      elementHoverViewProps={elementHoverViewProps}
    />
  );
}
