import { memo } from "react";

import styles from "./Footer.module.css";

import sendIcon from "../../assets/imgs/footer/send.svg";

import qrCode from "../../assets/imgs/footer/qrCode.svg";
import appStore from "../../assets/imgs/footer/appStore.svg";
import googlePlay from "../../assets/imgs/footer/googlePlay.svg";

import facebook from "../../assets/imgs/footer/facebook.svg";
import instagram from "../../assets/imgs/footer/instagram.svg";
import twitter from "../../assets/imgs/footer/twitter.svg";
import linkedin from "../../assets/imgs/footer/linkedin.svg";

import Columns from "./footerComponents/Columns";

function Footer() {
  const data = [
    {
      firstColumn: {
        title: "Exclusive",
        subTitle: "Subscribe",
        text: "Get 10% off your first order",
        img: sendIcon,
      },
    },
    {
      centerColumns: [
        {
          title: "Support",
          rows: [
            "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.",
            "exclusive@gmail.com",
            "+88015-88888-9999",
          ],
        },
        {
          title: "Account",
          rows: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
        },
        {
          title: "Quick Link",
          rows: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
        },
      ],
    },
    {
      lastColumn: {
        title: "Download App",
        text: "Save $3 with App New User Only",
        imgs: { qrCode: qrCode, appStore: appStore, googlePlay: googlePlay },
        socialMedias: [
          {icon: facebook, name: "facebook"},
          {icon: twitter, name: "twitter"},
          {icon: instagram, name: "instagram"},
          {icon: linkedin, name: "linkedin"},
      ],
      },
    },
  ];

  return (
    <div className={styles.footer}>
      <Columns data={data} />
    </div>
  );
}

export default memo(Footer);
