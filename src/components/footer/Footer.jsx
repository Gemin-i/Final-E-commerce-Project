import styles from "./Footer.module.css";

function Footer() {

    const Columns = {firstColumn: {title: "", subtitle: "", text: ""}, centerColumns: [
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
      ] lastColumn: {title: "", text: "", icons: [], imgs: {QR: "", other: ""}}};

    return (
        <div className={styles.container1}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}