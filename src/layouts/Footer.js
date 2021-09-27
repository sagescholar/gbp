import { React } from 'react';
import './css/footer.css';

export function Footer(){

    return (
        <div class="wrap-footer" style={{position:"relative",height: "auto",width:"100%",backgroundColor:"#333333"}}>
        <div class="Footer" style={{maxWidth:"1200px",margin: "0 5vw", display:"flex"}}>
            <img src={process.env.PUBLIC_URL + "/images/img_title.png"} alt="オプティマス" class="footer-img" />
        </div>
        </div>
    )
}
