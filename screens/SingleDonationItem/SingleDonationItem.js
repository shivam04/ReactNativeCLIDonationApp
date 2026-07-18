import { useSelector } from "react-redux";

const SingleDonationItem = () => {
    const donationItemInformation = useSelector(state => state.donations.selectedDonationInformation);
    console.log(donationItemInformation);
    return null;
}

export default SingleDonationItem;