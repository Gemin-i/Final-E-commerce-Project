import { memo, useEffect, useState } from "react";
import profileIcon from "../../../../assets/imgs/header/userDefault.svg"; 
import clickedProfileIcon from "../../../../assets/imgs/header/userClicked.svg"; 
import styles from "./ProfileButton.module.css"; 
import Dropdown from "./dropdown/ProfileDropdown.jsx";

function ProfileButton() {

    const [clicked , setClicked] = useState(false);

    useEffect(() => {
        const handleScroll = () => setClicked(false)

        clicked === true && window.addEventListener("scroll", handleScroll)
        
        return () => {window.removeEventListener("scroll", handleScroll)}
    }, [clicked])

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div onClick={handleClick} className={styles.profileButton}>
            <img src={clicked? clickedProfileIcon: profileIcon } alt="profile" className={styles.profileImg}/>
            { clicked && <Dropdown/>}
        </div>
    )
}

export default memo(ProfileButton);