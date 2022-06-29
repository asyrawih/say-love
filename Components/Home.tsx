import styles from "../styles/Home.module.css";
import Image from "next/image";
const HomePages: React.FC = () => {
  return (
    <>
      <div className={styles.image_container}>
        <Image
          src={"https://c.tenor.com/u4kNBmvB9UkAAAAi/hasher-happy-sticker.gif"}
          alt="Images"
          width={80}
          height={80}
        />
      </div>
      <div className={styles.container}>
        <span>Hi Milky Way I Love U</span>
        <br />
        <span>You Want To be my girlfriends ?</span>
      </div>

      <div className={styles.button_container}>
        <button onClick={() => alert('thanks 🧡')} style={{ margin: "20px" }}>Yes</button>
        <div onMouseEnter={() => alert("Dont Be Dare Say No")}>
          <button style={{ margin: "20px" }}>No</button>
        </div>
      </div>
    </>
  );
};

export default HomePages;
