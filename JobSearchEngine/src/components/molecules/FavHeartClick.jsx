import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../../actions/favouritesAction";
import { AddedAlert } from "./AddedAlert";

const FavHeartClick = ({ jobId, companyName, jobData }) => {
  const dispatch = useDispatch();
  const favouritesData = useSelector((state) => state.favourites);

  const [showModal, setShowModal] = useState(false);

  const isInFavourites = favouritesData.some((favourite) => favourite.company_name === companyName); //this searches if the company is already in the favouritesData (from the store), returns a boolean T/F



  //when the user clicks on the heart, if the boolean is true, the company is removed, else the company is added to favourites
  const handleHeartClick = ({jobData}) => {
    const isCompanyInFavourites = favouritesData.some((favourite) => favourite.company_name === companyName); //this searches if the company is already in the favouritesData (from the store), returns a boolean T/F
    
    const heart = document.getElementById(`heart-${jobId}`)
    heart.classList.remove('fa-solid', 'fa-regular') // This removes the previously present classes in the heart element


    if (isCompanyInFavourites) {
      dispatch(removeFavourite(jobData));
      heart.classList.remove('fa-solid');
      heart.classList.add('fa-regular');
    } else {
        dispatch(addFavourite(jobData));
        heart.classList.remove('fa-regular');
        heart.classList.add('fa-solid');

      setShowModal(true);
    }
  };

    //this allows to dismiss the modal. It also closes when the user clics outside the modal
    const handleCloseModal = () => {
    setShowModal(false)
    }

  return (
    <>
    <i
      id={`heart-${jobId}`} 
        //   being in a map, the icon needs an id (console says) otherwise it doesn't render the icon
      className={`fa-heart fs-2 ${isInFavourites ? 'fa-solid' : 'fa-regular'}`}
      // heart full if company is in fav, else empty
      onClick={()=>handleHeartClick({jobData})}
    ></i>

    <AddedAlert 
    show={showModal}
    handleCloseModal={handleCloseModal}
    companyName={jobData.company_name}/>
    </>
  );
};

export default FavHeartClick;