import grapesjs from "grapesjs";
import "./App.css";
import webpageplugin from "grapesjs-preset-webpage";
import blockbasicPlugin from "grapesjs-blocks-basic";
import { useEffect, useState } from "react";

function App() {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      fromElement: true,
      // height: "100%",
      // width: "100%",
      showOffsets: true,
      showRulers: true,
      // storageManager: {
      //   type: "local",
      //   key: "gjs",
      // },
      plugins: [
        webpageplugin,
        blockbasicPlugin,
        "grapesjs-plugin-forms",
        "grapesjs-component-countdown",
        "grapesjs-plugin-export",
        "grapesjs-tabs",
        "grapesjs-custom-code",
        "grapesjs-touch",
        "grapesjs-parser-postcss",
        "grapesjs-tooltip",
        "grapesjs-tui-image-editor",
        "grapesjs-typed",
        "grapesjs-style-bg",
        "grapesjs-preset-webpage",
      ],
      pluginsOpts: {
        webpageplugin: {},
        blockbasicPlugin: {},
      },
    });
    setEditor(editor);
  }, []);
  return (
    <div>
      <div id="editor"></div>
    </div>
  );
}

export default App;
