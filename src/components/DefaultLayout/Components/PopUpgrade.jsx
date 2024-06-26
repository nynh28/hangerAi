
import React from "react";
import Modal from '@mui/material/Modal';
import TextUpgrade from "./TextUpgrade"
import CommonStyles from "../../CommonStyles";
import CloseIcon from '@mui/icons-material/Close';


const packages = [
    {
        packages: "Free",
        price: 0,
        annualValue: "per editor per year Free forever",
        benefit: "100 credits",
        description: [
            "Can't Buy More Credits ",
            " Can't upload Model Image in Virtual Dressing Room ",
            "Can't upload folder of image in Product Image Descriptions",
            "Can't upload folder of image in Product Catalog",
            "3 image project 3 content writing project",
            "Limited image and content writing options",
        ]


    },
    {
        packages: "Standard",
        price: 9.9,
        annualValue: " per month ,billed monthly ",
        benefit: "600 Credits/Month",
        description: [
            "Credit reset to 600 every month starting from your subcription date .Buy more as needed  ",
            "Upload Model Image in Virtual Dressing Room",
            "Upload folder of image in Product Image Descriptions",
            " Upload folder of maximum 50 image in Product Catalog",
            "Unlimited edit image and content writing project",
            "Unlimited edit image and content writing project",
        ]


    },
    {
        packages: "Pro",
        price: 24.9,
        annualValue: " per month ,billed monthly ",
        benefit: "2000 Credits/Month",
        description: [
            "2000 Credits/Month",
            "Upload Model Image in Virtual Dressing Room",
            "Upload folder of image in Product Image Descriptions",
            "Upload folder of maximum 100 image in Product Catalog",
            "Unlimited edit image and content writing project",
            "Unlimited edit image and content writing options",
        ]


    },

]

const PopUpgrade = ({ setPopUp }) => {

    const handleClick = () => {
        console.log('clkk');
        setPopUp(false)
    }
    const handleClose =()=> (setPopUp(false))
    return (


        <Modal

            open={setPopUp}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">

            <CommonStyles.Box
                className="modal-popup"
                onClick={(e) => {
                    if (e.target.classList.contains("modal-popup")) {
                        console.log('ky',e.target.classList.contains("modal-popup"));
                        setPopUp(false)
                    };
                }}
                sx={{
                    backgroundColor: "#FFFFFF",
                    position: "fixed",
                    zIndex: 10000,
                    borderRadius: "6px",
                    '@media(min-width: 768px)': {
                        left: "3%",
                        right: "3%",
                        top: "12%",
                        bottom: "12%",
                        // Thêm các thuộc tính tại đây cho màn hình có độ rộng lớn hơn hoặc bằng 768px
                    },
                    '@media(min-width: 1025px)': {
                        left: "15%",
                        top: "2%",
                        right: "15%",
                        bottom: "2%"
                        // Thêm các thuộc tính tại đây cho màn hình có độ rộng lớn hơn hoặc bằng 768px
                    },
                    '@media(max-width: 767px)': {
                        top: "1%",
                        left: "1%",
                        right: "1%",
                        bottom: "1%",
                        maxHeight: "100vh-2%",
                        overflowY: "auto",
                        // Thêm các thuộc tính tại đây cho màn hình có độ rộng lớn hơn hoặc bằng 768px
                    }


                }}
            >
                <CommonStyles.Box
                    sx={{ backgroundColor: "#8A2EFF", padding: "12px", borderRadius: "6px 6px 0 0" }}
                >
                    <CommonStyles.Typography
                        sx={{
                            textAlign: "center",
                            color: "#1A152E",
                            fontSize: "12px"
                        }}>
                        Try Gen-2 today with special introductory pricing + 400 bonus credits when you upgrade
                    </CommonStyles.Typography>
                </CommonStyles.Box>
                <CommonStyles.Box sx={{ padding: "16px 26px 16px 16px", position: "relative" }}>
                    <CommonStyles.Typography
                        sx={{
                            textAlign: "center",
                            color: "#2A2C3A",
                            fontSize: "24px"
                        }}>
                        Choose a plan for B19DCCN459-Vũ Quang Ninh workspace
                    </CommonStyles.Typography>
                    <CloseIcon onClick={handleClick} sx={{ color: "#7C839C", position: "absolute", right: "10px", top: "10px" }} />
{/* 
                    <CommonStyles.Box centered sx={{ padding: "16px" }}>
                        <CommonStyles.Box centered
                            sx={{ backgroundColor: "rgb(241, 241, 244)", width: "auto", borderRadius: "40px", }}
                        >
                            <CommonStyles.Button
                                sx={{
                                    backgroundColor: "#15161A",
                                    borderRadius: "40px",
                                    minWidth: "110px",
                                    textAlign: "center",
                                    color: "#7C839C",
                                    fontSize: "11px"
                                }}>
                                Month
                            </CommonStyles.Button>
                            <CommonStyles.Button
                                sx={{
                                    backgroundColor: "rgb(241, 241, 244)",
                                    textAlign: "center",
                                    borderRadius: "40px",
                                    minWidth: "110px",
                                    border: "0 !important",
                                    color: "#7C839C",
                                    fontSize: "11px"
                                }}>
                                Yearly-20% of
                            </CommonStyles.Button>
                        </CommonStyles.Box>

                    </CommonStyles.Box> */}
                    <CommonStyles.Box
                        centered
                        sx={{
                            '@media (max-width: 767px)': {
                                display: "block",
                            }
                        }}>
                        {packages.map((item) => (
                            <TextUpgrade items={item} />
                        ))}
                        <TextUpgrade />
                    </CommonStyles.Box>
                    <CommonStyles.Typography
                        sx={{ color: "#7C839C", textAlign: "center", paddingTop: "10px", fontSize: "12px" }}
                    >
                        Don't see what you need?
                    </CommonStyles.Typography>
                </CommonStyles.Box>
            </CommonStyles.Box>
        </Modal>


    )
}

export default PopUpgrade