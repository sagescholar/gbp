import { React } from "react";
import "./css/footer.css";

export function Footer() {
  return (
    <div
      class="wrap-footer"
      style={{
        position: "relative",
        height: "auto",
        width: "100%",
        backgroundColor: "#333333",
      }}
    >
      <div
        class="Footer"
        style={{
          maxWidth: "1500px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          border:"solid 0px black"
        }}
      >
        {/*<img
          style={{ height: "200px", width:"100%",opacity: 0.4, objectPosition: "0% 15%", objectFit: "cover" }}
          src={process.env.PUBLIC_URL + "/images/img_title.png"}
          alt="オプティマス"
          class="footer-img"
        />
        */}
        <span style={{width:"100%",color:"white",textAlign:"center"}}>Granblue Portal Produced By @sra_norahs</span>
      </div>
    </div>
  );
}
