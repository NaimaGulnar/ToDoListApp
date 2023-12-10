export default function Footer() {
    const myDate = new Date().getFullYear();
    return <div className="footer">Copyright © {myDate}</div>;
  }
  