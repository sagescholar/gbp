import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export default function Toppage(props) {
  const setStateView = props.parentSetStateView;
  const content = (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        height="400"
        image={
          process.env.PUBLIC_URL +
          "/images/summon/" +
          "Summon_b_2040027000_02.png"
        }
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h4>サンプル：ユグドラシル・マグナ</h4>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          サイトの説明的なものが入るところ
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );

  return (
    <div style={{ /*width: "1500px",*/ height: "700px" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#888888",
        }}
      >
        <p
          style={{
            fontSize: "26px",
            cursor: "default",
            backgroundColor: "#888888",
          }}
        >
          Let's calculate before you collect the equipment.
          <br />
          You can start a new experience with the&nbsp;
          <a
            onClick={()=>setStateView("app")}
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "10px",
              cursor:"pointer",
            }}
            
          >
            &nbsp;APP&nbsp;
          </a>{" "}
          above.
        </p>
      </div>
    </div>
  );
}
