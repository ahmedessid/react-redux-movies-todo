import React from "react";
import ContentLoader from "react-content-loader";
const MyLoader = props => (
  <div>
    <ContentLoader
      speed={2}
      width={400}
      height={540}
      viewBox="0 0 400 540"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      style={{ width: "100%" }}
      preserveAspectRatio="none"
      {...props}
    >
      <rect x="0" y="8" rx="3" ry="3" width="160" height="24" />
      <rect x="0" y="42" rx="3" ry="3" width="25" height="24" />
      <rect x="0" y="76" rx="3" ry="3" width="196" height="36" />
      <rect x="204" y="76" rx="3" ry="3" width="196" height="36" />
      <rect x="0" y="128" rx="3" ry="3" width="400" height="2" />
      <rect x="0" y="142" rx="3" ry="3" width="130" height="36" />
      <rect x="135" y="142" rx="3" ry="3" width="130" height="36" />
      <rect x="270" y="142" rx="3" ry="3" width="130" height="36" />
      <rect x="0" y="190" rx="3" ry="3" width="130" height="28" />
      <rect x="0" y="240" rx="3" ry="3" width="60" height="28" />
      <rect x="320" y="190" rx="3" ry="3" width="80" height="36" />
      <rect x="0" y="290" rx="3" ry="3" width="130" height="28" />
      <rect x="0" y="340" rx="3" ry="3" width="60" height="28" />
      <rect x="320" y="290" rx="3" ry="3" width="80" height="36" />
      <rect x="0" y="390" rx="3" ry="3" width="130" height="28" />
      <rect x="0" y="440" rx="3" ry="3" width="60" height="28" />
      <rect x="320" y="390" rx="3" ry="3" width="80" height="36" />
      <rect x="0" y="500" rx="3" ry="3" width="40" height="28" />
    </ContentLoader>
  </div>
);

export default MyLoader;
