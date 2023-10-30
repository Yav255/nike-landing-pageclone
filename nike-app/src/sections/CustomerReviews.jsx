import { customer1 } from "../assets/images"
import ReviewCard from "../Components/ReviewCard"
import { reviews } from "../constants"


function CustomerReviews() {
  return (
    <div className="max-container flex flex-col justify-center items-center ">
      <div className=" flex flex-1 flex-wrap justify-center px-2 py-2 lg:max-w-lg">
       <h1 className="font-montserrat font-bold text-3xl">What Our <span className='text-coral-red'>Customers</span> Say?</h1>
       <p className="font-montserrat text-slate-gray break words text-center max-w-lg m-auto">Hear genuine reviews from our satified custommers about their exceptional experience with us</p>   
      </div>
      
      <div className="mt-24 flex flex-1 justify-evenly items-center 
      max-lg:flex-col gap-14">
        {reviews.map((review) =>(
            <ReviewCard feedback={review.feedback} img={review.imgURL} name={review.customerName}/>
        )

        )}
      </div>
     
    </div>
  )
}

export default CustomerReviews