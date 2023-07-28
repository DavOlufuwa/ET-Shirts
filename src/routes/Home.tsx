import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import useShirts from "@/hooks/useShirts"
import 'swiper/css'
import { Autoplay } from "swiper/modules"
import { Swiper } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { useShirtsContextType } from "@/contexts/ShirtProvider"
import useCart from "@/hooks/useCart"
import ShirtCard from "@/components/ShirtCard"



// create an interface for object with an id and link
interface HeroSlides {
  id: number
  link: string
  alt: string
}

const heroSlides: HeroSlides[] = [
  {
    id: 1,
    link: "https://cdn.filestackcontent.com/cLWEEwm8QAWYNxTkmFdC",
    alt: "woman wearing a vintage shirt"
  },
  {
    id: 2,
    link: "https://cdn.filestackcontent.com/I30ufDPfQ5nNv8wG4fsJ",
    alt: "four folded shirts"
  }
]


const Home = () => {

  const { shirts } = useShirts()

  const { dispatch, REDUCER_ACTIONS} = useCart()

  return (
    <div>
      <Header />
      <section className="relative">
        <Swiper
          slidesPerView={1}
          speed={500}
          autoplay={{
            delay: 5000
          }}
          loop={true}
          modules={[Autoplay]}
        >
          {
            heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="min-h-screen bg-red-400">
                  <img src={slide.link} alt="" className=" object-cover min-w-full min-h-screen " />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <article className="absolute flex justify-center items-center top-0 h-full w-full bg-[rgba(0,0,0,0.2)] text-white z-10">
          <div>
            <h2 className="text-4xl uppercase max-w-1/2">"Unleash Your Style. Shop with Confidence"</h2>
            <div>
              <Button
              >
                SHOP NOW
              </Button>
            </div>
          </div>
        </article>
      </section>
      <section>
        <div>
          VIEW OUR SHIRTS#
            {
              shirts.map((shirt)=> {
                return (
                  <ShirtCard key={shirt.id}
                    shirt={shirt}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                  />
                )
              })
            }
        </div>
      </section>
    </div>
  )
}

export default Home