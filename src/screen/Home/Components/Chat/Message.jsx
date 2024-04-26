import CommonStyles from "../../../../components/CommonStyles";
import BrandLogo from "../../../../components/CommonStyles/BrandLogo";


const Message = ({ message, type,image }) => {


    return (
        <>
            {type === "sender" && (
                <CommonStyles.Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                        gap: "10px",
                        marginBottom: "5px",
                        alignItems: "end"
                    }}
                >
                    <CommonStyles.Box
                        sx ={{
                            display: "flex",
                            flexDirection: "column",
                            gap : "10px",
                            alignItems :"end",
                            maxWidth: "70%"
                        }}
                    >
                        {image ? (<img src={image} alt="404" width={`250px`} height={`250px`} />) : (<span></span>)}
                        <CommonStyles.Box
                            sx={{
                                borderRadius: "20px",
                                background: "#6904e9",
                                color: "#FFFFFF",
                                padding: "8px 12px",
                                maxWidth: "100%",
                                overflowX: "auto",

                            }}
                        >
                            {message}
                        </CommonStyles.Box>
                    </CommonStyles.Box>
                    <img src="https://lh3.googleusercontent.com/ogw/AKPQZvyASBUcpQgfbJFtlWST2R3jgHPG-CdGKfsicVCI=s32-c-mo" alt="" height="100%" style={{ borderRadius: "50%", marginTop: "4px" }} />
                </CommonStyles.Box>
            )}
            {type === "receiver" && (
                <CommonStyles.Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "start",
                        marginBottom: "5px",
                        gap: "10px"
                    }}
                >
                    <img src="http://localhost:5173/src/assets/Logo/logo.jpg" alt="" width="32px" height="100%" style={{ borderRadius: "50%", marginTop: "4px" }} />

                    <CommonStyles.Box
                        sx={{
                            borderRadius: "20px",
                            background: "#303030",
                            color: "#FFF",
                            padding: "8px 12px",
                            maxWidth: "70%",
                            overflowX: "auto",
                        }}
                    >
                        {message}
                    </CommonStyles.Box>
                </CommonStyles.Box>
            )}

        </>
    );
}

export default Message;