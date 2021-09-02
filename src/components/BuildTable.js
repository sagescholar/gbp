import { React } from 'react';

export function buildTable(){

    let borderR = "7.5px";

    return(
        <>
            <table cellspacing="0px" style={{margin: "15px", borderCollapse: "separate", border: "solid 1px #404040", borderRadius: borderR, textAlign: "center"}}>
                <tbody>
                <tr>
                    <td style={{backgroundColor: "#f63c14", borderRadius: borderR + " 0 0 0",}}>1行目1列目</td>
                    <td>1行目2列目</td>
                    <td style={{borderRadius: "0 " + borderR + " 0 0"}}>1行目3列目</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: "#f63c14", }}>2行目1列目</td>
                    <td>2行目2列目</td>
                    <td>2行目3列目</td>
                </tr>
                <tr>
                    <td>4行目1列目</td>
                    <td>4行目2列目</td>
                    <td style={{borderRadius: "0 0 " + borderR + " 0"}}>4行目3列目</td>
                </tr>
                <tr>
                    <td>4行目1列目</td>
                    <td>4行目2列目</td>
                    <td style={{borderRadius: "0 0 " + borderR + " 0"}}>4行目3列目</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: "#f63c14", borderRadius: "0 0 0 " + borderR}}>5行目1列目</td>
                    <td>5行目2列目</td>
                    <td style={{borderRadius: "0 0 " + borderR + " 0"}}>5行目3列目</td>
                </tr>
                </tbody>
            </table>
        </>
    );
    
}