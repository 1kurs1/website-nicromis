import Link from 'next/link'
import Script from 'next/script'

const Nav = () => {
    return (
        <>
            <Script src="../js/toggle.js"></Script>
            <nav class="navbar-links">
                <ul class="nav-links">
                    <li><Link href="/">Nicromis</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="https://vk.com/nicromisoff">VK</Link></li>
                    <li><Link href="https://www.youtube.com/channel/UCxiYmgoAzGdTMbytviqD-5A">Youtube</Link></li>
                </ul>
                <a class="burg">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </a>
            </nav>
        </>
    )
}

export default Nav;