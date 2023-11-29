import React from 'react'
import mobile from '../../ASSETS/Sidebar/mobile.jpeg'
import television from '../../ASSETS/Sidebar/television.jpeg'
import headphone from '../../ASSETS/Sidebar/headphone.jpeg'
import washingmachine from '../../ASSETS/Sidebar/Washing Machine.jpeg'
import AC from '../../ASSETS/Sidebar/AC.jpeg'
import charger from '../../ASSETS/Sidebar/charger.jpeg'
import laptop from '../../ASSETS/Sidebar/Laptop.jpeg'
import trimmer from '../../ASSETS/Sidebar/Trimmers.jpeg'
import accessories from '../../ASSETS/Sidebar/accessories.png'
import camera from '../../ASSETS/Sidebar/VideoCamera.jpeg'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            categoryimage: mobile,
            categoryname: 'Mobile Phones'
        },
        {
            id: 2,
            categoryimage: television,
            categoryname: 'Television'
        },
        {
            id: 3,
            categoryimage: headphone,
            categoryname: 'Headphone'
        },
        {
            id: 4,
            categoryimage: charger,
            categoryname: 'Charger And Cables'
        },
        {
            id: 5,
            categoryimage: washingmachine,
            categoryname: 'Washing Machine'
        },
        {
            id: 6,
            categoryimage: AC,
            categoryname: 'Air Conditioner'
        },
        {
            id: 7,
            categoryimage: laptop,
            categoryname: 'Laptops'
        },
        {
            id: 8,
            categoryimage: accessories,
            categoryname: 'Accessories'
        },
        {
            id: 9,
            categoryimage: camera,
            categoryname: 'Video Camera'
        },
        {
            id: 10,
            categoryimage: trimmer,
            categoryname: 'Trimmers'
        }
    ]
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return (
                        <div className='category'>
                            <img src={item.categoryimage} alt='categoryimage' />
                            <h3 className='title4'>{item.categoryname}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategorySidebar