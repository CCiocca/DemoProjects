
import { useEffect } from "react";
import { useSelector } from "react-redux";


export const FavHeart = ({jobId, companyName}) => {

    const jobsList = useSelector((state) => state.jobsList) 
    const favouritesData = useSelector((state) => state.favourites);

    useEffect(() => {

        const isCompanyInFavourites = favouritesData.some((favourite) => favourite.company_name === companyName) // This checks that the company is not already among the favs
    
        const heart = document.getElementById(`heart-${jobId}`)
        
        heart.classList.remove('fa-solid', 'fa-regular') // This removes the previously present classes in the heart element

        // If the company is not yet in the favourites, a full heart it is visualized, else an empty heart is visualized.favourites anyways
       if(isCompanyInFavourites) {
        heart.classList.add('fa-solid')
          } else {
          heart.classList.add('fa-regular')
          }

    }, [favouritesData, jobsList]) //every time the search or the fav-list are updated, the heart icon gets updated too


    return (
        <i id={`heart-${jobId}`} className="fa-heart fs-2"></i>
    )
}