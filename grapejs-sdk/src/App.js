import React from "react";
import StudioEditor from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";
import { dialogComponent } from "@grapesjs/studio-sdk-plugins";
import { tableComponent } from "@grapesjs/studio-sdk-plugins";
import { iconifyComponent } from "@grapesjs/studio-sdk-plugins";

const PageEditor = () => {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <StudioEditor
        options={{
          plugins: [
            dialogComponent.init({
              block: { category: "Extra", label: "My Dialog" },
            }),
            tableComponent.init({
              block: { category: "Extra", label: "My Table" },
            }),
            iconifyComponent.init({
              block: { category: "Extra", label: "Iconify" },
            }),
          ],
        }}
        style={{ flexGrow: 1, width: "100%", height: "100%" }} // Ensuring full width and height
      />
    </div>
  );
};

export default PageEditor;

