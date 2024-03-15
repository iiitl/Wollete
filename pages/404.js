import Navbar from '@/components/Navbar'
import ImageWithButton from '@/components/ImageWithButton'

export default function NotFound() {
  return (
    <div className="background-styling">
      <Navbar />
      <section className="lg:mt-[100px] md:mt-[35px] background-rectangle-wavy md:hidden xl:block mdm:mt-36">
        <div className="text-center">
          <ImageWithButton  
            title="The page you're looking for doesn't exist."
            description="Try going back to the previous page or visit our homepage."
            image="/png/404.png"
            redirect="/"
            buttonTitle="Go to homepage"
          />

        </div>
      </section>
    </div>
  )
}
