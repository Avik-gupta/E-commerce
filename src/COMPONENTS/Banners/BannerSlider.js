import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Newly Launched Gadgets at your doorstep',
            description: 'We Make Technology Affordable',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://media.istockphoto.com/id/508154656/photo/woman-chooses-a-tv-in-the-store.jpg?s=1024x1024&w=is&k=20&c=pWa6NUTJ1YrcDGjKpr49AGAduMj2ef6P6kXYPqIVXuA=',
            title: 'Newly Launched Gadgets at your doorstep',
            description: 'Fastest Delivery',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://media.istockphoto.com/id/1076224762/photo/online-shopping.jpg?s=1024x1024&w=is&k=20&c=xqU7C2SWq4-azu1gW6MArLONfd3jZoCmS6NHF9RwnKI=',
            title: 'Newly Launched Gadgets at your doorstep',
            description: 'Free Installation.',
            button: 'htttps://www.google.com'
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider