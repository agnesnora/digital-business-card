export default function Header() {
  return (
    <div className="header">
      <img src="agnesprofile.jpg" alt="profilepicture" />
      <h1 className="name">Agnes Kuti-Palásthy</h1>
      <h4>Frontend developer</h4>
      <p>Website</p>
      <div className="contactInfo">
        <button className="btnEmail">
          <i class="fa-solid fa-envelope"></i>Email
        </button>
        <button className="btnLinkedIn">
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
