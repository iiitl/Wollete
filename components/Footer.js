import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-footer container-style flex flex-col pt-48 sm:pt-40 md:pt-96 pb-6">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="basis-1/4 md:self-start md:pe-16 sm:self-center">
          <div>
            <img src="/png/FooterLogo.png" className="w-min" />
          </div>
          <div className="text-header-mobile-medium text-[#404040] mt-5">
            Revolutionizing Transactions with Digital Receipts
          </div>
          <div className="flex justify-center gap-12 mt-10 lg:flex-row md:justify-start md:flex-col md:items-center">
            <a href="#">
              <img src="/svg/SocialMedia/twitter.svg" className="hover:scale-125 transition-all" />
            </a>

            <a href="#" className="hover:scale-125 transition-all">
              <img src="/svg/SocialMedia/instagram.svg" />
            </a>

            <a href="#" className="hover:scale-125 transition-all">
              <img src="/svg/SocialMedia/linked-in-1.svg" />
            </a>
          </div>
        </div>

        <div className="flex basis-3/4 mt-10 md:mt-0 z-30">
          <div className="flex flex-col ps-1 basis-1/2  md:items-start sm:basis-1/3  sm:items-center  sm:ms-0 ">
            <Link
              href="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              className="text-header-mobile-sb mb-10 text-footer"
            >
              <div className="text-footer">Merchants</div>
            </Link>
            <Link
              href="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              className="text-header-mobile-sb mb-6 hover:text-[#0E72E8]"
            >
              <div className="text-footer">Consumers</div>
            </Link>
            <Link
              href="/benefits"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
            >
              <div className="text-footer">Benefits</div>
            </Link>
            <Link
              href="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
            >
              <div className="text-footer">Coverage</div>
            </Link>
            <Link
              href="/"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              className="text-header-mobile-sb mb-6 hover:text-[#0E72E8]"
            >
              <div className="text-footer">Partners</div>
            </Link>
            <Link
              href="/POS_Providers"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
            >
              <div className="text-footer">POS Providers</div>
            </Link>
            <Link
              href="/thirdParties"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
            >
              <div className="text-footer">Third Parties</div>
            </Link>
          </div>
          <div className="flex flex-col ps-1 basis-1/2 sm:basis-2/3  sm:flex-row  sm:ms-0">
            <div className="flex flex-col basis-1/2 md:items-start md:ms-3 sm:items-center">
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-sb mb-10 hover:text-[#0E72E8]"
              >
                <div className="text-footer">Developers</div>
              </Link>
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">Console</div>
              </Link>
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">Support</div>
              </Link>
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6"
              >
                <div className="text-footer">Help Center</div>
              </Link>
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6"
              >
                <div className="text-footer">Status Page</div>
              </Link>
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">API Reference</div>
              </Link>
            </div>
            <div className="flex flex-col basis-1/2 md:items-start md:ms-10 sm:items-center">
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-sb mb-10 hover:text-[#0E72E8]"
              >
                <div className="text-footer">Resources</div>
              </Link>
              <Link
                href="/news"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">News</div>
              </Link>
              <Link
                href="/aboutus"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">About Us</div>
              </Link>
              <Link
                href="/contactus"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">Contact Us</div>
              </Link>
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">Support</div>
              </Link>
              <Link
                href="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                className="text-header-mobile-medium mb-6 hover:text-[#0E72E8]"
              >
                <div className="text-footer">Help Center</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#404040] text-center self-center mt-10 text-header-mobile-medium">
        Copyright © 2023 | All rights reserved by Wollette
      </div>
    </footer>
  )
}
