import Link from 'next/link'

const Custom404 = () => {
  return (
    <div className="">
      <section className="page_404 ">
        <div className="container ">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <div className="four_zero_four_bg"></div>
                <div className="contant_box_404">
                  <h3 className="h2 text-lg font-bold mt-2">Look like you're lost</h3>
                  <p className="mt-3">The page you are looking for is not available!</p>
                  <Link href="/" className="link_404 rounded-xl ]">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Custom404
