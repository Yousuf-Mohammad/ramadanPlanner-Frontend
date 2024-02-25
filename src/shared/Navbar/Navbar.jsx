
const Navbar = () => {
  return (
    <div className="navbar bg-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">RamadanPlanner</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>About Us</a></li>
      <li><a>Contact Us </a></li>
      <li>
        <details>
          <summary>
            User Name
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none">
            <li><a>Edit Profile</a></li>
            <li><a>Log Out</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar