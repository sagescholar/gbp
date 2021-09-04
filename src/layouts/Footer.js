import { React } from 'react';
import './css/footer.css';

export function Footer(){

    return (
        <div class="Footer">
            <img src={process.env.PUBLIC_URL + "/images/img_title.png"} alt="オプティマス" class="footer-img" />
        </div>
    )
}
