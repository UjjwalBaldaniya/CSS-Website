class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="navbar">
        <div class="logo">
            <a href="">ABC Fashion</a>
        </div>
        <div class="menu">
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./contact.html">Contact</a></li>
                <li><a href="./service.html">Services</a></li>
            </ul>
        </div>
        <div class="profile">
            <img onclick="showImg()"
                src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                alt="profile_picture" class="img1">
            <div id="open_popup">
                <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>`
    }
}

customElements.define('main-navbar', Navbar);