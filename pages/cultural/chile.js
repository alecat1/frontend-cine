import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../../src/components/menu";
import Bubble from "../../src/components/bubble";
import Chile from "../../src/components/cultural/chile/chile";
import "video-react/dist/video-react.css";

import "../../src/components/tips/tips.css";
import "../../src/components/admin/tips/tips-change.css";
import "../../src/components/admin/admin/admin.css";
import "../../src/components/admin/glossary/change/glossary-change.css";
import "../../src/components/admin/glossary/new/glossary-new.css";
import "../../src/components/admin/home/home-change.css";
import "../../src/components/admin/material/material-change.css";
import "../../src/components/admin/policies/change/policies-change.css";
import "../../src/components/admin/policies/new/policies-new.css";
import "../../src/components/admin/register/register.css";
import "../../src/components/admin/resilience/resilience-change.css";
import "../../src/components/admin/user/user-change.css";
import "../../src/components/admin/user/user-change.css";
import "../../src/components/footer/footer.css";
import "../../src/components/login/login.css";
import "../../src/components/material/material.css";
import "../../src/components/mediavideos/mediavideos.css";
import "../../src/components/menu/menu.css";
import "../../src/components/resilience/resilience.css";
import "../../src/components/statistics/statistics.css";
import "../../src/components/word/word.css";
import "../../src/components/cultural/argentina/argentina.css"
import "../../src/components/cultural/mexico/mexico.css"
import "../../src/components/cultural/brasil/brasil.css"
import "../../src/components/cultural/chile/chile.css"
import "../../src/components/policies/ccm/ccm.css";
import "../../src/components/policies/cqc/cqc.css";
import "../../src/components/videos/videos.css";
import '../../src/components/bubble/bubble.css';

export default function CulturalChile() {
  return (
    <div>
      <Head>
        <title>Tiktok Web Site - Cultural - Chile</title>
        <link rel="icon" href="/assents/icons/favicon.png" />
      </Head>
      <Bubble/>
      <Menu></Menu>
      <Chile />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          background: #fff;
        }
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(102, 102, 102, 0.315);
        }
      `}</style>
    </div>
  );
}
