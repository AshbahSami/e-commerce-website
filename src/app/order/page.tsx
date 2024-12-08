import { FaClock } from 'react-icons/fa';
export default function Complete(){
    return(
        <div className='place-items-center gap-20  px-4 py-8 flex min-h-screen'>
            <FaClock className='size-20 bg-transparent text-[#3F509E]  '/>
            <div className=' justify-items-center'>
                <img src="Vector 15.png" alt="" />
                <h1 className='font-extrabold py-3'>Your Order Is Completed! </h1>
                <p className='justify-center py-4'>Thank you for your order! Your order is being processed and will be completed within 3-6 <br />
hours. You will receive an email confirmation when your order is completed.
</p>
<button className='px-3 py-3 '>Continue Shopping</button>
            </div>
        </div>
    )
}