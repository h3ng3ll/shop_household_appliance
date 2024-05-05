
import logo from "assets/icons/logo_BHA.svg";

export default function Logo() {
    const size = 50;
    return (
      <div
        className="center"
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "60px",
        }}
      >
        <img src={logo} alt="logo" width={size} height={size} />

        <div
          style={{
            marginLeft: "10px",
          }}
        >
          <span className="bha_acr"> BHA</span> <br />
          <span className="bha"> Buy House Appliance</span>
        </div>
      </div>
    );
  }